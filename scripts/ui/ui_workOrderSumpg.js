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
    width: null,
    height: 50,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "AUTO",
      alignItems: "STRETCH"
    }
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
    textAlignment: "MIDLEFT",
    marginLeft: 15,
    width: null,
    height: null,
    textColor: "rgba( 151, 151, 151, 1 )",
    font: {
      bold: true,
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $SumLabelCon$$SumLabel_ = Label($SumLabelCon$$SumLabel);

function $WordOderSumListview(_super, pageInstance) {
  _super(this, {
    rowHeight: 70,
    itemCount: NaN
  });
  this.onRowCreate = function() {
    return new ListViewItem();
  };
  pageInstance.wordOderSumListview = this;
}
$WordOderSumListview.$$styleContext = {
  classNames: ".listView",
  userProps: {
    width: null,
    height: null,
    left: 15,
    right: 15,
    top: 50,
    bottom: 5,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $WordOderSumListview_ = ListView($WordOderSumListview);

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