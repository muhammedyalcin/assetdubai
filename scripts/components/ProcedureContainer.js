/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ProcedureContainerDesign = require('library/ProcedureContainer');

const ProcedureContainer = extend(ProcedureContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ProcedureContainerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = ProcedureContainer);