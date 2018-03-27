/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const UploadedImageflDesign = require('library/UploadedImagefl');

const UploadedImagefl = extend(UploadedImageflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = UploadedImagefl);