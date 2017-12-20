/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ContactContainerDesign = require('library/ContactContainer');

const ContactContainer = extend(ContactContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ContactContainerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = ContactContainer);