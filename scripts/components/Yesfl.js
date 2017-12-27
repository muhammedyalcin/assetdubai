/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');

const YesflDesign = require('library/Yesfl');

const Yesfl = extend(YesflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || YesflDesign.defaults);
    this.pageName = pageName;
    this.yesLabel = lang["confirmPg.yesButton"];
  }

);

module && (module.exports = Yesfl);