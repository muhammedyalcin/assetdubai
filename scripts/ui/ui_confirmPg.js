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
  addChild.call(this, "confirmfl", $Confirmfl_, this);
  pageContextPatch(this, "confirmPg");
}
$ConfirmPg.$$styleContext = {
  classNames: ".page",
  userProps: {
    flexProps: {
      flexDirection: "COLUMN_REVERSE"
    }
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {
      visible: true
    }
  },
  headerBar: {
    classNames: ".headerBar .heahderBar-style1 .headerBar-style2",
    userProps: {
      titleColor: "rgba( 216, 215, 215, 1 )",
      visible: true
    }
  }
};
const $ConfirmPg_ = Page($ConfirmPg);

function $Confirmfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "confirmContainer", $Confirmfl$$ConfirmContainer_, pageInstance);
  addChild.call(this, "completefl", $Confirmfl$$Completefl_, pageInstance);
}
$Confirmfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      flexDirection: "COLUMN_REVERSE"
    },
    height: null,
    width: null
  }
};
const $Confirmfl_ = FlexLayout($Confirmfl);

function $Confirmfl$$ConfirmContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timefl", $Confirmfl$$ConfirmContainer$$Timefl_, pageInstance);
  addChild.call(this, "stepcompfl", $Confirmfl$$ConfirmContainer$$Stepcompfl_, pageInstance);
  addChild.call(this, "addfl", $Confirmfl$$ConfirmContainer$$Addfl_, pageInstance);
  addChild.call(this, "comfirmPlaceHolder", $Confirmfl$$ConfirmContainer$$ComfirmPlaceHolder_, pageInstance);
  pageInstance.confirmContainer = this;
}
$Confirmfl$$ConfirmContainer.$$styleContext = {
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
    top: 12,
    width: null
  }
};
const $Confirmfl$$ConfirmContainer_ = FlexLayout($Confirmfl$$ConfirmContainer);

function $Confirmfl$$ConfirmContainer$$Timefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "compLabel", $Confirmfl$$ConfirmContainer$$Timefl$$CompLabel_, pageInstance);
  addChild.call(this, "timeContainer", $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer_, pageInstance);
  addChild.call(this, "line", $Confirmfl$$ConfirmContainer$$Timefl$$Line_, pageInstance);
  pageInstance.timefl = this;
}
$Confirmfl$$ConfirmContainer$$Timefl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Timefl);

function $Confirmfl$$ConfirmContainer$$Timefl$$CompLabel(_super, pageInstance) {
  _super(this, {
    text: "Work Order Completed at"
  });
  pageInstance.compLabel = this;
}
$Confirmfl$$ConfirmContainer$$Timefl$$CompLabel.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$CompLabel_ = Label($Confirmfl$$ConfirmContainer$$Timefl$$CompLabel);

function $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timeValuefl", $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl_, pageInstance);
  addChild.call(this, "datefl", $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl_, pageInstance);
}
$Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer_ = FlexLayout($Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer);

function $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "timeLabel", $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel_, pageInstance);
}
$Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl);

function $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel(_super, pageInstance) {
  _super(this, {
    text: "6:30 pm"
  });
  pageInstance.timeLabel = this;
}
$Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel_ = Label($Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$TimeValuefl$$TimeLabel);

function $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dateLabel", $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel_, pageInstance);
}
$Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl);

function $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel(_super, pageInstance) {
  _super(this, {
    text: "14.09.17"
  });
  pageInstance.dateLabel = this;
}
$Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel_ = Label($Confirmfl$$ConfirmContainer$$Timefl$$TimeContainer$$Datefl$$DateLabel);

function $Confirmfl$$ConfirmContainer$$Timefl$$Line(_super, pageInstance) {
  _super(this);
}
$Confirmfl$$ConfirmContainer$$Timefl$$Line.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Timefl$$Line_ = FlexLayout($Confirmfl$$ConfirmContainer$$Timefl$$Line);

