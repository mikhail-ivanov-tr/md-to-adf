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
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Strike extends mark_1.Mark {
    constructor() {
        super('strike');
    }
}
exports.Strike = Strike;
//# sourceMappingURL=strike.js.map

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

/***/ 135:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const emoji_1 = __webpack_require__(526);
const hard_break_1 = __webpack_require__(570);
const index_1 = __webpack_require__(492);
const mention_1 = __webpack_require__(962);
const text_1 = __webpack_require__(171);
class Decision {
    constructor(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('decisionItem');
    }
    text(text, marks) {
        return this.add(new text_1.Text(text, marks));
    }
    code(text) {
        return this.add(text_1.code(text));
    }
    em(text) {
        return this.add(text_1.em(text));
    }
    link(text, href, title) {
        return this.add(text_1.link(text, href, title));
    }
    strike(text) {
        return this.add(text_1.strike(text));
    }
    strong(text) {
        return this.add(text_1.strong(text));
    }
    mention(id, text) {
        return this.add(new mention_1.Mention(id, text));
    }
    emoji(shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName, id, text }));
    }
    hardBreak() {
        return this.add(new hard_break_1.HardBreak());
    }
    add(node) {
        this.content.add(node);
        return this;
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    }
}
exports.Decision = Decision;
//# sourceMappingURL=decision.js.map

/***/ }),

/***/ 147:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const emoji_1 = __webpack_require__(526);
const hard_break_1 = __webpack_require__(570);
const index_1 = __webpack_require__(492);
const mention_1 = __webpack_require__(962);
const text_1 = __webpack_require__(171);
class Paragraph extends index_1.TopLevelNode {
    constructor() {
        super(...arguments);
        this.content = new index_1.ContentNode('paragraph');
    }
    text(text, marks) {
        return this.add(new text_1.Text(text, marks));
    }
    code(text) {
        return this.add(text_1.code(text));
    }
    em(text) {
        return this.add(text_1.em(text));
    }
    link(text, href, title) {
        return this.add(text_1.link(text, href, title));
    }
    strong(text) {
        return this.add(text_1.strong(text));
    }
    mention(id, text) {
        return this.add(new mention_1.Mention(id, text));
    }
    emoji(shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName, id, text }));
    }
    hardBreak() {
        return this.add(new hard_break_1.HardBreak());
    }
    add(node) {
        this.content.add(node);
        return this;
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.Paragraph = Paragraph;
//# sourceMappingURL=paragraph.js.map

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

/***/ 151:
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

/***/ 171:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(812);
const index_2 = __webpack_require__(492);
function plain(text) {
    return new Text(text);
}
exports.plain = plain;
function strike(text) {
    return new Text(text, index_1.marks().strike());
}
exports.strike = strike;
function strong(text) {
    return new Text(text, index_1.marks().strong());
}
exports.strong = strong;
function em(text) {
    return new Text(text, index_1.marks().em());
}
exports.em = em;
function link(text, href, title) {
    return new Text(text, index_1.marks().link(href, title));
}
exports.link = link;
function code(text) {
    return new Text(text, index_1.marks().code());
}
exports.code = code;
class Text extends index_2.InlineNode {
    constructor(text, marks) {
        super();
        this.text = text;
        this.marks = marks;
        if (!text || text.length === 0) {
            throw new Error('Text must be at least one character long');
        }
    }
    toJSON() {
        const textNode = {
            type: 'text',
            text: this.text,
        };
        if (this.marks) {
            textNode.marks = this.marks.toJSON();
        }
        return textNode;
    }
}
exports.Text = Text;
//# sourceMappingURL=text.js.map

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
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Strong extends mark_1.Mark {
    constructor() {
        super('strong');
    }
}
exports.Strong = Strong;
//# sourceMappingURL=strong.js.map

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

/***/ 198:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decision_1 = __webpack_require__(135);
const index_1 = __webpack_require__(492);
class DecisionList extends index_1.TopLevelNode {
    constructor(localId) {
        super();
        this.localId = localId;
        this.content = new index_1.ContentNode('decisionList');
    }
    decision(localId, state) {
        return this.content.add(new decision_1.Decision(localId, state));
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId
            } });
    }
}
exports.DecisionList = DecisionList;
//# sourceMappingURL=decision-list.js.map

/***/ }),

/***/ 206:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Link extends mark_1.Mark {
    constructor(href, title) {
        super('link');
        this.href = href;
        this.title = title;
    }
    toJSON() {
        const linkMark = {
            type: this.type,
            attrs: {
                href: this.href
            }
        };
        if (this.title) {
            linkMark.attrs.title = this.title;
        }
        return linkMark;
    }
}
exports.Link = Link;
//# sourceMappingURL=link.js.map

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
var toPrimitive = __webpack_require__(832);
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

/***/ 223:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
class Rule extends index_1.TopLevelNode {
    toJSON() {
        return {
            type: 'rule'
        };
    }
}
exports.Rule = Rule;
//# sourceMappingURL=rule.js.map

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

/***/ 270:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bullet_list_1 = __webpack_require__(849);
const heading_1 = __webpack_require__(366);
const index_1 = __webpack_require__(492);
const ordered_list_1 = __webpack_require__(982);
const paragraph_1 = __webpack_require__(147);
class Panel extends index_1.TopLevelNode {
    constructor(panelType) {
        super();
        this.panelType = panelType;
        this.content = new index_1.ContentNode('panel');
    }
    heading(level) {
        return this.content.add(new heading_1.Heading(level));
    }
    paragraph() {
        return this.content.add(new paragraph_1.Paragraph());
    }
    orderedList() {
        return this.content.add(new ordered_list_1.OrderedList());
    }
    bulletList() {
        return this.content.add(new bullet_list_1.BulletList());
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                panelType: this.panelType
            } });
    }
}
exports.Panel = Panel;
//# sourceMappingURL=panel.js.map

