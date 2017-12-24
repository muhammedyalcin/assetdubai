/* 
		You can modify its contents.
*/
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
const HTTP = require("sf-core/net/http");
var sessionManager = new HTTP();

const ProceduresPage = extend(ProceduresPageDesign)(
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

function onShow(superOnShow, arr) {
  superOnShow();

  this.headerBar.itemColor = Color.create("#D5D4D4");

  if (arr && arr[0] && arr[1]) {
    var procedureData = arr[0].procedure;
    var workData = arr[1];

    console.log("work data is " + workData.workid1);
    //Sets the selected workid's
    this.workid1.text = workData.workid1;
    this.workid2.text = workData.workid2;
    this.workid3.text = workData.workid3;

    //Sets scrollview 
    this.procedureScroll.layout.positionType = FlexLayout.PositionType.ABSOLUTE;
    this.procedureScroll.layout.height = 230 * procedureData.length;
    this.procedureScroll.layout.left = 0;
    this.procedureScroll.layout.right = 0;
    this.procedureScroll.layout.top = 0;

    //set action button
    this.completefl.completeButton.onPress = function() {
      Router.go("step1Page");
    }.bind(this);

    for (var i = 0; procedureData.length > i; i++) {
      this.initFL(procedureData[i], i, globalTop);
      globalTop += height;
    }
  }
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
var height = 230; //global height
var globalTop = 0; //global top
function onLoad(superOnLoad) {
  superOnLoad();

  // var backIconItem = new HeaderBarItem();
  // backIconItem.image = Image.createFromFile("images://backheadericon.png");
  // backIconItem.itemColor = Color.create("#D5D4D4");
  // this.headerBar.setLeftItem(backIconItem);

  this.initFL = function initFL(data, index, top) {
    console.log("in initFL function");
    console.log("top value is" + top);
    var profl = new FlexLayout({
      id: index,
      top: top,
      left: 0,
      right: 0,
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
    if (index === 0) {
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
      height: 100,
      width: 100,
      positionType: FlexLayout.PositionType.RELATIVE,
      onTouch: function() {
        workVideoView.play();
      }
    });
    workVideoView.loadURL(data.videoUrl);

    videofl.addChild(workVideoView);

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
      url: data.imageUrl,
      onLoad: function(e) {
        myImageView.image = e.image;
        console.log("in request onload");
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
    this.procedureScroll.layout.addChild(profl);
  }
}

module && (module.exports = ProceduresPage);
