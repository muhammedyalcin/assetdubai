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
const User = require("../model/user");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Yesnofl = require("components/Yesnofl");
var yesnofl = new Yesnofl();

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
    this.noteContainer.visible = true;
    this.layout.findChildById(25).visible = false;
  }.bind(this);

  stepPage.tab.instructionButton.onPress = function() {
    tabIndicator.animateLeftButton = stepPage;
    this.noteContainer.visible = false;
    this.layout.findChildById(25).visible = true;
  }.bind(this);

  this.completefl.completeButton.onPress = function() {
    Router.go("step3Page");
  }.bind(this);

  var quesLabel = new Label({
    text: lang["step2Page.acusticTest"],
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

  // var nofl = new nofl();
  // var yesfl = new yesfl();
  // this.noteContainer.emptyfl.addChild(new nofl());
  // this.noteContainer.emptyfl.addChild(new yesfl());
  var yesnofl = Object.assign(new Yesnofl(), {
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE
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
  
  this.noteContainer.emptyfl.addChild(yesnofl);
  this.noteContainer.emptyfl.addChild(placeHolder);

  // yesfl.radioButton.onPress = function() {
  //   if (nofl.radioButton.backgroundColor === Color.GREEN) {
  //     nofl.radioButton.backgroundColor = Color.TRANSPARENT
  //   }
  //   yesfl.radioButton.backgroundColor = Color.RED;
  // }.bind(this);

  // nofl.radioButton.onPress = function() {
  //   if (yesfl.radioButton.backgroundColor === Color.GREEN) {
  //     yesfl.radioButton.backgroundColor = Color.TRANSPARENT
  //   }
  //   yesfl.radioButton.backgroundColor = Color.RED;
  // }.bind(this);



  // var procedureData = User.currentWorkSummary.procedure;
  // var fl = procedurePage.initfl(procedureData[0], 0, 60);
  // var fixFl = Object.assign(fl, {
  //   id: 25,
  //   left: 0,
  //   right: 0,
  //   top: 60,
  //   height: 230,
  //   visible: false,
  //   backgroundColor: Color.TRANSPARENT,
  //   positionType: FlexLayout.PositionType.ABSOLUTE
  // });
  // this.layout.addChild(fixFl);
  var procedureData = User.currentWorkSummary.procedure;
  tabIndicator.assignCurrentProFl = {
    data: procedureData[1],
    index: 1
  }
  var currentProf = tabIndicator.assignCurrentProFl;
  this.layout.addChild(currentProf);
}

module && (module.exports = Step2Page);
