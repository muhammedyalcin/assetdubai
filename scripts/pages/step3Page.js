/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const Step3PageDesign = require('ui/ui_step3Page');
const Router = require("sf-core/ui/router");
const Tab = require("components/Tab");
var tabIndicator = new Tab();
const Label = require("sf-core/ui/label");
const TexAlignment = require("sf-core/ui/textalignment");
const FlexLayout = require("sf-core/ui/flexlayout");
const UploadDrawfl = require("../components/UploadDrawfl");
const Multimedia = require("sf-core/device/multimedia");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const User = require("../model/user");
const Timer = require("sf-core/global/timer");
const Scrollfl = require("../components/Scrollfl");
const UploadedImagefl = require("../components/UploadedImagefl");
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
  this.headerBar.itemColor = Color.create("#D5D4D4");
  this.completefl.completeButton.text = lang["stepsPages.button.completeSetup"];
  this.headerBar.title = lang["step3Page.title"];


  var instructionFlex = tabIndicator.assignCurrentProFl;
  var stepPage = this;
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
  var page = this;

  this.completefl.completeButton.onPress = confirmButton_onPress.bind(this);

  var uploadLabel = new Label({
    text: lang["step3Page.uploadLabel"],
    flexGrow: 1,
    textAlignment: TexAlignment.MIDLEFT
  });
  this.noteContainer.actionfl.addChild(uploadLabel);
  
  this.noteContainer.emptyfl.alignItems = FlexLayout.AlignItems.CENTER;
  var uploadfl = new UploadDrawfl();
  this.noteContainer.emptyfl.addChild(uploadfl, "uploadflStep3Page");

  var leftMargin = 0;
  uploadfl.onTouch = function uploadOnPress() {
    this.indicayorfl.visible = true;
    Timer.setTimeout({
      delay: 1000,
      task: function() {
        Multimedia.pickFromGallery({
          type: Multimedia.Type.IMAGE,
          onSuccess: onSuccess,
          onCancel: onCancel,
          onFailure: onFailure,
          page: page
        });
      }
    });

    function onSuccess(picked) {
      page.indicayorfl.visible = false;
      //Reassign here afterwards
      console.log("picked image is " + picked.image);
      addUploadedImage.call(page, picked.image, leftMargin);
      leftMargin += 80;
    };

    function onCancel() {
      page.indicayorfl.visible = false;
    };

    function onFailure() {
      page.indicayorfl.visible = false;
    }

  }.bind(this);

  var placeHolder = new FlexLayout();
  this.noteContainer.emptyfl.addChild(placeHolder, "placeHolderStep3Page", "", function(style) {
    style.flexGrow = 0.3;
    style.flexProps = {
      positionType: "RELATIVE"
    };
    return style;
  });

  var scrollfl = new Scrollfl();
  scrollfl.uploadScroll.layout.width = 300;
  scrollfl.uploadScroll.layout.height = 80;
  this.noteContainer.emptyfl["scrollfl"] = scrollfl;
  this.noteContainer.emptyfl.addChild(scrollfl, "sliderScrollflStepPage3", "", function(style) {
    style.flexGrow = 1;
    style.flexProps = {
      positionType: "RELATIVE"
    };
    return style;
  });

  var procedureData = User.currentWorkSummary.procedure;
  var profl = new FlexLayout();
  this.layout.addChild(profl, "proflStepPage3", "", function(style) {
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
    data: procedureData[2],
    index: 2,
    flex: profl
  }
}

function confirmButton_onPress() {
  Router.go("confirmPg");
}

function addUploadedImage(image, leftMargin) {
  var uploadedImagefl = new UploadedImagefl();
  uploadedImagefl.uploadedImageview.image = image;
  this.noteContainer.emptyfl.scrollfl.uploadScroll.layout.addChild(uploadedImagefl, "uploadedImageflStepPage3", "", function(style) {
    style.left = leftMargin;
    style.top = 0;
    style.bottom = 0;
    style.width = 80;
    style.flexProps = {
      positionType: "ABSOLUTE",
    };
    return style;
  });
}

module && (module.exports = Step3Page);
