/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const LocationPgDesign = require('ui/ui_locationPg');
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const MapViewfl = require("../components/MapViewfl");
var mapViewfl = new MapViewfl();

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
  
  this.headerBar.itemColor = Color.create("#D5D4D4");
  
  

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
  mapViewfl.assignLocation=this;
  // var backIconItem = new HeaderBarItem();
  // backIconItem.image = Image.createFromFile("images://backheadericon.png");
  // backIconItem.itemColor = Color.create("#D5D4D4");
  // this.headerBar.setLeftItem(backIconItem);
}

module && (module.exports = LocationPg);