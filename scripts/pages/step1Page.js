/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Step1PageDesign = require('ui/ui_step1Page')
const Tab = require("components/Tab");
const Router = require("sf-core/ui/router");
const Image = require("sf-core/ui/image");
const ImageView = require("sf-core/ui/imageview");
const FlexLayout = require("sf-core/ui/flexlayout");
const TopPicker = require("components/Pickerfl");
const EndTimePicker = require("components/EndTimePicker");
const StartTimePicker = require("components/TimePickerfl");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");


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

    stepPage.tab.summaryButton.onPress = function() {
      tabIndicator.animateRightButton = stepPage;
      //Write chaneable flex here
    }.bind(this);

    stepPage.tab.instructionButton.onPress = function() {
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
  this.headerBar.itemColor = Color.create("#D5D4D4");
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();

  // var backIconItem = new HeaderBarItem();
  // backIconItem.image = Image.createFromFile("images://backheadericon.png");
  // backIconItem.itemColor = Color.create("#D5D4D4");
  // this.headerBar.setLeftItem(backIconItem);

  //set action button
  this.completefl.completeButton.onPress = function() {
    Router.go("step2Page");
  }.bind(this);

  var placeHolder = new FlexLayout({
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE
  });

  //sets picker top of the container
  this.noteContainer.actionfl.addChild(new TopPicker());

  //sets start time picker
  var startTimePicker = new StartTimePicker();
  this.noteContainer.emptyfl.addChild(startTimePicker);

  //placeholder
  this.noteContainer.emptyfl.addChild(placeHolder);

  //sets end time picker
  var endTimePicker = new EndTimePicker();
  this.noteContainer.emptyfl.addChild(endTimePicker);
}

module && (module.exports = Step1Page);
