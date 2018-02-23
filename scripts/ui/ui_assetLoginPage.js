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
const ImageView = extend(require('sf-core/ui/imageview'));
const Label = extend(require('sf-core/ui/label'));
const TextBox = extend(require('sf-core/ui/textbox'));
const Button = extend(require('sf-core/ui/button'));
const ActivityIndicator = extend(require('sf-core/ui/activityindicator'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $AssetLoginPage(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "loginfl", $Loginfl_, this);
  addChild.call(this, "footer", $Footer_, this);
  pageContextPatch(this, "assetLoginPage");
}
$AssetLoginPage.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      justifyContent: "SPACE_AROUND",
      alignContent: "STRETCH",
      alignItems: "STRETCH"
    }
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {
      android: {
        color: "rgba( 255, 255, 255, 1 )"
      },
      ios: {
        style: "DEFAULT"
      }
    }
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      visible: false
    }
  }
};
const $AssetLoginPage_ = Page($AssetLoginPage);

function $Loginfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "loginPageHeader", $Loginfl$$LoginPageHeader_, pageInstance);
  addChild.call(this, "userName", $Loginfl$$UserName_, pageInstance);
  addChild.call(this, "password", $Loginfl$$Password_, pageInstance);
  addChild.call(this, "signinbuttonfl", $Loginfl$$Signinbuttonfl_, pageInstance);
}
$Loginfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignContent: "CENTER"
    },
    height: null,
    marginLeft: 20,
    marginRight: 20,
    width: null
  }
};
const $Loginfl_ = FlexLayout($Loginfl);

function $Loginfl$$LoginPageHeader(_super, pageInstance) {
  _super(this);
  addChild.call(this, "imagefl", $Loginfl$$LoginPageHeader$$Imagefl_, pageInstance);
  addChild.call(this, "assetfl", $Loginfl$$LoginPageHeader$$Assetfl_, pageInstance);
  pageInstance.loginPageHeader = this;
}
$Loginfl$$LoginPageHeader.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "SPACE_BETWEEN",
      flexGrow: 4.5,
      alignSelf: "AUTO"
    },
    height: null,
    left: 0,
    maxHeight: null,
    right: null,
    top: 0,
    width: null
  }
};
const $Loginfl$$LoginPageHeader_ = FlexLayout($Loginfl$$LoginPageHeader);

function $Loginfl$$LoginPageHeader$$Imagefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dubaiImage", $Loginfl$$LoginPageHeader$$Imagefl$$DubaiImage_, pageInstance);
  pageInstance.imagefl = this;
}
$Loginfl$$LoginPageHeader$$Imagefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "STRETCH",
      flexGrow: 2,
      justifyContent: "CENTER",
      alignItems: "CENTER"
    },
    height: null,
    width: null
  }
};
const $Loginfl$$LoginPageHeader$$Imagefl_ = FlexLayout($Loginfl$$LoginPageHeader$$Imagefl);

function $Loginfl$$LoginPageHeader$$Imagefl$$DubaiImage(_super, pageInstance) {
  _super(this);
  pageInstance.dubaiImage = this;
}
$Loginfl$$LoginPageHeader$$Imagefl$$DubaiImage.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    borderWidth: null,
    height: 146.31076388888889,
    width: 187.50836407696758
  }
};
const $Loginfl$$LoginPageHeader$$Imagefl$$DubaiImage_ = ImageView($Loginfl$$LoginPageHeader$$Imagefl$$DubaiImage);

function $Loginfl$$LoginPageHeader$$Assetfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "astLabel1", $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel1_, pageInstance);
  addChild.call(this, "astLabel2", $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel2_, pageInstance);
}
$Loginfl$$LoginPageHeader$$Assetfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "STRETCH",
      flexGrow: 1,
      justifyContent: "FLEX_START"
    },
    height: null,
    width: null
  }
};
const $Loginfl$$LoginPageHeader$$Assetfl_ = FlexLayout($Loginfl$$LoginPageHeader$$Assetfl);

