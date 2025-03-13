/***********************************************************************************************************************
 *
 * Atlassian Document Format Handling
 *
 *  @author bruno.morel@b-yond.com
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * This transform a Intermediate Representation Tree (see markdownHandling) into the equivalent ADF nodes.
 * It also remove non-compatible hierarchy that ADF doesn't support
 *
 **********************************************************************************************************************/
// const { marks, Heading, Text, Emoji, BulletList, OrderedList, ListItem, CodeBlock, BlockQuote, Paragraph, Rule, Table, TableRow, TableCell, TableHeader }    = require( 'adf-builder' ) // OLD
const {
	strong, em, code, link, strike,
	heading,
	p,
	emoji,
	ul,
	ol,
	li,
	codeBlock,
	blockquote,
	doc,
	hr,
	table,
	tr,
	td,
	th,
	//hardBreak,  // Not used, so commented out
	text,
} = require('@atlaskit/adf-utils/builders');

const attachTextToNodeSliceEmphasis = require('./adfEmphasisParsing');

// /**
//  * @typedef { import("./markdownParsing").IRElement } IRElement
//  * @typedef { import("./markdownHandling").IRTreeNode } IRTreeNode
//  */

/**
 * Browse the tree recursively to add each node to the ADF Document
 *  It also treat special cases between top-level node and generic ones
 *
 * @param currentParentNode             {Document}    ADF document to add to
 * @param currentArrayOfNodesOfSameIndent   {IRTreeNode}
 */
