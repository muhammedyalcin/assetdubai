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

const CheckLine = extend(require("../components/CheckLine"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $NewPage001(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "checkLine", $CheckLine_, this);
  pageContextPatch(this, "newPage001");
}
$NewPage001.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {}
  }
};
const $NewPage001_ = Page($NewPage001);

function $CheckLine(_super, pageInstance) {
  _super(this);
}
$CheckLine.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: 70,
    height: 230,
    left: 0,
    top: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignItems: "CENTER",
      positionType: "RELATIVE"
    }
  }
};
const $CheckLine_ = CheckLine($CheckLine);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $NewPage001_);