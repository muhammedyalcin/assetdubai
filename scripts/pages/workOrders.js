/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const WorkOrdersDesign = require('ui/ui_workOrders');
const User = require("../model/user");
const WorkOrderItem = require("../components/WorkRow");
const ListViewItem = require("sf-core/ui/listviewitem");
const Router = require("sf-core/ui/router");

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
      workOL = this.workOrderListview;
      console.log("list view is " + workOL);
      var currentUser = User.currentUser;
     // console.log("current user is " + currentUser.firstname);
      initListview(currentUser.work);
    }
    
     var workOL; 
    function initListview(jsonData) {

      console.log("json data " + jsonData.length);
      console.log("list view is   " + workOL)
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
        console.log("in row bind create");
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
        console.log("selected index = " + index)
        Router.go("workOrderSumpg",jsonData[index]);
      };

      /* dashboardListview.onPullRefresh = function() {
        dashboardListview.itemCount = dashData.length;
        dashboardListview.refreshData();
        dashboardListview.stopRefresh();
      };*/
      workOL.itemCount = jsonData.length;
      workOL.refreshData();
      workOL.stopRefresh();
    }


  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
}


module && (module.exports = WorkOrders);
