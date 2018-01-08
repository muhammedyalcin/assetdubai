/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const AssetLoginPageDesign = require('ui/ui_assetLoginPage');
const Router = require("sf-core/ui/router");
const Lgn = require("../lib/lgn");
var lgn = new Lgn();
const fingerprint = require("sf-extension-utils").fingerprint;
const User = require("../model/user");
const rau = require("sf-extension-utils").rau;
const FlexLayout = require("sf-core/ui/flexlayout");
const ActivityIndicator = require('sf-core/ui/activityindicator');
const Color = require('sf-core/ui/color');
const Timer = require("sf-core/global/timer");

const AssetLoginPage = extend(AssetLoginPageDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow);

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */

var signinIndicator;

function onShow(superOnShow) {
  superOnShow();

  var page = this;
  this.passwordLbl.text = lang["assetLoginPage.password"];
  this.userNameLbl.text = lang["assetLoginPage.username"];
  this.loginButton.text = lang["assetLoginPage.button.signin"];


  this.userTextBox.ios.clearButtonEnabled = true;
  this.passwordTextBox.ios.clearButtonEnabled = true;

  signinIndicator = this.signinIndicator;

  console.log("this.userTextBox " + page.userTextBox.text + " this.passwordTextBox: " + page.passwordTextBox.text);
  fingerprint.init({
    userNameTextBox: this.userTextBox,
    passwordTextBox: this.passwordTextBox,
    autoLogin: true,
    callback: function(err, fingerprintResult) {
      var password = "";
      if (err) {
        console.log("password is before " + page.passwordTextBox.text);
        password = page.passwordTextBox.text;
        console.log("password is after" + password);
      }
      else password = fingerprintResult.password;

      if (!password)
        return alert(lang["assetLoginPage.password.error"]);

      doLogin(page.userTextBox.text, password, function(err, userData) {
        if (err) {
          return;
        }
        User.currentUser = userData;
        console.log("userData is " + User.currentUser);
        Router.sliderDrawer.setCurrentData();
        fingerprintResult && fingerprintResult.success();
        Timer.setTimeout({
          delay: 1000,
          task: function() {
            signinIndicator.visible = false;
            loginSucceed();
          }
        });
        
      });
    }.bind(this)

  });
  rau.checkUpdate();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  const page = this;

  const signinAction = signin.bind(this.loginButton, this);
  page.loginButton.onPress = signinAction;

  page.dubaiImage.onTouch = function() {
    page.userTextBox.text = "smartface";
    page.passwordTextBox.text = "asd123";
  }.bind(this);

}

function signin(page) {
  
  if (page.userTextBox.text === "") {
    alert(lang["assetLoginPage.username.error"]);
    return;
  }
  fingerprint.loginWithFingerprint();
}

function doLogin(username, pwd, callback) {
  signinIndicator.visible = true;
  lgn.login(username, pwd, function(err, userdata) {
    if (err) {
      alert(lang["assetLoginPage.invalidLogin"]);
    }
    callback && callback(err, userdata);
  });

}

function loginSucceed() {
  Router.go("dashboardPg", {
    message: "Second pages is onLoad"
  });
}

module && (module.exports = AssetLoginPage);
