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
const ScrollView = extend(require('sf-core/ui/scrollview'));
const ActivityIndicator = extend(require('sf-core/ui/activityindicator'));
const Label = extend(require('sf-core/ui/label'));
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $ProceduresPage(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "procedurefl", $Procedurefl_, this);
  pageContextPatch(this, "proceduresPage");
}
$ProceduresPage.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "COLUMN_REVERSE",
      justifyContent: "CENTER",
      alignItems: "STRETCH",
      alignContent: "STRETCH"
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
const $ProceduresPage_ = Page($ProceduresPage);

function $Procedurefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "procedureScroll", $Procedurefl$$ProcedureScroll_, pageInstance);
  addChild.call(this, "indicatorfl", $Procedurefl$$Indicatorfl_, pageInstance);
  addChild.call(this, "workIDfl1", $Procedurefl$$WorkIDfl1_, pageInstance);
  addChild.call(this, "buttonfl", $Procedurefl$$Buttonfl_, pageInstance);
}
$Procedurefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexDirection: "COLUMN_REVERSE",
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Procedurefl_ = FlexLayout($Procedurefl);

function $Procedurefl$$ProcedureScroll(_super, pageInstance) {
  _super(this);
  pageInstance.procedureScroll = this;
}
$Procedurefl$$ProcedureScroll.$$styleContext = {
  classNames: ".scrollView",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    bottom: 70,
    flexProps: {
      flexDirection: "COLUMN",
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 0,
    right: 0,
    top: 80,
    visible: false,
    width: null
  }
};
const $Procedurefl$$ProcedureScroll_ = ScrollView($Procedurefl$$ProcedureScroll);

function $Procedurefl$$Indicatorfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "proInfdicator", $Procedurefl$$Indicatorfl$$ProInfdicator_, pageInstance);
  pageInstance.indicatorfl = this;
}
$Procedurefl$$Indicatorfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    bottom: 70,
    flexProps: {
      positionType: "ABSOLUTE",
      flexGrow: 1,
      alignItems: "CENTER",
      justifyContent: "CENTER"
    },
    height: null,
    left: 0,
    right: 0,
    top: 70,
    width: null
  }
};
const $Procedurefl$$Indicatorfl_ = FlexLayout($Procedurefl$$Indicatorfl);

function $Procedurefl$$Indicatorfl$$ProInfdicator(_super, pageInstance) {
  _super(this);
  pageInstance.proInfdicator = this;
}
$Procedurefl$$Indicatorfl$$ProInfdicator.$$styleContext = {
  classNames: ".activityIndicator",
  userProps: {}
};
const $Procedurefl$$Indicatorfl$$ProInfdicator_ = ActivityIndicator($Procedurefl$$Indicatorfl$$ProInfdicator);

function $Procedurefl$$WorkIDfl1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "workid1", $Procedurefl$$WorkIDfl1$$Workid1_, pageInstance);
  addChild.call(this, "workid2", $Procedurefl$$WorkIDfl1$$Workid2_, pageInstance);
  pageInstance.workIDfl1 = this;
}
$Procedurefl$$WorkIDfl1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 216, 216, 216, 1 )",
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    visible: true,
    width: null
  }
};
const $Procedurefl$$WorkIDfl1_ = FlexLayout($Procedurefl$$WorkIDfl1);

function $Procedurefl$$WorkIDfl1$$Workid1(_super, pageInstance) {
  _super(this, {
    text: "Nothing"
  });
  pageInstance.workid1 = this;
}
$Procedurefl$$WorkIDfl1$$Workid1.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato"
    },
    height: null,
    marginLeft: 30,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 74, 74, 74, 1 )",
    width: null
  }
};
const $Procedurefl$$WorkIDfl1$$Workid1_ = Label($Procedurefl$$WorkIDfl1$$Workid1);

function $Procedurefl$$WorkIDfl1$$Workid2(_super, pageInstance) {
  _super(this, {
    text: "Nothing"
  });
  pageInstance.workid2 = this;
}
$Procedurefl$$WorkIDfl1$$Workid2.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0.7
    },
    font: {
      family: "Lato",
      size: 14
    },
    height: null,
    marginLeft: 30,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 74, 74, 74, 1 )",
    width: null
  }
};
const $Procedurefl$$WorkIDfl1$$Workid2_ = Label($Procedurefl$$WorkIDfl1$$Workid2);

function $Procedurefl$$Buttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "cancelButton", $Procedurefl$$Buttonfl$$CancelButton_, pageInstance);
  addChild.call(this, "startButton", $Procedurefl$$Buttonfl$$StartButton_, pageInstance);
  pageInstance.buttonfl = this;
}
$Procedurefl$$Buttonfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 74, 144, 226, 1 )",
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE",
      flexDirection: "ROW"
    },
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $Procedurefl$$Buttonfl_ = FlexLayout($Procedurefl$$Buttonfl);

function $Procedurefl$$Buttonfl$$CancelButton(_super, pageInstance) {
  _super(this, {
    text: "Cancel Work Order"
  });
  pageInstance.cancelButton = this;
}
$Procedurefl$$Buttonfl$$CancelButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 208, 2, 27, 1 )",
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Procedurefl$$Buttonfl$$CancelButton_ = Button($Procedurefl$$Buttonfl$$CancelButton);

function $Procedurefl$$Buttonfl$$StartButton(_super, pageInstance) {
  _super(this, {
    text: "Start Procedure"
  });
  pageInstance.startButton = this;
}
$Procedurefl$$Buttonfl$$StartButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 2, 132, 51, 1 )",
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Procedurefl$$Buttonfl$$StartButton_ = Button($Procedurefl$$Buttonfl$$StartButton);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Procedures";

}

module && (module.exports = $ProceduresPage_);