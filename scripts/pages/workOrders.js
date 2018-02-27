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
const MapView = require('sf-core/ui/mapview');
const Items = require("../model/items");
const AlertView = require('sf-core/ui/alertview');
const Location = require('sf-core/device/location');
const Application = require("sf-core/application");
const System = require('sf-core/device/system');
const addChild = require("@smartface/contx/lib/smartface/action/addChild");

var workOL;
var self;
const WorkOrders = extend(WorkOrdersDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    this.onLoad = onLoad.bind(this, this.onLoad);
    self = this;
  });

var currentUser;
// overrides super.onLoad method
function onLoad(pageonLoad) {
  pageonLoad && pageonLoad();
  
  this.ios.safeAreaLayoutMode = true;
  this.layout.backgroundColor = Color.create(61,59,58);
  currentUser = User.currentUser;
  //sets pins on the mapview
  setRedpins.call(this, currentUser.work);

  this.headerBar.titleColor = Color.create("#FFFFFF");
  //Router.sliderDrawer.setLeftItem(this.headerBar);
  HeaderBarItem.setCustomHeaderBarItem(this);
  if (!User.currentLocation) {
    // MapView.setCurrentLocation(this.mapViewfl.workMapView, 30000);
  }

  workOL = this.workOrderListview;

  Timer.setTimeout({
    delay: 500,
    task: function() {
      initListview.call(workOL, currentUser.work);
    }
  });
}

MapView.constructor.prototype.setCurrentLocation = function setCurrentLocation(mapview, second) {
  Location.start();
  Location.onLocationChanged = function(event) {
    //this sets the current location to model data (User). This statement is custom it may change according to expection.
    User.currentLocation = {
      latitude: parseFloat(event.latitude),
      longitude: parseFloat(event.longitude)
    }
  };
  Timer.setTimeout({
    delay: 30000,
    task: function() {
      Location.stop()
    }
  });
}
HeaderBarItem.constructor.prototype.setCustomHeaderBarItem = function setHeaderBarItem(that, pageName) {
    var backIconItem = new HeaderBarItem();
    var backIcon = Image.createFromFile("images://backheadericon.png");
    backIconItem.image = backIcon;
    backIconItem.onPress = function() {
      if (pageName) {
        Router.goBack(pageName);
      }
      else {
        Router.goBack();
      }
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
function onShow(superOnShow, showMap) {
  superOnShow && superOnShow();

  this.headerBar.title = lang["workOrders.title"];
  this.headerBar.itemColor = Color.create("#D5D4D4");

  var page = this;

  Application.android.requestPermissions(1002, Application.Android.Permissions.ACCESS_COARSE_LOCATION)
  Application.android.onRequestPermissionsResult = function(e) {
    console.log(JSON.stringify(e));
  }
  // //Assign map image and remove the listview when press
  workOrder.assignImgandRmv = this;
  //bug occure if mapview is invisible // upto that update this.
  if (showMap && page.mapViewfl.visible) {
    page.mapViewfl.visible = showMap;
    page.workOrderListview.visible = false;
  }
  else {
    page.mapViewfl.visible = false;
    page.workOrderListview.visible = true;
  }
}


var length;

function initListview(jsonData) {
  var workOL = this;

  length = jsonData.length;
  workOL.rowHeight = 90;
  var indexListItem = 0;
  workOL.onRowCreate = function() {
    var listviewItem = new ListViewItem();
    var workOrderItem = new WorkOrderItem();

    workOL.dispatch(addChild(`item${++indexListItem}`, workOrderItem));

    listviewItem.addChild(workOrderItem, "workOrderItem", "", function(userProps) {
      userProps.flexGrow = 1;
      userProps.id = 8;
      return userProps;
    });
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

    if (jsonData[index].checked === "true") {
      var indicator = detailContainer.findChildById(98);
      var light = indicator.findChildById(97);
      light.backgroundColor = Color.create("#3ADF00");
    }

  };

  workOL.onRowSelected = function(listViewItem, index) {
    Router.sliderDrawer.hideSlider();
    User.currentWork = jsonData[index]
    Router.go("workOrderProcPg");
  };

  workOL.ios.rightToLeftSwipeEnabled = true;

  workOL.ios.onRowSwiped = function(direction, expansionSettings) {

    Router.sliderDrawer.hideSlider();
    if (direction == ListView.iOS.SwipeDirection.RIGHTTOLEFT) {
      //Expansion button index. Default value 0
      expansionSettings.buttonIndex = 0;
      expansionSettings.fillOnTrigger = true;
      expansionSettings.threshold = 1;
      var archiveSwipeItem = ListView.iOS.createSwipeItem("Cancel", Color.RED, 50, function(e) {
        try {
          length -= 1;
          workOL.itemCount = length;
          if (System.OS === "iOS") {
            workOL.nativeObject.deleteRowIndexAnimation(e.index, 3);
          }
          Items.deleteItem(e.index)
          deletePin(e.index);
        }
        catch (err) {
          console.log(err.message);
        }
        //deleteItem(e.index, jsonData);
      });
      return [archiveSwipeItem];
    }
  };

  workOL.android.onRowLongSelected = function(listViewItem, index) {
    Router.sliderDrawer.hideSlider();
    deleteItem(index, jsonData);
  };

  workOL.refreshEnabled = false;
  workOL.itemCount = jsonData.length;
  workOL.refreshData();
  workOL.stopRefresh();

}

function deletePin(pin){
  var visiblePins = self.mapViewfl.workMapView.getVisiblePins();
  for (var i = 0; i < visiblePins.length; i++) {
    if(JSON.stringify(redpins[pin].location) == JSON.stringify(visiblePins[i].location)){
      self.mapViewfl.workMapView.removePin(visiblePins[i]);
      redpins.splice(pin, 1);
      break;
    }
  }
}

function deleteItem(index, jsonData) {

  var confirmAlertView = new AlertView({
    title: lang["deleteConfirmation.title"],
    message: ""
  });
  confirmAlertView.addButton({
    index: AlertView.ButtonType.NEGATIVE,
    text: lang["no"]
  });
  confirmAlertView.addButton({
    index: AlertView.ButtonType.POSITIVE,
    text: lang["yes"],
    onClick: function() {
      length -= 1;
      workOL.itemCount = length;
      if (System.OS === "iOS") {
        workOL.nativeObject.deleteRowIndexAnimation(index, 3);
      }
      Items.deleteItem(index);
      deletePin(index);
      //afterwards refrest the data and set length of data.
      workOL.itemCount = jsonData.length;
      workOL.refreshData();
    }
  });
  confirmAlertView.show();

}
var redpins = [];

function setRedpins(jsonData) {
  var pinX = 0.0;
  var pinY = 0.0;
  var mapView = this.mapViewfl.workMapView;

  for (var i = 0; i < jsonData.length; i++) {
    var redpin = new MapView.Pin({
      id: i,
      color: Color.RED,
      location: {
        latitude: mapView.centerLocation.latitude + pinX,
        longitude: mapView.centerLocation.longitude + pinY
      },
      title: "" + jsonData[i].workid1,
      onPress: function() {
        User.currentWork = redpins[redpin.id];
        Router.go("workOrderProcPg");
      }
    });
    jsonData[i].location = redpin.location;
    redpins.push(jsonData[i]);
    mapView.addPin(redpin);
    pinY += 0.000523;
    pinX += 0.0020;
  }

}

module && (module.exports = WorkOrders);
