/* 
		You can modify its contents.
*/
/*globals lang*/
const extend = require('js-base/core/extend');

const NoteContainerDesign = require('library/NoteContainer');

const NoteContainer = extend(NoteContainerDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || NoteContainerDesign.defaults);
    this.pageName = pageName;
    
    this.label1.text =lang["stepsPages.tabBar.note"];
  }

);

module && (module.exports = NoteContainer);