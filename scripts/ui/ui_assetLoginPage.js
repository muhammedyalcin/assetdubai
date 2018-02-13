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
  addChild.call(this, "loginPageHeader", $LoginPageHeader_, this);
  addChild.call(this, "userName", $UserName_, this);
  addChild.call(this, "password", $Password_, this);
  addChild.call(this, "signinbuttonfl", $Signinbuttonfl_, this);
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
    },
    paddingBottom: null,
    paddingLeft: 20,
    paddingRight: 20
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

function $LoginPageHeader(_super, pageInstance) {
  _super(this);
  addChild.call(this, "imagefl", $LoginPageHeader$$Imagefl_, pageInstance);
  addChild.call(this, "assetfl", $LoginPageHeader$$Assetfl_, pageInstance);
  pageInstance.loginPageHeader = this;
}
$LoginPageHeader.$$styleContext = {
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
    maxHeight: null,
    right: null,
    width: null
  }
};
const $LoginPageHeader_ = FlexLayout($LoginPageHeader);

function $LoginPageHeader$$Imagefl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dubaiImage", $LoginPageHeader$$Imagefl$$DubaiImage_, pageInstance);
  pageInstance.imagefl = this;
}
$LoginPageHeader$$Imagefl.$$styleContext = {
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
const $LoginPageHeader$$Imagefl_ = FlexLayout($LoginPageHeader$$Imagefl);

function $LoginPageHeader$$Imagefl$$DubaiImage(_super, pageInstance) {
  _super(this);
  pageInstance.dubaiImage = this;
}
$LoginPageHeader$$Imagefl$$DubaiImage.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    borderWidth: null,
    height: 146.31076388888889,
    width: 187.50836407696758
  }
};
const $LoginPageHeader$$Imagefl$$DubaiImage_ = ImageView($LoginPageHeader$$Imagefl$$DubaiImage);

function $LoginPageHeader$$Assetfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "astLabel1", $LoginPageHeader$$Assetfl$$AstLabel1_, pageInstance);
  addChild.call(this, "astLabel2", $LoginPageHeader$$Assetfl$$AstLabel2_, pageInstance);
}
$LoginPageHeader$$Assetfl.$$styleContext = {
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
const $LoginPageHeader$$Assetfl_ = FlexLayout($LoginPageHeader$$Assetfl);

function $LoginPageHeader$$Assetfl$$AstLabel1(_super, pageInstance) {
  _super(this, {
    text: "Asset"
  });
}
$LoginPageHeader$$Assetfl$$AstLabel1.$$styleContext = {
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
const $LoginPageHeader$$Assetfl$$AstLabel1_ = Label($LoginPageHeader$$Assetfl$$AstLabel1);

function $LoginPageHeader$$Assetfl$$AstLabel2(_super, pageInstance) {
  _super(this, {
    text: "Management"
  });
}
$LoginPageHeader$$Assetfl$$AstLabel2.$$styleContext = {
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
const $LoginPageHeader$$Assetfl$$AstLabel2_ = Label($LoginPageHeader$$Assetfl$$AstLabel2);

function $UserName(_super, pageInstance) {
  _super(this);
  addChild.call(this, "userNameLbl", $UserName$$UserNameLbl_, pageInstance);
  addChild.call(this, "userTextBox", $UserName$$UserTextBox_, pageInstance);
  addChild.call(this, "userNameLine", $UserName$$UserNameLine_, pageInstance);
  pageInstance.userName = this;
}
$UserName.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    height: 30,
    maxHeight: null,
    width: null
  }
};
const $UserName_ = FlexLayout($UserName);

function $UserName$$UserNameLbl(_super, pageInstance) {
  _super(this, {
    text: "USERNAME"
  });
  pageInstance.userNameLbl = this;
}
$UserName$$UserNameLbl.$$styleContext = {
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
const $UserName$$UserNameLbl_ = Label($UserName$$UserNameLbl);

function $UserName$$UserTextBox(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.userTextBox = this;
}
$UserName$$UserTextBox.$$styleContext = {
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
const $UserName$$UserTextBox_ = TextBox($UserName$$UserTextBox);

function $UserName$$UserNameLine(_super, pageInstance) {
  _super(this);
  pageInstance.userNameLine = this;
}
$UserName$$UserNameLine.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 226, 226, 226, 1 )",
    borderColor: "rgba( 226, 226, 226, 1 )",
    borderWidth: 0,
    height: 1,
    width: null
  }
};
const $UserName$$UserNameLine_ = FlexLayout($UserName$$UserNameLine);

