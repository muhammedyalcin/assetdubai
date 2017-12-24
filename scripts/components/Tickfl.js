/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const TickflDesign = require('library/Tickfl');

const Tickfl = extend(TickflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || TickflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Tickfl);