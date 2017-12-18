/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const NoteContainerDesign = require('library/NoteContainer');

const NoteContainer = extend(NoteContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || NoteContainerDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = NoteContainer);