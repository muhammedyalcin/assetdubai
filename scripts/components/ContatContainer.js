/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Flexlayout = require("sf-core/ui/flexlayout");

const ContatContainerDesign = require('library/ContatContainer');

const ContatContainer = extend(ContatContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ContatContainerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = ContatContainer);