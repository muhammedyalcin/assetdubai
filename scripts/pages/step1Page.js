/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Step1PageDesign = require('ui/ui_step1Page')
const Tab = require("components/Tab");

const Step1Page = extend(Step1PageDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    
    var tabIndicator = new Tab();
    var stepPage = this;
    
    stepPage.tab.summaryButton.onPress =function() {
      tabIndicator.animateRightButton = stepPage;
      //Write chaneable flex here
    }.bind(this);
    
     stepPage.tab.instructionButton.onPress =function() {
      tabIndicator.animateLeftButton = stepPage;
      //Write changeable flex here
    }.bind(this);
    
    
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
}

module && (module.exports = Step1Page);