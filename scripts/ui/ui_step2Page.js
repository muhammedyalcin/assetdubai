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

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $Step2Page(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "step2fl", $Step2fl_, this);
  pageContextPatch(this, "step2Page");
}
$Step2Page.$$styleContext = {
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
const $Step2Page_ = Page($Step2Page);

function $Step2fl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "tab", $Step2fl$$Tab_, pageInstance);
  addChild.call(this, "noteContainer", $Step2fl$$NoteContainer_, pageInstance);
  addChild.call(this, "completefl", $Step2fl$$Completefl_, pageInstance);
}
$Step2fl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Step2fl_ = FlexLayout($Step2fl);

function $Step2fl$$Tab(_super, pageInstance) {
  _super(this);
  pageInstance.tab = this;
}
$Step2fl$$Tab.$$styleContext = {
  classNames: ".flexLayout .tabBar-style2 .tabBar-style1",
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
const $Step2fl$$Tab_ = Tab($Step2fl$$Tab);

function $Step2fl$$NoteContainer(_super, pageInstance) {
  _super(this);
  pageInstance.noteContainer = this;
}
$Step2fl$$NoteContainer.$$styleContext = {
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
const $Step2fl$$NoteContainer_ = NoteContainer($Step2fl$$NoteContainer);

function $Step2fl$$Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Step2fl$$Completefl.$$styleContext = {
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
const $Step2fl$$Completefl_ = Completefl($Step2fl$$Completefl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Step 2";

}

module && (module.exports = $Step2Page_);