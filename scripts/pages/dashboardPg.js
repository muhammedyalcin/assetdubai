/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const DashboardPgDesign = require('ui/ui_dashboardPg');
const Router = require("sf-core/ui/router");
const DashBoardItem = require("components/DashBoardItem");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const ListViewItem = require('sf-core/ui/listviewitem');

const DashboardPg = extend(DashboardPgDesign)(
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
  this.headerBar.title = lang["dashboardPg.dasboard.title"];
  Router.sliderDrawer.setBoldAccToPage();
}

function onTouchDasItems() {
  Router.sliderDrawer.hideSlider();
  Router.go("workOrders");
}
/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
var page;
var dashboardData;
var dashboardListview;

function onLoad(superOnLoad) {
  superOnLoad();
  page = this;
  var dashboardObj = new DashBoardItem();
  dashboardData = dashboardObj.getDashboardData;
  dashboardListview = this.dashboardListview;
  initListview(dashboardData);
  Router.sliderDrawer.setLeftItem(this.headerBar);
}

function initListview(dashData) {
  console.log("in function");
  
  var indexListItem = 0;
  dashboardListview.onRowCreate = function() {

    var myListViewItem = new ListViewItem();
    var dashboardItem = new DashBoardItem();

    dashboardListview.dispatch(addChild(`item${++indexListItem}`, dashboardItem, "", function(userProps) {
      userProps.left = 0;
      userProps.right = 0;
      userProps.height = 60;
      return userProps;
    }));
    myListViewItem.addChild(dashboardItem, "dashboardItem");
    return myListViewItem;
  };

  dashboardListview.onRowBind = function(listViewItem, index) {
    var dashboardItem = listViewItem.findChildById(15);
    var labelContainer = dashboardItem.findChildById(160);
    var dashboardLabel2 = labelContainer.findChildById(162);
    var dashboardLabel1 = labelContainer.findChildById(161);
    dashboardLabel1.text = dashboardData[index].number;
    dashboardLabel2.text = dashboardData[index].title;
    //for now just navihate it to order page.
    dashboardLabel1.onTouch = onTouchDasItems.bind(page);
    dashboardLabel2.onTouch = onTouchDasItems.bind(page);

    dashboardItem.backgroundColor = dashboardData[index].backgroundColor;
  };

  dashboardListview.onRowSelected = function(listViewItem, index) {
    console.log("selected index = " + index);
  };

  dashboardListview.refreshEnabled = false;
  dashboardListview.itemCount = dashboardData.length;
  dashboardListview.refreshData();
  dashboardListview.stopRefresh();
  console.log("satir96")
}

module && (module.exports = DashboardPg);
