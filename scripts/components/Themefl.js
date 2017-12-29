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

    var page = this;
    
    this.themeLabel.text = lang["theme"];
    
    if(Data.getStringVariable("theme") == "Style1"){
      page.style1fl.borderWidth = 1;
      page.style2fl.borderWidth = 0;
    }else {
      page.style1fl.borderWidth = 0;
      page.style2fl.borderWidth = 1;
    }

    this.style1Color.onTouch = function() {
      changeTheme("Style1");
      page.style1fl.borderWidth = 1;
      page.style2fl.borderWidth = 0;
    }.bind(this);

    this.style2Color.onTouch = function() {
      changeTheme("Style2");
      page.style1fl.borderWidth = 0;
      page.style2fl.borderWidth = 1;
    }.bind(this);
    
  }
);

function changeTheme(style) {

  if (Data.getStringVariable("theme") === style){
    return;
  }

  var confirmationAlert = new AlertView({
    title: lang["setting.confirmAlert.title"],
    message: lang["setting.confirmAlert.message"]
  });
  confirmationAlert.addButton({
    text: lang["yes"],
    type: AlertView.Android.ButtonType.POSITIVE,
    onClick: function() {
      Data.setStringVariable("theme", style);
      Application.restart();
    }
  });
  confirmationAlert.addButton({
    text: lang["no"],
    type: AlertView.Android.ButtonType.NEGATIVE
  });
  confirmationAlert.show();

}

module && (module.exports = Themefl);
