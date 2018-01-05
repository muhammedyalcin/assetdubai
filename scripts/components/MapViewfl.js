/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const MapViewflDesign = require('library/MapViewfl');
const MapView = require('sf-core/ui/mapview');
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
    var mapView = this.workMapView;

    // this.userLocationEnabled = true;
    this.currentLocationImf.onTouch = function() {
      if (User.currentLocation) {
        this.workMapView.centerLocation = {
          latitude: User.currentLocation.latitude,
          longitude: User.currentLocation.longitude
        }
      }
    }.bind(this);

    // if (User.currentLocation) {
    //   console.log("in condisition");
    //   var pinX = 0.0;
    //   var pinY = 0.0;
    //   for (var i = 0; i < 5; i++) {
    //     var pins = new MapView.Pin({
    //       id: 10,
    //       color: Color.RED,
    //       location: {
    //         latitude: User.currentLocation.latitude + pinX,
    //         longitude: User.currentLocation.longitude + pinY
    //       },
    //       title: 'SDV 241835' + i
    //     });
    //     mapView.addPin(pins);
    //     pinY += 0.0000312;
    //     pinX += 0.0005239;
    //   }
    // }
    var redpins = [];
    this.redlocationImg.onTouch = function() {
      if (User.currentLocation) {
        setRedpins();
      }
    }.bind(this);

    // this.yellowlocationImg.onTouch = function() {
    //   if (User.currentLocation) {
    //     setYellowpins();
    //     if (redpins) {
    //       removePins(redpins);
    //     }
    //   }
    // }.bind(this);

    function setRedpins() {
      var pinX = 0.0;
      var pinY = 0.0;
      if (redpins.length <= 5) {
        for (var i = 0; i < 5; i++) {
          var redpin = new MapView.Pin({
            id: 5,
            color: Color.RED,
            location: {
              latitude: User.currentLocation.latitude + pinX,
              longitude: User.currentLocation.longitude + pinY
            },
            title: 'SDV 419235' + i
          });
          redpins.push(redpin);
          mapView.addPin(redpin);
          pinY += 0.000523;
          pinX += 0.0010;
        }
      }
    }

    //   function setYellowpins() {
    //     var pinX = 0.0;
    //     var pinY = 0.0;
    //     if (yellowpins.length === 5 || yellowpins.length < 5) {
    //       for (var i = 0; i < 5; i++) {
    //         var yellowpin = new MapView.Pin({
    //           id: 10,
    //           color: Color.YELLOW,
    //           location: {
    //             latitude: User.currentLocation.latitude + pinX,
    //             longitude: User.currentLocation.longitude + pinY
    //           },
    //           title: 'SDV 241835' + i
    //         });
    //         yellowpins.push(yellowpin);
    //         mapView.addPin(yellowpin);
    //         pinY += 0.0000312;
    //         pinX += 0.0005239;
    //       }
    //     }
    //   }

    //   function removePins(pins) {
    //     for (var i = pins.length - 1; i >= 0; i--) {
    //       console.log("pins  " + i);
    //       var pin = pins[i];
    //       mapView.removePin(pin);
    //       pins.pop();
    //     }
    //   }
  });

module && (module.exports = MapViewfl);
