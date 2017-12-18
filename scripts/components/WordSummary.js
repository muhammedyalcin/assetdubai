/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WordSummaryDesign = require('library/WordSummary');

const WordSummary = extend(WordSummaryDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WordSummaryDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = WordSummary);