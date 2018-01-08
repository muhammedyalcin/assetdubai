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
const Instructions = require("../model/instructions");
const Label = require("sf-core/ui/label");
const TextAlignment = require("sf-core/ui/textalignment");
const Router = require("sf-core/ui/router");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const VideoView = require("sf-core/ui/videoview");
const Tickfl = require("components/Tickfl");
const Timer = require("sf-core/global/timer");
const HTTP = require("sf-core/net/http");
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

  console.log("work data is " + currentWorkSum.worksumid1);
  //Sets the selected workid's
  this.workid1.text = currentWorkSum.worksumid1;
  this.workid2.text = currentWorkSum.worksumid2;
  // this.workid3.text = workData.workid3;

  //set action button
  this.startButton.onPress = function() {
    this.procedureScroll.layout.applyLayout();
    Router.go("step1Page");
  }.bind(this);

  console.log("In init list still");
  // for (var i = 0; procedureData.length > i; i++) {
  //   this.initFL(procedureData[i], i, globalTop);
  //   globalTop += height;
  // }
  //after completion of for loop, set this 0 
  globalTop = 20
  // }
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
        page.initFL(procedureData[i], i, globalTop,true);
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
    console.log("top is " + top);

    // var profl = new FlexLayout({
    //   id: index,
    //   top: top,
    //   left: 0,
    //   right: 15,
    //   height: height,
    //   positionType: FlexLayout.PositionType.ABSOLUTE,
    //   flexDirection: FlexLayout.FlexDirection.ROW,
    //   backgroundColor: Color.WHITE
    // });
    // var checkLine = Object.assign(new CheckLine(), {
    //   id: index,
    //   top: 0,
    //   left: 0,
    //   width: 70,
    //   height: 230,
    //   positionType: FlexLayout.PositionType.ABSOLUTE
    // });
    // //change it according to model data 
    // if (index === 0) {
    //   var tickfl = new Tickfl();
    //   checkLine.ballfl.addChild(tickfl);
    //   checkLine.ballfl.borderColor = Color.GREEN;
    // }
    // else {
    //   var numberLabel = new Label({
    //     text: index + 1,
    //     flexGrow: 1,
    //     positionType: FlexLayout.PositionType.RELATIVE,
    //     textAlignment: TextAlignment.MIDCENTER
    //   });
    //   checkLine.ballfl.addChild(numberLabel);
    // }
    // // if(image){
    // //   var imageUrl = data.imageUrl;
    // //   var proImage = Image.createFromFile("images://loading.png");
    // //   var proImageView = new ImageView({

    // //   });
    // // }
    // //checkLine.ballfl.addChild();

    // var procedureRow = Object.assign(new ProcedureRow(), {
    //   id: index,
    //   top: 0,
    //   left: 70,
    //   right: 0,
    //   height: 230,
    //   positionType: FlexLayout.PositionType.ABSOLUTE
    // });
    // procedureRow.descLabel.showScrollBar = true;
    // procedureRow.testLabel.text = "Top up SF6 Gas"; //data.procedure1;
    // procedureRow.descLabel.text = "Set-up mass-flow meter and connect to the asset ambiance, start pressure, finish"; //data.procedure2;

    // var videofl = new FlexLayout({
    //   id: index,
    //   flexGrow: 1,
    //   positionType: FlexLayout.PositionType.RELATIVE,
    //   flexDirection: FlexLayout.FlexDirection.ROW,
    // });

    // var workVideoView = new VideoView({
    //   id: index,
    //   height: 100,
    //   width: 100,
    //   positionType: FlexLayout.PositionType.RELATIVE,
    //   onReady: function() {
    //     workVideoView.play();
    //   }
    // });

    // // var playButton = new Button({
    // //   height: 100,
    // //   width: 100,
    // //   positionType: FlexLayout.PositionType.ABSOLUTE,
    // //   backgroundColor: Color.create(0, 0, 0, 255),
    // //   onPress: function() {
    // //     console.log("url is " + data.videoUrl);
    // //     try {
    // //       workVideoView.loadURL("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4");
    // //     }
    // //     catch (e) {
    // //       alert("Error: " + e);
    // //     }
    // //     playButton.visible = false;
    // //   }
    // // });

    // var videoImageView = new ImageView();
    // videoImageView.width = 100;
    // videoImageView.height = 100;
    // videoImageView.image = Image.createFromFile("images://videoicon.png");
    // videoImageView.backgroundColor= Color.create(0, 0, 0, 255);
    // videoImageView.positionType = FlexLayout.PositionType.ABSOLUTE;
    // videoImageView.onTouch = function(){
    //   console.log("url is " + data.videoUrl);
    //     try {
    //       workVideoView.loadURL("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4");
    //     }
    //     catch (e) {
    //       alert("Error: " + e);
    //     }
    //     videoImageView.visible = false;
    //   }

    // // workVideoView.loadURL(data.videoUrl);

    // videofl.addChild(workVideoView);
    // videofl.addChild(videoImageView);

    // //placeholder
    // var placeholder = new FlexLayout({
    //   flexGrow: 0.1,
    //   positionType: FlexLayout.PositionType.RELATIVE,
    //   flexDirection: FlexLayout.FlexDirection.ROW,
    // });

    // //Image view fl
    // var imagefl = new FlexLayout({
    //   id: index,
    //   flexGrow: 1,
    //   positionType: FlexLayout.PositionType.RELATIVE,
    //   flexDirection: FlexLayout.FlexDirection.ROW,
    // });
    // var myImageView = new ImageView();
    // myImageView.width = 100;
    // myImageView.height = 100;
    // myImageView.positionType = FlexLayout.PositionType.RELATIVE;

    // var request = sessionManager.requestImage({
    //   url: "https://5.imimg.com/data5/NE/UF/MY-12480184/prs-station-250x250.png",
    //   onLoad: function(e) {
    //     myImageView.image = e.image;
    //   },
    //   onError: function(e) {
    //     alert(e.message);
    //   }

    // });
    // imagefl.addChild(myImageView);
    // procedureRow.visualContainer.addChild(imagefl);
    // procedureRow.visualContainer.addChild(placeholder);
    // procedureRow.visualContainer.addChild(videofl);
    // //procedureRow.descTextArea.nativeObject.setFocusable(false);
    // //console.log("comp is "+procedureRow.descTextArea.text);

    // profl.addChild(checkLine);
    // profl.addChild(procedureRow);
    // Instructions.procedureFlexLayout.push(profl);
    var profl = ProceduresPage.initfl(data,index,top);
    this.procedureScroll.layout.addChild(profl);
  }
}

