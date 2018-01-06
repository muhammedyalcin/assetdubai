/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');

const YesflDesign = require('library/Yesfl');
const Color = require("sf-core/ui/color");
const Yesfl = extend(YesflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || YesflDesign.defaults);
    this.pageName = pageName;
    this.yesLabel.text = lang["confirmPg.yesButton"];
    
    // this.yesLabel.onPress = function(){
    //   this.radioLabel.backgroundColor = Color.RED
    // }.bind(this);
  }

);

module && (module.exports = Yesfl);