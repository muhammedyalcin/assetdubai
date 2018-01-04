/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const AssetPgDesign = require('ui/ui_assetPg');
const ListViewItem = require("sf-core/ui/listviewitem");
const Router = require("sf-core/ui/router");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Asset = require("../model/asset");
const AssetRow = require("components/AssetRow");
var assetRow = new AssetRow();

const AssetPg = extend(AssetPgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    assetListview = this.assetListview;

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
var assetListview;

function onShow(superOnShow) {
  superOnShow();
  this.headerBar.itemColor = Color.create("#D5D4D4");
  this.headerBar.title = lang["assets.title"];
  var jsonData = assetRow.getAssetTestData;
  this.initlist(jsonData);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  
  HeaderBarItem.setCustomHeaderBarItem(this);
  
  Router.sliderDrawer.setLeftItem(this.headerBar);

  this.initlist = function initListview(jsonData) {

    assetListview.onRowCreate = function() {
      var listviewItem = new ListViewItem();
      var assetRowItem = Object.assign(new AssetRow(), {
        id: 29,
        flexGrow: 1
      });
      listviewItem.addChild(assetRowItem);

      return listviewItem;
    };

    assetListview.onRowBind = function(listviewItem, index) {
      var assetRow = listviewItem.findChildById(29);
      var assetContainer = assetRow.findChildById(300);
      var labelfl = assetContainer.findChildById(301);
      var bottomLabel = labelfl.findChildById(302);
      var topLabel = labelfl.findChildById(303);

      topLabel.text = jsonData[index].title;
      bottomLabel.text = jsonData[index].desc;

    };

    assetListview.onRowSelected = function(listViewItem, index) {
      Router.go("locationPg");
      Asset.currentAsset = jsonData[index];
      // console.log("work data is in workordersum page " +workData.workid1);
      // var workSummary = jsonData[index];
      // var arr = [workSummary,workData];
      // Router.go("workOrderProcPg", arr);
    };

    //sets manually for now
    assetListview.refreshEnabled = false;
    assetListview.itemCount = 5;
    assetListview.refreshData();
    assetListview.stopRefresh();
  }
}

module && (module.exports = AssetPg);
