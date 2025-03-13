module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(503);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.table = void 0;
var table = exports.table = function table() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'table',
    content: content
  };
};

/***/ }),

/***/ 8:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineCard = void 0;
var inlineCard = exports.inlineCard = function inlineCard(attrs) {
  return {
    type: 'inlineCard',
    attrs: attrs
  };
};

/***/ }),

/***/ 40:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRow = void 0;
var tableRow = exports.tableRow = function tableRow(content) {
  return {
    type: 'tableRow',
    content: content
  };
};

/***/ }),

/***/ 48:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableHeader = void 0;
var tableHeader = exports.tableHeader = function tableHeader(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'tableHeader',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 53:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strong = void 0;
var _applyMark = __webpack_require__(867);
var strong = exports.strong = function strong(maybeNode) {
  return (0, _applyMark.applyMark)({
    type: 'strong'
  }, maybeNode);
};

/***/ }),

/***/ 72:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = void 0;
var date = exports.date = function date() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    timestamp: ''
  };
  return {
    type: 'date',
    attrs: attrs
  };
};

/***/ }),

/***/ 103:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeBlock = void 0;
var codeBlock = exports.codeBlock = function codeBlock(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'codeBlock',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 115:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextFromString = createTextFromString;
exports.createTextNodes = createTextNodes;
var _text = __webpack_require__(264);
// Ignored via go/ees005
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createTextNodes(nodes) {
  return nodes.map(createTextFromString);
}

// Ignored via go/ees005
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createTextFromString(str) {
  return typeof str === 'string' ? (0, _text.text)(str) : str;
}

/***/ }),

/***/ 118:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.border = void 0;
var _applyMark = __webpack_require__(867);
var border = exports.border = function border(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'border',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 122:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderedList = void 0;
var orderedList = exports.orderedList = function orderedList(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'orderedList',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 134:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rule = void 0;
var rule = exports.rule = function rule() {
  return {
    type: 'rule'
  };
};

/***/ }),

/***/ 147:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignment = void 0;
var _applyMark = __webpack_require__(867);
var alignment = exports.alignment = function alignment(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'alignment',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 148:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragment = void 0;
var _applyMark = __webpack_require__(867);
var fragment = exports.fragment = function fragment(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'fragment',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 156:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;
var doc = exports.doc = function doc() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'doc',
    version: 1,
    content: content
  };
};

/***/ }),

/***/ 158:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hardBreak = void 0;
var hardBreak = exports.hardBreak = function hardBreak(attrs) {
  return {
    type: 'hardBreak',
    attrs: attrs
  };
};

/***/ }),

/***/ 172:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakout = void 0;
var _applyMark = __webpack_require__(867);
var breakout = exports.breakout = function breakout(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'breakout',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 192:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status = void 0;
var status = exports.status = function status() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    text: 'In progress',
    color: 'blue'
  };
  return {
    type: 'status',
    attrs: attrs
  };
};

/***/ }),

