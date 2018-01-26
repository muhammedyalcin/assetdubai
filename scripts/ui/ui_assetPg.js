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

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $AssetPg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "assetListview", $AssetListview_, this);
  pageContextPatch(this, "assetPg");
}
$AssetPg.$$styleContext = {
  classNames: ".page",
  userProps: {},
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
const $AssetPg_ = Page($AssetPg);

function $AssetListview(_super, pageInstance) {
  _super(this, {
    rowHeight: 70,
    itemCount: NaN
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.assetListview = this;
}
$AssetListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    width: null,
    height: null,
    left: 15,
    right: 15,
    bottom: 15,
    top: 15,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $AssetListview_ = ListView($AssetListview);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Assets";

}

module && (module.exports = $AssetPg_);