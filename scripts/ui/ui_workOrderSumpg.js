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
const Label = extend(require('sf-core/ui/label'));
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
function $WorkOrderSumpg(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "sumLabelCon", $SumLabelCon_, this);
  addChild.call(this, "wordOderSumListview", $WordOderSumListview_, this);
  addChild.call(this, "flexLayout1", $FlexLayout1_, this);
  pageContextPatch(this, "workOrderSumpg");
}
$WorkOrderSumpg.$$styleContext = {
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
const $WorkOrderSumpg_ = Page($WorkOrderSumpg);

function $SumLabelCon(_super, pageInstance) {
  _super(this);
  addChild.call(this, "sumLabel", $SumLabelCon$$SumLabel_, pageInstance);
}
$SumLabelCon.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "AUTO",
      alignItems: "STRETCH"
    },
    height: 50,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $SumLabelCon_ = FlexLayout($SumLabelCon);

function $SumLabelCon$$SumLabel(_super, pageInstance) {
  _super(this, {
    text: "WORK ORDER SUMMARY"
  });
  pageInstance.sumLabel = this;
}
$SumLabelCon$$SumLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      bold: true,
      family: "Lato"
    },
    height: null,
    marginLeft: 15,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 151, 151, 151, 1 )",
    width: null
  }
};
const $SumLabelCon$$SumLabel_ = Label($SumLabelCon$$SumLabel);

function $WordOderSumListview(_super, pageInstance) {
  _super(this, {
    itemCount: NaN,
    rowHeight: 70
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.wordOderSumListview = this;
}
$WordOderSumListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 5,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 15,
    right: 15,
    top: 50,
    width: null
  }
};
const $WordOderSumListview_ = ListView($WordOderSumListview);

function $FlexLayout1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "sumLabelCon", $FlexLayout1$$SumLabelCon_, pageInstance);
  addChild.call(this, "wordOderSumListview", $FlexLayout1$$WordOderSumListview_, pageInstance);
}
$FlexLayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);

function $FlexLayout1$$SumLabelCon(_super, pageInstance) {
  _super(this);
  addChild.call(this, "sumLabel", $FlexLayout1$$SumLabelCon$$SumLabel_, pageInstance);
}
$FlexLayout1$$SumLabelCon.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "AUTO",
      alignItems: "STRETCH"
    },
    height: 50,
    left: 0,
    right: 0,
    top: 0,
    width: null
  }
};
const $FlexLayout1$$SumLabelCon_ = FlexLayout($FlexLayout1$$SumLabelCon);

function $FlexLayout1$$SumLabelCon$$SumLabel(_super, pageInstance) {
  _super(this, {
    text: "WORK ORDER SUMMARY"
  });
  pageInstance.sumLabel = this;
}
$FlexLayout1$$SumLabelCon$$SumLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    font: {
      bold: true,
      family: "Lato"
    },
    height: null,
    marginLeft: 15,
    textAlignment: "MIDLEFT",
    textColor: "rgba( 151, 151, 151, 1 )",
    width: null
  }
};
const $FlexLayout1$$SumLabelCon$$SumLabel_ = Label($FlexLayout1$$SumLabelCon$$SumLabel);

function $FlexLayout1$$WordOderSumListview(_super, pageInstance) {
  _super(this, {
    itemCount: NaN,
    rowHeight: 70
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.wordOderSumListview = this;
}
$FlexLayout1$$WordOderSumListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 5,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 15,
    right: 15,
    top: 50,
    width: null
  }
};
const $FlexLayout1$$WordOderSumListview_ = ListView($FlexLayout1$$WordOderSumListview);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Work Order Summary";

}

module && (module.exports = $WorkOrderSumpg_);