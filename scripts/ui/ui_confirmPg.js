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
const Label = extend(require('sf-core/ui/label'));
const Button = extend(require('sf-core/ui/button'));

const Yesfl = extend(require("../components/Yesfl"));
const Nofl = extend(require("../components/Nofl"));
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
function $ConfirmPg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "confirmContainer", $ConfirmContainer_, this);
  addChild.call(this, "completefl", $Completefl_, this);
  pageContextPatch(this, "confirmPg");
}
$ConfirmPg.$$styleContext = {
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
const $ConfirmPg_ = Page($ConfirmPg);

function $ConfirmContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timefl", $ConfirmContainer$$Timefl_, pageInstance);
  addChild.call(this, "stepcompfl", $ConfirmContainer$$Stepcompfl_, pageInstance);
  addChild.call(this, "addfl", $ConfirmContainer$$Addfl_, pageInstance);
  addChild.call(this, "comfirmPlaceHolder", $ConfirmContainer$$ComfirmPlaceHolder_, pageInstance);
  pageInstance.confirmContainer = this;
}
$ConfirmContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 70,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 10,
    right: 10,
    top: 12.222222222222221,
    width: null
  }
};
const $ConfirmContainer_ = FlexLayout($ConfirmContainer);

function $ConfirmContainer$$Timefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "compLabel", $ConfirmContainer$$Timefl$$CompLabel_, pageInstance);
  addChild.call(this, "timeContainer", $ConfirmContainer$$Timefl$$TimeContainer_, pageInstance);
  addChild.call(this, "line", $ConfirmContainer$$Timefl$$Line_, pageInstance);
  pageInstance.timefl = this;
}
$ConfirmContainer$$Timefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0.8
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Timefl_ = FlexLayout($ConfirmContainer$$Timefl);

function $ConfirmContainer$$Timefl$$CompLabel(_super, pageInstance) {
  _super(this, {
    text: "Work Order Completed at"
  });
  pageInstance.compLabel = this;
}
$ConfirmContainer$$Timefl$$CompLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato",
      bold: false
    },
    height: null,
    textColor: "rgba( 208, 2, 27, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Timefl$$CompLabel_ = Label($ConfirmContainer$$Timefl$$CompLabel);

function $ConfirmContainer$$Timefl$$TimeContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timeValuefl", $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl_, pageInstance);
  addChild.call(this, "datefl", $ConfirmContainer$$Timefl$$TimeContainer$$Datefl_, pageInstance);
}
$ConfirmContainer$$Timefl$$TimeContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1,
      flexDirection: "ROW"
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Timefl$$TimeContainer_ = FlexLayout($ConfirmContainer$$Timefl$$TimeContainer);

function $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timeLabel", $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel_, pageInstance);
}
$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl_ = FlexLayout($ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl);

function $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel(_super, pageInstance) {
  _super(this, {
    text: "6:30 pm"
  });
  pageInstance.timeLabel = this;
}
$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      size: 14,
      family: "Lato"
    },
    height: null,
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel_ = Label($ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel);

function $ConfirmContainer$$Timefl$$TimeContainer$$Datefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dateLabel", $ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel_, pageInstance);
}
$ConfirmContainer$$Timefl$$TimeContainer$$Datefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 4
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Timefl$$TimeContainer$$Datefl_ = FlexLayout($ConfirmContainer$$Timefl$$TimeContainer$$Datefl);

function $ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel(_super, pageInstance) {
  _super(this, {
    text: "14.09.17"
  });
  pageInstance.dateLabel = this;
}
$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato",
      size: 14
    },
    height: null,
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel_ = Label($ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel);

function $ConfirmContainer$$Timefl$$Line(_super, pageInstance) {
  _super(this);
}
$ConfirmContainer$$Timefl$$Line.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 0.31,
    backgroundColor: "rgba( 151, 151, 151, 1 )",
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 1,
    left: 0,
    right: 0,
    width: null
  }
};
const $ConfirmContainer$$Timefl$$Line_ = FlexLayout($ConfirmContainer$$Timefl$$Line);

function $ConfirmContainer$$Stepcompfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "stepTitleLabe", $ConfirmContainer$$Stepcompfl$$StepTitleLabe_, pageInstance);
  addChild.call(this, "stepLabel1", $ConfirmContainer$$Stepcompfl$$StepLabel1_, pageInstance);
  addChild.call(this, "stepLabel2", $ConfirmContainer$$Stepcompfl$$StepLabel2_, pageInstance);
  addChild.call(this, "stepLabel3", $ConfirmContainer$$Stepcompfl$$StepLabel3_, pageInstance);
  addChild.call(this, "placeHolder", $ConfirmContainer$$Stepcompfl$$PlaceHolder_, pageInstance);
  addChild.call(this, "line", $ConfirmContainer$$Stepcompfl$$Line_, pageInstance);
  pageInstance.stepcompfl = this;
}
$ConfirmContainer$$Stepcompfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1.5
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl_ = FlexLayout($ConfirmContainer$$Stepcompfl);