function $Password(_super, pageInstance) {
  _super(this);
  addChild.call(this, "passwordLbl", $Password$$PasswordLbl_, pageInstance);
  addChild.call(this, "passwordTextBox", $Password$$PasswordTextBox_, pageInstance);
  addChild.call(this, "passwordLine", $Password$$PasswordLine_, pageInstance);
  addChild.call(this, "forgotYourPasswordLbl", $Password$$ForgotYourPasswordLbl_, pageInstance);
  pageInstance.password = this;
}
$Password.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: null,
    flexProps: {
      flexGrow: 2
    },
    height: null,
    maxHeight: null,
    top: null,
    width: null
  }
};
const $Password_ = FlexLayout($Password);

function $Password$$PasswordLbl(_super, pageInstance) {
  _super(this, {
    text: "PASSWORD"
  });
  pageInstance.passwordLbl = this;
}
$Password$$PasswordLbl.$$styleContext = {
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
const $Password$$PasswordLbl_ = Label($Password$$PasswordLbl);

function $Password$$PasswordTextBox(_super, pageInstance) {
  _super(this, {
    isPassword: true,
    text: ""
  });
  pageInstance.passwordTextBox = this;
}
$Password$$PasswordTextBox.$$styleContext = {
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
const $Password$$PasswordTextBox_ = TextBox($Password$$PasswordTextBox);

function $Password$$PasswordLine(_super, pageInstance) {
  _super(this);
}
$Password$$PasswordLine.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 226, 226, 226, 1 )",
    borderColor: "rgba( 226, 226, 226, 1 )",
    borderWidth: 0,
    height: 1,
    width: null
  }
};
const $Password$$PasswordLine_ = FlexLayout($Password$$PasswordLine);

function $Password$$ForgotYourPasswordLbl(_super, pageInstance) {
  _super(this, {
    text: "Forgot Password"
  });
}
$Password$$ForgotYourPasswordLbl.$$styleContext = {
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
const $Password$$ForgotYourPasswordLbl_ = Label($Password$$ForgotYourPasswordLbl);

function $Signinbuttonfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "loginButton", $Signinbuttonfl$$LoginButton_, pageInstance);
  addChild.call(this, "signinIndicator", $Signinbuttonfl$$SigninIndicator_, pageInstance);
  pageInstance.signinbuttonfl = this;
}
$Signinbuttonfl.$$styleContext = {
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
    width: null
  }
};
const $Signinbuttonfl_ = FlexLayout($Signinbuttonfl);

function $Signinbuttonfl$$LoginButton(_super, pageInstance) {
  _super(this, {
    text: "Sign In"
  });
  pageInstance.loginButton = this;
}
$Signinbuttonfl$$LoginButton.$$styleContext = {
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
const $Signinbuttonfl$$LoginButton_ = Button($Signinbuttonfl$$LoginButton);

function $Signinbuttonfl$$SigninIndicator(_super, pageInstance) {
  _super(this);
  pageInstance.signinIndicator = this;
}
$Signinbuttonfl$$SigninIndicator.$$styleContext = {
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
const $Signinbuttonfl$$SigninIndicator_ = ActivityIndicator($Signinbuttonfl$$SigninIndicator);

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