/***/ 197:
/***/ (function(module, __unusedexports, __webpack_require__) {

/**********************************************************************************************************************
 *
 *  Markdown handling
 *
 *  @author bruno.morel@b-yond.com
 *---------------------------------------------------------------------------------------------------------------------
 *
 * This build an intermediate representation tree and manage the hierarchy and priorities of the markdown expressions
 *  each branch will contain an object with the follow properties:
 *
 **********************************************************************************************************************/
const translateMarkdownLineToIR = __webpack_require__( 572 )

/**
 * @typedef {Object}  IRTreeNode
 * @property {IRElement} 	node 			- intermediate representation of the markdown element
 * @property {IRElement[]} 	children 		- the list of children attach to that node
 * @property {Number} 		indexOfList 	- the index in the list of expression
 */


/**
 * Implement markdown greediness and collapsing of subnode, generate the final node tree representing
 *  the IRElement topology
 *
 * @param rawTextMarkdown	{String[]}		array of expression to parse and handle
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function buildTreeFromMarkdown( rawTextMarkdown ){
	//code block are the most greedy expression in markdown
	const cleanedCodeBlock = collapseCodeBloc( rawTextMarkdown )
	
	//block quote collapse paragraphs, so we have to to them first
	const blockquotedNodes = collapseBlockquote( cleanedCodeBlock )
	
	const tableNode = collapseTable(blockquotedNodes)
	
	//paragraph themselves collapse when they are not separated by
	// two consecutive empty lines
	const breakedLineNodes = collapseParagraph( tableNode )
	
	//lists accumulate elements of the same level unless separated by
	//     two consecutive empty lines
	const accumulatedNodes = accumulateLevelFromList( breakedLineNodes )
	
	//we build the array of textPosition for each level
	const levelsPosition = createLevelList( accumulatedNodes )
	
	//map each element to a level, in order
	const elementMap = mapIRToLevels( accumulatedNodes, levelsPosition )
	
	return buildTreeFromLevelMap( elementMap )
}



/**
 * CodeBlock swallow all text until they are closed, so we collapsed all paragraph into them
 *   When a code block is open, it should be closed by a triple caret, everything in between is code
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseCodeBloc( rawIROfMarkdown ){
	///MARDKOWN logic - closing code blocks
	//
	const { codeBlockHandled } =  rawIROfMarkdown.split( /\r\n|\r|\n/ ).reduce( ( { codeBlockHandled, indexCurrentCodeBloc }, currentLine ) => {
		const lineTranslation = translateMarkdownLineToIR( currentLine )
		
		if( typeof indexCurrentCodeBloc === "undefined"
			&& ( lineTranslation.adfType === 'codeBlock'
				 || lineTranslation.nodeAttached ) ){
			codeBlockHandled.push( lineTranslation )
			if( lineTranslation.nodeAttached ){
				codeBlockHandled.push( lineTranslation.nodeAttached )
			}
			
			return { codeBlockHandled, indexCurrentCodeBloc: codeBlockHandled.length - 1 }
		}
		
		if( typeof indexCurrentCodeBloc !== "undefined"
			&& ( lineTranslation.adfType !== 'codeBlock'
				 || typeof lineTranslation.typeParam === "undefined"
				 || lineTranslation.typeParam !== '' ) ) {
			const textToAdd = lineTranslation.textPosition >= codeBlockHandled[ indexCurrentCodeBloc ].textPosition
							  ? currentLine.slice( codeBlockHandled[ indexCurrentCodeBloc ].textPosition )
							  : currentLine
			codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis = codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis
																	  + ( codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis === ''
																		  ? textToAdd
																		  : '\n' + textToAdd )
			return { codeBlockHandled, indexCurrentCodeBloc }
		}
		
		if( typeof indexCurrentCodeBloc !== "undefined"
			&& lineTranslation.adfType === 'codeBlock'
			&& typeof lineTranslation.typeParam !== "undefined"
			&& lineTranslation.typeParam === '' ){
			return { codeBlockHandled }
		}
		
		codeBlockHandled.push( lineTranslation )
		
		return { codeBlockHandled }
	}, { codeBlockHandled: [] } )
	
	//handling of unfinished empty codeBlock
	const cleanedCodeBlock = codeBlockHandled.filter( ( currentNode ) => {
		if( currentNode.adfType !== 'codeBlock' )
			return currentNode
		
		if( currentNode.textToEmphasis !== '' )
			return currentNode
	} )
	
	return cleanedCodeBlock
}

/**
 * Blockquote start with each line identify with a caret. Any interruption (line break) create a new blockquote
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseBlockquote( rawIROfMarkdown ){
	const { blockquotedNodes } = rawIROfMarkdown.reduce( ( { blockquotedNodes, currentLastThatWasBlockQuote }, currentLineNode ) => {
		
		if( !currentLastThatWasBlockQuote
			&& currentLineNode.adfType === 'blockQuote' ){
			blockquotedNodes.push( currentLineNode )
			return { blockquotedNodes, currentLastThatWasBlockQuote: currentLineNode }
		}
		
		//this is a non-empty paragraph, if we are already filling up a paragraph, let's add the text inside
		if( currentLastThatWasBlockQuote
			&& currentLineNode.adfType === 'blockQuote' ){
			currentLastThatWasBlockQuote.textToEmphasis = currentLastThatWasBlockQuote.textToEmphasis +
														  ' ' + currentLineNode.textToEmphasis
			return { blockquotedNodes, currentLastThatWasBlockQuote }
		}
		
		//this is non-blockquote node, we add it to the list
		blockquotedNodes.push( currentLineNode )
		return { blockquotedNodes }
		
	}, { blockquotedNodes: [ ] } )
	
	return blockquotedNodes
}

function collapseTable(rawIROfMarkdown) {
	const { tableNodes } = rawIROfMarkdown.reduce(
		({ tableNodes, currentTable }, currentLineNode) => {
			if (currentLineNode.adfType === "tableRow") {
				if (!currentTable) {
					// Start a new table *only if* the first row is followed by a divider
					if (rawIROfMarkdown.length > rawIROfMarkdown.indexOf(currentLineNode) + 1 && rawIROfMarkdown[rawIROfMarkdown.indexOf(currentLineNode) + 1].adfType ==="tableDivider"){
						currentTable = {
							adfType: "table",
							children: [], // Initialize children array
							textPosition: currentLineNode.textPosition,
							textToEmphasis: "",
							isHeader: true, // Flag to indicate the first row is the header
						};
						tableNodes.push(currentTable);
					}
					else{
						tableNodes.push(currentLineNode)
						return {tableNodes}
					}
				}
				if(currentTable)
					currentTable.children.push(currentLineNode);
				return { tableNodes, currentTable };
			} else if (currentLineNode.adfType === "tableDivider") {
				// We ignore the divider itself in standard markdown,
				// but we use its presence to confirm the start of a table.
				return { tableNodes, currentTable };
			}
			else {
				// Not a table row, end the current table (if any)
				tableNodes.push(currentLineNode)
				return { tableNodes, currentTable: null };
			}
		},
		{ tableNodes: [], currentTable: null }
	);
	
	return tableNodes;
}

/**
 * Heading is an exception, otherwise non-empty line aggregate in the parent element
 * For all other type, following a markdown with any paragraph of text is considered a continuation, so we aggregate
 * all subsequent text into the same parent element (paragraph, list item, ...)
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseParagraph( rawIROfMarkdown ){
	const { breakedLineNodes } = rawIROfMarkdown.reduce( ( { breakedLineNodes, currentParent, lastWasAlsoAParagraph }, currentLineNode ) => {
		
		if( currentLineNode.adfType === 'heading'
			|| currentLineNode.adfType === 'divider'
			|| currentLineNode.adfType === 'codeBlock'
			|| currentLineNode.adfType === 'tableRow'
			|| currentLineNode.adfType === 'tableDivider'){
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes }
		}
		
		if( currentLineNode.adfType !== 'paragraph' ){
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes, currentParent: currentLineNode }
		}
		
		if( !lastWasAlsoAParagraph
			&& /^(?:[\s]*)$/.test( currentLineNode.textToEmphasis ) ) {
			//we're breaking into a new paragraph
			return { breakedLineNodes, lastWasAlsoAParagraph: true }
		}
		
		if( lastWasAlsoAParagraph
			&& /^(?:[\s]*)$/.test( currentLineNode.textToEmphasis ) ) {
			//we've double break, we add a paragraph
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes }
		}
		
		//this is a non-empty paragraph, if we are already filling up a paragraph, let's add the text inside
		if( currentParent ){
			const textToAdd = currentLineNode.textPosition >= currentParent.textPosition
				? currentLineNode.textToEmphasis.slice( currentParent.textPosition )
				: currentLineNode.textToEmphasis
			currentParent.textToEmphasis = currentParent.textToEmphasis + ( currentLineNode.textToEmphasis.charAt( 0 ) !== ' '
				? ' ' + textToAdd
				: textToAdd )
			return { breakedLineNodes, currentParent }
		}
		
		//this is a lone new paragraph, we add it to the list
		breakedLineNodes.push( currentLineNode )
		return { breakedLineNodes, currentParent: currentLineNode }
		
	}, { breakedLineNodes: [ ] } )
	
	return breakedLineNodes
}


/**
 * Realign children nodes to orderedList and bulletList
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function accumulateLevelFromList( rawIROfMarkdown ){
	const { accumulatedNodes } = rawIROfMarkdown.reduce( ( { accumulatedNodes, indexCurrentList }, currentLineNode ) => {
		
		if( currentLineNode.adfType !== 'heading'
			&& currentLineNode.adfType !== 'divider'
			&& currentLineNode.adfType !== 'orderedList'
			&& currentLineNode.adfType !== 'bulletList'
			&& indexCurrentList
			&& currentLineNode.textPosition < accumulatedNodes[ indexCurrentList ].textPosition + 2 ){
			currentLineNode.textPosition = accumulatedNodes[ indexCurrentList ].textPosition + 2
		}
		
		accumulatedNodes.push( currentLineNode )
		
		if( currentLineNode.adfType === 'heading'
			|| currentLineNode.adfType === 'divider' )
			return { accumulatedNodes }
		
		if( currentLineNode.adfType === 'bulletList' || currentLineNode.adfType === 'orderedList' ){
			return { accumulatedNodes, indexCurrentList: accumulatedNodes.length - 1 }
		}
		
		return { accumulatedNodes, indexCurrentList }
		
	}, { accumulatedNodes: [ ] } )
	
	return accumulatedNodes
}

/**
 * Build an array of all the different level (defined by the lists) we have to manage
 *  and their corresponding textPosition
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {Number[]}		an array of the textPosition for each level
 */
function createLevelList( rawIROfMarkdown ){
	return rawIROfMarkdown.reduce( ( currentLevelList, currentNode ) => {
		if( currentNode.adfType !== 'orderedList'
			&& currentNode.adfType !== 'bulletList' )
			return currentLevelList
		
		return ( currentLevelList.includes( currentNode.textPosition + 2 ) || currentLevelList.includes( currentNode.textPosition + 3 ) )
			? currentLevelList
			: currentNode.textPosition + 2 > ( currentLevelList[ currentLevelList.length - 1 ] + 1 )
				? [ ...currentLevelList, currentNode.textPosition + 2 ]
				: currentLevelList
	}, [ 0 ] )
}


/**
 * Map all element to their level in an array of level
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into mapping
 * @param levelsPosition	{Array} 	the list of level's textPosition to use
 *
 * @returns {IRTreeNode[]}		an array of IRTreeNode
 */
function mapIRToLevels( rawIROfMarkdown, levelsPosition ){
	return levelsPosition.map( ( currentLevelPosition, currentIndex ) => {
		return rawIROfMarkdown.filter( currentList => ( currentList.textPosition >= currentLevelPosition
														 && ( currentIndex === levelsPosition.length - 1 //this is the last level
															  || currentList.textPosition < levelsPosition[ currentIndex + 1 ] ) ) )
							   .map( currentList => ( {
								   indexOfList: rawIROfMarkdown.indexOf( currentList ),
								   children: [],
								   node: currentList } ) )
	} )
}

/**
 * Map all element to their level in an array of level
 *
 * @param levelsMap			{Array} 	the level array of array of IRElement
 *
 * @returns {IRTreeNode[]}				tree of IRElements and their children
 */
function buildTreeFromLevelMap( levelsMap ){
	const treeOfNode = levelsMap.reduce( ( currentTree, currentArrayOfListIndexes, currentIndexInTheArrayOfListIndexes ) => {
		const stepAtTree = currentArrayOfListIndexes.reduce( ( currentTreeValues, currentListValues ) => {
			if( currentIndexInTheArrayOfListIndexes <= 0 )
				return [ ...currentTreeValues, currentListValues ]
			
			const parentList = levelsMap[ currentIndexInTheArrayOfListIndexes - 1 ]
			const lastParentWithIndexBelow = parentList.findIndex( currentParentListIndex => {
				return currentParentListIndex.indexOfList > currentListValues.indexOfList
			} )
			const parentIndexToUse = lastParentWithIndexBelow === -1
									 ? parentList.length - 1
									 : lastParentWithIndexBelow === 0
									   ? 0
									   : lastParentWithIndexBelow - 1
			if( parentIndexToUse < 0 )
				throw 'Parent list of node is empty!'
			
			parentList[ parentIndexToUse ].children.push( currentListValues )
			
			return currentTreeValues
		}, currentTree )
		return stepAtTree
	}, [] )
	
	return treeOfNode
}

module.exports = buildTreeFromMarkdown


/***/ }),

