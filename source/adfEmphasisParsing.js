/***********************************************************************************************************************
 *
 * Atlassian Document Format parsing of Emphasis
 *
 *  @author bruno.morel@b-yond.com
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * This transform a text with emphasis mark (*, _ or `) into an ADF expanded Paragraph
 *
 **********************************************************************************************************************/
const {
	strong, em, strike, text
} = require('@atlaskit/adf-utils/builders');


/**
 * Parse a string character per character to find emphasis patterns
 *  This is a very "manual" way to do it, but it provides the most efficient result
 * @param parentNode          {Node}    ADF Node to attach the suite of Text node to
 * @param textToEmphasis       {String}   text to parse for emphasis parsing
 */
function attachTextToNodeSliceEmphasis(parentNode, textToEmphasis) {
	const lineUnderscored = textToEmphasis.replace(/\*/g, '_');
	let currentDecorationLevel = 0;
	//see convertDecorationLevelToMark
	// 0 => no decoration
	// 1 => italic
	// 2 => bold
	// 3 => bold and italic
	
	let potentialUnderscorePair = false;
	let strikedThrough = false;
	let expressionBuffer = '';
	for (const currentCharacterIndex in lineUnderscored) {
		
		if (lineUnderscored[currentCharacterIndex] !== '_') {
			expressionBuffer += lineUnderscored[currentCharacterIndex];
			
			if (potentialUnderscorePair) {
				currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 2
					? currentDecorationLevel + 1
					: currentDecorationLevel - 1;
				potentialUnderscorePair = false;
			}
		}
		
		if (currentCharacterIndex > 0
			&& lineUnderscored[currentCharacterIndex] === '~'
			&& lineUnderscored[currentCharacterIndex - 1] === '~') {
			const textNode = convertDecorationLevelToMark(
				expressionBuffer.slice(0, expressionBuffer.length - 2), currentDecorationLevel, strikedThrough);
			parentNode.content.push(textNode);
			
			expressionBuffer = '';
			strikedThrough = !strikedThrough;
		}
		
		
		if (lineUnderscored[currentCharacterIndex] === '_') {
			if (expressionBuffer !== '') {
				const textNode = convertDecorationLevelToMark(expressionBuffer, currentDecorationLevel, strikedThrough);
				parentNode.content.push(textNode);
				// textWithInline( parentNode, expressionBuffer, decorationToUse )
			}
			else {
				if (potentialUnderscorePair)
					currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 1
						? currentDecorationLevel + 2
						: currentDecorationLevel - 2;
			}
			
			potentialUnderscorePair = !potentialUnderscorePair;
			expressionBuffer = '';
		}
	}
	
	if (expressionBuffer !== '') {
		const textNode = convertDecorationLevelToMark(expressionBuffer, currentDecorationLevel, strikedThrough);
		parentNode.content.push(textNode);
	}
}

/**
 * Convert a "decoration level" (bit swap) to an actual ADF Mark for the text
 *
 * @param decorationLevelToConvert  {Number}      decoration level follow the convention:
 *                                         0 => no decoration
 *                                         1 => italic
 *                                         2 => bold
 *                                         3 => bold and italic
 * @param addStrikethrough        {Boolean}     is strikethrough active?
 */
function convertDecorationLevelToMark(text, decorationLevelToConvert, addStrikethrough) {
	let result = text;
	if (addStrikethrough) {
		result = strike(result);
	}
	
	if (decorationLevelToConvert === 0) {
		return undefined;
	}
	
	if (decorationLevelToConvert === 2 || decorationLevelToConvert === 3) {
		result = strong(result);
	}
	
	if (decorationLevelToConvert === 1) {
		result = em(result);
	}
}

module.exports = attachTextToNodeSliceEmphasis
