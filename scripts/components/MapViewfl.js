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
const Router = require("sf-core/ui/router");
const User = require("../model/user");
const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;
    var mapView = this.workMapView;

    var currentUser = User.currentUser;
    console.log("current user" + currentUser);
    console.log("current work is  " + currentUser.work[0].workid1);
    // var redpins = [];
    // setRedpins(currentUser.work);

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

    // this.redlocationImg.onTouch = function() {
    //   if (User.currentLocation) {
    //     setRedpins();
    //   }
    // }.bind(this);

    // this.yellowlocationImg.onTouch = function() {
    //   if (User.currentLocation) {
    //     setYellowpins();
    //     if (redpins) {
    //       removePins(redpins);
    //     }
    //   }
    // }.bind(this);

    // function setRedpins(jsonData) {
    //   var pinX = 0.0;
    //   var pinY = 0.0;
     
    //     for (var i = 0; i < jsonData.length; i++) {
    //       var redpin = new MapView.Pin({
    //         id: i,
    //         color: Color.RED,
    //         location: {
    //           latitude: mapView.centerLocation.latitude + pinX,
    //           longitude: mapView.centerLocation.longitude + pinY
    //         },
    //         title: jsonData[i],
    //         onPress: function() {
    //           User.currentWork = redpins[redpin.id];
    //           Router.go("workOrderProcPg");
    //         }
    //       });
    //       redpins.push(jsonData[i]);
    //       mapView.addPin(redpin);
    //       pinY += 0.000523;
    //       pinX += 0.0020;
    //     }
      
    // }

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
