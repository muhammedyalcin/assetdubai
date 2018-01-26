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

const Tab = extend(require("../components/Tab"));
const NoteContainer = extend(require("../components/NoteContainer"));
const Completefl = extend(require("../components/Completefl"));
const CurrentProcedureRowfl = extend(require("../components/CurrentProcedureRowfl"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $Step1Page(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "tab", $Tab_, this);
  addChild.call(this, "noteContainer", $NoteContainer_, this);
  addChild.call(this, "completefl", $Completefl_, this);
  addChild.call(this, "currentProcedureRowfl", $CurrentProcedureRowfl_, this);
  pageContextPatch(this, "step1Page");
}
$Step1Page.$$styleContext = {
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
const $Step1Page_ = Page($Step1Page);

function $Tab(_super, pageInstance) {
  _super(this);
  pageInstance.tab = this;
}
$Tab.$$styleContext = {
  classNames: ".flexLayout .tabBar-style1 .tabBar-style2",
  userProps: {
    width: null,
    height: 60,
    left: 0,
    right: 0,
    top: 0,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $Tab_ = Tab($Tab);

function $NoteContainer(_super, pageInstance) {
  _super(this);
  pageInstance.noteContainer = this;
}
$NoteContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    borderColor: "rgba( 255, 255, 255, 0 )",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    left: 20,
    right: 20,
    top: 70,
    bottom: 100,
    flexProps: {
      justifyContent: "CENTER",
      positionType: "ABSOLUTE",
      alignItems: "STRETCH",
      alignSelf: "AUTO",
      flexGrow: 1
    }
  }
};
const $NoteContainer_ = NoteContainer($NoteContainer);

function $Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Completefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    left: 0,
    right: 0,
    bottom: 0,
    flexProps: {
      alignSelf: "AUTO",
      positionType: "ABSOLUTE"
    }
  }
};
const $Completefl_ = Completefl($Completefl);

function $CurrentProcedureRowfl(_super, pageInstance) {
  _super(this);
  pageInstance.currentProcedureRowfl = this;
}
$CurrentProcedureRowfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 230,
    width: null,
    left: 0,
    right: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    visible: false,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $CurrentProcedureRowfl_ = CurrentProcedureRowfl($CurrentProcedureRowfl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Step 1";

}

module && (module.exports = $Step1Page_);