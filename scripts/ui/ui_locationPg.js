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
const FlexLayout = extend(require('sf-core/ui/flexlayout'));

const ContactContainer = extend(require("../components/ContactContainer"));
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
function $LocationPg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "locationPg", $LocationPg_, this);
  pageContextPatch(this, "locationPg");
}
$LocationPg.$$styleContext = {
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
const $LocationPg_ = Page($LocationPg);

function $LocationPg(_super, pageInstance) {
  _super(this);
  addChild.call(this, "contactContainer", $LocationPg$$ContactContainer_, pageInstance);
  addChild.call(this, "mapViewfl", $LocationPg$$MapViewfl_, pageInstance);
}
$LocationPg.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $LocationPg_ = FlexLayout($LocationPg);

function $LocationPg$$ContactContainer(_super, pageInstance) {
  _super(this);
  pageInstance.contactContainer = this;
}
$LocationPg$$ContactContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 400,
    left: 0,
    right: 0,
    width: null
  }
};
const $LocationPg$$ContactContainer_ = ContactContainer($LocationPg$$ContactContainer);

function $LocationPg$$MapViewfl(_super, pageInstance) {
  _super(this);
  pageInstance.mapViewfl = this;
}
$LocationPg$$MapViewfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 400,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $LocationPg$$MapViewfl_ = MapViewfl($LocationPg$$MapViewfl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Location Page";

}

module && (module.exports = $LocationPg_);