/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const DashboardPgDesign = require('ui/ui_dashboardPg');
const Router = require("sf-core/ui/router");
// const sliderDrawer = require("../sliderDrawer");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const Color = require("sf-core/ui/color");
const DashBoardItem = require("components/DashBoardItem");
const ListViewItem = require("sf-core/ui/listviewitem");

const DashboardPg = extend(DashboardPgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));


    console.log("Dashboard is loaded");
    //dashboardListview = this.dashboardListview;
    //sliderDrawer.setFlexlayout;
    // sliderDrawer.layout.addChild(SliderFlexlayout);

    // Router.sliderDrawer.setCurrentData();
  });

var dashboardData;
var dashboardListview;

function initListview(dashData) {

  dashboardListview.onRowCreate = function() {
    
    var listviewItem = new ListViewItem();
    var dashboardItem = Object.assign(new DashBoardItem(), {
      id: 15,
      height : NaN,
      flexGrow: 1
    });
    listviewItem.addChild(dashboardItem);

    return listviewItem;
  }

  dashboardListview.onRowBind = function(listviewItem, index) {
    var dasboardItem = listviewItem.findChildById(15);
    var labelContainer = dasboardItem.findChildById(160);
    var dashboardLabel2 = labelContainer.findChildById(162);
    dashboardLabel2.text = dashboardData[index].title;
    dasboardItem.backgroundColor = dashboardData[index].backgroundColor;
  }

  dashboardListview.onRowSelected = function(listViewItem, index) {
    console.log("selected index = " + index);
  };

  /* dashboardListview.onPullRefresh = function() {
    dashboardListview.itemCount = dashData.length;
    dashboardListview.refreshData();
    dashboardListview.stopRefresh();
  };*/
  dashboardListview.itemCount = dashboardData.length;
  dashboardListview.refreshData();
  dashboardListview.stopRefresh();

}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  var dashboardObj = new DashBoardItem();
  dashboardData = dashboardObj.getDashboardData;
  dashboardListview = this.dashboardListview;
  initListview(dashboardData);
  Router.sliderDrawer.setLeftItem(this.headerBar);

}

module && (module.exports = DashboardPg);
