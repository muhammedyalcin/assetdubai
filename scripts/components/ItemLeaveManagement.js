/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemLeaveManagementDesign = require('library/ItemLeaveManagement');

const ItemLeaveManagement = extend(ItemLeaveManagementDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = ItemLeaveManagement);