/***/ 207:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nestedExpand = void 0;
var nestedExpand = exports.nestedExpand = function nestedExpand(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'nestedExpand',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 211:
/***/ (function(module, __unusedexports, __webpack_require__) {

var _typeof = __webpack_require__(431)["default"];
var toPrimitive = __webpack_require__(936);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 215:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.code = void 0;
var _applyMark = __webpack_require__(867);
var code = exports.code = function code(maybeNode) {
  return (0, _applyMark.applyMark)({
    type: 'code'
  }, maybeNode);
};

/***/ }),

/***/ 234:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutColumn = void 0;
var layoutColumn = exports.layoutColumn = function layoutColumn(attrs) {
  return function (content) {
    return {
      type: 'layoutColumn',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 264:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = void 0;
var text = exports.text = function text(_text) {
  return {
    type: 'text',
    text: _text
  };
};

/***/ }),

/***/ 291:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutSection = void 0;
var layoutSection = exports.layoutSection = function layoutSection() {
  return function (content) {
    return {
      type: 'layoutSection',
      content: content
    };
  };
};

/***/ }),

/***/ 294:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaGroup = void 0;
var mediaGroup = exports.mediaGroup = function mediaGroup() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'mediaGroup',
    content: content
  };
};

/***/ }),

/***/ 322:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decisionItem = void 0;
var decisionItem = exports.decisionItem = function decisionItem(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'decisionItem',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 326:
/***/ (function(module, __unusedexports, __webpack_require__) {

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
} = __webpack_require__(448);

const attachTextToNodeSliceEmphasis = __webpack_require__(804);

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


/***/ }),

