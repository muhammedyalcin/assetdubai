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
const Label = extend(require('sf-core/ui/label'));
const Button = extend(require('sf-core/ui/button'));

const WorkRow = extend(require("../components/WorkRow"));
const WorkSummary = extend(require("../components/WorkSummary"));
const Tab = extend(require("../components/Tab"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $Page2(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this),
    orientation: PageBase.Orientation.PORTRAIT
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "img", $Img_, this);
  addChild.call(this, "lbl", $Lbl_, this);
  addChild.call(this, "btn", $Btn_, this);
  addChild.call(this, "workRow", $WorkRow_, this);
  addChild.call(this, "wordSummary", $WordSummary_, this);
  addChild.call(this, "tab", $Tab_, this);
  pageContextPatch(this, "page2");
}
$Page2.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "SPACE_AROUND",
      flexDirection: "COLUMN",
      flexWrap: "NOWRAP",
      direction: "INHERIT"
    }
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      titleColor: "rgba( 0, 0, 0, 1 )",
      visible: true
    }
  }
};
const $Page2_ = Page($Page2);

function $Img(_super, pageInstance) {
  _super(this);
}
$Img.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    alpha: 1,
    borderWidth: null,
    bottom: 0,
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH",
      flexGrow: 4
    },
    height: 60,
    image: "smartface.png",
    imageFillType: "ASPECTFIT",
    left: null,
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 60,
    right: 0,
    top: null,
    visible: true,
    width: null
  }
};
const $Img_ = ImageView($Img);

function $Lbl(_super, pageInstance) {
  _super(this, {
    text: "This is second page"
  });
  pageInstance.lbl = this;
}
$Lbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 0, 0, 0, 0 )",
    borderColor: "rgba( 255, 255, 255, 1 )",
    borderRadius: 0,
    borderWidth: 0,
    bottom: 0,
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH",
      flexGrow: 2
    },
    font: {
      family: "Default",
      size: 16
    },
    height: 90,
    left: null,
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 90,
    right: 0,
    textAlignment: "MIDCENTER",
    top: null,
    visible: true,
    width: null
  }
};
const $Lbl_ = Label($Lbl);

function $Btn(_super, pageInstance) {
  _super(this, {
    text: "Back"
  });
  pageInstance.btn = this;
}
$Btn.$$styleContext = {
  classNames: ".button",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 0, 161, 241, 1 )",
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH"
    },
    font: {
      color: "rgba( 255, 255, 255, 1 )",
      size: 16,
      family: "Default"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 60,
    visible: true,
    width: null
  }
};
const $Btn_ = Button($Btn);

function $WorkRow(_super, pageInstance) {
  _super(this);
}
$WorkRow.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 86,
    left: 0,
    top: 0,
    width: 376
  }
};
const $WorkRow_ = WorkRow($WorkRow);

function $WordSummary(_super, pageInstance) {
  _super(this);
}
$WordSummary.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 80.00000103099926,
    left: 0,
    right: 0,
    top: 0,
    width: 371.72307194890203
  }
};
const $WordSummary_ = WorkSummary($WordSummary);

function $Tab(_super, pageInstance) {
  _super(this);
}
$Tab.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 74, 74, 74, 0.99 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 54.054054054054056,
    left: 0,
    right: 0,
    top: 0,
    width: 350.48052813555745
  }
};
const $Tab_ = Tab($Tab);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "page2";

}

module && (module.exports = $Page2_);