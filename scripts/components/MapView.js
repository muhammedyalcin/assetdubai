/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MapViewDesign = require('library/MapView');
const Image = require("sf-core/ui/image");
const Color = require("sf-core/ui/color");
const HeaderBarItem =require("sf-core/ui/headerbaritem");

const MapView = extend(MapViewDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MapViewDesign.defaults);
    this.pageName = pageName;

    Object.assign('assignHeaderImage', {
      set: function(headerbar) {
        setLeftItem(headerbar);
      }
    });

    function setLeftItem(headerbar) {
  
      headerbar.leftItemEnabled = true;
      var workOrdersItem = new HeaderBarItem({
        image: Image.createFromFile("images://listsicon.png"),
        color: Color.WHITE,
        onPress: function() {
        //
        }
      });
      var arr = [workOrdersItem];
      headerbar.setItems(arr);
    }
  }
);

module && (module.exports = MapView);
