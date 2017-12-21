/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MapViewflDesign = require('library/MapViewfl');
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const Location = require('sf-core/device/location');
const Timer = require("sf-core/global/timer");

const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;

    var mapViewfl = this;

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
          latitude: event.latitude,
          longitude: event.longitude
        }
        console.log("Location latitude: " + event.latitude + "  Longitude: " + event.longitude);
      };

      Timer.setTimeout({
        delay: 30000,
        task: function() {
          Location.stop()
        }
      });


    }


  }

);

module && (module.exports = MapViewfl);
