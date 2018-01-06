/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');

const NoflDesign = require('library/Nofl');
const Color = require("sf-core/ui/color");

const Nofl = extend(NoflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || NoflDesign.defaults);
    this.pageName = pageName;
    var page = this;
    this.noLabel.text = lang["confirmPg.noButton"];
    
    // this.noLabel.onPress = function(){
    //   this.radioLabel.backgroundColor = Color.RED
    // }.bind(this)
  }

);

module && (module.exports = Nofl);