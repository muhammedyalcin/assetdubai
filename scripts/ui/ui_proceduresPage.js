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
const ScrollView = extend(require('sf-core/ui/scrollview'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
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
  addChild.call(this, "procedureScroll", $ProcedureScroll_, this);
  addChild.call(this, "indicatorfl", $Indicatorfl_, this);
  addChild.call(this, "workIDfl1", $WorkIDfl1_, this);
  addChild.call(this, "buttonfl", $Buttonfl_, this);
  pageContextPatch(this, "proceduresPage");
}
$ProceduresPage.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "COLUMN_REVERSE",
      justifyContent: "CENTER",
      alignItems: "CENTER",
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

function $ProcedureScroll(_super, pageInstance) {
  _super(this);
  pageInstance.procedureScroll = this;
}
$ProcedureScroll.$$styleContext = {
  classNames: ".scrollView",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    visible: false,
    top: 80,
    bottom: 70,
    left: 0,
    right: 0,
    flexProps: {
      flexDirection: "COLUMN",
      positionType: "ABSOLUTE"
    }
  }
};
const $ProcedureScroll_ = ScrollView($ProcedureScroll);

function $Indicatorfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "proInfdicator", $Indicatorfl$$ProInfdicator_, pageInstance);
  pageInstance.indicatorfl = this;
}
$Indicatorfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    bottom: 70,
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      positionType: "ABSOLUTE",
      flexGrow: 1,
      alignItems: "CENTER",
      justifyContent: "CENTER"
    }
  }
};
const $Indicatorfl_ = FlexLayout($Indicatorfl);

function $Indicatorfl$$ProInfdicator(_super, pageInstance) {
  _super(this);
  pageInstance.proInfdicator = this;
}
$Indicatorfl$$ProInfdicator.$$styleContext = {
  classNames: ".activityIndicator",
  userProps: {}
};
const $Indicatorfl$$ProInfdicator_ = ActivityIndicator($Indicatorfl$$ProInfdicator);

function $WorkIDfl1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "workid1", $WorkIDfl1$$Workid1_, pageInstance);
  addChild.call(this, "workid2", $WorkIDfl1$$Workid2_, pageInstance);
  pageInstance.workIDfl1 = this;
}
$WorkIDfl1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    backgroundColor: "rgba( 216, 216, 216, 1 )",
    visible: true,
    left: 0,
    top: 0,
    right: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $WorkIDfl1_ = FlexLayout($WorkIDfl1);

function $WorkIDfl1$$Workid1(_super, pageInstance) {
  _super(this, {
    text: "Nothing"
  });
  pageInstance.workid1 = this;
}
$WorkIDfl1$$Workid1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    marginLeft: 30,
    textColor: "rgba( 74, 74, 74, 1 )",
    textAlignment: "MIDLEFT",
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $WorkIDfl1$$Workid1_ = Label($WorkIDfl1$$Workid1);

function $WorkIDfl1$$Workid2(_super, pageInstance) {
  _super(this, {
    text: "Nothing"
  });
  pageInstance.workid2 = this;
}
$WorkIDfl1$$Workid2.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    marginLeft: 30,
    textColor: "rgba( 74, 74, 74, 1 )",
    textAlignment: "TOPLEFT",
    font: {
      family: "Lato",
      size: 14
    },
    flexProps: {
      flexGrow: 0.7
    }
  }
};
const $WorkIDfl1$$Workid2_ = Label($WorkIDfl1$$Workid2);

function $Buttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "cancelButton", $Buttonfl$$CancelButton_, pageInstance);
  addChild.call(this, "startButton", $Buttonfl$$StartButton_, pageInstance);
  pageInstance.buttonfl = this;
}
$Buttonfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 74, 144, 226, 1 )",
    width: null,
    height: 70,
    left: 0,
    right: 0,
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE",
      flexDirection: "ROW"
    }
  }
};
const $Buttonfl_ = FlexLayout($Buttonfl);

function $Buttonfl$$CancelButton(_super, pageInstance) {
  _super(this, {
    text: "Cancel Work Order"
  });
  pageInstance.cancelButton = this;
}
$Buttonfl$$CancelButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 208, 2, 27, 1 )",
    flexProps: {
      flexGrow: 1
    }
  }
};
const $Buttonfl$$CancelButton_ = Button($Buttonfl$$CancelButton);

function $Buttonfl$$StartButton(_super, pageInstance) {
  _super(this, {
    text: "Start Procedure"
  });
  pageInstance.startButton = this;
}
$Buttonfl$$StartButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 2, 132, 51, 1 )",
    flexProps: {
      flexGrow: 1
    }
  }
};
const $Buttonfl$$StartButton_ = Button($Buttonfl$$StartButton);

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