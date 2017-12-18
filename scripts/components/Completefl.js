/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CompleteflDesign = require('library/Completefl');

const Completefl = extend(CompleteflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || CompleteflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Completefl);