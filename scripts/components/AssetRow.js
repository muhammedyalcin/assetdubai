/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const AssetRowDesign = require('library/AssetRow');

const AssetRow = extend(AssetRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || AssetRowDesign.defaults);
    this.pageName = pageName;
    
      var obj = this;

    var dashboardData = [{
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      },
      {
      title: "Barcode: 4901248127323",
      desc: "Condition Monitoring Survey = Enhanced"
      }
    ];

    Object.defineProperties(obj, {
      'getAssetTestData': {
        enumerable: true,
        configurable: true,
        get: function() {
          console.log("getAssetTestData is called");
          return dashboardData;
        }
      }
    });
  }

);

module && (module.exports = AssetRow);