/***/ 328:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decisionList = void 0;
var decisionList = exports.decisionList = function decisionList(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'decisionList',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 351:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textColor = void 0;
var _applyMark = __webpack_require__(867);
var textColor = exports.textColor = function textColor(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'textColor',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 355:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragraph = void 0;
var _createTextNodes = __webpack_require__(115);
var paragraph = exports.paragraph = function paragraph() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'paragraph',
    content: (0, _createTextNodes.createTextNodes)(content)
  };
};

/***/ }),

/***/ 359:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strike = void 0;
var _applyMark = __webpack_require__(867);
var strike = exports.strike = function strike(maybeNode) {
  return (0, _applyMark.applyMark)({
    type: 'strike'
  }, maybeNode);
};

/***/ }),

/***/ 371:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundColor = void 0;
var _applyMark = __webpack_require__(867);
var backgroundColor = exports.backgroundColor = function backgroundColor(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'backgroundColor',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 374:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockQuote = void 0;
var blockQuote = exports.blockQuote = function blockQuote() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'blockquote',
    content: content
  };
};

/***/ }),

/***/ 401:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaSingle = void 0;
var mediaSingle = exports.mediaSingle = function mediaSingle(attrs) {
  return function (content) {
    return {
      type: 'mediaSingle',
      attrs: attrs,
      content: Array.isArray(content) ? content : [content]
    };
  };
};

/***/ }),

/***/ 409:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineExtension = void 0;
var inlineExtension = exports.inlineExtension = function inlineExtension(attrs) {
  return function () {
    return {
      type: 'inlineExtension',
      attrs: attrs
    };
  };
};

/***/ }),

