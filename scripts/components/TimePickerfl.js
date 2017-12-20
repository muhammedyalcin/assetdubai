/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const TimePickerflDesign = require('library/TimePickerfl');

const TimePickerfl = extend(TimePickerflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || TimePickerflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = TimePickerfl);