function $ConfirmContainer$$Stepcompfl$$StepTitleLabe(_super, pageInstance) {
  _super(this, {
    text: "Step Completed"
  });
  pageInstance.stepTitleLabe = this;
}
$ConfirmContainer$$Stepcompfl$$StepTitleLabe.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1.5
    },
    font: {
      bold: false,
      family: "Lato"
    },
    height: null,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 208, 2, 27, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$StepTitleLabe_ = Label($ConfirmContainer$$Stepcompfl$$StepTitleLabe);

function $ConfirmContainer$$Stepcompfl$$StepLabel1(_super, pageInstance) {
  _super(this, {
    text: "Test Closure Time"
  });
  pageInstance.stepLabel1 = this;
}
$ConfirmContainer$$Stepcompfl$$StepLabel1.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      size: 14
    },
    height: null,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$StepLabel1_ = Label($ConfirmContainer$$Stepcompfl$$StepLabel1);

function $ConfirmContainer$$Stepcompfl$$StepLabel2(_super, pageInstance) {
  _super(this, {
    text: "Acoustic Test"
  });
  pageInstance.stepLabel2 = this;
}
$ConfirmContainer$$Stepcompfl$$StepLabel2.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato",
      size: 14
    },
    height: null,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$StepLabel2_ = Label($ConfirmContainer$$Stepcompfl$$StepLabel2);

function $ConfirmContainer$$Stepcompfl$$StepLabel3(_super, pageInstance) {
  _super(this, {
    text: "Infrared Camera"
  });
  pageInstance.stepLabel3 = this;
}
$ConfirmContainer$$Stepcompfl$$StepLabel3.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato",
      size: 14
    },
    height: null,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$StepLabel3_ = Label($ConfirmContainer$$Stepcompfl$$StepLabel3);

function $ConfirmContainer$$Stepcompfl$$PlaceHolder(_super, pageInstance) {
  _super(this);
}
$ConfirmContainer$$Stepcompfl$$PlaceHolder.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0.7
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$PlaceHolder_ = FlexLayout($ConfirmContainer$$Stepcompfl$$PlaceHolder);

function $ConfirmContainer$$Stepcompfl$$Line(_super, pageInstance) {
  _super(this);
}
$ConfirmContainer$$Stepcompfl$$Line.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 0.31,
    backgroundColor: "rgba( 151, 151, 151, 1 )",
    bottom: 0,
    height: 1,
    left: 0,
    right: 0,
    width: null
  }
};
const $ConfirmContainer$$Stepcompfl$$Line_ = FlexLayout($ConfirmContainer$$Stepcompfl$$Line);

function $ConfirmContainer$$Addfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "labelfl", $ConfirmContainer$$Addfl$$Labelfl_, pageInstance);
  addChild.call(this, "buttonfl", $ConfirmContainer$$Addfl$$Buttonfl_, pageInstance);
  pageInstance.addfl = this;
}
$ConfirmContainer$$Addfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 2
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Addfl_ = FlexLayout($ConfirmContainer$$Addfl);

function $ConfirmContainer$$Addfl$$Labelfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "compTitle", $ConfirmContainer$$Addfl$$Labelfl$$CompTitle_, pageInstance);
  addChild.call(this, "compDescTitle", $ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle_, pageInstance);
}
$ConfirmContainer$$Addfl$$Labelfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0.7
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Labelfl_ = FlexLayout($ConfirmContainer$$Addfl$$Labelfl);

function $ConfirmContainer$$Addfl$$Labelfl$$CompTitle(_super, pageInstance) {
  _super(this, {
    text: "Additional Actions"
  });
  pageInstance.compTitle = this;
}
$ConfirmContainer$$Addfl$$Labelfl$$CompTitle.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    font: {
      family: "Lato"
    },
    height: 40,
    left: 0,
    multiline: true,
    right: 0,
    textColor: "rgba( 208, 2, 27, 1 )",
    top: 0,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Labelfl$$CompTitle_ = Label($ConfirmContainer$$Addfl$$Labelfl$$CompTitle);

