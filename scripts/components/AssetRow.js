/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const AssetRowDesign = require('library/AssetRow');

const AssetRow = extend(AssetRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || AssetRowDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = AssetRow);