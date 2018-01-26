//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const ImageView = extend(require('sf-core/ui/imageview'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const ListView = extend(require('sf-core/ui/listview'));
const ListViewItem = extend(require('sf-core/ui/listviewitem'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $DashboardPg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "backGroundImg", $BackGroundImg_, this);
  addChild.call(this, "transparentfl", $Transparentfl_, this);
  addChild.call(this, "dashboardListview", $DashboardListview_, this);
  pageContextPatch(this, "dashboardPg");
}
$DashboardPg.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )"
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar .heahderBar-style1 .headerBar-style2",
    userProps: {
      titleColor: "rgba( 216, 215, 215, 1 )"
    }
  }
};
const $DashboardPg_ = Page($DashboardPg);

function $BackGroundImg(_super, pageInstance) {
  _super(this);
}
$BackGroundImg.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: null,
    height: null,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    image: "background.png",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $BackGroundImg_ = ImageView($BackGroundImg);

function $Transparentfl(_super, pageInstance) {
  _super(this);
}
$Transparentfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba( 25, 21, 21, 1 )",
    alpha: 0.8,
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $Transparentfl_ = FlexLayout($Transparentfl);

function $DashboardListview(_super, pageInstance) {
  _super(this, {
    itemCount: NaN,
    rowHeight: 60
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.dashboardListview = this;
}
$DashboardListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    width: null,
    height: null,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $DashboardListview_ = ListView($DashboardListview);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Dashboard";

}

module && (module.exports = $DashboardPg_);