/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WorkOrdersSumflDesign = require('library/WorkOrdersSumfl');

const WorkOrdersSumfl = extend(WorkOrdersSumflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WorkOrdersSumflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = WorkOrdersSumfl);