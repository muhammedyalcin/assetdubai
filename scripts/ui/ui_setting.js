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

const Themefl = extend(require("../components/Themefl"));
const Notificaitonfl = extend(require("../components/Notificaitonfl"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $Setting(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "settingsfl", $Settingsfl_, this);
  pageContextPatch(this, "setting");
}
$Setting.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar .heahderBar-style1 .headerBar-style2",
    userProps: {
      titleColor: "rgba( 255, 255, 255, 1 )"
    }
  }
};
const $Setting_ = Page($Setting);

function $Settingsfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "themefl", $Settingsfl$$Themefl_, pageInstance);
  addChild.call(this, "notificaitonfl", $Settingsfl$$Notificaitonfl_, pageInstance);
  addChild.call(this, "aboutfl", $Settingsfl$$Aboutfl_, pageInstance);
  addChild.call(this, "signoutfl", $Settingsfl$$Signoutfl_, pageInstance);
  pageInstance.settingsfl = this;
}
$Settingsfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    left: 15,
    top: 10,
    right: 15,
    bottom: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $Settingsfl_ = FlexLayout($Settingsfl);

function $Settingsfl$$Themefl(_super, pageInstance) {
  _super(this);
  pageInstance.themefl = this;
}
$Settingsfl$$Themefl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $Settingsfl$$Themefl_ = Themefl($Settingsfl$$Themefl);

function $Settingsfl$$Notificaitonfl(_super, pageInstance) {
  _super(this);
  pageInstance.notificaitonfl = this;
}
$Settingsfl$$Notificaitonfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $Settingsfl$$Notificaitonfl_ = Notificaitonfl($Settingsfl$$Notificaitonfl);

function $Settingsfl$$Aboutfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "versionLabel", $Settingsfl$$Aboutfl$$VersionLabel_, pageInstance);
  addChild.call(this, "aboutLabel", $Settingsfl$$Aboutfl$$AboutLabel_, pageInstance);
  pageInstance.aboutfl = this;
}
$Settingsfl$$Aboutfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    marginBottom: 70,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    }
  }
};
const $Settingsfl$$Aboutfl_ = FlexLayout($Settingsfl$$Aboutfl);

function $Settingsfl$$Aboutfl$$VersionLabel(_super, pageInstance) {
  _super(this, {
    text: "New Version Avaliable!"
  });
  pageInstance.versionLabel = this;
}
$Settingsfl$$Aboutfl$$VersionLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: 50,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    visible: false,
    font: {
      family: "Lato"
    }
  }
};
const $Settingsfl$$Aboutfl$$VersionLabel_ = Label($Settingsfl$$Aboutfl$$VersionLabel);

function $Settingsfl$$Aboutfl$$AboutLabel(_super, pageInstance) {
  _super(this, {
    text: "About"
  });
  pageInstance.aboutLabel = this;
}
$Settingsfl$$Aboutfl$$AboutLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPLEFT",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $Settingsfl$$Aboutfl$$AboutLabel_ = Label($Settingsfl$$Aboutfl$$AboutLabel);

function $Settingsfl$$Signoutfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "signoutLabel", $Settingsfl$$Signoutfl$$SignoutLabel_, pageInstance);
  pageInstance.signoutfl = this;
}
$Settingsfl$$Signoutfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $Settingsfl$$Signoutfl_ = FlexLayout($Settingsfl$$Signoutfl);

function $Settingsfl$$Signoutfl$$SignoutLabel(_super, pageInstance) {
  _super(this, {
    text: "Sign out"
  });
  pageInstance.signoutLabel = this;
}
$Settingsfl$$Signoutfl$$SignoutLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    textAlignment: "MIDCENTER",
    width: null,
    height: null,
    textColor: "rgba( 208, 2, 27, 1 )",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $Settingsfl$$Signoutfl$$SignoutLabel_ = Label($Settingsfl$$Signoutfl$$SignoutLabel);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Settings";

}

module && (module.exports = $Setting_);