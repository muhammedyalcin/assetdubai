/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const Step2PageDesign = require('ui/ui_step2Page');
const Router = require("sf-core/ui/router");
const Tab = require("components/Tab");
const Label = require("sf-core/ui/label");
const TexAlignment = require("sf-core/ui/textalignment");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const nofl = require("components/Yesfl");
const yesfl = require("components/Nofl");
const Font = require('sf-core/ui/font');
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");

const Step2Page = extend(Step2PageDesign)(
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
  this.completefl.completeButton.text = lang["stepsPages.button.completeSetup"];
  this.headerBar.title = lang["step2Page.title"];
}
/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  HeaderBarItem.setCustomHeaderBarItem(this);
 
  
  // var backIconItem = new HeaderBarItem();
  // backIconItem.image = Image.createFromFile("images://backheadericon.png");
  // backIconItem.itemColor = Color.create("#D5D4D4");
  // this.headerBar.setLeftItem(backIconItem);

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

  this.completefl.completeButton.onPress = function() {
    Router.go("step3Page");
  }.bind(this);

  var quesLabel = new Label({
    text: "Acustic Test: Is gas passing?",
    font: Font.create("Lato", 14, Font.NORMAL),
    color: Color.create("#4A4A4A"),
    flexGrow: 1,
    textAlignment: TexAlignment.MIDLEFT
  });

  this.noteContainer.actionfl.addChild(quesLabel);

  var placeHolder = new FlexLayout({
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE
  });
  this.noteContainer.emptyfl.addChild(new nofl());
  this.noteContainer.emptyfl.addChild(new yesfl());
  this.noteContainer.emptyfl.addChild(placeHolder);
}

module && (module.exports = Step2Page);