function $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel1(_super, pageInstance) {
  _super(this, {
    text: "Asset"
  });
}
$Loginfl$$LoginPageHeader$$Assetfl$$AstLabel1.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 2
    },
    font: {
      family: "Lato",
      bold: true,
      size: 30
    },
    height: null,
    textColor: "rgba( 248, 7, 7, 1 )",
    width: null
  }
};
const $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel1_ = Label($Loginfl$$LoginPageHeader$$Assetfl$$AstLabel1);

function $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel2(_super, pageInstance) {
  _super(this, {
    text: "Management"
  });
}
$Loginfl$$LoginPageHeader$$Assetfl$$AstLabel2.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 4
    },
    font: {
      size: 30,
      family: "Lato"
    },
    height: null,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 74, 74, 74, 0.8 )",
    width: null
  }
};
const $Loginfl$$LoginPageHeader$$Assetfl$$AstLabel2_ = Label($Loginfl$$LoginPageHeader$$Assetfl$$AstLabel2);

function $Loginfl$$UserName(_super, pageInstance) {
  _super(this);
  addChild.call(this, "userNameLbl", $Loginfl$$UserName$$UserNameLbl_, pageInstance);
  addChild.call(this, "userTextBox", $Loginfl$$UserName$$UserTextBox_, pageInstance);
  addChild.call(this, "userNameLine", $Loginfl$$UserName$$UserNameLine_, pageInstance);
  pageInstance.userName = this;
}
$Loginfl$$UserName.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    height: 30,
    left: 0,
    maxHeight: null,
    top: 0,
    width: null
  }
};
const $Loginfl$$UserName_ = FlexLayout($Loginfl$$UserName);

function $Loginfl$$UserName$$UserNameLbl(_super, pageInstance) {
  _super(this, {
    text: "USERNAME"
  });
  pageInstance.userNameLbl = this;
}
$Loginfl$$UserName$$UserNameLbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    font: {
      size: 16,
      family: "Nunito",
      bold: false,
      italic: false
    },
    height: 21,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 160, 160, 160, 1 )",
    width: null
  }
};
const $Loginfl$$UserName$$UserNameLbl_ = Label($Loginfl$$UserName$$UserNameLbl);

function $Loginfl$$UserName$$UserTextBox(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.userTextBox = this;
}
$Loginfl$$UserName$$UserTextBox.$$styleContext = {
  classNames: ".textBox",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 197, 197, 197, 1 )",
    font: {
      family: "Nunito"
    },
    height: 40,
    textColor: "rgba( 63, 63, 63, 1 )",
    width: null
  }
};
const $Loginfl$$UserName$$UserTextBox_ = TextBox($Loginfl$$UserName$$UserTextBox);

function $Loginfl$$UserName$$UserNameLine(_super, pageInstance) {
  _super(this);
  pageInstance.userNameLine = this;
}
$Loginfl$$UserName$$UserNameLine.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 226, 226, 226, 1 )",
    borderColor: "rgba( 226, 226, 226, 1 )",
    borderWidth: 0,
    height: 1,
    width: null
  }
};
const $Loginfl$$UserName$$UserNameLine_ = FlexLayout($Loginfl$$UserName$$UserNameLine);

function $Loginfl$$Password(_super, pageInstance) {
  _super(this);
  addChild.call(this, "passwordLbl", $Loginfl$$Password$$PasswordLbl_, pageInstance);
  addChild.call(this, "passwordTextBox", $Loginfl$$Password$$PasswordTextBox_, pageInstance);
  addChild.call(this, "passwordLine", $Loginfl$$Password$$PasswordLine_, pageInstance);
  addChild.call(this, "forgotYourPasswordLbl", $Loginfl$$Password$$ForgotYourPasswordLbl_, pageInstance);
  pageInstance.password = this;
}
$Loginfl$$Password.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: null,
    flexProps: {
      flexGrow: 2
    },
    height: null,
    left: 0,
    maxHeight: null,
    top: 0,
    width: null
  }
};
const $Loginfl$$Password_ = FlexLayout($Loginfl$$Password);

