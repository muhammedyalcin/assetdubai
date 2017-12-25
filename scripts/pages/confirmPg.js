/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const ConfirmPgDesign = require('ui/ui_confirmPg');
const Router = require("sf-core/ui/router");
const Color = require("sf-core/ui/color");

const ConfirmPg = extend(ConfirmPgDesign)(
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
  this.headerBar.itemColor = Color.create("#D5D4D4");
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  
  this.completefl.completeButton.text = "Confirm Status";
  this.completefl.completeButton.onPress = completBtn_onPress.bind(this);
}

function completBtn_onPress(){
  Router.go("assetPg");
}

module && (module.exports = ConfirmPg);