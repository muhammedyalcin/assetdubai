/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const Step2PageDesign = require('ui/ui_step2Page');
const Router = require("sf-core/ui/router");
const Tab = require("components/Tab");
var tabIndicator = new Tab();
const Label = require("sf-core/ui/label");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const Font = require('sf-core/ui/font');
const User = require("../model/user");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Yesnofl = require("components/Yesnofl");

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

  var stepPage = this;

  var instructionFlex = tabIndicator.assignCurrentProFl;

  stepPage.tab.summaryButton.onPress = function() {
    tabIndicator.animateRightButton = stepPage;
    this.noteContainer.visible = true;
    instructionFlex.visible = false;
  }.bind(this);

  stepPage.tab.instructionButton.onPress = function() {
    tabIndicator.animateLeftButton = stepPage;
    this.noteContainer.visible = false;
    instructionFlex.visible = true;
  }.bind(this);
}
/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  
  this.ios.safeAreaLayoutMode = true;
  HeaderBarItem.setCustomHeaderBarItem(this);

  this.completefl.completeButton.onPress = function() {
    Router.go("step3Page");
  }.bind(this);

  var quesLabel = new Label();

  this.noteContainer.actionfl.addChild(quesLabel, "quesLabelStepPage2", "", function(userProps) {
    userProps.text = lang["step2Page.acusticTest"];
    userProps.color = "#4A4A4A";
    userProps.flexGrow = 1;
    userProps.textAlignment = "MIDLEFT";

    return userProps;
  });
  quesLabel.font = Font.create("Lato", 14, Font.NORMAL);

  var yesnofl = new Yesnofl();
  this.noteContainer.emptyfl.addChild(yesnofl, "yesnofl", "", function(userProps) {
    userProps.height = 70;
    userProps.width = 100;
    userProps.flexGrow = 1;
    userProps.flexProps = {
      alignItems: "FLEX_START",
      justifyContent: "FLEX_END",
      positionType: "RELATIVE",
      flexDirection: "ROW",
      alignSelf: "FLEX_START"
    };
    return userProps;
  });


  var placeHolder = new FlexLayout({
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE
  });
  this.noteContainer.emptyfl.addChild(placeHolder, "placeHolderStep2", "", function(userProps) {
    userProps.flexGrow = 1;
    userProps.positionType = FlexLayout.PositionType.RELATIVE;
    return userProps;
  });

  yesnofl.yesButton.onPress = function() {
    if (yesnofl.noButton.backgroundColor == Color.RED) {
      yesnofl.noButton.backgroundColor = Color.TRANSPARENT
    }
    yesnofl.yesButton.backgroundColor = Color.RED;
  }.bind(this);

  yesnofl.noButton.onPress = function() {
    if (yesnofl.yesButton.backgroundColor == Color.RED) {
      yesnofl.yesButton.backgroundColor = Color.TRANSPARENT
    }
    yesnofl.noButton.backgroundColor = Color.RED;
  }.bind(this);

  var procedureData = User.currentWorkSummary.procedure;
  var profl = new FlexLayout();
  this.layout.addChild(profl, "proflStepPage2", "", function(style) {
    style.id = 25;
    style.top = 70;
    style.left = 0;
    style.right = 0;
    style.height = 230;
    style.visible = false;
    style.flexProps = {
      positionType: "ABSOLUTE",
    };
    return style;
  });
  tabIndicator.assignCurrentProFl = {
    data: procedureData[1],
    index: 1,
    flex: profl
  }
}

module && (module.exports = Step2Page);
