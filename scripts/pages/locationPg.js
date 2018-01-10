/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const LocationPgDesign = require('ui/ui_locationPg');
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const MapView = require('sf-core/ui/mapview');
const Asset = require("../model/asset");
const Application = require("sf-core/application");
const User = require("../model/user");
const System = require("sf-core/device/system");

const LocationPg = extend(LocationPgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();

  var currentAsset = Asset.currentAsset;

  this.headerBar.itemColor = Color.create("#D5D4D4");
  this.headerBar.title = currentAsset.title;
  this.contactContainer.directionsButton.onPress = directionsButton_onPress.bind(this);
  this.contactContainer.imgView.onTouch = function(){
     Application.call("tel:+1-555-5555",{});
  }.bind(this);
}

function directionsButton_onPress() {
  
  var currentLocation = User.currentLocation;
  if(currentLocation){
  if (System.OS === "Android") {
    Application.call("https://www.google.com/maps/dir/", {
      "api": "1",
      "travelmode": "walking",
      "dir_action": "navigate",
      "destination":currentLocation.latitude + "," + currentLocation.latitude,
    });
  }
  else {
    Application.call("http://maps.apple.com/", {
      "daddr": currentLocation.latitude +"," + currentLocation.latitude,
      "dirflg": "w"
    });
  }
}
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  HeaderBarItem.setCustomHeaderBarItem(this);
  //sets current location
  MapView.setCurrentLocation(this.mapViewfl.workMapView, 30000);
}

module && (module.exports = LocationPg);
