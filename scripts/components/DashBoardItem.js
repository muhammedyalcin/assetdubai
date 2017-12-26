/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const DashBoardItemDesign = require('library/DashBoardItem');
const Color = require("sf-core/ui/color");
const Font = require('sf-core/ui/font');

const DashBoardItem = extend(DashBoardItemDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || DashBoardItemDesign.defaults);
    this.pageName = pageName;
    // this.dashboardLabel1.font = Font("Lato", 16, Font.NORMAL);
    // this.dashboardLabel2.font = Font("Lato", 16, Font.NORMAL);

    var obj = this;
    var redColor = Color.create("#D0021B");
    var greenColor =  Color.create("#028433");

    var dashboardData = [{
        title: "All",
        number: "4",
        backgroundColor: Color.TRANSPARENT
      }, {
        title: "New",
         number: "3",
        backgroundColor: Color.TRANSPARENT
      },
      {
        title: "Upcoming",
         number: "1",
        backgroundColor: Color.create(100, 208, 2, 27)
      },
      {
        title: "Pending",
         number: "0",
        backgroundColor: Color.create(100, 2, 132, 51)
      },
      {
        title: "Completed",
         number: "4",
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
