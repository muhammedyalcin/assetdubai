/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const UploadflDesign = require('library/Uploadfl');

const Uploadfl = extend(UploadflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || UploadflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Uploadfl);