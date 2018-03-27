/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ClosureTimeflDesign = require('library/ClosureTimefl');

const ClosureTimefl = extend(ClosureTimeflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ClosureTimeflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = ClosureTimefl);