/***/ }),

/***/ 284:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const emoji_1 = __webpack_require__(526);
const hard_break_1 = __webpack_require__(570);
const index_1 = __webpack_require__(492);
const mention_1 = __webpack_require__(962);
const text_1 = __webpack_require__(171);
class Task {
    constructor(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('taskItem');
    }
    text(text, marks) {
        return this.add(new text_1.Text(text, marks));
    }
    code(text) {
        return this.add(text_1.code(text));
    }
    em(text) {
        return this.add(text_1.em(text));
    }
    link(text, href, title) {
        return this.add(text_1.link(text, href, title));
    }
    strike(text) {
        return this.add(text_1.strike(text));
    }
    strong(text) {
        return this.add(text_1.strong(text));
    }
    mention(id, text) {
        return this.add(new mention_1.Mention(id, text));
    }
    emoji(shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName, id, text }));
    }
    hardBreak() {
        return this.add(new hard_break_1.HardBreak());
    }
    add(node) {
        this.content.add(node);
        return this;
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    }
}
exports.Task = Task;
var TaskState;
(function (TaskState) {
    TaskState["TODO"] = "TODO";
    TaskState["DONE"] = "DONE";
})(TaskState = exports.TaskState || (exports.TaskState = {}));
//# sourceMappingURL=task.js.map

/***/ }),

/***/ 286:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = __webpack_require__(802);
exports.Document = document_1.Document;
var tag_1 = __webpack_require__(322);
exports.document = tag_1.document;
__export(__webpack_require__(451));
__export(__webpack_require__(893));
__export(__webpack_require__(849));
__export(__webpack_require__(561));
__export(__webpack_require__(198));
__export(__webpack_require__(135));
__export(__webpack_require__(526));
__export(__webpack_require__(570));
__export(__webpack_require__(366));
__export(__webpack_require__(566));
__export(__webpack_require__(823));
__export(__webpack_require__(371));
__export(__webpack_require__(962));
__export(__webpack_require__(982));
__export(__webpack_require__(270));
__export(__webpack_require__(147));
__export(__webpack_require__(223));
__export(__webpack_require__(976));
__export(__webpack_require__(284));
__export(__webpack_require__(171));
__export(__webpack_require__(812));
//# sourceMappingURL=index.js.map

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
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Underline extends mark_1.Mark {
    constructor() {
        super('underline');
    }
}
exports.Underline = Underline;
//# sourceMappingURL=underline.js.map

/***/ }),

/***/ 322:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = __webpack_require__(802);
const index_1 = __webpack_require__(492);
function document(strings, ...args) {
    const doc = new document_1.Document();
    const paragraph = doc.paragraph();
    for (let i = 0; i < args.length; i++) {
        if (strings[i].length) {
            paragraph.text(strings[i]);
        }
        if (args[i] instanceof index_1.TopLevelNode) {
            throw new Error('Top level nodes cannot be used in tagged templates');
        }
        if (args[i] instanceof index_1.InlineNode) {
            paragraph.add(args[i]);
        }
        else {
            const stringified = String(args[i]);
            if (stringified.length > 0) {
                paragraph.text(stringified);
            }
        }
    }
    if (strings[args.length].length > 0) {
        paragraph.text(strings[args.length]);
    }
    return doc;
}
exports.document = document;
//# sourceMappingURL=tag.js.map

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
const { doc, p, emoji } = __webpack_require__(448);

const adfDoc = doc(
	p('My favourite emoji is ', emoji({ text: '🤦‍♂️', shortName: ':man_facepalming:' }), '. What is yours?'),
);

console.log(adfDoc);

const attachTextToNodeSliceEmphasis = __webpack_require__( 804 )

// /**
//  * @typedef { import("./markdownParsing").IRElement } IRElement
//  * @typedef { import("./markdownHandling").IRTreeNode } IRTreeNode
//  */

/**
 * Browse the tree recursively to add each node to the ADF Document
 * 	It also treat special cases between top-level node and generic ones
 *
 * @param currentParentNode					{Document}		ADF document to add to
 * @param currentArrayOfNodesOfSameIndent	{IRTreeNode}
 */