/***/ 431:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 448:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "a", {
  enumerable: true,
  get: function get() {
    return _link.link;
  }
});
Object.defineProperty(exports, "alignment", {
  enumerable: true,
  get: function get() {
    return _alignment.alignment;
  }
});
Object.defineProperty(exports, "b", {
  enumerable: true,
  get: function get() {
    return _strong.strong;
  }
});
Object.defineProperty(exports, "backgroundColor", {
  enumerable: true,
  get: function get() {
    return _backgroundColor.backgroundColor;
  }
});
Object.defineProperty(exports, "blockCard", {
  enumerable: true,
  get: function get() {
    return _blockCard.blockCard;
  }
});
Object.defineProperty(exports, "blockQuote", {
  enumerable: true,
  get: function get() {
    return _blockquote.blockQuote;
  }
});
Object.defineProperty(exports, "bodiedExtension", {
  enumerable: true,
  get: function get() {
    return _bodiedExtension.bodiedExtension;
  }
});
Object.defineProperty(exports, "border", {
  enumerable: true,
  get: function get() {
    return _border.border;
  }
});
Object.defineProperty(exports, "br", {
  enumerable: true,
  get: function get() {
    return _hardBreak.hardBreak;
  }
});
Object.defineProperty(exports, "breakout", {
  enumerable: true,
  get: function get() {
    return _breakout.breakout;
  }
});
Object.defineProperty(exports, "bulletList", {
  enumerable: true,
  get: function get() {
    return _bulletList.bulletList;
  }
});
Object.defineProperty(exports, "code", {
  enumerable: true,
  get: function get() {
    return _code.code;
  }
});
Object.defineProperty(exports, "codeBlock", {
  enumerable: true,
  get: function get() {
    return _codeBlock.codeBlock;
  }
});
Object.defineProperty(exports, "dataConsumer", {
  enumerable: true,
  get: function get() {
    return _dataConsumer.dataConsumer;
  }
});
Object.defineProperty(exports, "date", {
  enumerable: true,
  get: function get() {
    return _date.date;
  }
});
Object.defineProperty(exports, "decisionItem", {
  enumerable: true,
  get: function get() {
    return _decisionItem.decisionItem;
  }
});
Object.defineProperty(exports, "decisionList", {
  enumerable: true,
  get: function get() {
    return _decisionList.decisionList;
  }
});
Object.defineProperty(exports, "doc", {
  enumerable: true,
  get: function get() {
    return _doc.doc;
  }
});
Object.defineProperty(exports, "em", {
  enumerable: true,
  get: function get() {
    return _em.em;
  }
});
Object.defineProperty(exports, "embedCard", {
  enumerable: true,
  get: function get() {
    return _embedCard.embedCard;
  }
});
Object.defineProperty(exports, "emoji", {
  enumerable: true,
  get: function get() {
    return _emoji.emoji;
  }
});
Object.defineProperty(exports, "expand", {
  enumerable: true,
  get: function get() {
    return _expand.expand;
  }
});
Object.defineProperty(exports, "extension", {
  enumerable: true,
  get: function get() {
    return _extension.extension;
  }
});
Object.defineProperty(exports, "fragment", {
  enumerable: true,
  get: function get() {
    return _fragment.fragment;
  }
});
Object.defineProperty(exports, "hardBreak", {
  enumerable: true,
  get: function get() {
    return _hardBreak.hardBreak;
  }
});
Object.defineProperty(exports, "heading", {
  enumerable: true,
  get: function get() {
    return _heading.heading;
  }
});
Object.defineProperty(exports, "hr", {
  enumerable: true,
  get: function get() {
    return _rule.rule;
  }
});
Object.defineProperty(exports, "indentation", {
  enumerable: true,
  get: function get() {
    return _indentation.indentation;
  }
});
Object.defineProperty(exports, "inlineCard", {
  enumerable: true,
  get: function get() {
    return _inlineCard.inlineCard;
  }
});
Object.defineProperty(exports, "inlineExtension", {
  enumerable: true,
  get: function get() {
    return _inlineExtension.inlineExtension;
  }
});
Object.defineProperty(exports, "layoutColumn", {
  enumerable: true,
  get: function get() {
    return _layoutColumn.layoutColumn;
  }
});
Object.defineProperty(exports, "layoutSection", {
  enumerable: true,
  get: function get() {
    return _layoutSection.layoutSection;
  }
});
Object.defineProperty(exports, "li", {
  enumerable: true,
  get: function get() {
    return _listItem.listItem;
  }
});
Object.defineProperty(exports, "link", {
  enumerable: true,
  get: function get() {
    return _link.link;
  }
});
Object.defineProperty(exports, "listItem", {
  enumerable: true,
  get: function get() {
    return _listItem.listItem;
  }
});
Object.defineProperty(exports, "media", {
  enumerable: true,
  get: function get() {
    return _media.media;
  }
});
Object.defineProperty(exports, "mediaGroup", {
  enumerable: true,
  get: function get() {
    return _mediaGroup.mediaGroup;
  }
});
Object.defineProperty(exports, "mediaSingle", {
  enumerable: true,
  get: function get() {
    return _mediaSingle.mediaSingle;
  }
});
Object.defineProperty(exports, "mention", {
  enumerable: true,
  get: function get() {
    return _mention.mention;
  }
});
Object.defineProperty(exports, "nestedExpand", {
  enumerable: true,
  get: function get() {
    return _nestedExpand.nestedExpand;
  }
});
Object.defineProperty(exports, "ol", {
  enumerable: true,
  get: function get() {
    return _orderedList.orderedList;
  }
});
Object.defineProperty(exports, "orderedList", {
  enumerable: true,
  get: function get() {
    return _orderedList.orderedList;
  }
});
Object.defineProperty(exports, "p", {
  enumerable: true,
  get: function get() {
    return _paragraph.paragraph;
  }
});
Object.defineProperty(exports, "panel", {
  enumerable: true,
  get: function get() {
    return _panel.panel;
  }
});
Object.defineProperty(exports, "paragraph", {
  enumerable: true,
  get: function get() {
    return _paragraph.paragraph;
  }
});
Object.defineProperty(exports, "placeholder", {
  enumerable: true,
  get: function get() {
    return _placeholder.placeholder;
  }
});
Object.defineProperty(exports, "rule", {
  enumerable: true,
  get: function get() {
    return _rule.rule;
  }
});
Object.defineProperty(exports, "status", {
  enumerable: true,
  get: function get() {
    return _status.status;
  }
});
Object.defineProperty(exports, "strike", {
  enumerable: true,
  get: function get() {
    return _strike.strike;
  }
});
Object.defineProperty(exports, "strong", {
  enumerable: true,
  get: function get() {
    return _strong.strong;
  }
});
Object.defineProperty(exports, "subsup", {
  enumerable: true,
  get: function get() {
    return _subsup.subsup;
  }
});
Object.defineProperty(exports, "table", {
  enumerable: true,
  get: function get() {
    return _table.table;
  }
});
Object.defineProperty(exports, "tableCell", {
  enumerable: true,
  get: function get() {
    return _tableCell.tableCell;
  }
});
Object.defineProperty(exports, "tableHeader", {
  enumerable: true,
  get: function get() {
    return _tableHeader.tableHeader;
  }
});
Object.defineProperty(exports, "tableRow", {
  enumerable: true,
  get: function get() {
    return _tableRow.tableRow;
  }
});
Object.defineProperty(exports, "taskItem", {
  enumerable: true,
  get: function get() {
    return _taskItem.taskItem;
  }
});
Object.defineProperty(exports, "taskList", {
  enumerable: true,
  get: function get() {
    return _taskList.taskList;
  }
});
Object.defineProperty(exports, "td", {
  enumerable: true,
  get: function get() {
    return _tableCell.tableCell;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function get() {
    return _text.text;
  }
});
Object.defineProperty(exports, "textColor", {
  enumerable: true,
  get: function get() {
    return _textColor.textColor;
  }
});
Object.defineProperty(exports, "th", {
  enumerable: true,
  get: function get() {
    return _tableHeader.tableHeader;
  }
});
Object.defineProperty(exports, "tr", {
  enumerable: true,
  get: function get() {
    return _tableRow.tableRow;
  }
});
Object.defineProperty(exports, "u", {
  enumerable: true,
  get: function get() {
    return _underline.underline;
  }
});
Object.defineProperty(exports, "ul", {
  enumerable: true,
  get: function get() {
    return _bulletList.bulletList;
  }
});
Object.defineProperty(exports, "underline", {
  enumerable: true,
  get: function get() {
    return _underline.underline;
  }
});
var _breakout = __webpack_require__(172);
var _code = __webpack_require__(215);
var _em = __webpack_require__(666);
var _link = __webpack_require__(584);
var _strike = __webpack_require__(359);
var _strong = __webpack_require__(53);
var _subsup = __webpack_require__(663);
var _textColor = __webpack_require__(351);
var _underline = __webpack_require__(814);
var _alignment = __webpack_require__(147);
var _indentation = __webpack_require__(911);
var _dataConsumer = __webpack_require__(853);
var _fragment = __webpack_require__(148);
var _border = __webpack_require__(118);
var _backgroundColor = __webpack_require__(371);
var _blockquote = __webpack_require__(374);
var _bodiedExtension = __webpack_require__(780);
var _blockCard = __webpack_require__(785);
var _bulletList = __webpack_require__(471);
var _codeBlock = __webpack_require__(103);
var _date = __webpack_require__(72);
var _decisionItem = __webpack_require__(322);
var _decisionList = __webpack_require__(328);
var _doc = __webpack_require__(156);
var _emoji = __webpack_require__(806);
var _extension = __webpack_require__(873);
var _expand = __webpack_require__(983);
var _nestedExpand = __webpack_require__(207);
var _hardBreak = __webpack_require__(158);
var _heading = __webpack_require__(604);
var _inlineExtension = __webpack_require__(409);
var _inlineCard = __webpack_require__(8);
var _layoutColumn = __webpack_require__(234);
var _layoutSection = __webpack_require__(291);
var _listItem = __webpack_require__(849);
var _mediaGroup = __webpack_require__(294);
var _mediaSingle = __webpack_require__(401);
var _media = __webpack_require__(792);
var _mention = __webpack_require__(817);
var _orderedList = __webpack_require__(122);
var _panel = __webpack_require__(565);
var _paragraph = __webpack_require__(355);
var _placeholder = __webpack_require__(891);
var _rule = __webpack_require__(134);
var _status = __webpack_require__(192);
var _tableCell = __webpack_require__(615);
var _tableHeader = __webpack_require__(48);
var _tableRow = __webpack_require__(40);
var _table = __webpack_require__(5);
var _taskItem = __webpack_require__(851);
var _taskList = __webpack_require__(528);
var _text = __webpack_require__(264);
var _embedCard = __webpack_require__(541);

/***/ }),

