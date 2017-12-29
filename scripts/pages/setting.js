/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const SettingDesign = require('ui/ui_setting');
const Router = require("sf-core/ui/router");
const User = require("../model/user");

const Setting = extend(SettingDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();

  var page = this;
  
  this.headerBar.title = lang["setting.title"];
  this.signoutLabel.text = lang["signout"];

  page.signoutLabel.onTouch = function() {
    User.currentUser = null;
    Router.sliderDrawer.enabled = false;
    Router.go("assetLoginPage");
  }.bind(this);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  Router.sliderDrawer.setLeftItem(this.headerBar);
}

module && (module.exports = Setting);
