//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const ListView = extend(require('sf-core/ui/listview'));
const ListViewItem = extend(require('sf-core/ui/listviewitem'));

const MapViewfl = extend(require("../components/MapViewfl"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $WorkOrders(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "workOrderListview", $WorkOrderListview_, this);
  addChild.call(this, "mapViewfl", $MapViewfl_, this);
  pageContextPatch(this, "workOrders");
}
$WorkOrders.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )"
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar .heahderBar-style1 .headerBar-style2",
    userProps: {
      titleColor: "rgba( 216, 215, 215, 1 )"
    }
  }
};
const $WorkOrders_ = Page($WorkOrders);

function $WorkOrderListview(_super, pageInstance) {
  _super(this, {
    id: 10,
    itemCount: NaN,
    rowHeight: 70
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.workOrderListview = this;
}
$WorkOrderListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    bottom: 10,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 10,
    right: 10,
    top: 10,
    visible: true,
    width: null
  }
};
const $WorkOrderListview_ = ListView($WorkOrderListview);

function $MapViewfl(_super, pageInstance) {
  _super(this);
  pageInstance.mapViewfl = this;
}
$MapViewfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 0,
    right: 0,
    top: 0,
    visible: true,
    width: null
  }
};
const $MapViewfl_ = MapViewfl($MapViewfl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Work Orders";

}

module && (module.exports = $WorkOrders_);