/***/ 471:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulletList = void 0;
var bulletList = exports.bulletList = function bulletList() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }
  return {
    type: 'bulletList',
    content: content
  };
};

/***/ }),

/***/ 492:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateMarkError = duplicateMarkError;
exports.isDuplicateMark = isDuplicateMark;
// Ignored via go/ees005
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDuplicateMark(node, type) {
  if (node.marks && node.marks.some(function (mark) {
    return mark.type === type;
  })) {
    return true;
  }
  return false;
}

// Ignored via go/ees005
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function duplicateMarkError(node, type) {
  return "Mark with the same name '".concat(type, "' already exists on a node: ").concat(JSON.stringify(node));
}

/***/ }),

/***/ 503:
/***/ (function(module, __unusedexports, __webpack_require__) {

/***********************************************************************************************************************
 *
 * Take any markdown (Github focussed for now) and translate it into a JIRA/Confluence compatible ADF document
 *
 *  @author bruno.morel@b-yond.com
 *
 **********************************************************************************************************************/
const {
	doc
} = __webpack_require__(448);


const buildIRTreeFromMarkdown = __webpack_require__( 197 )
const fillADFNodesWithMarkdown = __webpack_require__( 326 )

function translateGITHUBMarkdownToADF( markdownText ){
	
	const textTree = buildIRTreeFromMarkdown( markdownText )
	
	const adfRoot = doc()
	if( textTree.length > 0 )
		fillADFNodesWithMarkdown( adfRoot, textTree )
	
	return adfRoot
}

module.exports = translateGITHUBMarkdownToADF


/***/ }),

/***/ 528:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskList = void 0;
var taskList = exports.taskList = function taskList(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'taskList',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 541:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embedCard = void 0;
var embedCard = exports.embedCard = function embedCard(attrs) {
  return {
    type: 'embedCard',
    attrs: attrs
  };
};

/***/ }),

