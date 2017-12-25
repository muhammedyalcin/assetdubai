/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const UploadDrawflDesign = require('library/UploadDrawfl');

const UploadDrawfl = extend(UploadDrawflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || UploadDrawflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = UploadDrawfl);