function $Confirmfl$$ConfirmContainer$$Stepcompfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "stepTitleLabe", $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepTitleLabe_, pageInstance);
  addChild.call(this, "stepLabel1", $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel1_, pageInstance);
  addChild.call(this, "stepLabel2", $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel2_, pageInstance);
  addChild.call(this, "stepLabel3", $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel3_, pageInstance);
  addChild.call(this, "placeHolder", $Confirmfl$$ConfirmContainer$$Stepcompfl$$PlaceHolder_, pageInstance);
  addChild.call(this, "line", $Confirmfl$$ConfirmContainer$$Stepcompfl$$Line_, pageInstance);
  pageInstance.stepcompfl = this;
}
$Confirmfl$$ConfirmContainer$$Stepcompfl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Stepcompfl);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepTitleLabe(_super, pageInstance) {
  _super(this, {
    text: "Step Completed"
  });
  pageInstance.stepTitleLabe = this;
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$StepTitleLabe.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepTitleLabe_ = Label($Confirmfl$$ConfirmContainer$$Stepcompfl$$StepTitleLabe);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel1(_super, pageInstance) {
  _super(this, {
    text: "Test Closure Time"
  });
  pageInstance.stepLabel1 = this;
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel1.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel1_ = Label($Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel1);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel2(_super, pageInstance) {
  _super(this, {
    text: "Acoustic Test"
  });
  pageInstance.stepLabel2 = this;
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel2.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel2_ = Label($Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel2);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel3(_super, pageInstance) {
  _super(this, {
    text: "Infrared Camera"
  });
  pageInstance.stepLabel3 = this;
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel3.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel3_ = Label($Confirmfl$$ConfirmContainer$$Stepcompfl$$StepLabel3);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$PlaceHolder(_super, pageInstance) {
  _super(this);
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$PlaceHolder.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$PlaceHolder_ = FlexLayout($Confirmfl$$ConfirmContainer$$Stepcompfl$$PlaceHolder);

function $Confirmfl$$ConfirmContainer$$Stepcompfl$$Line(_super, pageInstance) {
  _super(this);
}
$Confirmfl$$ConfirmContainer$$Stepcompfl$$Line.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Stepcompfl$$Line_ = FlexLayout($Confirmfl$$ConfirmContainer$$Stepcompfl$$Line);

function $Confirmfl$$ConfirmContainer$$Addfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "labelfl", $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl_, pageInstance);
  addChild.call(this, "buttonfl", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl_, pageInstance);
  pageInstance.addfl = this;
}
$Confirmfl$$ConfirmContainer$$Addfl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Addfl);

function $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "compTitle", $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompTitle_, pageInstance);
  addChild.call(this, "compDescTitle", $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle_, pageInstance);
}
$Confirmfl$$ConfirmContainer$$Addfl$$Labelfl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Addfl$$Labelfl);

function $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompTitle(_super, pageInstance) {
  _super(this, {
    text: "Additional Actions"
  });
  pageInstance.compTitle = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompTitle.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompTitle_ = Label($Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompTitle);

function $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle(_super, pageInstance) {
  _super(this, {
    text: "Do you want to create a new work order for valve cleaning ?"
  });
  pageInstance.compDescTitle = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle_ = Label($Confirmfl$$ConfirmContainer$$Addfl$$Labelfl$$CompDescTitle);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "yesButton", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$YesButton_, pageInstance);
  addChild.call(this, "middlePlaceHolder", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder_, pageInstance);
  addChild.call(this, "noButton", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$NoButton_, pageInstance);
  addChild.call(this, "yesfl", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl_, pageInstance);
  addChild.call(this, "nofl", $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Nofl_, pageInstance);
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl_ = FlexLayout($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$YesButton(_super, pageInstance) {
  _super(this, {
    text: "Yes"
  });
  pageInstance.yesButton = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$YesButton.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$YesButton_ = Button($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$YesButton);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder(_super, pageInstance) {
  _super(this);
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder_ = FlexLayout($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$MiddlePlaceHolder);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$NoButton(_super, pageInstance) {
  _super(this, {
    text: "No"
  });
  pageInstance.noButton = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$NoButton.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$NoButton_ = Button($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$NoButton);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl(_super, pageInstance) {
  _super(this);
  pageInstance.yesfl = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl_ = Yesfl($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Yesfl);

function $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Nofl(_super, pageInstance) {
  _super(this);
  pageInstance.nofl = this;
}
$Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Nofl.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Nofl_ = Nofl($Confirmfl$$ConfirmContainer$$Addfl$$Buttonfl$$Nofl);

function $Confirmfl$$ConfirmContainer$$ComfirmPlaceHolder(_super, pageInstance) {
  _super(this);
}
$Confirmfl$$ConfirmContainer$$ComfirmPlaceHolder.$$styleContext = {
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
const $Confirmfl$$ConfirmContainer$$ComfirmPlaceHolder_ = FlexLayout($Confirmfl$$ConfirmContainer$$ComfirmPlaceHolder);

function $Confirmfl$$Completefl(_super, pageInstance) {
  _super(this);
  pageInstance.completefl = this;
}
$Confirmfl$$Completefl.$$styleContext = {
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
    top: 0,
    width: null
  }
};
const $Confirmfl$$Completefl_ = Completefl($Confirmfl$$Completefl);

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