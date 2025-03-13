// test_conversion.js

const translateGITHUBMarkdownToADF = require('./dist/index.js'); // Assuming your main file is index.js

// --- Test Cases ---

const testCases = [
	{
		name: 'Basic Standard Markdown Table',
		markdown: `
Header 1|Header 2|Header 3
---|---|---
Cell 1|Cell 2|Cell 3
Cell 4|Cell 5|Cell 6
`,
		expectedContains: [  // Simplified checks - we just check for presence of key strings
			'type":"table"',
			'type":"tableRow"',
			'type":"tableHeader"',
			'type":"tableCell"',
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
			'type":"table"',
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
			'type":"table"',
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
		expectedNotContains: ['type":"table"'] //Explicitly check absence of table
	},
	{
		name: 'Not A Table (No Header)',
		markdown: `
Cell 1|Cell 2
---|---
Cell 3|Cell 4
`,
		expectedContains: [], // Expect *no* table elements
		expectedNotContains: ['type":"table"'] //Explicitly check absence of table
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
			'type":"table"',
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
			'type":"table"',
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
			'type":"table"',
			'Header 1', 'Header 2', 'Cell 1', 'Cell 2',
			'type":"paragraph"', 'This is a paragraph.'  // Check paragraph after table
		]
	},
	{
		name: 'No table test',
		markdown: `
      No table test
      `,
		expectedNotContains: [
			'type":"table"',
			'type":"tableRow"',
			'type":"tableCell"',
			'type":"tableHeader"'
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
			'type":"table"',
			'type":"tableRow"',
			'type":"tableHeader"',
			'type":"tableCell"',
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
			'"type":"table"', '"type":"table"', // Two separate tables
			'"type":"tableRow"', '"type":"tableRow"',
			'"type":"tableHeader"', '"type":"tableHeader"',
			'"type":"tableCell"', '"type":"tableCell"',
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
			'type":"table"',
			'type":"tableRow"',
			'type":"tableHeader"',
			'type":"tableCell"',
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
			'type":"table"',
			'type":"tableRow"',
			'type":"tableHeader"',
			'type":"tableCell"',
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
		console.log(`\n--- Running Test: ${testCase.name} ---`);
		try {
			const adfResult = translateGITHUBMarkdownToADF(testCase.markdown);
			const adfString = JSON.stringify(adfResult, null, 2); // Pretty print for readability
			
			let testPassed = true;
			
			if (testCase.expectedContains) {
				for (const expected of testCase.expectedContains) {
					if (!adfString.includes(expected)) {
						console.error(`  FAIL: Expected to contain "${expected}", but did not.`);
						testPassed = false;
					}
				}
			}
			if (testCase.expectedNotContains) {
				for (const expected of testCase.expectedNotContains) {
					if (adfString.includes(expected)) {
						console.error(`  FAIL: Expected NOT to contain "${expected}", but did.`);
						testPassed = false;
					}
				}
			}
			
			if (testPassed) {
				console.log('  PASS');
				passed++;
			} else {
				failed++;
				console.log('  Resulting ADF:');
				console.log(adfString);
			}
			
		} catch (error) {
			console.error(`  ERROR: Test case failed with error: ${error.message}`);
			console.error(error.stack);
			failed++;
		}
	}
	
	console.log(`\n--- Test Summary ---`);
	console.log(`Total Tests: ${testCases.length}`);
	console.log(`Passed: ${passed}`);
	console.log(`Failed: ${failed}`);
}

runTests();
