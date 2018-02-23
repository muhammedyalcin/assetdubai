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
    onShow: onShow.bind(this),
    orientation: PageBase.Orientation.PORTRAIT
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "workfl", $Workfl_, this);
  pageContextPatch(this, "workOrderProcPg");
}
$WorkOrderProcPg.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      alignContent: "STRETCH"
    }
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

function $Workfl(_super, pageInstance) {
  _super(this);
  addChild.call(this, "proButton", $Workfl$$ProButton_, pageInstance);
  addChild.call(this, "contactContainer", $Workfl$$ContactContainer_, pageInstance);
  addChild.call(this, "mapViewfl", $Workfl$$MapViewfl_, pageInstance);
  addChild.call(this, "workOrdersSumfl", $Workfl$$WorkOrdersSumfl_, pageInstance);
}
$Workfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Workfl_ = FlexLayout($Workfl);

function $Workfl$$ProButton(_super, pageInstance) {
  _super(this);
  addChild.call(this, "cancelButton", $Workfl$$ProButton$$CancelButton_, pageInstance);
  addChild.call(this, "placeHolder", $Workfl$$ProButton$$PlaceHolder_, pageInstance);
  addChild.call(this, "startProButton", $Workfl$$ProButton$$StartProButton_, pageInstance);
  pageInstance.proButton = this;
}
$Workfl$$ProButton.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    bottom: 0,
    flexProps: {
      flexDirection: "ROW",
      positionType: "ABSOLUTE"
    },
    height: 70,
    left: 0,
    right: 0,
    width: null
  }
};
const $Workfl$$ProButton_ = FlexLayout($Workfl$$ProButton);

function $Workfl$$ProButton$$CancelButton(_super, pageInstance) {
  _super(this, {
    text: "Cancel Work Order"
  });
  pageInstance.cancelButton = this;
}
$Workfl$$ProButton$$CancelButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 208, 2, 27, 1 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato"
    },
    height: null,
    width: null
  }
};
const $Workfl$$ProButton$$CancelButton_ = Button($Workfl$$ProButton$$CancelButton);

function $Workfl$$ProButton$$PlaceHolder(_super, pageInstance) {
  _super(this);
}
$Workfl$$ProButton$$PlaceHolder.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 0
    },
    height: null,
    width: null
  }
};
const $Workfl$$ProButton$$PlaceHolder_ = FlexLayout($Workfl$$ProButton$$PlaceHolder);

function $Workfl$$ProButton$$StartProButton(_super, pageInstance) {
  _super(this, {
    text: "Start Procedure"
  });
  pageInstance.startProButton = this;
}
$Workfl$$ProButton$$StartProButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 2, 132, 51, 1 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      family: "Lato"
    },
    height: null,
    width: null
  }
};
const $Workfl$$ProButton$$StartProButton_ = Button($Workfl$$ProButton$$StartProButton);

function $Workfl$$ContactContainer(_super, pageInstance) {
  _super(this);
  pageInstance.contactContainer = this;
}
$Workfl$$ContactContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    bottom: 100,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 300,
    left: 0,
    right: 0,
    visible: false,
    width: null
  }
};
const $Workfl$$ContactContainer_ = ContactContainer($Workfl$$ContactContainer);

function $Workfl$$MapViewfl(_super, pageInstance) {
  _super(this);
  pageInstance.mapViewfl = this;
}
$Workfl$$MapViewfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 400,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 0,
    right: 0,
    width: null
  }
};
const $Workfl$$MapViewfl_ = MapViewfl($Workfl$$MapViewfl);

function $Workfl$$WorkOrdersSumfl(_super, pageInstance) {
  _super(this);
  pageInstance.workOrdersSumfl = this;
}
$Workfl$$WorkOrdersSumfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 155, 155, 155, 1 )",
    bottom: 75,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 320,
    left: 15,
    right: 15,
    width: null
  }
};
const $Workfl$$WorkOrdersSumfl_ = WorkOrdersSumfl($Workfl$$WorkOrdersSumfl);

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