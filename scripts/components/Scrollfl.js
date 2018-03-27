/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ScrollflDesign = require('library/Scrollfl');

const Scrollfl = extend(ScrollflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = Scrollfl);