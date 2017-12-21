/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const WorkOrderSumpgDesign = require('ui/ui_workOrderSumpg');
const ListViewItem = require("sf-core/ui/listviewitem");
const WorkSummary = require("components/WorkSummary");
//const User = require("../model/user");
const Router = require("sf-core/ui/router");

const WorkOrderSumpg = extend(WorkOrderSumpgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    workOL = this.wordOderSumListview;

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
 var workData ;
function onShow(superOnShow, jsonData) {
  superOnShow();
  //var currentUser = User.currentUser;
  //console.log("currentUser workSummary is " + currentUser.work[index].worksummary);
  // console.log("Work ID is " + index);
  // console.log("Work ID Array " + currentUser.work);

  // if (index == undefined) {
  //   index = 0;
  // }
   if(jsonData){
  this.headerBar.title = jsonData.workid1;

  var workSummary = jsonData.worksummary;
  workData = jsonData;
  if (workSummary)
    this.initlist(workSummary);
  else
    alert("Nothing to display");
   }
}


/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
var workOL;
function onLoad(superOnLoad) {
  superOnLoad();


  this.initlist = function initListview(jsonData) {

    workOL.onRowCreate = function() {
      var listviewItem = new ListViewItem();
      var workOrderItem = Object.assign(new WorkSummary(), {
        id: 19,
        flexGrow: 1
      });
      listviewItem.addChild(workOrderItem);

      return listviewItem;
    };

    workOL.onRowBind = function(listviewItem, index) {
      var workSummary = listviewItem.findChildById(19);
      var summaryCnr = workSummary.findChildById(20);
      var summaryFlexLayout = summaryCnr.findChildById(200);
      var labelContainer = summaryFlexLayout.findChildById(201);
      var labels = labelContainer.findChildById(202);
      var id1 = labels.findChildById(203);
      var id2 = labels.findChildById(204);

      id1.text = jsonData[index].worksumid1;
      id2.text = jsonData[index].worksumid2;

      // var workRow = listviewItem.findChildById(8);
      // var detailContainer = workRow.findChildById(9);
      // var workData = detailContainer.findChildById(10);
      // var workLabels = workData.findChildById(100);

      // var workId1 = workLabels.findChildById(101);
      // var workId2 = workLabels.findChildById(102);
      // var workId3 = workLabels.findChildById(103);

      // workId3.text = jsonData[index].workid1;
      // workId2.text = jsonData[index].workid2;
      // workId1.text = jsonData[index].workid3;
    };

    workOL.onRowSelected = function(listViewItem, index) {
      console.log("selected index = " + index);
      console.log("work data is in workordersum page " +workData.workid1);
      var workSummary = jsonData[index];
      var arr = [workSummary,workData];
      Router.go("workOrderProcPg", arr);
    };

    /* dashboardListview.onPullRefresh = function() {
      dashboardListview.itemCount = dashData.length;
      dashboardListview.refreshData();
      dashboardListview.stopRefresh();
    };*/
    workOL.itemCount = jsonData.length;
    // console.log("length is " + jsonData.length );
    workOL.refreshData();
    workOL.stopRefresh();
  }

}

module && (module.exports = WorkOrderSumpg);
