/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const EndTimePickerDesign = require('library/EndTimePicker');

const EndTimePicker = extend(EndTimePickerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || EndTimePickerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = EndTimePicker);