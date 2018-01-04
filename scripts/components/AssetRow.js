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
      title: "Barcode: 4901234627323",
      desc: "Pumping Valve"
      },
      {
      title: "Barcode: 4909652827324",
      desc: "Pumping Valve"
      },
      {
      title: "Barcode: 4903452827325",
      desc: "Pumping Valve"
      },
      {
      title: "Barcode: 4905315427326",
      desc: "Pumping Valve"
      },
      {
      title: "Barcode: 4901248127327",
      desc: "Pumping Valve"
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