function fillADFNodesWithMarkdown( currentParentNode, currentArrayOfNodesOfSameIndent ){
	currentArrayOfNodesOfSameIndent.reduce( ( lastListNode, currentNode ) => {
		
		if (currentNode.node.adfType === "table") {
			const tableNode = addTypeToNode(currentParentNode, "table");
			fillADFNodesWithMarkdown(tableNode, currentNode.children); // Process table rows
			return tableNode;
		}
		
		if (currentNode.node.adfType === "tableRow") {
			const tableRowNode = new TableRow();
			currentParentNode.content.add(tableRowNode);
			
			// Always treat the first row as header in standard Markdown.
			const isHeader = currentParentNode.content.length === 1;
			
			
			for (const cellContent of currentNode.node.cells) {
				//Use TableHeader if first row, TableCell otherwise
				const cellNode = isHeader ? new TableHeader() : new TableCell();
				tableRowNode.content.add(cellNode);
				const paragraph = new Paragraph()
				cellNode.content.add(paragraph)
				attachItemNode(paragraph, cellContent); // Fill cell with a paragraph (simplified)
			}
			return tableRowNode;
		}
		
		const nodeOrListNode = lastListNode !== null
		&& ( currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' )
		&& lastListNode.content.type === currentNode.node.adfType
			? lastListNode
			: addTypeToNode( currentParentNode, currentNode.node.adfType, currentNode.node.typeParam )
		
		const nodeOrListItem = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList'
			? nodeOrListNode.content.add( new ListItem() )
			: nodeOrListNode
		const nodeToAttachTextTo = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' || currentNode.node.adfType === 'blockQuote'
			? typeof currentNode.node.textToEmphasis !== 'undefined' || currentNode.children.length === 0
				? nodeOrListItem.content.add( new Paragraph() )
				: nodeOrListItem
			: nodeOrListItem
		
		if( currentNode.node.adfType === 'divider' )
			return lastListNode
		
		else if( currentNode.node.adfType !== 'codeBlock'
			&& currentNode.node.textToEmphasis )
			attachItemNode( nodeToAttachTextTo, currentNode.node.textToEmphasis )
		
		else if( currentNode.node.adfType !== 'codeBlock'
			&& currentNode.node.textToEmphasis === '' )
			attachItemNode( nodeToAttachTextTo, ' ' )
		
		else if( currentNode.node.adfType === 'codeBlock' )
			attachTextToNodeRaw( nodeToAttachTextTo, currentNode.node.textToEmphasis )
		
		if( currentNode.children )
			fillADFNodesWithMarkdown( nodeOrListItem, currentNode.children )
		
		return ( currentNode.node.adfType !== 'orderedList' && currentNode.node.adfType !== 'bulletList' )
		|| ( !lastListNode || currentNode.node.adfType === lastListNode.content.type )
			? nodeOrListNode
			: lastListNode
	}, null )
}

/**
 *  Adding a Top-Level ADF element
 *
 * @param adfNodeToAttachTo	{Node}		ADF node to attach this element to
 * @param adfType			{String}	ADF Type of the element we want to attach
 * @param typeParams		{String}	extra params for special top-level nodes
 *
 * @returns 				{Node}		the node added
 */
function addTypeToNode(adfNodeToAttachTo, adfType, typeParams) {
	switch (adfType) {
		case "heading":
			return adfNodeToAttachTo.content.add( new Heading( typeParams ) )
		
		case "divider":
			return adfNodeToAttachTo.content.add( new Rule() )
		
		case "bulletList":
			return adfNodeToAttachTo.content.add( new BulletList() )
		
		case "orderedList": {
			const orderedListNode = new OrderedList( )
			if( typeParams ) orderedListNode.attrs = { order: typeParams }
			return adfNodeToAttachTo.content.add( orderedListNode )
		}
		case "codeBlock":
			return adfNodeToAttachTo.content.add( new CodeBlock( typeParams ) )
		
		case "blockQuote":
			return adfNodeToAttachTo.content.add( new BlockQuote() )
		
		case "paragraph":
			return adfNodeToAttachTo.content.add(new Paragraph())
		case "table":
			return adfNodeToAttachTo.content.add(new Table()); // Add table support
		default:
			throw 'incompatible type'
	}
}

/**
 * Adding a non-top-level ADF node
 *
 * @param nodeToAttachTo		{Node}		ADF Node to attach to
 * @param rawText				{String}	text content of the node to add
 */
function attachItemNode( nodeToAttachTo, rawText ) {
	const slicedInline = sliceInLineCode( rawText )
	
	const { slicedInlineAndEmoji } = slicedInline.reduce( ( { slicedInlineAndEmoji }, currentSlice ) => {
		if( !currentSlice.isMatching ){
			const slicedEmoji = sliceEmoji( currentSlice.text )
			
			return { slicedInlineAndEmoji: slicedInlineAndEmoji.concat( slicedEmoji ) }
		}
		
		slicedInlineAndEmoji.push( currentSlice )
		return { slicedInlineAndEmoji }
	}, { slicedInlineAndEmoji: [] } )
	
	const { slicedInlineAndEmojiAndLink } = slicedInlineAndEmoji.reduce( ( { slicedInlineAndEmojiAndLink }, currentSlice ) => {
		if( !currentSlice.isMatching ){
			const slicedLink = sliceLink( currentSlice.text )
			
			return { slicedInlineAndEmojiAndLink: slicedInlineAndEmojiAndLink.concat( slicedLink ) }
		}
		
		slicedInlineAndEmojiAndLink.push( currentSlice )
		return { slicedInlineAndEmojiAndLink }
	}, { slicedInlineAndEmojiAndLink: [] } )
	
	for( const currentSlice of slicedInlineAndEmojiAndLink ) {
		switch( currentSlice.type ){
			case 'inline':
				const inlineCodeNode = new Text( currentSlice.text, marks().code() )
				nodeToAttachTo.content.add( inlineCodeNode )
				break
			
			case 'emoji':
				const emojiNode = new Emoji( {shortName: currentSlice.text } )
				nodeToAttachTo.content.add( emojiNode )
				break
			
			case 'link':
				const linkNode = new Text( currentSlice.text,
										   marks().link( currentSlice.optionalText1,
														 currentSlice.optionalText2 ) )
				nodeToAttachTo.content.add( linkNode )
				break
			
			case 'image':
				const imageNode = new Text( currentSlice.text,
											marks().link( currentSlice.optionalText1,
														  currentSlice.optionalText2 ) )
				nodeToAttachTo.content.add( imageNode )
				break
			
			default:
				attachTextToNodeSliceEmphasis( nodeToAttachTo, currentSlice.text )
			// const textNode = new Text( currentSlice.text, marksToUse )
			// nodeToAttachTo.content.add( textNode )
		}
	}
}

/**
 * Match text content with and ADF inline type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching an inline style
 */
function sliceInLineCode( rawText ){
	return sliceOneMatchFromRegexp( rawText, 'inline', /(?<nonMatchBefore>[^`]*)(?:`(?<match>[^`]+)`)(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and ADF emoji type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching an emoji style
 */
function sliceEmoji( rawText ){
	return sliceOneMatchFromRegexp( rawText, 'emoji',/(?<nonMatchBefore>[^`]*)(?::(?<match>[^`\s]+):)(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and ADF link type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching a link style
 */
function sliceLink( rawText ){
	return sliceOneMatchFromRegexp( rawText, 'link',/(?<nonMatchBefore>[^`]*)(?:\[(?<match>[^\[\]]+)\]\((?<matchOptional>[^\(\)"]+)(?: "(?<matchOptional2>[^"]*)")?\))(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and regular expression with one match
 *
 * @param rawText				{String}	the text content to try to match
 * @param typeTag				{String}	the ADF Type to return if it matches
 * @param regexpToSliceWith		{RegExp}	the regexp with a match group and a non-match group to use
 *
 * @returns 					{String[]}	the different slice matching the specified regexp
 */
function sliceOneMatchFromRegexp( rawText, typeTag, regexpToSliceWith ){
	let slicesResult = [ ]
	let snippet = null
	let hasAtLeastOneExpression = false
	
	while( ( snippet = regexpToSliceWith.exec( rawText ) ) ) {
		hasAtLeastOneExpression = true
		if( snippet.groups.nonMatchBefore ){
			slicesResult.push( { isMatching: false, text: snippet.groups.nonMatchBefore } )
		}
		
		if( snippet.groups.match ){
			slicesResult.push( {
								   isMatching: 		true,
								   type: 			typeTag,
								   text: 			snippet.groups.match,
								   optionalText1: 	snippet.groups.matchOptional,
								   optionalText2: 	snippet.groups.matchOptional2
							   } )
		}
		
		if( snippet.groups.nonMatchAfter ){
			slicesResult.push( { isMatching: false, text: snippet.groups.nonMatchAfter } )
		}
	}
	
	if( !hasAtLeastOneExpression )
		slicesResult.push( { isMatching: false, text: rawText } )
	
	return slicesResult
}

/**
 * Attach a raw simple text node to the parent
 *
 * @param nodeToAttachTo	{Node}		ADF node to attach to
 * @param textToAttach		{String}	text to use for the Text node
 */
function attachTextToNodeRaw( nodeToAttachTo, textToAttach ){
	const textNode = new Text( textToAttach )
	nodeToAttachTo.content.add( textNode )
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

/***/ 366:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const text_1 = __webpack_require__(171);
class Heading extends index_1.TopLevelNode {
    constructor(level) {
        super();
        this.level = level;
        this.content = new index_1.ContentNode('heading');
        if (level < 1 || level > 6) {
            throw new Error('Level must be in the range of 1-6');
        }
    }
    link(text, href, title) {
        this.content.add(text_1.link(text, href, title));
        return this;
    }
    text(text) {
        this.content.add(text_1.plain(text));
        return this;
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                level: this.level
            } });
    }
}
exports.Heading = Heading;
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ 371:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Media {
    constructor(attrs) {
        this.attrs = attrs;
    }
    toJSON() {
        const media = {
            type: 'media',
            attrs: {
                id: this.attrs.id,
                type: this.attrs.type,
                collection: this.attrs.collection
            }
        };
        if (this.attrs.occurrenceKey) {
            media.attrs.occurrenceKey = this.attrs.occurrenceKey;
        }
        return media;
    }
}
exports.Media = Media;
//# sourceMappingURL=media.js.map

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

/***/ 381:
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

/***/ 387:
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

/***/ 396:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class SubSup extends mark_1.Mark {
    constructor(variant) {
        super('subsup');
        this.variant = variant;
    }
    toJSON() {
        return {
            type: this.type,
            attrs: {
                type: this.variant
            }
        };
    }
}
exports.SubSup = SubSup;
//# sourceMappingURL=subsup.js.map

/***/ }),

/***/ 400:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Em extends mark_1.Mark {
    constructor() {
        super('em');
    }
}
exports.Em = Em;
//# sourceMappingURL=em.js.map

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

/***/ 402:
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
var _alignment = __webpack_require__(387);
var _indentation = __webpack_require__(911);
var _dataConsumer = __webpack_require__(853);
var _fragment = __webpack_require__(148);
var _border = __webpack_require__(118);
var _backgroundColor = __webpack_require__(686);
var _blockquote = __webpack_require__(374);
var _bodiedExtension = __webpack_require__(780);
var _blockCard = __webpack_require__(785);
var _bulletList = __webpack_require__(471);
var _codeBlock = __webpack_require__(381);
var _date = __webpack_require__(72);
var _decisionItem = __webpack_require__(8);
var _decisionList = __webpack_require__(328);
var _doc = __webpack_require__(156);
var _emoji = __webpack_require__(806);
var _extension = __webpack_require__(873);
var _expand = __webpack_require__(983);
var _nestedExpand = __webpack_require__(207);
var _hardBreak = __webpack_require__(158);
var _heading = __webpack_require__(604);
var _inlineExtension = __webpack_require__(409);
var _inlineCard = __webpack_require__(735);
var _layoutColumn = __webpack_require__(234);
var _layoutSection = __webpack_require__(291);
var _listItem = __webpack_require__(151);
var _mediaGroup = __webpack_require__(402);
var _mediaSingle = __webpack_require__(401);
var _media = __webpack_require__(792);
var _mention = __webpack_require__(817);
var _orderedList = __webpack_require__(122);
var _panel = __webpack_require__(565);
var _paragraph = __webpack_require__(355);
var _placeholder = __webpack_require__(891);
var _rule = __webpack_require__(134);
var _status = __webpack_require__(662);
var _tableCell = __webpack_require__(615);
var _tableHeader = __webpack_require__(48);
var _tableRow = __webpack_require__(40);
var _table = __webpack_require__(5);
var _taskItem = __webpack_require__(851);
var _taskList = __webpack_require__(528);
var _text = __webpack_require__(264);
var _embedCard = __webpack_require__(541);

/***/ }),

/***/ 451:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
class Action {
    title(title) {
        this.actionTitle = title;
        return this;
    }
    target(target) {
        if (!target.key) {
            throw new Error('Action target key is required');
        }
        this.actionTarget = target;
        return this;
    }
    parameters(parameters) {
        this.actionParameters = parameters;
        return this;
    }
    toJSON() {
        const action = {};
        if (this.actionTitle) {
            action.title = this.actionTitle;
        }
        if (this.actionTarget) {
            action.target = this.actionTarget;
        }
        if (this.actionParameters) {
            action.parameters = this.actionParameters;
        }
        if (Object.keys(action).length < 2) {
            throw new Error('Must set title and target attributes for action');
        }
        return action;
    }
}
exports.Action = Action;
class Detail {
    constructor() {
        this.detailUsers = [];
    }
    title(text) {
        this.detailTitle = text;
        return this;
    }
    text(text) {
        this.detailText = text;
        return this;
    }
    lozenge(lozenge) {
        this.detailLozenge = lozenge;
        return this;
    }
    icon(icon) {
        this.detailIcon = icon;
        return this;
    }
    badge(badge) {
        this.detailBadge = badge;
        return this;
    }
    user(user) {
        this.detailUsers.push(user);
        return this;
    }
    toJSON() {
        const detail = {};
        if (this.detailTitle) {
            detail.title = this.detailTitle;
        }
        if (this.detailText) {
            detail.text = this.detailText;
        }
        if (this.detailIcon) {
            detail.icon = this.detailIcon;
        }
        if (this.detailBadge) {
            detail.badge = this.detailBadge;
        }
        if (this.detailLozenge) {
            detail.lozenge = this.detailLozenge;
        }
        if (this.detailUsers.length > 0) {
            detail.users = this.detailUsers;
        }
        if (Object.keys(detail).length === 0) {
            throw new Error('Must at least set one attribute');
        }
        return detail;
    }
}
exports.Detail = Detail;
class Context {
    constructor(text) {
        this.text = text;
    }
    icon(icon) {
        this.contextIcon = icon;
        return this;
    }
    toJSON() {
        const context = {
            text: this.text
        };
        if (this.contextIcon) {
            context.icon = this.contextIcon;
        }
        return context;
    }
}
exports.Context = Context;
class TitleUser {
    constructor(titleUserIcon) {
        this.titleUserIcon = titleUserIcon;
    }
    id(id) {
        this.titleUserId = id;
        return this;
    }
    toJSON() {
        const titleUser = {
            icon: this.titleUserIcon
        };
        if (this.titleUserId) {
            titleUser.id = this.titleUserId;
        }
        return titleUser;
    }
}
exports.TitleUser = TitleUser;
class ApplicationCard extends index_1.TopLevelNode {
    constructor(title, text) {
        super();
        this.title = title;
        this.text = text;
        this.isCollapsible = false;
        this.details = [];
        this.actions = [];
    }
    link(url) {
        this.linkUrl = url;
        return this;
    }
    background(url) {
        this.backgroundUrl = url;
        return this;
    }
    preview(url) {
        this.previewUrl = url;
        return this;
    }
    collapsible(collapsible) {
        this.isCollapsible = collapsible;
        return this;
    }
    description(text) {
        this.descriptionText = text;
        return this;
    }
    titleUser(icon) {
        const titleUser = new TitleUser(icon);
        this.userInTitle = titleUser;
        return titleUser;
    }
    detail() {
        const detail = new Detail();
        this.details.push(detail);
        return detail;
    }
    action() {
        const action = new Action();
        this.actions.push(action);
        return action;
    }
    context(text) {
        this.cardContext = new Context(text);
        return this.cardContext;
    }
    toJSON() {
        const card = {
            type: 'applicationCard',
            attrs: {
                text: this.text || this.title,
                title: {
                    text: this.title
                },
                collapsible: this.isCollapsible
            }
        };
        if (this.linkUrl) {
            card.attrs.textUrl = this.linkUrl;
            card.attrs.link = {
                url: this.linkUrl
            };
        }
        if (this.backgroundUrl) {
            card.attrs.background = {
                url: this.backgroundUrl
            };
        }
        if (this.previewUrl) {
            card.attrs.preview = {
                url: this.previewUrl
            };
        }
        if (this.descriptionText) {
            card.attrs.description = {
                text: this.descriptionText
            };
        }
        if (this.userInTitle) {
            card.attrs.title.user = this.userInTitle.toJSON();
        }
        if (this.details.length > 0) {
            card.attrs.details = this.details.map(detail => detail.toJSON());
        }
        if (this.actions.length > 0) {
            card.attrs.actions = this.actions.map(action => action.toJSON());
        }
        if (this.cardContext) {
            card.attrs.context = this.cardContext.toJSON();
        }
        return card;
    }
}
exports.ApplicationCard = ApplicationCard;
//# sourceMappingURL=application-card.js.map

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

Object.defineProperty(exports, "__esModule", { value: true });
class ContentNode {
    constructor(type, minLength = 1) {
        this.type = type;
        this.minLength = minLength;
        this.content = [];
    }
    toJSON() {
        if (this.content.length < this.minLength) {
            throw new Error(`There must be at least ${this.minLength} content elements`);
        }
        return {
            type: this.type,
            content: this.content.map(node => node.toJSON())
        };
    }
    add(node) {
        if (!node) {
            throw new Error('Illegal value');
        }
        this.content.push(node);
        return node;
    }
}
exports.ContentNode = ContentNode;
class TopLevelNode {
}
exports.TopLevelNode = TopLevelNode;
class InlineNode {
}
exports.InlineNode = InlineNode;
//# sourceMappingURL=index.js.map

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
const { Document }	= __webpack_require__( 286 )


const buildIRTreeFromMarkdown = __webpack_require__( 197 )
const fillADFNodesWithMarkdown = __webpack_require__( 326 )

function translateGITHUBMarkdownToADF( markdownText ){
	
	const textTree = buildIRTreeFromMarkdown( markdownText )
	
	const adfRoot = new Document()
	if( textTree.length > 0 )
		fillADFNodesWithMarkdown( adfRoot, textTree )
	
	return adfRoot
}

module.exports = translateGITHUBMarkdownToADF


/***/ }),

/***/ 526:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
function emoji(shortName, id, text) {
    return new Emoji({ shortName, id, text });
}
exports.emoji = emoji;
class Emoji extends index_1.InlineNode {
    constructor(attrs) {
        super();
        this.attrs = attrs;
    }
    toJSON() {
        const emojiNode = {
            type: 'emoji',
            attrs: {
                shortName: this.attrs.shortName
            }
        };
        if (this.attrs.id) {
            emojiNode.attrs.id = this.attrs.id;
        }
        if (this.attrs.text) {
            emojiNode.attrs.text = this.attrs.text;
        }
        return emojiNode;
    }
}
exports.Emoji = Emoji;
//# sourceMappingURL=emoji.js.map

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

/***/ 561:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const text_1 = __webpack_require__(171);
class CodeBlock extends index_1.TopLevelNode {
    constructor(language) {
        super();
        this.language = language;
        this.content = new index_1.ContentNode('codeBlock');
    }
    text(code) {
        this.content.add(text_1.plain(code));
        return this;
    }
    toJSON() {
        const codeBlock = this.content.toJSON();
        if (this.language) {
            codeBlock.attrs = {
                language: this.language
            };
        }
        return codeBlock;
    }
}
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=code-block.js.map

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

/***/ 566:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bullet_list_1 = __webpack_require__(849);
const index_1 = __webpack_require__(492);
const ordered_list_1 = __webpack_require__(982);
const paragraph_1 = __webpack_require__(147);
class ListItem {
    constructor() {
        this.content = new index_1.ContentNode('listItem');
    }
    paragraph() {
        return this.content.add(new paragraph_1.Paragraph());
    }
    bulletList() {
        return this.content.add(new bullet_list_1.BulletList());
    }
    orderedList() {
        return this.content.add(new ordered_list_1.OrderedList());
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.ListItem = ListItem;
//# sourceMappingURL=list-item.js.map

/***/ }),

/***/ 570:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
function hardBreak() {
    return new HardBreak();
}
exports.hardBreak = hardBreak;
class HardBreak extends index_1.InlineNode {
    toJSON() {
        return {
            type: 'hardBreak',
            attrs: {
                text: '\n'
            }
        };
    }
}
exports.HardBreak = HardBreak;
//# sourceMappingURL=hard-break.js.map

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
	
	if (lineToMatch.trim().match(/^[-:\|\s]+$/) && !lineToMatch.trim().match(/^[\s]*$/))
	{
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
		cells: cells, // Store the cell contents
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

/***/ 601:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Code extends mark_1.Mark {
    constructor() {
        super('code');
    }
}
exports.Code = Code;
//# sourceMappingURL=code.js.map

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

/***/ 620:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
class Action extends mark_1.Mark {
    constructor(title, target, actionParameters) {
        super('action');
        this.title = title;
        this.target = target;
        this.actionParameters = actionParameters;
    }
    toJSON() {
        const actionMark = {
            type: this.type,
            attrs: {
                title: this.title,
                target: this.target
            }
        };
        if (this.actionParameters) {
            actionMark.attrs.parameters = this.actionParameters;
        }
        return actionMark;
    }
}
exports.Action = Action;
//# sourceMappingURL=action.js.map

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

/***/ 662:
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

/***/ 669:
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

/***/ 686:
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

/***/ 711:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Mark {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        return {
            type: this.type
        };
    }
}
exports.Mark = Mark;
//# sourceMappingURL=mark.js.map

/***/ }),

/***/ 735:
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

/***/ 802:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = __webpack_require__(492);
const application_card_1 = __webpack_require__(451);
const block_quote_1 = __webpack_require__(893);
const bullet_list_1 = __webpack_require__(849);
const code_block_1 = __webpack_require__(561);
const decision_list_1 = __webpack_require__(198);
const heading_1 = __webpack_require__(366);
const media_group_1 = __webpack_require__(823);
const ordered_list_1 = __webpack_require__(982);
const panel_1 = __webpack_require__(270);
const paragraph_1 = __webpack_require__(147);
const rule_1 = __webpack_require__(223);
const task_list_1 = __webpack_require__(976);
class Document {
    constructor(attrs = { version: 1 }) {
        this.attrs = attrs;
        this.content = new nodes_1.ContentNode('doc');
    }
    applicationCard(title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    }
    blockQuote() {
        return this.content.add(new block_quote_1.BlockQuote());
    }
    bulletList() {
        return this.content.add(new bullet_list_1.BulletList());
    }
    codeBlock(language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    }
    decisionList(localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    }
    heading(level) {
        return this.content.add(new heading_1.Heading(level));
    }
    textHeading(level, text) {
        return this.content.add(new heading_1.Heading(level).text(text));
    }
    mediaGroup() {
        return this.content.add(new media_group_1.MediaGroup());
    }
    orderedList() {
        return this.content.add(new ordered_list_1.OrderedList());
    }
    panel(type) {
        return this.content.add(new panel_1.Panel(type));
    }
    paragraph() {
        return this.content.add(new paragraph_1.Paragraph());
    }
    rule() {
        this.content.add(new rule_1.Rule());
        return this;
    }
    taskList(localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { version: this.attrs.version });
    }
    toString() {
        return JSON.stringify(this);
    }
}
exports.Document = Document;
//# sourceMappingURL=document.js.map

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
const { marks, Text }	= __webpack_require__( 286 )


/**
 * Parse a string character per character to find emphasis patterns
 *  This is a very "manual" way to do it, but it provides the most efficient result
 * @param parentNode			{Node}		ADF Node to attach the suite of Text node to
 * @param textToEmphasis		{String}	text to parse for emphasis parsing
 */
function attachTextToNodeSliceEmphasis( parentNode, textToEmphasis ){
	const lineUnderscored = textToEmphasis.replace( /\*/g, '_' )
	let currentDecorationLevel = 0
	//see convertDecorationLevelToMark
	// 0 => no decoration
	// 1 => italic
	// 2 => bold
	// 3 => bold and italic
	
	let potentialUnderscorePair = false
	let strikedThrough			= false
	let expressionBuffer		= ''
	for( const currentCharacterIndex in lineUnderscored ){
		
		if( lineUnderscored[ currentCharacterIndex ] !== '_' ){
			expressionBuffer += lineUnderscored[ currentCharacterIndex ]
			
			if( potentialUnderscorePair ){
				currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 2
										 ? currentDecorationLevel + 1
										 : currentDecorationLevel - 1
				potentialUnderscorePair = false
			}
		}
		
		if( currentCharacterIndex > 0
			&& lineUnderscored[ currentCharacterIndex ] === '~'
			&& lineUnderscored[ currentCharacterIndex - 1 ] === '~' ){
			const textNode = new Text( expressionBuffer.slice( 0, expressionBuffer.length - 2 ),
									   convertDecorationLevelToMark( currentDecorationLevel, strikedThrough ) )
			parentNode.content.add( textNode )
			
			expressionBuffer = ''
			strikedThrough = !strikedThrough
		}
		
		
		if( lineUnderscored[ currentCharacterIndex ] === '_' ){
			let decorationToUse = convertDecorationLevelToMark( currentDecorationLevel, strikedThrough )
			
			if( expressionBuffer !== '' ){
				const textNode = new Text( expressionBuffer, decorationToUse )
				parentNode.content.add( textNode )
				// textWithInline( parentNode, expressionBuffer, decorationToUse )
			}
			else {
				if( potentialUnderscorePair )
					currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 1
											 ? currentDecorationLevel + 2
											 : currentDecorationLevel - 2
			}
			
			potentialUnderscorePair = !potentialUnderscorePair
			expressionBuffer = ''
		}
	}
	
	if( expressionBuffer !== '' ){
		const textNode = new Text( expressionBuffer, convertDecorationLevelToMark( currentDecorationLevel, strikedThrough ) )
		parentNode.content.add( textNode )
	}
}

/**
 * Convert a "decoration level" (bit swap) to an actual ADF Mark for the text
 *
 * @param decorationLevelToConvert	{Number}		decoration level follow the convention:
 * 														0 => no decoration
 * 														1 => italic
 * 														2 => bold
 * 														3 => bold and italic
 * @param addStrikethrough			{Boolean}		is strikethrough active?
 */
function convertDecorationLevelToMark( decorationLevelToConvert, addStrikethrough ){
	if( addStrikethrough )
		return decorationLevelToConvert === 1
			   ? marks().strike().em()
			   : decorationLevelToConvert === 2
				 ? marks().strike().strong()
				 : decorationLevelToConvert === 3
				   ? marks().strike().strong().em()
				   : marks().strike()
	
	return decorationLevelToConvert === 1
		   ? marks().em()
		   : decorationLevelToConvert === 2
			 ? marks().strong()
			 : decorationLevelToConvert === 3
			   ? marks().strong().em()
			   : null
}

module.exports = attachTextToNodeSliceEmphasis


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

/***/ 812:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = __webpack_require__(620);
const code_1 = __webpack_require__(601);
const em_1 = __webpack_require__(400);
const link_1 = __webpack_require__(206);
const strike_1 = __webpack_require__(103);
const strong_1 = __webpack_require__(192);
const subsup_1 = __webpack_require__(396);
const text_color_1 = __webpack_require__(936);
const underline_1 = __webpack_require__(294);
function marks() {
    return new Marks();
}
exports.marks = marks;
class Marks {
    constructor() {
        this.marks = [];
    }
    code() {
        return this.add(new code_1.Code());
    }
    em() {
        return this.add(new em_1.Em());
    }
    link(href, title) {
        return this.add(new link_1.Link(href, title));
    }
    strike() {
        return this.add(new strike_1.Strike());
    }
    strong() {
        return this.add(new strong_1.Strong());
    }
    sub() {
        return this.add(new subsup_1.SubSup('sub'));
    }
    sup() {
        return this.add(new subsup_1.SubSup('sup'));
    }
    color(color) {
        return this.add(new text_color_1.TextColor(color));
    }
    underline() {
        return this.add(new underline_1.Underline());
    }
    action(title, target, actionParameters) {
        return this.add(new action_1.Action(title, target, actionParameters));
    }
    toJSON() {
        if (this.marks.length === 0) {
            throw new Error('At least one mark is required');
        }
        return this.marks.map(mark => mark.toJSON());
    }
    add(mark) {
        const existing = this.marks.filter(m => m.type === mark.type);
        if (existing.length > 0) {
            throw new Error('A mark type can only be used once');
        }
        this.marks.push(mark);
        return this;
    }
}
exports.Marks = Marks;
//# sourceMappingURL=index.js.map

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

/***/ 823:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const media_1 = __webpack_require__(371);
class MediaGroup extends index_1.TopLevelNode {
    constructor() {
        super(...arguments);
        this.content = new index_1.ContentNode('mediaGroup');
    }
    media(attrs) {
        this.content.add(new media_1.Media(attrs));
        return this;
    }
    link(id, collection) {
        this.content.add(new media_1.Media({ id, collection, type: 'link' }));
        return this;
    }
    file(id, collection) {
        this.content.add(new media_1.Media({ id, collection, type: 'file' }));
        return this;
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.MediaGroup = MediaGroup;
//# sourceMappingURL=media-group.js.map

/***/ }),

/***/ 832:
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

/***/ 849:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const list_item_1 = __webpack_require__(566);
class BulletList extends index_1.TopLevelNode {
    constructor() {
        super(...arguments);
        this.content = new index_1.ContentNode('bulletList');
    }
    item() {
        return this.content.add(new list_item_1.ListItem());
    }
    textItem(text, marks) {
        this.item().paragraph().text(text, marks);
        return this;
    }
    linkItem(text, href, title) {
        this.item().paragraph().link(text, href, title);
        return this;
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.BulletList = BulletList;
//# sourceMappingURL=bullet-list.js.map

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
var _isDuplicateMark = __webpack_require__(669);
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

/***/ 893:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const paragraph_1 = __webpack_require__(147);
class BlockQuote extends index_1.TopLevelNode {
    constructor() {
        super(...arguments);
        this.content = new index_1.ContentNode('blockquote');
    }
    paragraph() {
        return this.content.add(new paragraph_1.Paragraph());
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.BlockQuote = BlockQuote;
//# sourceMappingURL=block-quote.js.map

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
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mark_1 = __webpack_require__(711);
const colorPattern = /^#[0-9a-f]{6}$/;
class TextColor extends mark_1.Mark {
    constructor(color) {
        super('textColor');
        this.color = color;
        if (!colorPattern.test(color)) {
            throw new Error(`Color ${color} does not match ^#[0-9a-f]{6}$`);
        }
    }
    toJSON() {
        return {
            type: this.type,
            attrs: {
                color: this.color
            }
        };
    }
}
exports.TextColor = TextColor;
//# sourceMappingURL=text-color.js.map

/***/ }),

/***/ 962:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
function mention(id, text) {
    return new Mention(id, text);
}
exports.mention = mention;
class Mention extends index_1.InlineNode {
    constructor(id, text) {
        super();
        this.id = id;
        this.text = text;
    }
    toJSON() {
        return {
            type: 'mention',
            attrs: {
                id: this.id,
                text: this.text
            }
        };
    }
}
exports.Mention = Mention;
//# sourceMappingURL=mention.js.map

/***/ }),

/***/ 976:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __webpack_require__(284);
const index_1 = __webpack_require__(492);
class TaskList extends index_1.TopLevelNode {
    constructor(localId) {
        super();
        this.localId = localId;
        this.content = new index_1.ContentNode('taskList');
    }
    task(localId, state) {
        return this.content.add(new task_1.Task(localId, state));
    }
    toJSON() {
        return Object.assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId
            } });
    }
}
exports.TaskList = TaskList;
//# sourceMappingURL=task-list.js.map

/***/ }),

/***/ 982:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(492);
const list_item_1 = __webpack_require__(566);
class OrderedList extends index_1.TopLevelNode {
    constructor() {
        super(...arguments);
        this.content = new index_1.ContentNode('orderedList');
    }
    item() {
        return this.content.add(new list_item_1.ListItem());
    }
    textItem(text, marks) {
        this.item().paragraph().text(text, marks);
        return this;
    }
    linkItem(text, href, title) {
        this.item().paragraph().link(text, href, title);
        return this;
    }
    toJSON() {
        return this.content.toJSON();
    }
}
exports.OrderedList = OrderedList;
//# sourceMappingURL=ordered-list.js.map

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