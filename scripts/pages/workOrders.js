/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const WorkOrdersDesign = require('ui/ui_workOrders');
const User = require("../model/user");
const WorkOrderItem = require("../components/WorkRow");
var workOrder = new WorkOrderItem();
const ListView = require("sf-core/ui/listview");
const ListViewItem = require("sf-core/ui/listviewitem");
const Router = require("sf-core/ui/router");
const Color = require("sf-core/ui/color");
const Timer = require("sf-core/global/timer");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const ImageView = require("sf-core/ui/imageview");
const MapView = require('sf-core/ui/mapview');
const Items = require("../model/items");
const AlertView = require('sf-core/ui/alertview');
// const MapViewfl = require("../components/MapViewfl");
// var mapViewfl = new MapViewfl();

const WorkOrders = extend(WorkOrdersDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    var page = this;
    var pageonLoad = page.onLoad;

    // overrides super.onShow method
    page.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    page.onLoad = function() {
      pageonLoad && pageonLoad();
      this.headerBar.titleColor = Color.create("#FFFFFF");
      Router.sliderDrawer.setLeftItem(this.headerBar);

      // var event = User.currentLocation;
      // console.log("event.latitude " + event.latitude + " event.longitude " + event.longitude);
      //   this.mapViewfl.workMapView.centerLocation = {
      //       latitude: parseFloat(event.latitude),
      //       longitude: parseFloat(event.longitude)
      //     }

      // HeaderBarItem.setCustomHeaderBarItem(this);
    }
  });

HeaderBarItem.constructor.prototype.setCustomHeaderBarItem = function setHeaderBarItem(that) {
  var backIconItem = new HeaderBarItem();
  var backIcon = Image.createFromFile("images://backheadericon.png");
  backIconItem.image = backIcon;
  backIconItem.onPress = function() {
    console.log("back icon is on press");
    Router.goBack();
  }.bind(that);
  backIconItem.itemColor = Color.create("#D5D4D4");
  that.headerBar.setLeftItem(backIconItem);
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
  this.headerBar.title = lang["workOrders.title"];
  this.headerBar.itemColor = Color.create("#D5D4D4");

  workOL = this.workOrderListview;
  console.log("centerLocation in work order page is " + this.mapViewfl.workMapView.centerLocation.latitude + " &&& " + this.mapViewfl.workMapView.centerLocation.longitude);


  var currentUser = User.currentUser;
  // console.log("current user is " + currentUser.firstname);

  Timer.setTimeout({
    delay: 500,
    task: function() {
      initListview(currentUser.work);
    }
  });

  // //Assign map image and remove the listview when press
  workOrder.assignImgandRmv = this;

}


var workOL;
var confirmAlertView;

function initListview(jsonData) {

  workOL.rowHeight = 90;
  workOL.onRowCreate = function() {
    console.log("in row create");
    var listviewItem = new ListViewItem();
    var workOrderItem = Object.assign(new WorkOrderItem(), {
      id: 8,
      flexGrow: 1
    });
    listviewItem.addChild(workOrderItem);

    return listviewItem;
  };

  workOL.onRowBind = function(listviewItem, index) {
    if (!jsonData[index])
      return;

    var workRow = listviewItem.findChildById(8);
    var detailContainer = workRow.findChildById(9);
    var workData = detailContainer.findChildById(10);
    var workLabels = workData.findChildById(100);

    var workId1 = workLabels.findChildById(101);
    var workId2 = workLabels.findChildById(102);
    var workId3 = workLabels.findChildById(103);

    workId3.text = jsonData[index].workid1;
    workId2.text = jsonData[index].workid2;
    workId1.text = jsonData[index].workid3;
  };

  workOL.onRowSelected = function(listViewItem, index) {
    User.currentWork = jsonData[index]
    Router.go("workOrderSumpg", jsonData[index]);
  };
  
  workOL.ios.rightToLeftSwipeEnabled = true;

  workOL.ios.onRowSwiped = function(direction, expansionSettings) {
    if (direction == ListView.iOS.SwipeDirection.RIGHTTOLEFT) {
      //Expansion button index. Default value 0
      expansionSettings.buttonIndex = -1;

      var archiveSwipeItem = ListView.iOS.createSwipeItem("DELETE", Color.RED, 50, function(e) {
        console.log("swipe item is clicked");

        deleteItem(e.index, jsonData);

        
        // workOL.itemCount = jsonData.length;
        // workOL.refreshData();
        // workOL.stopRefresh();
      });
      return [archiveSwipeItem];
    }
  };
  
  workOL.onRowLongSelected = function(listViewItem, index){
    deleteItem(index, jsonData);
  };


  workOL.refreshEnabled = false;

  workOL.itemCount = jsonData.length;
  workOL.refreshData();
  workOL.stopRefresh();


}

function deleteItem(index, jsonData) {

  var confirmAlertView = new AlertView({
    title: "Do you want to delete it ?",
    message: "If you delete it, you won't undo it"
  });
  confirmAlertView.addButton({
    index: AlertView.ButtonType.NEGATIVE,
    text: "Cancel"
  });
  confirmAlertView.addButton({
    index: AlertView.ButtonType.POSITIVE,
    text: "Okey",
    onClick: function() {
      Items.deleteItem(index);
      //afterwards refrest the data and set length of data.
      workOL.itemCount = jsonData.length;
      workOL.refreshData();
    }
  });
  confirmAlertView.show();

}

module && (module.exports = WorkOrders);
