/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CurrentProcedureRowflDesign = require('library/CurrentProcedureRowfl');

const CurrentProcedureRowfl = extend(CurrentProcedureRowflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || CurrentProcedureRowflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = CurrentProcedureRowfl);