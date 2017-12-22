/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const NoflDesign = require('library/Nofl');
const Color = require("sf-core/ui/color");

const Nofl = extend(NoflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || NoflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Nofl);