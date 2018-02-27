/*globals lang*/
const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const Router = require("sf-core/ui/router");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const MapView = require('sf-core/ui/mapview');
const ListViewItem = require("sf-core/ui/listviewitem");
const User = require("../model/user");
const WorkSummary = require("components/WorkSummary");
const Timer = require("sf-core/global/timer");
const Image = require("sf-core/ui/image");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");

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

        this.onSafeAreaPaddingChange = function(e) {
            console.log("padding object is : " + JSON.stringify(e));
            // page.layout.paddingLeft = e.bottom;

        };
    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow(superOnShow) {
    superOnShow();

    var page = this;
    this.headerBar.itemColor = Color.create("#D5D4D4");
    this.workOrdersSumfl.lablel1.text = lang["workOrderProcPg.equipmentRequired"];

    this.startProButton.text = lang["workOrderProcPg.button.startProcedure"];
    this.cancelButton.text = lang["workOrderProcPg.button.cancelWorkOrder"];

    var currentWork = User.currentWork;
    var workSummary = currentWork.worksummary;
    //sets default one, you can assign according to conditions
    User.currentWorkSummary = workSummary[0];
    this.startProButton.onPress = function() {
        Router.go("proceduresPage");
    }.bind(this);

    this.cancelButton.onPress = function() {
        Router.goBack();
    }.bind(this);

    if (workSummary)
        Timer.setTimeout({
            delay: 500,
            task: function() {
                initListview.call(page, workSummary);
            }
        });
    else
        alert("Nothing to display");
}

// Page.onLoad -> This event is called once when page is created.
function onLoad(superOnLoad) {
    superOnLoad();

    this.ios.safeAreaLayoutMode = true;
    this.layout.backgroundColor = Color.create(61,59,58);
    
    var backIconItem = new HeaderBarItem();
    var backIcon = Image.createFromFile("images://backheadericon.png");
    backIconItem.image = backIcon;
    backIconItem.onPress = function() {
        var workOL = this.workOrdersSumfl.workOrderSumListView;
        workOL.itemCount = 0;
        workOL.refreshData();
        Router.goBack("workOrders");
    }.bind(this);
    backIconItem.itemColor = Color.create("#D5D4D4");
    this.headerBar.setLeftItem(backIconItem);

    MapView.setCurrentLocation(this.mapViewfl.workMapView, 30000);
}

function initListview(jsonData) {
    var workOL = this.workOrdersSumfl.workOrderSumListView;
    var indexListItem = 0;
    workOL.onRowCreate = function() {
        var listviewItem = new ListViewItem();
        var workOrderItem = Object.assign(new WorkSummary(), {
            id: 19,
        });
        workOL.dispatch(addChild(`item${indexListItem}`, workOrderItem, "", function(style) {
            style.flexGrow = 1;
            return style;
        }))
        listviewItem.addChild(workOrderItem, "workOrderItem");

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
    };

    workOL.refreshEnabled = false;
    workOL.itemCount = jsonData.length;
    workOL.refreshData();
    workOL.stopRefresh();
}

module && (module.exports = Page_);
