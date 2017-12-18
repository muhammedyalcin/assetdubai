/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const WorkOrdersDesign = require('ui/ui_workOrders');
const User = require("../model/user");
const WorkOrderItem = require("../components/WorkRow");
const ListViewItem = require("sf-core/ui/listviewitem");

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
      
       var currentUser = User.currentUser;
       initListview(currentUser);
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

function initListview(jsonData) {
  var workOL = this.workOrderListview;
  
  workOL.onRowCreate = function() {
    var listviewItem = new ListViewItem();
    var workOrderItem = Object.assign(new WorkOrderItem(), {
      id: 8
    });
    listviewItem.addChild(workOrderItem);

    return listviewItem;
  }

  workOL.onRowBind = function(listviewItem, index) {
    var workRow = listviewItem.findChildById(8);
    var detailContainer = workRow.findChildById(9);
    var workData = detailContainer.findChildById(10);
    var workLabels = workData.findChildById(100);
    var workid1= workLabels.findChildById(101);
    var workid2 = workLabels.findChildById(102);
    var workid3 = workLabels.findChildById(103);
    
    workid3 = jsonData[index].work.workid1;
    workid2 = jsonData[index].work.workid2;
    workid1 = jsonData[index].work.workid3;
  }
  
    workOL.onRowSelected = function(listViewItem, index) {
    console.log("selected index = " + index)
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


module && (module.exports = WorkOrders);
