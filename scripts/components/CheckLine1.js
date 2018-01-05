/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CheckLine1Design = require('library/CheckLine1');

const CheckLine1 = extend(CheckLine1Design)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || CheckLine1Design.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = CheckLine1);