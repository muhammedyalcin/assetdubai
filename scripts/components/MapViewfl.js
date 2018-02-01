/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const MapViewflDesign = require('library/MapViewfl');
const User = require("../model/user");
const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;

    var currentUser = User.currentUser;
    this.workMapView.zoomLevel = 12;

    this.currentLocationImf.onTouch = function() {
      if (User.currentLocation) {
        this.workMapView.centerLocation = {
          latitude: User.currentLocation.latitude,
          longitude: User.currentLocation.longitude
        }
      }
    }.bind(this);
  });

module && (module.exports = MapViewfl);
