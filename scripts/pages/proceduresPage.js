/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const ProceduresPageDesign = require('ui/ui_proceduresPage');
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const CheckLine = require("components/CheckLine");
const ProcedureRow = require("components/ProcedureRow");
const ImageView = require("sf-core/ui/imageview");
const User = require("../model/user");
const Label = require("sf-core/ui/label");
const TextAlignment = require("sf-core/ui/textalignment");
const Router = require("sf-core/ui/router");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const VideoView = require("sf-core/ui/videoview");
const Tickfl = require("components/Tickfl");
const Timer = require("sf-core/global/timer");
const HTTP = require("sf-core/net/http");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
var sessionManager = new HTTP();

const ProceduresPage = extend(ProceduresPageDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super. method
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

  this.headerBar.title = lang["proceduresPage.title"];
  this.startButton.text = lang["proceduresPage.button.startProcedure"];
  this.cancelButton.text = lang["proceduresPage.button.cancelWorkOrder"];

  Timer.setTimeout({
    delay: 1000,
    task: function() {
      page.proInfdicator.visible = false;
      page.procedureScroll.visible = true;
      page.indicatorfl.visible = false;
    }
  });
  this.headerBar.itemColor = Color.create("#D5D4D4");

  // if (arr && arr[0] && arr[1]) {
  var currentWorkSum = User.currentWorkSummary;
  // var procedureData = arr[0].procedure;
  // var workData = arr[1];
  //Sets the selected workid's
  this.workid1.text = currentWorkSum.worksumid1;
  this.workid2.text = currentWorkSum.worksumid2;
  // this.workid3.text = workData.workid3;

  //set action button
  this.startButton.onPress = function() {
    this.procedureScroll.layout.applyLayout();
    Router.go("step1Page");
  }.bind(this);
  
  this.cancelButton.onPress = function() {
    Router.goBack();
  }.bind(this);

  console.log("In init list still");
  globalTop = 20
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
var procedureData;
var height = 230; //global height
var globalTop = 20; //global top
function onLoad(superOnLoad) {
  superOnLoad();

  HeaderBarItem.setCustomHeaderBarItem(this);
  var page = this;
  procedureData = User.currentWorkSummary.procedure;

  //Sets scrollview 
  this.procedureScroll.layout.positionType = FlexLayout.PositionType.ABSOLUTE;
  this.procedureScroll.layout.height = 230 * procedureData.length;
  this.procedureScroll.layout.left = 0;
  this.procedureScroll.layout.right = 0;
  this.procedureScroll.layout.top = 0;

  Timer.setTimeout({
    delay: 800,
    task: function() {
      for (var i = 0; procedureData.length > i; i++) {
        page.initFL(procedureData[i], i, globalTop, true);
        globalTop += height;
      }
      //sets the procedureScroll layout to model class that enable to retrieve current instructions
      // Instructions.procedureFlexLayout = page.procedureScroll.layout;
      page.procedureScroll.layout.applyLayout();
    }
  });

  // var backIconItem = new HeaderBarItem();
  // backIconItem.image = Image.createFromFile("images://backheadericon.png");
  // backIconItem.itemColor = Color.create("#D5D4D4");
  // this.headerBar.setLeftItem(backIconItem);

  this.initFL = function initFL(data, index, top) {
    var profl = new FlexLayout();
    this.procedureScroll.layout.addChild(profl, "profl", "", function(style) {
      style.id = index;
      style.top = top;
      style.left = 0;
      style.right = 15;
      style.height = height;
      style.flexProps = {
        positionType: "ABSOLUTE",
        //flexDirection: "COLUMN_REVERSE"
      };
      style.backgroundColor = "#FFFFFF";
      return style;
    });
    ProceduresPage.initfl(profl, data, index);
  }
}

ProceduresPage.constructor.prototype.initfl = function(profl, data, index, tickenable) {

  var checkLine = new CheckLine();

  profl.addChild(checkLine, "checkLine", ".flexLayout", function(style) {
    style.id = index;
    style.top = 0;
    style.left = 0;
    style.right = null;
    style.bottom = null;
    style.width = 70;
    style.height = 230;
    style.flexProps = {
      positionType: "ABSOLUTE",
      alignItems: "CENTER"
    }
    return style;
  });
  //change it according to model data 
  if (index === 0 || tickenable) {
    var tickfl = new Tickfl();
    checkLine.ballfl.addChild(tickfl, "tickfl");
    checkLine.ballfl.borderColor = Color.GREEN;
  }
  else {
    checkLine.ballfl.addChild(new Label(), "numberLabel", "", style => {
      style.text = index + 1;
      style.flexGrow = 1;
      style.positionType = "RELATIVE";
      style.textAlignment = "MIDCENTER";
      return style;
    });
  }
  var procedureRow = new ProcedureRow();

  profl.addChild(procedureRow, "procedureRow", "", function(style) {
    style.id = index;
    style.top = 0;
    style.left = 70;
    style.right = 0;
    style.height = 230;
    style.flexProps = {
      positionType: "ABSOLUTE",
      flexDirection: "COLUMN_REVERSE"
    };
    return style;
  });

  procedureRow.descLabel.showScrollBar = true;
  procedureRow.testLabel.text = data.procedure1;
  procedureRow.descLabel.text = data.procedure2;

  var videofl = new FlexLayout({
    id: index,
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE,
    flexDirection: FlexLayout.FlexDirection.ROW,
  });
  procedureRow.visualContainer.addChild(videofl, "videofl", "", function(style) {
    style.id = index;
    style.flexGrow = 1;
    style.positionType = "RELATIVE";
    style.flexProps = {
      flexDirection: "ROW"
    }
  });

  var workVideoView = new VideoView();

  videofl.addChild(workVideoView, "workVideoView", "", function(style) {
    style.id = index;
    style.height = 100;
    style.width = 100;
    style.positionType = FlexLayout.PositionType.RELATIVE;

    return style;
  });

  workVideoView.onReady = function() {
    workVideoView.play();
  }

  var videoImageView = new ImageView();
  videofl.addChild(videoImageView, "videoImageView");

  videoImageView.width = 100;
  videoImageView.height = 100;
  videoImageView.image = Image.createFromFile("images://videoicon.png");
  videoImageView.backgroundColor = Color.create(0, 0, 0, 255);
  videoImageView.positionType = FlexLayout.PositionType.ABSOLUTE;
  videoImageView.onTouch = function() {
    console.log("url is " + data.videoUrl);
    try {
      workVideoView.loadURL("https://commonsmartface.blob.core.windows.net/assetmanagement/Applus%20RTD%20NDT%20Ultrasonic%20Testing.mp4");
    }
    catch (e) {
      alert("Error: " + e);
    }
    videoImageView.visible = false;
  }

  //placeholder
  var placeholder = new FlexLayout();

  //Image view fl
  var imagefl = new FlexLayout();
  var myImageView = new ImageView();
  myImageView.width = 100;
  myImageView.height = 100;
  myImageView.positionType = FlexLayout.PositionType.RELATIVE;

  var request = sessionManager.requestImage({
    url: "https://5.imimg.com/data5/NE/UF/MY-12480184/prs-station-250x250.png",
    onLoad: function(e) {
      myImageView.image = e.image;
    },
    onError: function(e) {
      alert(e.message);
    }

  });
  procedureRow.visualContainer.addChild(imagefl, "imagefl", "", function(style) {
    style.id = index;
    style.flexGrow = 1;
    style.width = null;
    style.flexProps = {
      positionType: "RELATIVE",
      flexDirection: "ROW"
    };
    return style;
  });
  imagefl.addChild(myImageView, "myImageView");
  procedureRow.visualContainer.addChild(placeholder, "placeholder", "", function(style) {
    style.flexGrow = 0.1;
    style.flexProps = {
      positionType: "RELATIVE",
      flexDirection: "ROW"
    };

    return style;
  });


  return profl;
}

module && (module.exports = ProceduresPage);
