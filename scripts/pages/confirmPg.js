/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const ConfirmPgDesign = require('ui/ui_confirmPg');
const Router = require("sf-core/ui/router");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");

const ConfirmPg = extend(ConfirmPgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
  
  var page  = this;
  this.headerBar.itemColor = Color.create("#D5D4D4");

  this.completefl.completeButton.text = lang["confirmPg.button.comfirmStatus"];
  this.completefl.completeButton.onPress = completBtn_onPress.bind(this);
  this.headerBar.title = lang["confirmPg.title"];
  this.noButton.text = lang["confirmPg.noButton"];
  this.yesButton.text = lang["confirmPg.yesButton"];
  this.compTitle.text = lang["confirmPg.additionalActions"];
  this.stepTitleLabe.text = lang["confirmPg.stepCompleted"];
  this.compLabel.text = lang["confirmPg.workOrderCompletedAt"];
  this.compDescTitle.text = lang["confirmPg.quest"];
  
  this.yesfl.radioButton.onPress = function(){
    if(page.nofl.radioButton.backgroundColor == Color.RED){
      page.nofl.radioButton.backgroundColor = Color.TRANSPARENT
    }
    page.yesfl.radioButton.backgroundColor = Color.RED;
  }.bind(this);
  
  this.nofl.radioButton.onPress = function(){
    if(page.yesfl.radioButton.backgroundColor == Color.RED){
      page.yesfl.radioButton.backgroundColor = Color.TRANSPARENT
    }
    page.nofl.radioButton.backgroundColor = Color.RED;
  }.bind(this);
  
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  
  HeaderBarItem.setCustomHeaderBarItem(this);

}

function completBtn_onPress(){
  Router.goBack("workOrderProcPg");
  // Router.go("workOrderProcPg");
}

module && (module.exports = ConfirmPg);