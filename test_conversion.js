// test_conversion.js

const translateGITHUBMarkdownToADF = require('./dist/index.js');
const fs = require('fs');

// --- Test Cases ---

const testCases = [
	{
		name: 'Full',
		markdown: `
DESIGN

# Introduction

## 1. Overview

This feature provides the backend (Apex) logic to handle the rejection of timesheets and expenses within the Timesheet Portal. It is triggered by a LWC component (containing the "Reject" button). The feature processes rejections differently based on the rejection reason (obtained from the \`Project__c\` object) and whether the rejection applies to an entire timesheet or a single expense line. Actions include updating the status of Timesheet and Entered Timesheet Line (ETL) records, deleting or updating Processed Timesheet Line (PTL) records, and sending email notifications to either the worker or the Time Administrator.

## 2. Assumptions

* The \`PortalTmsUtils.getTimesheetId(Id rateCardId, String periodEndIsoDate)\` method exists and correctly retrieves the Timesheet ID.
* The calling LWC component will correctly provide the Rate ID, Period End Date, and ETL ID (when applicable).
* The \`Project__c.Rejection_Reason__c\` field is populated with a valid value.
* Email sending functionality (using Apex) is correctly configured and operational.
* The necessary custom fields (\`Exception__c\` on Timesheet, \`Time_Administrator__c\` on Company Hierarchy, \`Rejection_Reason__c\` on Project) have been created.
* There is a one-to-one relationship between one \`Entered_Timesheet_Line__c\` record and its corresponding \`Processed_Timesheet_Line__c\`.

# Task 1: Reject Backend Logic

This feature provides the backend logic (implemented as an Apex class \`PortalTmsApproveController\`) to handle the rejection of timesheets and expenses within the Timesheet Portal. The process is initiated by the LWC component (which is out of the scope of the current feature), which provides the necessary input data to the Apex controller. The core functionality is determined by two factors:

1. **Type of Rejection:** Is it an entire timesheet being rejected, or a single expense line?
2. **Rejection Reason:** This is determined by the \`Project__c.Rejection_Reason__c\` picklist field and dictates the subsequent actions and notifications.

The \`PortalTmsApproveController\` class's method, \`reject\`, accepts the following input:

* \`rateId\` (Id): The ID of the \`Rate__c\` record associated with the timesheet entry or expense.
* \`periodEndIsoDate\` (String): The ISO end date of the processing week for the timesheet.
* \`etlId\` (Id, Optional): The ID of the \`Entered_Timesheet_Line__c\` record. This is *only* provided when rejecting a *single expense line*. If \`etlId\` is null, it's a timesheet rejection.
* \`timesheetComment\` (String, Optional): The comment of the approver. This is *only* provided when rejecting a *timesheet*.

**Retrieve the Timesheet__c record ID**: Based on the input parameters (rateId, periodEndIsoDate), the Apex code will first retrieve the relevant Timesheet__c record ID using the \`PortalTmsUtils.getTimesheetId(Id rateCardId, String periodEndIsoDate)\` method.

The following logic is executed based on these inputs and the \`Rejection_Reason__c\` value:

**1. Expense Rejected - Admin (Rejection Reason: "Non-Billable Item" or "Other")**

* **Trigger:**  An expense line is rejected, and the associated \`Project__c.Rejection_Reason__c\` is "Non-Billable Item" or "Other". The \`etlId\` will be provided.
* **Actions:**

  1. **Identify the PTL:** The corresponding \`Processed_Timesheet_Line__c\` (PTL) is retrieved using the \`Split_From_Entered_Timesheet_Line__c\` lookup field, which links it to the provided \`etlId\`.
  2. **Update PTL Status:** The \`Approval_Status__c\` field of the identified PTL is set to "Rejected".
  3. **Send Email to Time Administrator:** An email notification is sent to the Time Administrator.  The Time Administrator is determined by looking up the related \`Rate_Card__c\`, then the related \`Branch__c\` (a \`Company_Hierarchy__c\` record), and finally the \`Time_Administrator__c\` (User lookup) field on that record. If the \`Time_Administrator__c\` field is blank, no email is sent.

  *   **Email Content:**
        *   Subject: Rejection received for {!Timesheet__c.Rate_Card__r.Worker__r.Name} {!Timesheet__c.Reference__c}
        *   Body:  An expense on {!Timesheet__c.Reference__c} for {!Timesheet__c.Rate_Card__r.Worker__r.Name} has been rejected. Reason for Rejection: {!Timesheet__c.Rate_Card__r.Project__r.Rejection_Reason__c}. Please review the details in TargetRecruit and take any necessary action.
        *   **Timesheet Exception Update:** No update to \`Timesheet__c.Exception__c\` in this scenario.
        *   **ETL Exception Update:** No update to \`Entered_Timesheet_Line__c.Exception__c\` in this scenario.

**2. Expense Rejected - Worker (Rejection Reason: "Incorrect Entry (Time/Amount)" or "Missing Documentation")**

* **Trigger:** An expense line is rejected, and the associated \`Project__c.Rejection_Reason__c\` is "Incorrect Entry (Time/Amount)" or "Missing Documentation". The \`etlId\` will be provided.
* **Actions:**

  1. **Update Timesheet Exception:** The \`Exception__c\` field on the \`Timesheet__c\` record is updated with the text "Expense Rejected": [Rejection Reason]". The \`Timesheet__c\` record is identified using the \`rateId\` and \`periodEndDate\`.
  2. **Update ETL Status:** The \`Status__c\` field of the identified \`Entered_Timesheet_Line__c\` (ETL) record (provided via \`etlId\`) is set to "Rejected". Also, the \`Exception__c\` field on the ETL is set to "Rejected: [Rejection Reason]".
  3. **Send Email to Worker:** An email notification is sent to the worker.

  *   **Email Content:**
        *   Subject: Rejection received for {!Timesheet__c.Reference__c}
        *   Body: An expense on {!Timesheet__c.Reference__c} has been rejected. Reason for Rejection: {!Timesheet__c.Rate_Card__r.Project__r.Rejection_Reason__c}. Please review the details on your portal and take any necessary action.

**3. Timesheet Rejected - Admin (Rejection Reason: "Non-Billable Item" or "Other")**

* **Trigger:** An entire timesheet is rejected, and the associated \`Project__c.Rejection_Reason__c\` is "Non-Billable Item" or "Other".  The \`etlId\` will be null.
* **Actions:**

  1. **Identify PTLs:** *All* \`Processed_Timesheet_Line__c\` (PTL) records associated with the \`Timesheet__c\` are retrieved.
  2. **Update PTL Statuses:** The \`Approval_Status__c\` field of *all* identified PTLs is set to "Rejected".
  3. **Send Email to Time Administrator:** An email notification is sent to the Time Administrator (same logic as Expense Rejected - Admin).

  *   **Email Content:**
        *   Subject: Rejection received for {!Timesheet__c.Rate_Card__r.Worker__r.Name} {!Timesheet__c.Reference__c}
        *   Body:  A timesheet on {!Timesheet__c.Reference__c} for {!Timesheet__c.Rate_Card__r.Worker__r.Name} has been rejected. Reason for Rejection: {!Timesheet__c.Rate_Card__r.Project__r.Rejection_Reason__c}. Please review the details in TargetRecruit and take any necessary action.
        *   **Timesheet Exception Update:** No update to \`Timesheet__c.Exception__c\` in this scenario.
        *   **ETL Exception Update:** No update to \`Entered_Timesheet_Line__c.Exception__c\` in this scenario.

**4. Timesheet Rejected - Worker (Rejection Reason: "Incorrect Entry (Time/Amount)" or "Missing Documentation")**

* **Trigger:** An entire timesheet is rejected, and the associated \`Project__c.Rejection_Reason__c\` is "Incorrect Entry (Time/Amount)" or "Missing Documentation". The \`etlId\` will be null.
* **Actions:**

  1. **Update Timesheet Exception and Status:** The \`Exception__c\` field on the \`Timesheet__c\` record is updated with the text "Rejection reason: [Rejection reason]; Comments: [comments]".  The \`Timesheet__c.Status__c\` is set to "Rejected".
  2. **Identify ETLs:** *All* \`Entered_Timesheet_Line__c\` (ETL) records associated with the \`Timesheet__c\` are retrieved.
  3. **Update ETL Statuses:** The \`Status__c\` field of *all* identified ETLs is set to "Saved".
  4. **Send Email to Worker:** An email notification is sent to the worker (same logic as Expense Rejected - Worker).

  *   **Email Content:**
        *   Subject: Rejection received for {!Timesheet__c.Reference__c}
        *   Body: A timesheet on {!Timesheet__c.Reference__c} has been rejected. Reason for Rejection: {!Timesheet__c.Rate_Card__r.Project__r.Rejection_Reason__c}. Please review the details on your portal and take any necessary action.
        *   **ETL Exception Update:** No update to \`Entered_Timesheet_Line__c.Exception__c\` in this scenario.

## Summary


| Scenario                        | PTL Actions                                         | ETL Actions                                                                                        | Timesheet Actions                                                                                                     | Email Notification (Template Name)         |
|-------------------------------|-----------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **Expense Rejected - Admin**    | **Selected PTL** Status Updated to "Rejected"       |                                                                                          |                                                                                             | Time Rejection Notification for **Admin**  |
| **Expense Rejected - Worker**   |  | **Selected ETL** Status Updated to "Rejected", Exception updated to "Rejected: [Rejection Reason]" |                                                     | Time Rejection Notification for **Worker** |
| **Timesheet Rejected - Admin**  | **All associated PTLs** Status Updated to "Rejected" |                                                                                          |                                                                                             | Time Rejection Notification for **Admin**  |
| **Timesheet Rejected - Worker** |  | **All associated ETLs** Status Updated to "Saved"                                                  | Status Updated to "Rejected", Exception field updated to "Rejection reason: [Rejection reason]; Comments: [comments]" | Time Rejection Notification for **Worker** |

## Editable Elements in Admin Console

**"Timesheet Portal" tab | "Approver" tab | "Time Admin Notification - Rejection"** (**Email Template Lookup**). **Purpose:** To select the email template used to notify Time Administrators when a timesheet or expense is rejected for reasons categorized as "Non-Billable Item" or "Other". **Unique Name:** \`timeAdminRejectionNotificationTemplate\`. **Default value:** Time Rejection Notification for Admin. **Help text:** Select template to notify admin of rejection.

**"Timesheet Portal" tab | "Approver" tab | "Worker Notification - Rejection"** (**Email Template Lookup**). **Purpose:** To select the email template used to notify Workers when a timesheet or expense is rejected for reasons categorized as "Incorrect Entry (Time/Amount)" or "Missing Documentation". **Unique Name:** \`workerRejectionNotificationTemplate\`. **Default value:** Time Rejection Notification for Worker. **Help text:** Select template to notify worker of rejection.

## Data Model Changes

### New Custom Fields

* **Object:** \`Project__c\`

  * **Field API Name:** \`Rejection_Reason__c\`
  * **Data Type:** Picklist
  * **Purpose:** Stores the reason for rejecting a timesheet or expense, driving different rejection workflows and notifications.
  * **Picklist Values:** Incorrect Entry (Time/Amount); Missing Documentation; Non-Billable Item; Other
* **Object:** \`Company_Hierarchy__c\`

  * **Field API Name:** \`Time_Administrator__c\`
  * **Data Type:** Lookup (to User)
  * **Purpose:** Stores the designated Time Administrator for a Branch, who will receive email notifications for certain types of rejections.
* **Object:** \`Timesheet__c\`

  * **Field API Name:** \`Exception__c\`
  * **Data Type:** Text(255)
  * **Purpose:** Stores an exception message on the Timesheet record when it or an associated expense is rejected, providing a reason for rejection to the worker.

# Task 2: "Resolve Issue" Flow for Time Portal Rejections

## 1. Resolve Issue Navigation Logic

* **Context:** When the "Resolve Issue" button (or similar mechanism) is clicked in the Time Portal.
* **Action:** Implement logic to navigate the worker to the first week containing a rejection issue.
* **Details:**
  * When the "Resolve Issue" button is clicked:
    * **Week Identification:** The application must identify the *first* week where either:
      * The related \`Timesheet__c\` record for that week has a populated \`Exception__c\` field (indicating a timesheet rejection).
      * *Any* \`Entered_Timesheet_Line__c\` record within the timesheet for that week has a populated \`Exception__c\` field.
    * **Week Navigation:** Once the week is identified, the application must automatically open the **[View Timesheets on Mobile - Week]** page, displaying the timesheet for that specific week. This should bring the worker directly to the week containing the rejection issue for easy resolution.

## 2. Expense Rejection - Issue Resolution Flow Integration

* **Context:** When an expense line is rejected.
* **Action:** Integrate the expense rejection into the existing issue resolution flow within the Time Entry Portal.
* **Details:**
  * Ensure that when an expense is rejected (\`[Entered_Timesheet_Line__c]:Exception__c\` field has a value), it becomes part of the worker's issue resolution workflow.
  * Ensure the **[Submit]** button is enabled on the "View Timesheets - Week" page when an expense within the timesheet is rejected. This allows the worker to resubmit the timesheet after resolving the expense issue.

## 3. Timesheet Rejection - "Resolve Issue" Flow & Exception Message Display

* **Context:** When an entire timesheet is rejected.
* **Action:** Update the Time Portal experience to incorporate the "Resolve Issue" flow for timesheet rejections.
* **Details:**
  * When a timesheet is rejected (\`[Timesheet__c]:Exception__c\` field has a value), direct the user to the "Resolve Issue" flow.
  * **Navigation:** When a timesheet is rejected, upon accessing the timesheet, the worker should be navigated to the **[View Timesheets on Mobile - Week]** page.
  * **Rejection Message Display:**
    * Display the rejection message to the worker.
    * **Placement:** Position the message on the **[View Timesheets on Mobile - Week]** page, specifically between the "Summary" section and the "Day cards" section.
    * **Message Content:** Display the text directly from the \`[Timesheet__c].Exception__c\` field.

## 4. Exception Field Clearing on Resubmission

* **Context:** When a worker resolves the rejection issue and resubmits the timesheet/expense.
* **Action:** Automatically clear the \`Exception__c\` fields upon successful resubmission.
* **Details:**
  * **[Timesheet__c]:Exception__c:** When a timesheet is resubmitted after rejection, clear the value of the \`Exception__c\` field on the \`Timesheet__c\` record.
  * **[Entered_Timesheet_Line__c]:Exception__c:** (Must be already implemented in https://targetrecruit.atlassian.net/browse/PSTA-5468, but should be double-checked) When an expense line is resubmitted (as part of a timesheet or individually, depending on the portal's expense submission flow), clear the \`Exception__c\` field on the relevant \`Entered_Timesheet_Line__c\` record.
`,
		expectedContains: [  // Simplified checks - we just check for presence of key strings
			'type": "table"',
			'type": "tableRow"',
			'type": "tableHeader"',
			'type": "tableCell"',
			'Header 1', 'Header 2', 'Header 3',
			'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'
		]
	},
	{
		name: 'Basic Standard Markdown Table',
		markdown: `
Header 1|Header 2|Header 3
---|---|---
Cell 1|Cell 2|Cell 3
Cell 4|Cell 5|Cell 6
`,
		expectedContains: [  // Simplified checks - we just check for presence of key strings
			'type": "table"',
			'type": "tableRow"',
			'type": "tableHeader"',
			'type": "tableCell"',
			'Header 1', 'Header 2', 'Header 3',
			'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'
		]
	},
	{
		name: 'Table with Empty Cells',
		markdown: `
Header 1|Header 2|Header 3
---|---|---
Cell 1||Cell 3
|Cell 5|
`,
		expectedContains: [
			'type": "table"',
			'Header 1', 'Header 2', 'Header 3',
			'Cell 1', 'Cell 3', 'Cell 5', '' // Check for empty strings
		]
	},
	{
		name: 'Table with Escaped Pipe',
		markdown: String.raw`
Header 1|Header 2
---|---
Cell 1 \\| More|Cell 2
`,
		expectedContains: [
			'type": "table"',
			'Header 1', 'Header 2',
			'Cell 1 \\| More', 'Cell 2', //Check for the backslash
			'Cell 1 | More' //Check for the escaped character
		
		]
	},
	{
		name: 'Not A Table (No Divider)',
		markdown: `
Header 1|Header 2
Cell 1|Cell 2
`,
		expectedContains: [], // Expect *no* table elements
		expectedNotContains: ['type": "table"'] //Explicitly check absence of table
	},
	{
		name: 'Not A Table (No Header)',
		markdown: `
Cell 1|Cell 2
---|---
Cell 3|Cell 4
`,
		expectedContains: [], // Expect *no* table elements
		expectedNotContains: ['type": "table"'] //Explicitly check absence of table
	},
	{
		name: 'Table with Emphasis',
		markdown: `
Header 1|Header 2
---|---
**Bold**|*Italic*
~~Strike~~|Normal
`,
		expectedContains: [
			'type": "table"',
			'<strong>Bold', // Check for bold mark
			'<em>Italic',  // Check for italic mark
			'<strike>Strike', // Check for strikethrough mark
			'Normal'
		]
	},
	{
		name: 'Table with Mixed Content',
		markdown: `
Header 1|Header 2
---|---
[Link](http://example.com)|Code \`inline\`
:emoji:|List
`,
		expectedContains: [
			'type": "table"',
			'<a href=\\"http://example.com\\">Link</a>', // Check link conversion
			'<code>inline</code>',       // Check inline code conversion
			'<emoji shortName=\\"emoji\\"/>', // Check for emoji
			'List'
		]
	},
	{
		name: 'Table Followed by Paragraph',
		markdown: `
Header 1|Header 2
---|---
Cell 1|Cell 2

This is a paragraph.
`,
		expectedContains: [
			'type": "table"',
			'Header 1', 'Header 2', 'Cell 1', 'Cell 2',
			'type": "paragraph"', 'This is a paragraph.'  // Check paragraph after table
		]
	},
	{
		name: 'No table test',
		markdown: `
      No table test
      `,
		expectedNotContains: [
			'type": "table"',
			'type": "tableRow"',
			'type": "tableCell"',
			'type": "tableHeader"'
		]
	},
	{
		name: 'Table with a single column and cell.',
		markdown: `
Header 1
---
Cell 1
`,
		expectedContains: [
			'type": "table"',
			'type": "tableRow"',
			'type": "tableHeader"',
			'type": "tableCell"',
			'Header 1',
			'Cell 1'
		]
	},
	{
		name: 'Table immediately followed by another table',
		markdown:
			`H1|H2
---|---
C1|C2
H3|H4
---|---
C3|C4
`,
		expectedContains: [
			'"type": "table"', '"type": "table"', // Two separate tables
			'"type": "tableRow"', '"type": "tableRow"',
			'"type": "tableHeader"', '"type": "tableHeader"',
			'"type": "tableCell"', '"type": "tableCell"',
			'H1', 'H2', 'C1', 'C2', 'H3', 'H4', 'C3', 'C4'
		]
	},
	{
		name: 'Standard table with more than 3 hyphens',
		markdown:
			`Head1     | Head2
----------------------|-----------------------
data 1.1  | data 1.2`,
		expectedContains: [
			'type": "table"',
			'type": "tableRow"',
			'type": "tableHeader"',
			'type": "tableCell"',
			'Head1',
			'Head2',
			'data 1.1',
			'data 1.2'
		]
	},
	{
		name: 'Standard table with a single char on the first line.',
		markdown:
			`A|B
---|---
C|D`,
		expectedContains: [
			'type": "table"',
			'type": "tableRow"',
			'type": "tableHeader"',
			'type": "tableCell"',
			'A',
			'B',
			'C',
			'D'
		]
	}
];