function $Loginfl$$Password$$PasswordLbl(_super, pageInstance) {
  _super(this, {
    text: "PASSWORD"
  });
  pageInstance.passwordLbl = this;
}
$Loginfl$$Password$$PasswordLbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    font: {
      size: 16,
      family: "Nunito"
    },
    height: 21,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 160, 160, 160, 1 )",
    width: null
  }
};
const $Loginfl$$Password$$PasswordLbl_ = Label($Loginfl$$Password$$PasswordLbl);

function $Loginfl$$Password$$PasswordTextBox(_super, pageInstance) {
  _super(this, {
    isPassword: true,
    text: ""
  });
  pageInstance.passwordTextBox = this;
}
$Loginfl$$Password$$PasswordTextBox.$$styleContext = {
  classNames: ".textBox",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 197, 197, 197, 1 )",
    font: {
      family: "Nunito"
    },
    height: 40,
    textColor: "rgba( 63, 63, 63, 1 )",
    top: null,
    width: null
  }
};
const $Loginfl$$Password$$PasswordTextBox_ = TextBox($Loginfl$$Password$$PasswordTextBox);

function $Loginfl$$Password$$PasswordLine(_super, pageInstance) {
  _super(this);
}
$Loginfl$$Password$$PasswordLine.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 226, 226, 226, 1 )",
    borderColor: "rgba( 226, 226, 226, 1 )",
    borderWidth: 0,
    height: 1,
    width: null
  }
};
const $Loginfl$$Password$$PasswordLine_ = FlexLayout($Loginfl$$Password$$PasswordLine);

function $Loginfl$$Password$$ForgotYourPasswordLbl(_super, pageInstance) {
  _super(this, {
    text: "Forgot Password"
  });
}
$Loginfl$$Password$$ForgotYourPasswordLbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "FLEX_END"
    },
    font: {
      size: 14,
      family: "Nunito"
    },
    height: 30,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 153, 153, 153, 1 )",
    top: -30,
    visible: false,
    width: 120
  }
};
const $Loginfl$$Password$$ForgotYourPasswordLbl_ = Label($Loginfl$$Password$$ForgotYourPasswordLbl);

function $Loginfl$$Signinbuttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "loginButton", $Loginfl$$Signinbuttonfl$$LoginButton_, pageInstance);
  addChild.call(this, "signinIndicator", $Loginfl$$Signinbuttonfl$$SigninIndicator_, pageInstance);
  pageInstance.signinbuttonfl = this;
}
$Loginfl$$Signinbuttonfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 208, 2, 27, 1 )",
    flexProps: {
      flexGrow: 1,
      flexDirection: "ROW_REVERSE",
      justifyContent: "FLEX_END",
      alignItems: "CENTER"
    },
    height: null,
    left: 0,
    top: 0,
    width: null
  }
};
const $Loginfl$$Signinbuttonfl_ = FlexLayout($Loginfl$$Signinbuttonfl);

function $Loginfl$$Signinbuttonfl$$LoginButton(_super, pageInstance) {
  _super(this, {
    text: "Sign In"
  });
  pageInstance.loginButton = this;
}
$Loginfl$$Signinbuttonfl$$LoginButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    font: {
      family: "Lato",
      bold: true
    },
    height: null,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $Loginfl$$Signinbuttonfl$$LoginButton_ = Button($Loginfl$$Signinbuttonfl$$LoginButton);

function $Loginfl$$Signinbuttonfl$$SigninIndicator(_super, pageInstance) {
  _super(this);
  pageInstance.signinIndicator = this;
}
$Loginfl$$Signinbuttonfl$$SigninIndicator.$$styleContext = {
  classNames: ".activityIndicator",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    marginLeft: 20,
    visible: false
  }
};
const $Loginfl$$Signinbuttonfl$$SigninIndicator_ = ActivityIndicator($Loginfl$$Signinbuttonfl$$SigninIndicator);

function $Footer(_super, pageInstance) {
  _super(this);
}
$Footer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    height: 70,
    width: 355.55555555555554
  }
};
const $Footer_ = FlexLayout($Footer);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Login";

}

module && (module.exports = $AssetLoginPage_);