ProceduresPage.constructor.prototype.initfl = function(data, index, top, tickenable) {

  var profl = new FlexLayout({
    id: index,
    top: top,
    left: 0,
    right: 15,
    height: height,
    positionType: FlexLayout.PositionType.ABSOLUTE,
    flexDirection: FlexLayout.FlexDirection.ROW,
    backgroundColor: Color.WHITE
  });
  var checkLine = Object.assign(new CheckLine(), {
    id: index,
    top: 0,
    left: 0,
    width: 70,
    height: 230,
    positionType: FlexLayout.PositionType.ABSOLUTE
  });
  //change it according to model data 
  if (index === 0 && tickenable) {
    var tickfl = new Tickfl();
    checkLine.ballfl.addChild(tickfl);
    checkLine.ballfl.borderColor = Color.GREEN;
  }
  else {
    var numberLabel = new Label({
      text: index + 1,
      flexGrow: 1,
      positionType: FlexLayout.PositionType.RELATIVE,
      textAlignment: TextAlignment.MIDCENTER
    });
    checkLine.ballfl.addChild(numberLabel);
  }
  // if(image){
  //   var imageUrl = data.imageUrl;
  //   var proImage = Image.createFromFile("images://loading.png");
  //   var proImageView = new ImageView({

  //   });
  // }
  //checkLine.ballfl.addChild();

  var procedureRow = Object.assign(new ProcedureRow(), {
    id: index,
    top: 0,
    left: 70,
    right: 0,
    height: 230,
    positionType: FlexLayout.PositionType.ABSOLUTE
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

  var workVideoView = new VideoView({
    id: index,
    height: 100,
    width: 100,
    positionType: FlexLayout.PositionType.RELATIVE,
    onReady: function() {
      workVideoView.play();
    }
  });

  // var playButton = new Button({
  //   height: 100,
  //   width: 100,
  //   positionType: FlexLayout.PositionType.ABSOLUTE,
  //   backgroundColor: Color.create(0, 0, 0, 255),
  //   onPress: function() {
  //     console.log("url is " + data.videoUrl);
  //     try {
  //       workVideoView.loadURL("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4");
  //     }
  //     catch (e) {
  //       alert("Error: " + e);
  //     }
  //     playButton.visible = false;
  //   }
  // });

  var videoImageView = new ImageView();
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

  // workVideoView.loadURL(data.videoUrl);

  videofl.addChild(workVideoView);
  videofl.addChild(videoImageView);

  //placeholder
  var placeholder = new FlexLayout({
    flexGrow: 0.1,
    positionType: FlexLayout.PositionType.RELATIVE,
    flexDirection: FlexLayout.FlexDirection.ROW,
  });

  //Image view fl
  var imagefl = new FlexLayout({
    id: index,
    flexGrow: 1,
    positionType: FlexLayout.PositionType.RELATIVE,
    flexDirection: FlexLayout.FlexDirection.ROW,
  });
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
  imagefl.addChild(myImageView);
  procedureRow.visualContainer.addChild(imagefl);
  procedureRow.visualContainer.addChild(placeholder);
  procedureRow.visualContainer.addChild(videofl);
  //procedureRow.descTextArea.nativeObject.setFocusable(false);
  //console.log("comp is "+procedureRow.descTextArea.text);

  profl.addChild(checkLine);
  profl.addChild(procedureRow);

  return profl;
}

module && (module.exports = ProceduresPage);
