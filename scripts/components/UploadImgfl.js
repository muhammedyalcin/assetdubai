/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const UploadImgflDesign = require('library/UploadImgfl');

const UploadImgfl = extend(UploadImgflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || UploadImgflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = UploadImgfl);