function fillADFNodesWithMarkdown(currentParentNode, currentArrayOfNodesOfSameIndent) {
	currentArrayOfNodesOfSameIndent.reduce((lastListNode, currentNode) => {
		if (currentNode.node && currentNode.node.adfType === "table") {
			const tableNode = addTypeToNode(currentParentNode, "table");
			fillADFNodesWithMarkdown(tableNode, currentNode.node.children); // Process table rows
			return tableNode;
		}
		
		if (currentNode.adfType === "tableRow") {
			const tableRowNode = tr();
			tableRowNode.content = [];
			
			currentParentNode.content.push(tableRowNode);
			
			// Always treat the first row as header in standard Markdown.
			const isHeader = currentParentNode.content.length === 1;
			
			for (const cellContent of currentNode.cells) {
				//Use TableHeader if first row, TableCell otherwise
				const cellNode = (isHeader ? th() : td())();
				tableRowNode.content.push(cellNode);
				const paragraph = p();
				cellNode.content.push(paragraph);
				attachItemNode(paragraph, cellContent); // Fill cell with a paragraph (simplified)
			}
			return tableRowNode;
		}
		
		const nodeOrListNode = lastListNode !== null
		&& (currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList')
		&& lastListNode.type === currentNode.node.adfType
			? lastListNode
			: addTypeToNode(currentParentNode, currentNode.node.adfType, currentNode.node.typeParam);
		
		const listItem = li();
		listItem.content = [];
		
		const nodeOrListItem = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList'
			? nodeOrListNode.content.push(listItem) && nodeOrListNode.content[nodeOrListNode.content.length - 1]
			: nodeOrListNode;
		const nodeToAttachTextTo = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' || currentNode.node.adfType === 'blockQuote'
			? typeof currentNode.node.textToEmphasis !== 'undefined' || currentNode.children.length === 0
				? nodeOrListItem.content.push(p()) && nodeOrListItem.content[nodeOrListItem.content.length - 1]
				: nodeOrListItem
			: nodeOrListItem;
		
		if (currentNode.node.adfType === 'divider')
			return lastListNode
		
		else if (currentNode.node.adfType !== 'codeBlock'
			&& currentNode.node.textToEmphasis)
			attachItemNode(nodeToAttachTextTo, currentNode.node.textToEmphasis)
		
		else if (currentNode.node.adfType !== 'codeBlock'
			&& currentNode.node.textToEmphasis === '')
			attachItemNode(nodeToAttachTextTo, ' ')
		
		else if (currentNode.node.adfType === 'codeBlock')
			attachTextToNodeRaw(nodeToAttachTextTo, currentNode.node.textToEmphasis)
		
		if (currentNode.children)
			fillADFNodesWithMarkdown(nodeOrListItem, currentNode.children)
		
		return (currentNode.node.adfType !== 'orderedList' && currentNode.node.adfType !== 'bulletList')
		|| (!lastListNode || currentNode.node.adfType === lastListNode.type)
			? nodeOrListNode
			: lastListNode;
	}, null)
}

/**
 *  Adding a Top-Level ADF element
 *
 * @param adfNodeToAttachTo {Node}    ADF node to attach this element to
 * @param adfType         {String}   ADF Type of the element we want to attach
 * @param typeParams       {String}   extra params for special top-level nodes
 *
 * @returns              {Node}    the node added
 */
function addTypeToNode(adfNodeToAttachTo, adfType, typeParams) {
	switch (adfType) {
		case "heading":
			return adfNodeToAttachTo.content.push(heading({level: typeParams})()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		
		case "divider":
			return adfNodeToAttachTo.content.push(hr()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		
		case "bulletList":
			return adfNodeToAttachTo.content.push(ul()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		
		case "orderedList": {
			const orderedListNode = ol()();
			if (typeParams) orderedListNode.attrs = { order: typeParams };
			return adfNodeToAttachTo.content.push(orderedListNode) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		}
		case "codeBlock":
			return adfNodeToAttachTo.content.push(codeBlock({language: typeParams})()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		
		case "blockQuote":
			return adfNodeToAttachTo.content.push(blockquote()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		
		case "paragraph":
			return adfNodeToAttachTo.content.push(p()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1];
		case "table":
			return adfNodeToAttachTo.content.push(table()) && adfNodeToAttachTo.content[adfNodeToAttachTo.content.length - 1]; // Add table support
		default:
			throw 'incompatible type'
	}
}

/**
 * Adding a non-top-level ADF node
 *
 * @param nodeToAttachTo       {Node}    ADF Node to attach to
 * @param rawText            {String}   text content of the node to add
 */
function attachItemNode(nodeToAttachTo, rawText) {
	const slicedInline = sliceInLineCode(rawText);
	
	slicedInlineAndEmoji = slicedInline;
	
	/*const { slicedInlineAndEmoji } = slicedInline.reduce(( { slicedInlineAndEmoji }, currentSlice) => {
		if (!currentSlice.isMatching) {
			const slicedEmoji = sliceEmoji(currentSlice.text);
			
			return { slicedInlineAndEmoji: slicedInlineAndEmoji.concat(slicedEmoji) };
		}
		
		slicedInlineAndEmoji.push(currentSlice);
		return { slicedInlineAndEmoji };
	}, { slicedInlineAndEmoji: [] });*/
	
	const { slicedInlineAndEmojiAndLink } = slicedInlineAndEmoji.reduce(( { slicedInlineAndEmojiAndLink }, currentSlice) => {
		if (!currentSlice.isMatching) {
			const slicedLink = sliceLink(currentSlice.text);
			
			return { slicedInlineAndEmojiAndLink: slicedInlineAndEmojiAndLink.concat(slicedLink) };
		}
		
		slicedInlineAndEmojiAndLink.push(currentSlice);
		return { slicedInlineAndEmojiAndLink };
	}, { slicedInlineAndEmojiAndLink: [] });
	
	for (const currentSlice of slicedInlineAndEmojiAndLink) {
		switch (currentSlice.type) {
			case 'inline':
				const inlineCodeNode = code(currentSlice.text);
				nodeToAttachTo.content.push(inlineCodeNode);
				break;
			
			case 'emoji':
				const emojiNode = emoji({ shortName: currentSlice.text });
				nodeToAttachTo.content.push(emojiNode);
				break;
			
			case 'link':
				const linkNode = link(
					{ href: currentSlice.optionalText1, title: currentSlice.optionalText2 })(currentSlice.text);
				nodeToAttachTo.content.push(linkNode);
				break;
			
			case 'image': //   Still treat a markdown image as a Link in term of ADF
				const imageNode = link(
					{ href: currentSlice.optionalText1, title: currentSlice.optionalText2 })(currentSlice.text);
				nodeToAttachTo.content.push(imageNode);
				break;
			
			default:
				attachTextToNodeSliceEmphasis(nodeToAttachTo, currentSlice.text);
			// const textNode = new Text( currentSlice.text, marksToUse )
			// nodeToAttachTo.content.add( textNode )
		}
	}
}

/**
 * Match text content with and ADF inline type
 *
 * @param rawText            {String}   the text content to try to match
 *
 * @returns                 {String[]} the different slice matching an inline style
 */
function sliceInLineCode(rawText) {
	return sliceOneMatchFromRegexp(rawText, 'inline', /(?<nonMatchBefore>[^`]*)(?:`(?<match>[^`]+)`)(?<nonMatchAfter>[^`]*)/g);
}

/**
 * Match text content with and ADF emoji type
 *
 * @param rawText            {String}   the text content to try to match
 *
 * @returns                 {String[]} the different slice matching an emoji style
 */
function sliceEmoji(rawText) {
	return sliceOneMatchFromRegexp(rawText, 'emoji', /(?<nonMatchBefore>[^`]*)(?::(?<match>[^`\s]+):)(?<nonMatchAfter>[^`]*)/g);
}

/**
 * Match text content with and ADF link type
 *
 * @param rawText            {String}   the text content to try to match
 *
 * @returns                 {String[]} the different slice matching a link style
 */
function sliceLink(rawText) {
	return sliceOneMatchFromRegexp(rawText, 'link', /(?<nonMatchBefore>[^`]*)(?:\[(?<match>[^\[\]]+)\]\((?<matchOptional>[^\(\)"]+)(?: "(?<matchOptional2>[^"]*)")?\))(?<nonMatchAfter>[^`]*)/g);
}

/**
 * Match text content with and regular expression with one match
 *
 * @param rawText            {String}   the text content to try to match
 * @param typeTag            {String}   the ADF Type to return if it matches
 * @param regexpToSliceWith    {RegExp}   the regexp with a match group and a non-match group to use
 *
 * @returns                 {String[]} the different slice matching the specified regexp
 */
function sliceOneMatchFromRegexp(rawText, typeTag, regexpToSliceWith) {
	let slicesResult = [];
	let snippet = null;
	let hasAtLeastOneExpression = false;
	
	while ((snippet = regexpToSliceWith.exec(rawText))) {
		hasAtLeastOneExpression = true
		if (snippet.groups.nonMatchBefore) {
			slicesResult.push({ isMatching: false, text: snippet.groups.nonMatchBefore });
		}
		
		if (snippet.groups.match) {
			slicesResult.push({
				isMatching: true,
				type: typeTag,
				text: snippet.groups.match,
				optionalText1: snippet.groups.matchOptional,
				optionalText2: snippet.groups.matchOptional2
			});
		}
		
		if (snippet.groups.nonMatchAfter) {
			slicesResult.push({ isMatching: false, text: snippet.groups.nonMatchAfter });
		}
	}
	
	if (!hasAtLeastOneExpression)
		slicesResult.push({ isMatching: false, text: rawText });
	
	return slicesResult;
}

/**
 * Attach a raw simple text node to the parent
 *
 * @param nodeToAttachTo    {Node}    ADF node to attach to
 * @param textToAttach     {String}   text to use for the Text node
 */
function attachTextToNodeRaw(nodeToAttachTo, textToAttach) {
	const textNode = text(textToAttach);
	nodeToAttachTo.content.push(textNode);
}

module.exports = fillADFNodesWithMarkdown
