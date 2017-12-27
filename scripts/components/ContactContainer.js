/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');

const ContactContainerDesign = require('library/ContactContainer');

const ContactContainer = extend(ContactContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ContactContainerDesign.defaults);
    this.pageName = pageName;
    
    this.contactLabel1.text =lang["locationPg.contact"];
    this.phoneLabel1.text = lang["locationPg.phone"];
    this.addressLabel1.text = lang["locationPg.address"];
    this.directLabel.text = lang["locationPg.directionsTosite"];
    this.viewWorkButton.text = lang["locationPg.button.viewWorkOrdersForAssets"];
    this.updateButton.text = lang["locationPg.button.updateAssetLocation"];
  }

);

module && (module.exports = ContactContainer);