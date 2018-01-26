/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const SettingDesign = require('ui/ui_setting');
const Router = require("sf-core/ui/router");
const User = require("../model/user");
const AlertView = require("sf-core/ui/alertview");
const Data = require("sf-core/data");

const Setting = extend(SettingDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();

  const page = this;

  this.headerBar.title = lang["setting.title"];
  this.signoutLabel.text = lang["signout"];
  this.notificaitonfl.themeLabel.text = lang["setting.notifications"];

  page.signoutLabel.onTouch = function() {
    User.currentUser = null;
    Router.sliderDrawer.enabled = false;
    Router.go("assetLoginPage");
  }.bind(this);

  // if (Data.getStringVariable("theme") == "Style1") {
  //   page.themefl.style1fl.borderWidth = 1;
  //   page.themefl.style2fl.borderWidth = 0;
  // }
  // else {
  //   page.themefl.style1fl.borderWidth = 0;
  //   page.themefl.style2fl.borderWidth = 1;
  // }

  this.themefl.style1Color.onTouch = function() {
    changeTheme.call(page, "Style1");
  };

  this.themefl.style2Color.onTouch = function() {
    changeTheme.call(page, "Style2");
  };
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad && superOnLoad();
  Router.sliderDrawer.setLeftItem(this.headerBar);

  initCurrentTheme.call(this);
}

function changeTheme(style) {

  if (Data.getStringVariable("theme") === style) {
    return;
  }

  var confirmationAlert = new AlertView({
    title: lang["setting.confirmAlert.title"],
    message: lang["setting.confirmAlert.message"]
  });
  confirmationAlert.addButton({
    text: lang["yes"],
    type: AlertView.Android.ButtonType.POSITIVE,
    onClick: () => {
      this.themeContext({
        type: "changeTheme",
        theme: style
      });
      this.dispatch({
        type: "invalidate"
      });
      Data.setStringVariable("theme", style);

      initCurrentTheme.call(this);
    }
  });
  confirmationAlert.addButton({
    text: lang["no"],
    type: AlertView.Android.ButtonType.NEGATIVE
  });
  confirmationAlert.show();

}

function initCurrentTheme() {
  console.log("theme is "+ Data.getStringVariable("theme"));

  this.themefl.style2fl.dispatch({
    type: "updateUserStyle",
    userStyle: {
      borderWidth: Data.getStringVariable("theme") == "Style2" ? 1 : 0
    }
  });
  this.themefl.style1fl.dispatch({
    type: "updateUserStyle",
    userStyle: {
      borderWidth: Data.getStringVariable("theme") == "Style1" ? 1 : 0
    }
  });
}

module && (module.exports = Setting);
