/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const AssetLoginPageDesign = require('ui/ui_assetLoginPage');
const Router = require("sf-core/ui/router");
const Lgn = require("../lib/lgn");
var lgn = new Lgn();
const fingerprint = require("sf-extension-utils").fingerprint;
const User = require("../model/user");

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

 
function onShow(superOnShow) {
  superOnShow();
  const page= this;

  fingerprint.init({
    userNameTextBox: this.userTextBox,
    passwordTextBox: this.passwordTextBox,
    autoLogin: true,
    callback: function(err, fingerprintResult) {
      var password;
      if (err) {
        password = page.passwordTextBox.text;
      }
      else password = fingerprintResult.password;

      if (!password)
        return alert("password is required");

      doLogin(page.userTextBox.text, password, function(err, userData) {
        if (err) {
          return;
        }
        User.currentUser = userData;
        fingerprintResult && fingerprintResult.success();
        loginSucceed();
      });
    }

  });
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  const page = this;
  
  const signinAction = signin.bind(this.loginButton,this);
  page.loginButton.onPress = signinAction;
}

function signin(page) {
  //console.log(this.password.passwordInput.text);
  if (page.userTextBox.text === "") {
    alert("you must enter username");
    return;
  }
  fingerprint.loginWithFingerprint();
}

function doLogin(username, pwd, callback) {
  lgn.login(username, pwd, function(err, userdata) {
    if (err) {
      alert("Invalid login");
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
