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
const ActivityIndicator = extend(require('sf-core/ui/activityindicator'));

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
function $Step3Page(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "step3fl", $Step3fl_, this);
  pageContextPatch(this, "step3Page");
}
$Step3Page.$$styleContext = {
  classNames: ".page",
  userProps: {
    flexProps: {
      justifyContent: "CENTER"
    }
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
const $Step3Page_ = Page($Step3Page);

function $Step3fl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "tab", $Step3fl$$Tab_, pageInstance);
  addChild.call(this, "noteContainer", $Step3fl$$NoteContainer_, pageInstance);
  addChild.call(this, "completefl", $Step3fl$$Completefl_, pageInstance);
  addChild.call(this, "indicayorfl", $Step3fl$$Indicayorfl_, pageInstance);
}
$Step3fl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Step3fl_ = FlexLayout($Step3fl);

function $Step3fl$$Tab(_super, pageInstance) {
  _super(this);
  pageInstance.tab = this;
}
$Step3fl$$Tab.$$styleContext = {
  classNames: ".flexLayout .tabBar-style1 .tabBar-style2",
  userProps: {
    flexProps: {
      positionType: "ABSOLUTE",
      alignSelf: "AUTO"
    },
    height: 60,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $Step3fl$$Tab_ = Tab($Step3fl$$Tab);

function $Step3fl$$NoteContainer(_super, pageInstance) {
  _super(this);
  pageInstance.noteContainer = this;
}
$Step3fl$$NoteContainer.$$styleContext = {
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
const $Step3fl$$NoteContainer_ = NoteContainer($Step3fl$$NoteContainer);

function $Step3fl$$Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Step3fl$$Completefl.$$styleContext = {
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
const $Step3fl$$Completefl_ = Completefl($Step3fl$$Completefl);

function $Step3fl$$Indicayorfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "stepindicator", $Step3fl$$Indicayorfl$$Stepindicator_, pageInstance);
  pageInstance.indicayorfl = this;
}
$Step3fl$$Indicayorfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    borderRadius: 32,
    flexProps: {
      positionType: "RELATIVE",
      alignItems: "CENTER",
      alignSelf: "CENTER",
      justifyContent: "CENTER"
    },
    height: 100,
    visible: false,
    width: 150
  }
};
const $Step3fl$$Indicayorfl_ = FlexLayout($Step3fl$$Indicayorfl);

function $Step3fl$$Indicayorfl$$Stepindicator(_super, pageInstance) {
  _super(this);
  pageInstance.stepindicator = this;
}
$Step3fl$$Indicayorfl$$Stepindicator.$$styleContext = {
  classNames: ".activityIndicator",
  userProps: {
    flexProps: {
      alignSelf: "CENTER"
    }
  }
};
const $Step3fl$$Indicayorfl$$Stepindicator_ = ActivityIndicator($Step3fl$$Indicayorfl$$Stepindicator);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Step 3";

}

module && (module.exports = $Step3Page_);