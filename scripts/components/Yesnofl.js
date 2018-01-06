/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const YesnoflDesign = require('library/Yesnofl');

const Yesnofl = extend(YesnoflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || YesnoflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Yesnofl);