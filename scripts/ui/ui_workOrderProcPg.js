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
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));

const ContactContainer = extend(require("../components/ContactContainer"));
const MapViewfl = extend(require("../components/MapViewfl"));
const WorkOrdersSumfl = extend(require("../components/WorkOrdersSumfl"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $WorkOrderProcPg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "proButton", $ProButton_, this);
  addChild.call(this, "contactContainer", $ContactContainer_, this);
  addChild.call(this, "mapViewfl", $MapViewfl_, this);
  addChild.call(this, "workOrdersSumfl", $WorkOrdersSumfl_, this);
  pageContextPatch(this, "workOrderProcPg");
}
$WorkOrderProcPg.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )"
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
const $WorkOrderProcPg_ = Page($WorkOrderProcPg);

function $ProButton(_super, pageInstance) {
  _super(this);
  addChild.call(this, "cancelButton", $ProButton$$CancelButton_, pageInstance);
  addChild.call(this, "placeHolder", $ProButton$$PlaceHolder_, pageInstance);
  addChild.call(this, "startProButton", $ProButton$$StartProButton_, pageInstance);
  pageInstance.proButton = this;
}
$ProButton.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 70,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "ABSOLUTE"
    }
  }
};
const $ProButton_ = FlexLayout($ProButton);

function $ProButton$$CancelButton(_super, pageInstance) {
  _super(this, {
    text: "Cancel Work Order"
  });
  pageInstance.cancelButton = this;
}
$ProButton$$CancelButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 208, 2, 27, 1 )",
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $ProButton$$CancelButton_ = Button($ProButton$$CancelButton);

function $ProButton$$PlaceHolder(_super, pageInstance) {
  _super(this);
}
$ProButton$$PlaceHolder.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0
    }
  }
};
const $ProButton$$PlaceHolder_ = FlexLayout($ProButton$$PlaceHolder);

function $ProButton$$StartProButton(_super, pageInstance) {
  _super(this, {
    text: "Start Procedure"
  });
  pageInstance.startProButton = this;
}
$ProButton$$StartProButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 2, 132, 51, 1 )",
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $ProButton$$StartProButton_ = Button($ProButton$$StartProButton);

function $ContactContainer(_super, pageInstance) {
  _super(this);
  pageInstance.contactContainer = this;
}
$ContactContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 300,
    bottom: 100,
    right: 0,
    left: 0,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    visible: false,
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $ContactContainer_ = ContactContainer($ContactContainer);

function $MapViewfl(_super, pageInstance) {
  _super(this);
  pageInstance.mapViewfl = this;
}
$MapViewfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    left: 0,
    right: 0,
    bottom: 400,
    top: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $MapViewfl_ = MapViewfl($MapViewfl);

function $WorkOrdersSumfl(_super, pageInstance) {
  _super(this);
  pageInstance.workOrdersSumfl = this;
}
$WorkOrdersSumfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 320,
    bottom: 75,
    backgroundColor: "rgba( 155, 155, 155, 1 )",
    left: 15,
    right: 15,
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $WorkOrdersSumfl_ = WorkOrdersSumfl($WorkOrdersSumfl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "WO 4539102";

}

module && (module.exports = $WorkOrderProcPg_);