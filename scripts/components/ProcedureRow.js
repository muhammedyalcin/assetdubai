/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ProcedureRowDesign = require('library/ProcedureRow');

const ProcedureRow = extend(ProcedureRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ProcedureRowDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = ProcedureRow);