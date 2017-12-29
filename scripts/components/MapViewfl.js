/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MapViewflDesign = require('library/MapViewfl');
// const Color = require("sf-core/ui/color");
// const Image = require("sf-core/ui/image");
// const Location = require('sf-core/device/location');
// const Timer = require("sf-core/global/timer");
// const MapView = require('sf-core/ui/mapview');
// const User = require("../model/user");

const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = MapViewfl);
