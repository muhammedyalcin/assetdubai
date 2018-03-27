/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const SliderScrollflDesign = require('library/SliderScrollfl');

const SliderScrollfl = extend(SliderScrollflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = SliderScrollfl);