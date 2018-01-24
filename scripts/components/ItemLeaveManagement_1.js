/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemLeaveManagement_1Design = require('library/ItemLeaveManagement_1');

const ItemLeaveManagement_1 = extend(ItemLeaveManagement_1Design)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = ItemLeaveManagement_1);