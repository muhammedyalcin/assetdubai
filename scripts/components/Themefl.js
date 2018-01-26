/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');
const Data = require("sf-core/data");
const ThemeflDesign = require('library/Themefl');
const AlertView = require("sf-core/ui/alertview");
const Application = require("sf-core/application");

const Themefl = extend(ThemeflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || ThemeflDesign.defaults);
    this.pageName = pageName;

    this.themeLabel.text = lang["theme"];
  }
);

module && (module.exports = Themefl);
