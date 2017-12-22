/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const TabDesign = require('library/Tab');
const Animator = require("sf-core/ui/animator");
const Color = require("sf-core/ui/color");

const Tab = extend(TabDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || TabDesign.defaults);
    this.pageName = pageName;

    var tab = this;
    /*Object.defineProperty(tab, 'animateRightButton', {
      get: function() {
        return tab;
      },
      set: function(page) {
        Animator.animate(page.layout, 200, function() {
          //page.tab.tabHighlight.flexGrow = 1;
          page.tab.tabPlaceHolderLeft.flexGrow = 1;
          page.tab.tabPlaceHolderRight.flexGrow = 0;
          page.tab.summaryButton.textColor = Color.RED;
          page.tab.instructionButton.textColor = Color.WHITE;
        });
      }
    });*/
    
    Object.defineProperties(tab, {
      'animateRightButton': {
        enumerable: true,
        configurable: true,
        get: function() {
        return tab;
      },
      set: function(page) {
        Animator.animate(page.layout, 200, function() {
          //page.tab.tabHighlight.flexGrow = 1;
          page.tab.tabPlaceHolderLeft.flexGrow = 1;
          page.tab.tabPlaceHolderRight.flexGrow = 0;
          page.tab.tabPlaceHolderRight.flexBasis = 0;
          page.tab.summaryButton.textColor = Color.RED;
          page.tab.instructionButton.textColor = Color.create("#D5D4D4");
        });
      }
      },
      'animateLeftButton': {
        enumerable: true,
        configurable: true,
        get: function() {
        return tab;
      },
      set: function(page) {
        Animator.animate(page.layout, 200, function() {
          //page.tab.tabHighlight.flexGrow = 1;
          page.tab.tabPlaceHolderLeft.flexGrow = 0;
          page.tab.tabPlaceHolderRight.flexGrow = 1;
          page.tab.tabPlaceHolderLeft.flexBasis = 0;
          page.tab.summaryButton.textColor = Color.create("#D5D4D4");
          page.tab.instructionButton.textColor = Color.RED;
        });
      }
      }
    });
  }


);

module && (module.exports = Tab);
