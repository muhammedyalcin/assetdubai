/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MapViewflDesign = require('library/MapViewfl');
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const Location = require('sf-core/device/location');
const Timer = require("sf-core/global/timer");
const MapView = require('sf-core/ui/mapview');
const User = require("../model/user");

const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;

    var mapViewfl = this;
    //i just make it to be example it gonna change based on json data.  
    // Location.start();
    //   Location.onLocationChanged = function(event) {
    //     console.log("in location changed function");
        
    //   User.currentLocation = {
    //     latitude: event.latitude,
    //     longitude: event.longitude
    //   }
       
    //     mapViewfl.workMapView.centerLocation = {
    //       latitude: parseFloat(event.latitude),
    //       longitude: parseFloat(event.longitude)
    //     }
    //     console.log("centerLocation is " + mapViewfl.workMapView.centerLocation.latitude + " &&  " + mapViewfl.workMapView.centerLocation.longitude );
    //     setWorkPlacePins(mapViewfl,[1],event);
    //     // console.log("In centerlocation" +value.mapViewfl.workMapView.centerLocation.longitude );
    //     console.log("In main , Location latitude: " + event.latitude + "  Longitude: " + event.longitude);
    //   };

    //   Timer.setTimeout({
    //     delay: 2000,
    //     task: function() {
    //       Location.stop()
    //     }
    //   });

    Object.defineProperty(mapViewfl, 'assignLocation', {
      set: function(value) {
        console.log("in assignLocation function")
        setLocation(value);
      }
    });

    function setLocation(value) {
      console.log("in setlocation function");
      Location.start();
      Location.onLocationChanged = function(event) {
        console.log("in location changed function");

        value.mapViewfl.workMapView.centerLocation = {
          latitude: parseFloat(event.latitude),
          longitude: parseFloat(event.longitude)
        }
        setWorkPlacePins(value,[1],event);
        // console.log("In centerlocation" +value.mapViewfl.workMapView.centerLocation.longitude );
        console.log("Location latitude: " + event.latitude + "  Longitude: " + event.longitude);
      };

      Timer.setTimeout({
        delay: 2000,
        task: function() {
          Location.stop()
        }
      });
    }
//for now just set current location to pin. 
//otherwise sets json datas
    function setWorkPlacePins(that, arr,event) {
      //creates based on json data
      for (var i in arr) {
        var workPin = new MapView.Pin({
          location: {
            latitude: parseFloat(event.latitude), //set according to json data
            longitude: parseFloat(event.longitude) //set according to json data
          },
          title: 'Ataturk Airport' //set according to json data
        });
        mapViewfl.workMapView.addPin(workPin);
      }
    }

  }

);

module && (module.exports = MapViewfl);
