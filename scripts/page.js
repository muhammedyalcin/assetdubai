const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');

const Page_ = extend(Page)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
		    onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		});
});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
    this.headerBar.visible = true;
    this.headerBar.title = "page";
    this.headerBar.titleColor = Color.create("#000000");
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() {}

module && (module.exports = Page_);