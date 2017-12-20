/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MapViewflDesign = require('library/MapViewfl');
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const FlexLayout = require("sf-core/ui/");

const MapViewfl = extend(MapViewflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewflDesign.defaults);
    this.pageName = pageName;
    
    var mapViewfl = this;

    // Object.defineProperty(mapViewfl, 'assignImgandRmv', {
    //   get: function() {
    //     return "Nothing is assign";
    //   },
    //   set: function(value) {
    //     console.log("in change image bar function")
    //     setLeftItem(value);
    //   }
    // });

    // function setLeftItem(value) {
    //   //value.headerBar.leftItemEnabled = true

    //   var mapViewItem = new HeaderBarItem({
    //     image: Image.createFromFile("images://listicon.png"),
    //     color: Color.WHITE,
    //     onPress: function() {
    //     value.mapViewfl.visible = false;
    //     value.workOrderListview.visible = true;
    //     resetLeftItem(value);
    //     }
    //   });
    //   value.headerBar.setItems([mapViewItem]);
    // }
    
    
  }

);

module && (module.exports = MapViewfl);