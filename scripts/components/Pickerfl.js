/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const PickerflDesign = require('library/Pickerfl');

const Pickerfl = extend(PickerflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || PickerflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Pickerfl);