/***/ 565:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panel = void 0;
var panel = exports.panel = function panel(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'panel',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 572:
/***/ (function(module) {

/**********************************************************************************************************************
 *
 *  Markdown Parser
 *
 *  @author bruno.morel@b-yond.com
 *---------------------------------------------------------------------------------------------------------------------
 *
 * This translate all markdown to an intermediate representation composed as an array with
 *  each item containing and object with the follow properties:
 *      adfType : 		the ADF type of the line (heading, paragraph, orderedList, ...
 *      textToEmphasis: the actuel text (if any) attached to the element
 *      typeParam:		any extra parameter for special types (language for codeBlock)
 *      nodeAttached: 	element to manage the special case of a codeBlock attached to a list
 *      textPosition: 	the actual start position of the text (used later for level identication)
 *
 **********************************************************************************************************************/

/**
 * @typedef {Object}  IRElement
 * @property {number} 		adfType 		- ADF type of the expression
 * @property {number} 		textPosition 	- the actual start of the text (adfType dependent)
 * @property {string} 		textToEmphasis 	- actual text of the element (adfType dependent)
 * @property {string} 		typeParam 		- extra parameters adfType dependent
 * @property {IRElement} 	nodeAttached 	- an attached code block to a list
 */

/**
 * Parse markdown into an Intermediate representation
 *
 * @param markdownLineTextWithTabs an array of markdown expression to process
 * @returns {IRElement}		an intermediate representation of the markdown element
 */
function parseMarkdownLinetoIR( markdownLineTextWithTabs ){
	//to simplify tab management we replace them with spaces
	const markdownLine = markdownLineTextWithTabs.replace( /\t/g, '    ' )
	
	//we try to match each line to match with a markdown expression
	// or we push an empty paragraph
	
	const headerNode = matchHeader( markdownLine )
	if( headerNode ) return headerNode
	
	const divider = matchDivider( markdownLine )
	if( divider ) return divider
	
	const tableNode = matchTable( markdownLine );
	if (tableNode) return tableNode;
	
	const listNode = matchList( markdownLine )
	if( listNode ) return listNode
	
	const blockQuoteNode = matchBlockQuote( markdownLine )
	if( blockQuoteNode ) return blockQuoteNode
	
	const codeBlockNode = matchCodeBlock( markdownLine )
	if( codeBlockNode ) return codeBlockNode
	
	const paragraphNode = matchParagraph( markdownLine )
	if( paragraphNode ) return paragraphNode
	
	//this is a line break then
	return {   adfType :     "paragraph",
		textToEmphasis: "",
		textPosition:  markdownLine.length }
}

/**
 * Matching of the markdown header
 *
 * @param lineToMatch actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchHeader( lineToMatch ){
	const headerType = lineToMatch.match( /^(?<headerNumber>[#]{1,6}) (?<headerText>.*)$/i )
	if( headerType
		&& headerType.groups
		&& headerType.groups.headerNumber
		&& headerType.groups.headerText ){
		return { 	adfType : 		"heading",//adfRoot.heading( headerType.groups.headerNumber.length ),
			textToEmphasis: headerType.groups.headerText,
			typeParam:		headerType.groups.headerNumber.length,
			textPosition: 	0
		}
	}
	
	return null
}

function matchTable(lineToMatch) {
	// Check if it's a potential table row (contains at least one |)
	if (lineToMatch.indexOf('|') === -1) {
		return null;
	}
	
	// Split into cells, trim whitespace.
	const cells = lineToMatch.split('|').map(cell => cell.trim());
	
	// Table line must start and end with `|`
	if (cells[0] || cells[cells.length - 1]) {
		return null;
	}
	
	if (lineToMatch.trim().match(/^[-:\|\s]+$/) && !lineToMatch.trim().match(/^[\s]*$/)) {
		const numberOfHyphen = lineToMatch.trim().match(/[-]+/g)
		if(numberOfHyphen && numberOfHyphen[0].length >= 3)
			return {
				adfType: "tableDivider",
				textToEmphasis: lineToMatch.trim(),
				textPosition: 0,
			};
	}
	
	
	return {
		adfType: "tableRow",
		textToEmphasis: "",
		textPosition: 0,
		cells: cells.slice(1, -1), // Store the cell contents
	};
}

/**
 * Matching of a markdown list
 *
 * @param lineToMatch actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchList( lineToMatch ){
	const list = lineToMatch.match( /^(?:[\s])*(?:[*\-+] |(?<orderedNumber>[0-9]+)[.)] )+(?<listText>.*)$/i )
	if( list
		&& list.groups
		&& list.groups.listText ){
		// adfDescription.bulletList( )
		// 			  .textItem(  )
		const textIsCodeBlock = matchCodeBlock( list.groups.listText )
		if( textIsCodeBlock )
			textIsCodeBlock.textPosition = lineToMatch.indexOf( list.groups.listText )
		
		return { 	adfType	: 		list.groups.orderedNumber
										? "orderedList"
										: "bulletList",
			typeParam:		list.groups.orderedNumber,
			textToEmphasis: textIsCodeBlock ? '': list.groups.listText,
			textPosition: 	lineToMatch.indexOf( list.groups.listText ) - 2,
			nodeAttached: 	textIsCodeBlock
		}
	}
	
	return null
}

/**
 * Match a markdown code block
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchCodeBlock( lineToMatch ){
	const codeBlock = lineToMatch.match( /^(?:[\s]*```)(?<Language>[^\s]*)$/i )
	if( codeBlock
		&& codeBlock.groups ){
		
		return { 	adfType: 		"codeBlock",
			typeParam:		codeBlock.groups.Language,
			textPosition: 	lineToMatch.indexOf( '```' ),
			textToEmphasis: '' }
	}
	
	return null
}

/**
 * Match a markdown blockquote
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchBlockQuote( lineToMatch ){
	const blockquote = lineToMatch.match( /^(?:[\s])*> (?<quoteText>.*)$/i )
	if( blockquote
		&& blockquote.groups
		&& blockquote.groups.quoteText ){
		
		return { 	adfType : 		"blockQuote",
			textToEmphasis: blockquote.groups.quoteText,
			textPosition: 	lineToMatch.indexOf( '> ' ) }
	}
	
	return null
}

/**
 * Match a markdown paragraph
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchParagraph( lineToMatch ){
	const paragraph = lineToMatch.match( /^(?:[\s]*)(?<paragraphText>[^\n]+)$/ )
	if( paragraph
		&& paragraph.groups
		&& paragraph.groups.paragraphText ){
		return { 	adfType : 		"paragraph",
			textToEmphasis: paragraph.groups.paragraphText,
			textPosition: 	!paragraph.groups.paragraphText.match( /^(?:[\s]*)$/ )
							 ? lineToMatch.indexOf( paragraph.groups.paragraphText )
							 : lineToMatch.length }
	}
	
	return null
}

/**
 * Match a markdown divider
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchDivider( lineToMatch ){
	const divider = lineToMatch.match( /^(\s*-{3,}\s*|\s*\*{3,}\s*|\s*_{3,}\s*)$/ )
	if( divider ){
		return { 	adfType : 		"divider",
			textToEmphasis: '',
			textPosition: 	0 }
	}
	
	return null
}

module.exports = parseMarkdownLinetoIR


/***/ }),

/***/ 584:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = void 0;
var _applyMark = __webpack_require__(867);
var link = exports.link = function link(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'link',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 604:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = void 0;
var heading = exports.heading = function heading(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'heading',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 615:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableCell = void 0;
var tableCell = exports.tableCell = function tableCell(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'tableCell',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 655:
/***/ (function(module, __unusedexports, __webpack_require__) {

var toPropertyKey = __webpack_require__(211);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 663:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subsup = void 0;
var _applyMark = __webpack_require__(867);
var subsup = exports.subsup = function subsup(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'subsup',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 666:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.em = void 0;
var _applyMark = __webpack_require__(867);
var em = exports.em = function em(maybeNode) {
  return (0, _applyMark.applyMark)({
    type: 'em'
  }, maybeNode);
};

/***/ }),

/***/ 764:
/***/ (function(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 780:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodiedExtension = void 0;
var bodiedExtension = exports.bodiedExtension = function bodiedExtension(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'bodiedExtension',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 785:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockCard = void 0;
var blockCard = exports.blockCard = function blockCard(attrs) {
  return {
    type: 'blockCard',
    attrs: attrs
  };
};

/***/ }),

/***/ 792:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = void 0;
var media = exports.media = function media(attrs) {
  return {
    type: 'media',
    attrs: attrs
  };
};

/***/ }),

/***/ 804:
/***/ (function(module, __unusedexports, __webpack_require__) {

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
} = __webpack_require__(448);

/**
 * Parse a string character per character to find emphasis patterns
 *  This is a very "manual" way to do it, but it provides the most efficient result
 * @param parentNode          {Node}    ADF Node to attach the suite of Text node to
 * @param textToEmphasis       {String}   text to parse for emphasis parsing
 */
function attachTextToNodeSliceEmphasis(parentNode, textToEmphasis) {
	const lineUnderscored = textToEmphasis/*.replace(/\*!/g, '_')*/;
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
		if (lineUnderscored[currentCharacterIndex] !== '*') {
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
		
		if (lineUnderscored[currentCharacterIndex] === '*') {
			if (expressionBuffer !== '') {
				const textNode = convertDecorationLevelToMark(expressionBuffer, currentDecorationLevel, strikedThrough);
				parentNode.content.push(textNode);
				// textWithInline( parentNode, expressionBuffer, decorationToUse )
			} else if (potentialUnderscorePair) {
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
function convertDecorationLevelToMark(result, decorationLevelToConvert, addStrikethrough) {
	if (decorationLevelToConvert === 0 && !addStrikethrough) {
		return text(result);
	}
	
	if (addStrikethrough) {
		result = strike(result);
	}
	
	if (decorationLevelToConvert === 2 || decorationLevelToConvert === 3) {
		result = strong(result);
	}
	
	if (decorationLevelToConvert === 1 || decorationLevelToConvert === 3) {
		result = em(result);
	}
	
	return result;
}

module.exports = attachTextToNodeSliceEmphasis;


/***/ }),

/***/ 806:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emoji = void 0;
var emoji = exports.emoji = function emoji(attrs, options) {
  if (options !== null && options !== void 0 && options.marks) {
    return {
      type: 'emoji',
      attrs: attrs,
      marks: options === null || options === void 0 ? void 0 : options.marks
    };
  }
  return {
    type: 'emoji',
    attrs: attrs
  };
};

/***/ }),

/***/ 814:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underline = void 0;
var _applyMark = __webpack_require__(867);
var underline = exports.underline = function underline(maybeNode) {
  return (0, _applyMark.applyMark)({
    type: 'underline'
  }, maybeNode);
};

/***/ }),

/***/ 817:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(764);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mention = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(655));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var mention = exports.mention = function mention(attrs) {
  return {
    type: 'mention',
    attrs: _objectSpread({
      accessLevel: ''
    }, attrs)
  };
};

/***/ }),

