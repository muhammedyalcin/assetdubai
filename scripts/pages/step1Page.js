/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const Step1PageDesign = require('ui/ui_step1Page')
const Tab = require("components/Tab");
var tabIndicator = new Tab();
const Router = require("sf-core/ui/router");
const User = require("../model/user");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const ClosureTime = require("components/ClosureTimefl");
const KeyboardType = require('sf-core/ui/keyboardtype');

const Step1Page = extend(Step1PageDesign)(
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
  this.headerBar.title = lang["step1Page.title"];
  this.completefl.completeButton.text = lang["stepsPages.button.completeSetup"];

  var stepPage = this;
  
  //get setted flexlayout 
  var currentProf = tabIndicator.assignCurrentProFl;

  stepPage.tab.summaryButton.onPress = function() {
    tabIndicator.animateRightButton = stepPage;
    stepPage.noteContainer.visible = true;
    currentProf.visible = false;
  }.bind(this);

  stepPage.tab.instructionButton.onPress = function() {
    tabIndicator.animateLeftButton = stepPage;
    stepPage.noteContainer.visible = false;
    currentProf.visible = true;
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
  this.layout.backgroundColor = Color.create(61,59,58);
  HeaderBarItem.setCustomHeaderBarItem(this);

  //set action button
  this.completefl.completeButton.onPress = function() {
    Router.go("step2Page");
  }.bind(this);

  var closureTime = new ClosureTime();
  this.noteContainer.emptyfl.addChild(closureTime, "closureTime", "", function(userProps) {
    userProps.left = 0;
    userProps.right = 0;
    userProps.height = 110;
    userProps.top = 0;
    userProps.positionType = "ABSOLUTE"
    return userProps;
  });
  closureTime.closureTextbox.keyboardType = KeyboardType.NUMBER;
  closureTime.closureLabel.text = lang["closureTimeComp.closureTime"];
  closureTime.refLabel.text = lang["closureTimeComp.ref"];
  this.noteContainer.actionfl.flexGrow = 0;

  var procedureData = User.currentWorkSummary.procedure;
  var profl = new FlexLayout();
  this.layout.addChild(profl, "proflStepPage1", "", function(style) {
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
    data: procedureData[0],
    index: 0,
    flex: profl
  }
}

module && (module.exports = Step1Page);
