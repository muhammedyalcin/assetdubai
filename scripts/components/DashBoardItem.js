/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const DashBoardItemDesign = require('library/DashBoardItem');
const Color = require("sf-core/ui/color");

const DashBoardItem = extend(DashBoardItemDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || DashBoardItemDesign.defaults);
    this.pageName = pageName;

    var obj = this;
    var redColor = Color.create("#D0021B");
    var greenColor =  Color.create("#028433");

    var dashboardData = [{
        title: "All",
        backgroundColor: Color.TRANSPARENT
      }, {
        title: "New",
        backgroundColor: Color.TRANSPARENT
      },
      {
        title: "Upcoming",
        backgroundColor: Color.create(100, 208, 2, 27)
      },
      {
        title: "Pending",
        backgroundColor: Color.create(100, 2, 132, 51)
      },
      {
        title: "Completed",
        backgroundColor: Color.TRANSPARENT
      }
    ];

    Object.defineProperties(obj, {
      'getDashboardData': {
        enumerable: true,
        configurable: true,
        get: function() {
          console.log("getDashboardData is called");
          return dashboardData;
        }
      }
    });

  }

);



module && (module.exports = DashBoardItem);
