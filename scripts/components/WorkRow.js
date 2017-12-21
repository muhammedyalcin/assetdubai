/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WorkRowDesign = require('library/WorkRow');
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const FlexLayout = require("sf-core/ui/");


const WorkRow = extend(WorkRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WorkRowDesign.defaults);
    this.pageName = pageName;
    var workRow = this;

    Object.defineProperty(workRow, 'assignImgandRmv', {
      get: function() {
        return "Nothing is assign";
      },
      set: function(value) {
        console.log("In assignImgandRmv");
        setLeftItem(value);
      }
    });

   function setLeftItem(value) {

      //value.headerBar.leftItemEnabled = true;
      var workOrdersItem = new HeaderBarItem({
        image: Image.createFromFile("images://locationicon.png"),
        color: Color.WHITE,
        onPress: function() {
          value.workOrderListview.visible = false;
          value.mapViewfl.visible = true;
          
          resetLeftItem(value);
        }
      });
      value.headerBar.setItems([workOrdersItem]);
    }
    
    function resetLeftItem(value) {
      //value.headerBar.leftItemEnabled = true

      var mapViewItem = new HeaderBarItem({
        image: Image.createFromFile("images://listsicon.png"),
        color: Color.WHITE,
        onPress: function() {
        value.mapViewfl.visible = false;
        value.workOrderListview.visible = true;
        setLeftItem(value);
        }
      });
      value.headerBar.setItems([mapViewItem]);
    }
  }

);
this.setLeftItem = function setLeftItem(value){};

module && (module.exports = WorkRow);
