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
const User = require("../model/user");

const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;

    // this.userLocationEnabled = true;
    this.currentLocationImf.onTouch = function() {
      if (User.currentLocation) {
        this.workMapView.centerLocation = {
          latitude: User.currentLocation.latitude,
          longitude: User.currentLocation.longitude
        }
      }
    }.bind(this);
  }

);

module && (module.exports = MapViewfl);
