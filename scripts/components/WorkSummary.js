/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WorkSummaryDesign = require('library/WorkSummary');

const WorkSummary = extend(WorkSummaryDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WorkSummaryDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = WorkSummary);