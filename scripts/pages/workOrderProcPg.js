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

        //In general contactContainer doesn't need button.
        this.contactContainer.buttonfl.flexGrow = 0;

        mapViewfl.assignLocation = this;

        var backIconItem = new HeaderBarItem();
        var backIcon = Image.createFromFile("images://backheadericon.png");
        var backIconImageViwe =  new ImageView({
           image :backIcon,
           height:10,
           width: 15,
        });
        backIconItem.image = backIconImageViwe.image;
        backIconItem.itemColor = Color.create("#D5D4D4");
        this.headerBar.setLeftItem(backIconItem);
    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow(superOnShow, arr) {
    superOnShow();

    this.startProButton.onPress = function() {
        Router.go("proceduresPage", arr);
    }.bind(this);
}

// Page.onLoad -> This event is called once when page is created.
function onLoad(superOnLoad) {
    superOnLoad();



}

module && (module.exports = Page_);
