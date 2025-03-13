// test_conversion.js

const translateGITHUBMarkdownToADF = require('./dist/index.js');
const fs = require('fs');

// --- Test Cases ---

const testCases = [
	{
		name: 'Full',
		markdown: `
**Tasks**

* **Worker Submittal Notification Automation**:
  1. Functional
  2. Apex Tests
* **Weekly Summary Notification Batch & Scheduler**:
  1. Functional
  2. Apex Tests
* **Admin Console & Package Install**:
  1. Functional
  2. Apex Tests for Install

---

DESIGN

# Introduction

## 1. Overview

This feature introduces email notifications to timesheet approvers within the Timesheet Portal. It allows administrators to configure notification frequency for timesheet approvals at the Rate Card level.  The system will send automated email notifications to designated approvers based on the selected frequency: "Worker Submittal" (upon initial timesheet submission) or "Weekly Summary" (a weekly digest of pending timesheets).  The notification templates for both "Worker Submittal" and "Weekly Summary" emails are configurable within the Portal Admin Console. This feature aims to streamline the timesheet approval process by proactively notifying approvers and providing timely reminders about pending timesheets.

## 2. User Steps

### 2.1. Worker User - Submitting Timesheet (Existing Flow)

1.  **Submit Timesheet:** Worker submits their timesheet through the standard timesheet submission process in the Timesheet Portal.

### 2.2. Approver User - Receiving Notifications (Automated)

1.  **Receive "Worker Submittal" Notification (If configured):** Upon initial timesheet submission by a worker, and if "Worker Submittal" notification is configured for the related Rate Card, the designated approvers (Timesheet Approver 1 and Timesheet Approver 2 on the Rate Card) will receive an email notification using the selected "Worker Submittal" email template.
2.  **Receive "Weekly Summary" Notification (If configured):** Every Monday at 6 AM (default schedule, configurable), and if "Weekly Summary" notification is configured for at least one Rate Card assigned to an approver, designated approvers will receive a weekly summary email. This email lists all workers with timesheets currently in 'Submitted' status, across all Rate Cards they are set as approvers for. The email uses the selected "Weekly Summary" email template.

## 3. Assumptions

*   **Approver Identification:** Approvers are identified via the "Timesheet Approver 1" and "Timesheet Approver 2" lookup fields on the \`Rate_Card__c\` object, pointing to Contact records.
*   **Project and Rate Card Hierarchy:** A valid Project and Rate Card structure exists as defined in the data model. Rate Cards are associated with Projects.
*   **Timesheet and Processing Week Logic:** The \`Timesheet__c\` and \`Processing_Week__c\` objects and their logic for period definition and processing are already implemented and function as described in the data model documentation.
*   **ETL/PTL Terminology:** "ETL" refers to Entered Timesheet Line (\`Entered_Timesheet_Line__c\`) and "PTL" refers to Processed Timesheet Line (\`Processed_Timesheet_Line__c\`). Notifications are triggered upon PTL creation.
*   **Timesheet Statuses:** The 'Submitted' status for both \`Timesheet__c\` and \`Entered_Timesheet_Line__c\` objects are existing and functional statuses.

## 4. Restrictions

*   **Notification Frequency Options:**  Notification frequency is limited to the predefined options: "Worker Submittal", and "Weekly Summary".
*   **Email Template Configuration:** Email templates must be pre-configured as Lightning or Classic Email Templates within Salesforce. The feature will only allow selection of existing templates.
*   **Default "None" Behavior:** If no notification frequency is configured, the system will default to sending no notifications.
*   **Batch and Scheduler Implementation Required:** The weekly summary email functionality requires development and implementation of a batch process and a scheduler to send emails weekly.

# Details

## 1. Notification Frequency Configuration

Administrators can configure the frequency of email notifications for timesheet approvals at the **Rate Card** level.

### 1.1. Rate Card Level Notification Frequency

*   A new field, \`Notification_Frequency__c\`, is added to the \`Rate_Card__c\` object.
*   **Field Label:** Notification Frequency
*   **Help Text:** Automatically sends an email notification to approvers.
*   **Data Type:** Multi-Select Picklist
*   **Picklist Values:**
    *   \`Worker Submittal\`: Sends a notification email to approvers when a worker initially submits a timesheet.  Only one notification is sent per timesheet submission, regardless of resubmissions before approval.
    *   \`Weekly Summary\`: Sends a weekly summary email to approvers, listing all workers with pending timesheets.
*   **Default Value:** "Worker Submittal" is set as the initial value during field creation, but the effective behavior if no value is *explicitly selected* on a Rate Card record is no notifications.

## 2. Email Templates

Two new Lightning Email Templates are created for this feature.

### 2.1. Approver Notification - Submittal Template

*   **Template Name:** Approver Notification - Submittal
*   **Subject:** \`Timesheet Submission for {!Contact.Name} – Approval Requested\`
*   **Body:**
    \`\`\`
    Dear approver,

    {!Contact.Name} has submitted their timesheet for the period {!Timesheet__c.Start_Date__c} – {!Timesheet__c.End_Date__c}, and it is now pending your approval.

    Approving timesheets promptly helps ensure the timely processing of invoices and payroll.

    [link to a particular worker/week]

    Please take a moment to review, approve, or provide feedback at your earliest convenience. If you have any questions or need assistance, please feel free to reach out to your account team.

    Best regards,
    {!Organization.Name}
    \`\`\`
    *   **Recipient:** Timesheet Approver 1 and Timesheet Approver 2 from the Rate Card.
    *   **Trigger:** Sent upon initial timesheet submission by a worker, if "Worker Submittal" notification frequency is configured for the Rate Card.

### 2.2. Approver Notification - Summary Template

*   **Template Name:** Approver Notification - Summary
*   **Subject:** \`Weekly Summary – Timesheets Pending Your Review\`
*   **Body:**
    \`\`\`
    Dear {!Contact.Name},

    Here’s your weekly summary of timesheets awaiting approval.

    Pending Approvals:

    * Total Timesheets: {!Timesheet_Count}

    [link to the approver's dashboard]

    Approving timesheets promptly helps ensure smooth processing for invoices and payroll.

    Please take a moment to review and approve at your earliest convenience. If you have any questions or need assistance, please feel free to reach out to your account team.

    Best regards,
    {!Organization.Name}
    \`\`\`
    *   **Recipient:** Timesheet Approver 1 and Timesheet Approver 2 from each Rate Card that has pending timesheets in 'Submitted' status.
    *   **Trigger:** Sent weekly, every Monday at 6 AM (default schedule, configurable), via the "Weekly Approver Summary" batch process, to approvers who have Rate Cards with timesheets in 'Submitted' status. The email includes a summary of all pending timesheets across all their Rate Cards.

## 3. Automation and Batch Processing

### 3.1. Worker Submittal Notification Automation

*   **Trigger Event:** Worker clicks the "Submit" button in the Timesheet Portal. This action can submit **one or more timesheets simultaneously**.
*   **Process:** For **each timesheet** submitted in the submission action:
    1.  **Base Timesheet Query (Reusable):** A base SOQL query is defined to retrieve \`Timesheet__c\` records and related \`Rate_Card__c\` and approver information. This base query will be reused for both "Worker Submittal" and "Weekly Summary" notifications. The base query filters for:
        *   \`Timesheet__c\` records
        *   Related \`Rate_Card__c\` records where:
            *   At least one of \`Rate_Card__c.Timesheet_Approver_1__c\` or \`Rate_Card__c.Timesheet_Approver_2__c\` is not blank (approvers are defined).
    2.  **Worker Submittal Specific Query:** For "Worker Submittal" notifications, the base query is extended with the following **dynamic filters**:
        *   \`Id IN :timesheetIds\` -  Filters to only include the specific \`Timesheet__c\` records being submitted in the current action (where \`timesheetIds\` is a collection of IDs of the submitted timesheets).
        *   **Notification Frequency Check:**  \`Rate_Card__c.Notification_Frequency__c\` **contains** "Worker Submittal".
    3.  **Retrieve Timesheet Data:** Execute the dynamically constructed SOQL query to retrieve \`Timesheet__c\` records.
    4.  **Notification Logic:**  For each retrieved \`Timesheet__c\` record:
        *   *Subject merge fields processing:*
            \`\`\`java
            String submittalSubject = SendEmailHelper.mergeFields(emailTemplateSubmittal.Subject, timesheet.Rate_Card__r.Worker__c, false);
            submittalSubject = SendEmailHelper.mergeFields(submittalSubject, timesheet.Id, false);
            \`\`\`
        *   *Body merge fields processing:*
            \`\`\`java
            String submittalBody = SendEmailHelper.mergeFields(emailTemplateSubmittal.Body, timesheet.Rate_Card__r.Worker__c, false);
            submittalBody = SendEmailHelper.mergeFields(submittalBody, timesheet.Id, false);
            \`\`\`
        *   *Create and send email:*
        

### 3.2. Weekly Summary Notification Batch & Scheduler

*   **Batch Apex Class Name:** \`BatchPortalSubmitNotification\`
*   **Purpose:** To send weekly summary emails to timesheet approvers with pending timesheets that are in "Submitted" status.
*   **Batch Apex Class Logic:**

    *   **Start Method:**
        *   **Base Timesheet Query (Reused):** Utilize the **same base SOQL query** defined in "Worker Submittal Notification Automation".
        *   **Weekly Summary Specific Query:** Extend the base query with the following filter:
            *   **Notification Frequency Check:** \`Rate_Card__c.Notification_Frequency__c\` **contains** "Weekly Summary".
        *   **Retrieve Timesheet Data:** The \`start\` method will return a Database.QueryLocator with the query.

    *   **Execute Method:**
        *   **Processing Batches of Timesheets:** The \`execute\` method will process batches of \`Timesheet__c\` records retrieved by the \`start\` method.
        *   **Aggregating Data per Approver (using Stateful approach):** To efficiently summarize data for each approver, the batch class will utilize **stateful variables (class-level variables)** to accumulate:
            *   **Map of Approver to Timesheets:** \`Map<Id, List<Timesheet__c>> approverIdToTimesheets = new Map<Id, List<Timesheet__c>>();\`  to store timesheets, grouped by approver ID.
        *   **Iteration through Timesheets:** For each \`Timesheet__c\` record in the current batch:
            *   Get the associated \`Rate_Card__c\` and its "Timesheet Approver 1" and "Timesheet Approver 2".
            *   For each approver (Approver 1 if not null and Approver 2 if not null):
                *   If the approver ID is not already a key in \`approverIdToTimesheets\`, initialize an empty list: \`approverIdToTimesheets.put(approverId, new List<Timesheet__c>());\`
                *   Add the current \`Timesheet__c\` record to the list associated with the approver ID: \`approverIdToTimesheets.get(approverId).add(timesheet);\`
            *   *(Stateful variables will maintain these counts and lists across batch execution chunks).*

    *   **Finish Method:**
        *   **Email Generation and Sending:** The \`finish\` method will be executed once all batches are processed.
        *   **Iterate through Approvers:** Iterate through the keyset of \`approverIdToTimesheets\` map (which represents unique approvers).
        *   **Generate Summary Content:** For each approver ID:
            *   Retrieve the list of submitted timesheets for the current approver from \`approverIdToTimesheets.get(approverId)\`.
            *   Retrieve the count of submitted timesheets: \`Integer timesheetCount = approverIdToTimesheets.get(approverId).size();\`
            *   Populate the "Approver Notification - Summary" email template with merge fields: Approver's Name, Total Pending Timesheets Count.
            *   *Subject merge fields processing:*
                \`\`\`java
                String summarySubject = SendEmailHelper.mergeFields(emailTemplateSummary.Subject, approverId, false);
                \`\`\`
            *   *Body merge fields processing:*
            
            *   *Create and send email:*
            
*   **Scheduling Mechanism:**  Implemented using the standard Salesforce Apex Scheduler *(Use the same BatchPortalSubmitNotification Apex class)*.

# Editable elements in Admin Console

"Timesheet Portal" tab | Approver top tab | "Email Notification - Submittal" (**Email Template Lookup**). **Purpose:** Configure the email template used for "Worker Submittal" notifications to approvers. **Unique Name:** \`emailTemplateSubmittalNotification\`.  **Default value:** "Approver Notification - Submittal". **Help text:** "Select the email template to be used when sending notifications to approvers upon timesheet submittal by a worker. If no template is selected, this notification type will be disabled."

"Timesheet Portal" tab | Approver top tab | "Email Notification - Summary" (**Email Template Lookup**). **Purpose:** Configure the email template used for "Weekly Summary" notifications to approvers. **Unique Name:** \`emailTemplateSummaryNotification\`.  **Default value:** "Approver Notification - Summary". **Help text:** "Select the email template to be used when sending weekly summary notifications of pending timesheets to approvers. If no template is selected, this notification type will be disabled."

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