function $ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle(_super, pageInstance) {
  _super(this, {
    text: "Do you want to create a new work order for valve cleaning ?"
  });
  pageInstance.compDescTitle = this;
}
$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      size: 14,
      family: "Lato"
    },
    height: null,
    multiline: true,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 61, 59, 58, 1 )",
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle_ = Label($ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle);

function $ConfirmContainer$$Addfl$$Buttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "yesButton", $ConfirmContainer$$Addfl$$Buttonfl$$YesButton_, pageInstance);
  addChild.call(this, "middlePlaceHolder", $ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder_, pageInstance);
  addChild.call(this, "noButton", $ConfirmContainer$$Addfl$$Buttonfl$$NoButton_, pageInstance);
  addChild.call(this, "yesfl", $ConfirmContainer$$Addfl$$Buttonfl$$Yesfl_, pageInstance);
  addChild.call(this, "nofl", $ConfirmContainer$$Addfl$$Buttonfl$$Nofl_, pageInstance);
}
$ConfirmContainer$$Addfl$$Buttonfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0.6,
      flexDirection: "ROW",
      alignSelf: "AUTO",
      alignItems: "STRETCH",
      justifyContent: "FLEX_START",
      alignContent: "STRETCH"
    },
    height: null,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl_ = FlexLayout($ConfirmContainer$$Addfl$$Buttonfl);

function $ConfirmContainer$$Addfl$$Buttonfl$$YesButton(_super, pageInstance) {
  _super(this, {
    text: "Yes"
  });
  pageInstance.yesButton = this;
}
$ConfirmContainer$$Addfl$$Buttonfl$$YesButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 2, 132, 51, 1 )",
    borderColor: "rgba( 151, 151, 151, 0.31 )",
    borderWidth: 1,
    flexProps: {
      flexGrow: 0
    },
    font: {
      family: "Lato"
    },
    height: null,
    marginBottom: 2,
    textColor: "rgba( 255, 255, 255, 1 )",
    visible: false,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl$$YesButton_ = Button($ConfirmContainer$$Addfl$$Buttonfl$$YesButton);

function $ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder(_super, pageInstance) {
  _super(this);
}
$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0
    },
    height: null,
    visible: false,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder_ = FlexLayout($ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder);

function $ConfirmContainer$$Addfl$$Buttonfl$$NoButton(_super, pageInstance) {
  _super(this, {
    text: "No"
  });
  pageInstance.noButton = this;
}
$ConfirmContainer$$Addfl$$Buttonfl$$NoButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 151, 151, 151, 0.31 )",
    borderWidth: 1,
    flexProps: {
      flexGrow: 0
    },
    font: {
      family: "Lato"
    },
    height: null,
    marginBottom: 2,
    textColor: "rgba( 61, 59, 58, 1 )",
    visible: false,
    width: null
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl$$NoButton_ = Button($ConfirmContainer$$Addfl$$Buttonfl$$NoButton);

function $ConfirmContainer$$Addfl$$Buttonfl$$Yesfl(_super, pageInstance) {
  _super(this);
  pageInstance.yesfl = this;
}
$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      justifyContent: "CENTER",
      flexDirection: "ROW",
      positionType: "ABSOLUTE"
    },
    height: 50,
    left: 80,
    top: 0,
    width: 80
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl$$Yesfl_ = Yesfl($ConfirmContainer$$Addfl$$Buttonfl$$Yesfl);

function $ConfirmContainer$$Addfl$$Buttonfl$$Nofl(_super, pageInstance) {
  _super(this);
  pageInstance.nofl = this;
}
$ConfirmContainer$$Addfl$$Buttonfl$$Nofl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      justifyContent: "CENTER",
      flexDirection: "ROW",
      positionType: "ABSOLUTE"
    },
    height: 50,
    left: 0,
    right: 0,
    top: 0,
    width: 80
  }
};
const $ConfirmContainer$$Addfl$$Buttonfl$$Nofl_ = Nofl($ConfirmContainer$$Addfl$$Buttonfl$$Nofl);

function $ConfirmContainer$$ComfirmPlaceHolder(_super, pageInstance) {
  _super(this);
}
$ConfirmContainer$$ComfirmPlaceHolder.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    height: null,
    visible: false,
    width: null
  }
};
const $ConfirmContainer$$ComfirmPlaceHolder_ = FlexLayout($ConfirmContainer$$ComfirmPlaceHolder);

function $Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Completefl.$$styleContext = {
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
const $Completefl_ = Completefl($Completefl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Complete Work Order";

}

module && (module.exports = $ConfirmPg_);