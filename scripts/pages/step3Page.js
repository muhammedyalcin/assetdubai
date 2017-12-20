/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Step3PageDesign = require('ui/ui_step3Page');
const Router = require("sf-core/ui/router");
const Tab = require("components/Tab");
const Label = require("sf-core/ui/label");
const TexAlignment = require("sf-core/ui/textalignment");
const FlexLayout = require("sf-core/ui/flexlayout");

const Step3Page = extend(Step3PageDesign)(
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
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();

  var tabIndicator = new Tab();
  var stepPage = this;

  stepPage.tab.summaryButton.onPress = function() {
    tabIndicator.animateRightButton = stepPage;
    //Write chaneable flex here
  }.bind(this);

  stepPage.tab.instructionButton.onPress = function() {
    tabIndicator.animateLeftButton = stepPage;
    //Write changeable flex here
  }.bind(this);

  this.completefl.completeButton.onPress = confirmButton_onPress.bind(this);

  var uploadLabel = new Label({
    text: "Upload infrared Camera Images",
    flexGrow: 1,
    textAlignment: TexAlignment.MIDLEFT
  });
  this.noteContainer.actionfl.addChild(uploadLabel);
  
  
}

function confirmButton_onPress() {
  Router.go("confirmPg");
}

module && (module.exports = Step3Page);
