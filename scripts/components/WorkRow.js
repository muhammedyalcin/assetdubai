/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WorkRowDesign = require('library/WorkRow');

const WorkRow = extend(WorkRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WorkRowDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = WorkRow);