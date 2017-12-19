/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const AssetContainerDesign = require('library/AssetContainer');

const AssetContainer = extend(AssetContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || AssetContainerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = AssetContainer);