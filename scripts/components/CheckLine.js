/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CheckLineDesign = require('library/CheckLine');

const CheckLine = extend(CheckLineDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || CheckLineDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = CheckLine);