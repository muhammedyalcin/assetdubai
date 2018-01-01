/*globals lang*/
const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const Router = require("sf-core/ui/router");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const ImageView = require("sf-core/ui/imageview");
const MapView = require('sf-core/ui/mapview');
const ListViewItem = require("sf-core/ui/listviewitem");
const User = require("../model/user");
const WorkSummary = require("components/WorkSummary");
const Timer = require("sf-core/global/timer");

const workOrderProcPgDesign = require("ui/ui_workOrderProcPg");

const Page_ = extend(workOrderProcPgDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow(superOnShow) {
    superOnShow();
    
    var page = this;
    this.headerBar.itemColor = Color.create("#D5D4D4");

    //set some defaults values
    // this.contactContainer.contactfl.label2 = "EQUIPMENT REQUIRED";

    // this.contactContainer.addressLabel1.text = lang["workOrderProcPg.procedure"];
    // this.contactContainer.addressLabel2.text = "Ambience";

    // //
    // this.contactContainer.phoneLabel2.text = "Ambience";
    // this.contactContainer.phoneLabel1.text = lang["workOrderProcPg.procedure"];
    // this.contactContainer.imgfl.visible = false;

    // this.contactContainer.contactLabel1.text = lang["workOrderProcPg.equipmentRequired"];

    // this.startProButton.text = lang["workOrderProcPg.button.startProcedure"];
    // this.cancelButton.text = lang["workOrderProcPg.button.cancelWorkOrder"];

    var currentWork = User.currentWork;
    var workSummary = currentWork.worksummary;
    
    this.startProButton.onPress = function() {
        Router.go("proceduresPage");
    }.bind(this);

    if (workSummary)
        Timer.setTimeout({
            delay: 500,
            task: function() {
                initListview.call(page,workSummary);
            }
        });
    else
        alert("Nothing to display");
}

// Page.onLoad -> This event is called once when page is created.
function onLoad(superOnLoad) {
    superOnLoad();

    HeaderBarItem.setCustomHeaderBarItem(this);

    MapView.setCurrentLocation(this.mapViewfl.workMapView, 30000);
}

function initListview(jsonData) {

    var workOL = this.workOrdersSumfl.workOrderSumListView;

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

        id2.text = jsonData[index].worksumid1;
        id1.text = jsonData[index].worksumid2;
    };

    workOL.onRowSelected = function(listViewItem, index) {
        User.currentWorkSummary = jsonData[index];
        Router.go("workOrderProcPg");
    };

    /* dashboardListview.onPullRefresh = function() {
      dashboardListview.itemCount = dashData.length;
      dashboardListview.refreshData();
      dashboardListview.stopRefresh();
    };*/
    workOL.refreshEnabled = false;
    workOL.itemCount = jsonData.length;
    workOL.refreshData();
    workOL.stopRefresh();
}

module && (module.exports = Page_);
