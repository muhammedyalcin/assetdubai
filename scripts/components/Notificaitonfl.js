/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const NotificaitonflDesign = require('library/Notificaitonfl');

const Notificaitonfl = extend(NotificaitonflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || NotificaitonflDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Notificaitonfl);