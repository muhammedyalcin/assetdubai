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
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $Page1(_super, props) {
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
  addChild.call(this, "flexlayout", $Flexlayout_, this);
  pageContextPatch(this, "page1");
}
$Page1.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "#EEEEEE",
    flexProps: {
      flexDirection: "COLUMN",
      alignItems: "CENTER",
      direction: "INHERIT",
      flexWrap: "NOWRAP",
      justifyContent: "SPACE_AROUND"
    },
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: null
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
const $Page1_ = Page($Page1);

function $Img(_super, pageInstance) {
  _super(this);
}
$Img.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    alpha: 1,
    borderColor: "rgba( 255, 255, 255, 1 )",
    borderRadius: 0,
    borderWidth: 0,
    bottom: 0,
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH",
      flexGrow: 4
    },
    height: 60.3,
    image: "smartface.png",
    imageFillType: "ASPECTFIT",
    left: null,
    marginLeft: null,
    marginRight: null,
    marginTop: 10,
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
    text: ""
  });
  pageInstance.lbl = this;
}
$Lbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 255, 255, 255, 1 )",
    borderRadius: 0,
    borderWidth: 0,
    bottom: null,
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH",
      flexGrow: 2
    },
    font: {
      size: 16,
      family: "Default"
    },
    height: 90,
    left: null,
    marginLeft: null,
    marginRight: null,
    marginTop: null,
    maxHeight: 90,
    multiline: true,
    right: null,
    textAlignment: "MIDCENTER",
    top: null,
    visible: true,
    width: null
  }
};
const $Lbl_ = Label($Lbl);

function $Flexlayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "btn", $Flexlayout$$Btn_, pageInstance);
  addChild.call(this, "btnNext", $Flexlayout$$BtnNext_, pageInstance);
  pageInstance.flexlayout = this;
}
$Flexlayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    bottom: null,
    flexProps: {
      alignContent: "STRETCH",
      alignItems: "STRETCH",
      justifyContent: "CENTER",
      flexWrap: "NOWRAP",
      flexDirection: "COLUMN",
      positionType: "RELATIVE",
      alignSelf: "STRETCH",
      flexGrow: 3
    },
    height: 130,
    left: null,
    marginLeft: null,
    marginRight: null,
    maxHeight: 130,
    right: null,
    visible: true,
    width: null
  }
};
const $Flexlayout_ = FlexLayout($Flexlayout);

function $Flexlayout$$Btn(_super, pageInstance) {
  _super(this, {
    text: "Click me!"
  });
  pageInstance.btn = this;
}
$Flexlayout$$Btn.$$styleContext = {
  classNames: ".button",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 0, 161, 241, 1 )",
    borderColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH"
    },
    font: {
      color: "rgba( 255, 255, 255, 1 )",
      family: "Default",
      size: 16
    },
    height: 60,
    visible: true,
    width: null
  }
};
const $Flexlayout$$Btn_ = Button($Flexlayout$$Btn);

function $Flexlayout$$BtnNext(_super, pageInstance) {
  _super(this, {
    text: "Next Page"
  });
  pageInstance.btnNext = this;
}
$Flexlayout$$BtnNext.$$styleContext = {
  classNames: ".button",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 0, 161, 241, 1 )",
    borderColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      positionType: "RELATIVE",
      alignSelf: "STRETCH"
    },
    font: {
      color: "rgba( 255, 255, 255, 1 )",
      family: "Default",
      size: 16
    },
    height: 60,
    top: 10,
    visible: true,
    width: null
  }
};
const $Flexlayout$$BtnNext_ = Button($Flexlayout$$BtnNext);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "page1";

}

module && (module.exports = $Page1_);