/***/ 849:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItem = void 0;
var listItem = exports.listItem = function listItem(content) {
  return {
    type: 'listItem',
    content: content
  };
};

/***/ }),

/***/ 851:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskItem = void 0;
var taskItem = exports.taskItem = function taskItem(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'taskItem',
      attrs: attrs,
      content: content
    };
  };
};

/***/ }),

/***/ 853:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataConsumer = void 0;
var _applyMark = __webpack_require__(867);
var dataConsumer = exports.dataConsumer = function dataConsumer(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'dataConsumer',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 867:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMark = applyMark;
var _isDuplicateMark = __webpack_require__(492);
var _text = __webpack_require__(264);
function applyMark(mark, maybeNode) {
  var node = typeof maybeNode === 'string' ? (0, _text.text)(maybeNode) : maybeNode;
  if ((0, _isDuplicateMark.isDuplicateMark)(node, mark.type)) {
    // eslint-disable-next-line no-console
    console.error((0, _isDuplicateMark.duplicateMarkError)(node, mark.type));
    return node;
  }
  node.marks = node.marks || [];
  node.marks.push(mark);
  return node;
}

/***/ }),

/***/ 873:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extension = void 0;
var extension = exports.extension = function extension(attrs) {
  return {
    type: 'extension',
    attrs: attrs
  };
};

/***/ }),

/***/ 891:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = void 0;
var placeholder = exports.placeholder = function placeholder(attrs) {
  return {
    type: 'placeholder',
    attrs: attrs
  };
};

/***/ }),

/***/ 911:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indentation = void 0;
var _applyMark = __webpack_require__(867);
var indentation = exports.indentation = function indentation(attrs) {
  return function (maybeNode) {
    return (0, _applyMark.applyMark)({
      type: 'indentation',
      attrs: attrs
    }, maybeNode);
  };
};

/***/ }),

/***/ 936:
/***/ (function(module, __unusedexports, __webpack_require__) {

var _typeof = __webpack_require__(431)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 983:
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = void 0;
var expand = exports.expand = function expand(attrs) {
  return function () {
    for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
      content[_key] = arguments[_key];
    }
    return {
      type: 'expand',
      attrs: attrs,
      content: content
    };
  };
};

/***/ })

/******/ });