// --- Test Execution ---

function runTests() {
	let passed = 0;
	let failed = 0;
	
	for (const testCase of testCases) {
		//console.log(`\n--- Running Test: ${testCase.name} ---`);
		
		const adfResult = translateGITHUBMarkdownToADF(testCase.markdown);
		let adfString = JSON.stringify(adfResult, null, 2); // Pretty print for readability
		
		let testPassed = true;
		
		if (testCase.expectedContains) {
			for (const expected of testCase.expectedContains) {
				if (!adfString.includes(expected)) {
					//console.error(`  FAIL: Expected to contain "${expected}", but did not.`);
					testPassed = false;
				}
			}
		}
		if (testCase.expectedNotContains) {
			for (const expected of testCase.expectedNotContains) {
				if (adfString.includes(expected)) {
					//console.error(`  FAIL: Expected NOT to contain "${expected}", but did.`);
					testPassed = false;
				}
			}
		}
		
		if (testPassed) {
			//console.log('  PASS');
			passed++;
		} else {
			failed++;
			//console.log('  Resulting ADF:');
			console.log(adfString);
		}
		
		adfString = JSON.stringify(adfString).slice(1, -1);
		
		console.log('runTests.runTests.adfString = ', adfString);
		
		const fs = require('fs');
		
		fs.writeFileSync('myNewFile.txt', adfString);
		
		break;
	}
	
	//console.log(`\n--- Test Summary ---`);
	//console.log(`Total Tests: ${testCases.length}`);
	//console.log(`Passed: ${passed}`);
	//console.log(`Failed: ${failed}`);
}

runTests();
