const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const Router = require("sf-core/ui/router");
const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const ImageView = require("sf-core/ui/imageview");
const MapViewfl = require("../components/MapViewfl");
var mapViewfl = new MapViewfl();


const workOrderProcPgDesign = require("ui/ui_workOrderProcPg");

const Page_ = extend(workOrderProcPgDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        // var backIconItem = new HeaderBarItem();
        // var backIcon = Image.createFromFile("images://backheadericon.png");
        // var backIconImageViwe =  new ImageView({
        //   image :backIcon,
        //   height:10,
        //   width: 15,
        //   onPress: function() {
        //       Router.goBack();
        //   }
        // });
        // backIconItem.image = backIconImageViwe.image;
        // backIconItem.itemColor = Color.create("#D5D4D4");
        // this.headerBar.setLeftItem(backIconItem);
    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow(superOnShow, arr) {
    superOnShow();

    this.headerBar.itemColor = Color.create("#D5D4D4");
    mapViewfl.assignLocation =this;

    //assign the location
    mapViewfl.assignLocation = this;

    //set some defaults values
    // this.contactContainer.contactfl.label2 = "EQUIPMENT REQUIRED";

    this.contactContainer.addressLabel1.text = "PROCEDURE";
    this.contactContainer.addressLabel2.text = "Ambience";

    //
    this.contactContainer.phoneLabel1.text = "Ambience";
    this.contactContainer.phoneLabel2.text = "PROCEDURE";
    this.contactContainer.imgfl.visible = false;

    this.contactContainer.contactLabel1.text = "EQUIPMENT REQUIRED";


    this.startProButton.onPress = function() {
        Router.go("proceduresPage", arr);
    }.bind(this);
}

// Page.onLoad -> This event is called once when page is created.
function onLoad(superOnLoad) {
    superOnLoad();

    HeaderBarItem.setCustomHeaderBarItem(this);
    //In general contactContainer doesn't need button.
    this.contactContainer.buttonfl.flexGrow = 0;
    this.contactContainer.buttonfl.visible = false;
}

module && (module.exports = Page_);
