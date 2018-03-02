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
  addChild.call(this, "step1fl", $Step1fl_, this);
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

function $Step1fl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "tab", $Step1fl$$Tab_, pageInstance);
  addChild.call(this, "noteContainer", $Step1fl$$NoteContainer_, pageInstance);
  addChild.call(this, "completefl", $Step1fl$$Completefl_, pageInstance);
  addChild.call(this, "currentProcedureRowfl", $Step1fl$$CurrentProcedureRowfl_, pageInstance);
}
$Step1fl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Step1fl_ = FlexLayout($Step1fl);

function $Step1fl$$Tab(_super, pageInstance) {
  _super(this);
  pageInstance.tab = this;
}
$Step1fl$$Tab.$$styleContext = {
  classNames: ".flexLayout .tabBar-style1 .tabBar-style2",
  userProps: {
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 60,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $Step1fl$$Tab_ = Tab($Step1fl$$Tab);

function $Step1fl$$NoteContainer(_super, pageInstance) {
  _super(this);
  pageInstance.noteContainer = this;
}
$Step1fl$$NoteContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 255, 255, 255, 0 )",
    bottom: 100,
    flexProps: {
      justifyContent: "CENTER",
      positionType: "ABSOLUTE",
      alignItems: "STRETCH",
      alignSelf: "AUTO",
      flexGrow: 1
    },
    height: null,
    left: 20,
    right: 20,
    top: 70,
    width: null
  }
};
const $Step1fl$$NoteContainer_ = NoteContainer($Step1fl$$NoteContainer);

function $Step1fl$$Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Step1fl$$Completefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    bottom: 0,
    flexProps: {
      alignSelf: "AUTO",
      positionType: "ABSOLUTE"
    },
    height: 70,
    left: 0,
    right: 0,
    width: null
  }
};
const $Step1fl$$Completefl_ = Completefl($Step1fl$$Completefl);

function $Step1fl$$CurrentProcedureRowfl(_super, pageInstance) {
  _super(this);
  pageInstance.currentProcedureRowfl = this;
}
$Step1fl$$CurrentProcedureRowfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 230,
    left: 0,
    right: 0,
    visible: false,
    width: null
  }
};
const $Step1fl$$CurrentProcedureRowfl_ = CurrentProcedureRowfl($Step1fl$$CurrentProcedureRowfl);

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