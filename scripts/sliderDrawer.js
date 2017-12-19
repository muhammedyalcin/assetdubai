const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const SliderDrawer = require("sf-core/ui/sliderdrawer");
const Flexlayout = require("sf-core/ui/flexlayout");
const Image = require('sf-core/ui/image');
const ImageView = require('sf-core/ui/imageview');
const Label = require('sf-core/ui/label');
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const TextAlignment = require("sf-core/ui/textalignment");
const Router = require("sf-core/ui/router");
const User = require("./model/user");

var sliderDrawerWidth = 333;
var nameLabel;
var sliderDrawer = new SliderDrawer({
    width: sliderDrawerWidth,
    enabled: false,
    onLoad: function() {
        //User FlexLayout
        var userFlexLayout = new Flexlayout({
            flexGrow: 3,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        var userinfoContainerfl = new Flexlayout({
            top: 5,
            left: 10,
            bottom: 0,
            right: 10,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER,
            alignItems: Flexlayout.AlignItems.CENTER
        });
        var userImagefl = new Flexlayout({
            flexGrow: 2,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        var userImage = Image.createFromFile("images://customers_1.png")
        var userImageView = new ImageView({
            image: userImage,
            borderRadius: 48,
            //borderColor: Color.create(255, 255, 255, 255),
            //borderWidth: 1,
            left: 0,
            width: 96,
            height: 96
        });
        userImagefl.addChild(userImageView);


        var userNamefl = new Flexlayout({
            flexGrow: 2,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        nameLabel = new Label({
            height: 20,
            text: "<User Name>",
            textColor: Color.BLACK,
            positionType: Flexlayout.PositionType.RELATIVE,
            textAlignment: TextAlignment.MIDCENTER
        });
        userNamefl.addChild(nameLabel);


        var linefl = new Flexlayout({
            height: 2,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: Color.BLACK,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });

        var userPlaceHolder = new Flexlayout({
            flexGrow: 3,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });

        userinfoContainerfl.addChild(userPlaceHolder);
        userinfoContainerfl.addChild(userImagefl);
        userinfoContainerfl.addChild(userNamefl);
        userFlexLayout.addChild(linefl);
        userFlexLayout.addChild(userinfoContainerfl);



        //Action FlexLayout 
        var actionFlexLayout = new Flexlayout({
            flexGrow: 5,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });


        var actionsfl = new Flexlayout({
            height: 200,
            left: 10,
            top: 20,
            right: 10,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        actionFlexLayout.addChild(actionsfl);

        var dashboardfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START,
            //justifyContent: Flexlayout.JustifyContent.SPACE_BETWEEN
        });


        var dashboardLabel = new Label({
            height: 22,
            left: 28,
            right: 0,
            top: 0,
            text: "Dashboard",
            textColor: Color.BLACK,
            textAlignment: TextAlignment.MIDLEFT,
            positionType: Flexlayout.PositionType.ABSOLUTE
        });


        var dashboardImage = Image.createFromFile("images://sliderdrawer_dashboard.png")
        var dashboradImageView = new ImageView({
            image: dashboardImage,
            width: 22,
            height: 22
        });
        dashboardfl.addChild(dashboradImageView);
        dashboardfl.addChild(dashboardLabel);

        var ordersfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START
        });
        var ordersLabel = new Label({
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: "Orders",
            textColor: Color.BLACK,
            positionType: Flexlayout.PositionType.ABSOLUTE
        });

        var ordersImage = Image.createFromFile("images://order_icon.png")
        var ordersImageView = new ImageView({
            image: ordersImage,
            width: 22,
            height: 22
        });

        ordersfl.addChild(ordersImageView);
        ordersfl.addChild(ordersLabel);
        
        
         var assetfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START
        });
        var assetLabel = new Label({
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: "Assets",
            textColor: Color.BLACK,
            positionType: Flexlayout.PositionType.ABSOLUTE
        });

        var assetImage = Image.createFromFile("images://asseticon.png")
        var assetImageView = new ImageView({
            image: assetImage,
            width: 22,
            height: 22
        });

        assetfl.addChild(assetImageView);
        assetfl.addChild(assetLabel);
        

        var settingsfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START
        });
        var settingsLabel = new Label({
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: "Settings",
            textColor: Color.BLACK,
            positionType: Flexlayout.PositionType.ABSOLUTE
        });

        var settingsImage = Image.createFromFile("images://sliderdrawer_settings.png")
        var settingsImageView = new ImageView({
            image: settingsImage,
            width: 22,
            height: 22
        });

        settingsfl.addChild(settingsImageView);
        settingsfl.addChild(settingsLabel);
        actionsfl.addChild(dashboardfl);
        actionsfl.addChild(ordersfl);
        actionsfl.addChild(settingsfl);
        actionsfl.addChild(assetfl);


        //Log out Flex Layout
        var logoutFlexLayout = new Flexlayout({
            height: 22,
            right: 0,
            left: 0,
            bottom: 0,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START
        });

        var logoutLabel = new Label({
            left: 28,
            right: 0,
            bottom: 0,
            top: 0,
            text: "Logout",
            textColor: Color.BLACK,
            positionType: Flexlayout.PositionType.ABSOLUTE
        });

        var logoutImage = Image.createFromFile("images://logout.png")
        var logoutImageView = new ImageView({
            image: logoutImage,
            width: 22,
            height: 22
        });

        logoutFlexLayout.addChild(logoutImageView);
        logoutFlexLayout.addChild(logoutLabel);
        sliderDrawer.layout.addChild(userFlexLayout);
        sliderDrawer.layout.addChild(actionFlexLayout);
        sliderDrawer.layout.addChild(logoutFlexLayout);


        sliderDrawer.onHide = function sliderDrawer_onHide() {
            sliderDrawer.shown = false;
        };
        sliderDrawer.onShow = function sliderDrawer_onShow() {
            sliderDrawer.shown = true;
        };
        sliderDrawer.drawerPosition = SliderDrawer.Position.LEFT;
        sliderDrawer.layout.backgroundColor = Color.create("#4A4A4A");

        sliderDrawer.setCurrentData = function setCurrentData() {
            var currentUser = User.currentUser;
            if (currentUser) {
                nameLabel.text = currentUser.firstname;
                //userImageView.image = currentUser.image;
            }
            else console.log("currentUser is null");
        }
        sliderDrawer.setCurrentData();

        sliderDrawer.setActions = function setActions() {
            ordersLabel.onTouch = function() {
                console.log("Orders clicke");
                Router.go("workOrders");
            };
            settingsLabel.onTouch = function(){
               console.log("setting is touched");
               // Router.go("workOrders");
            }
            logoutLabel.onTouch = function(){
               console.log("setting is touched");
               // Router.go("workOrders");
            }
            dashboardLabel.onTouch = function(){
               console.log("setting is touched");
                Router.go("dashboardPg");
            }

        }
        sliderDrawer.setActions();
    }

});
sliderDrawer.setCurrentData = function() {};

sliderDrawer.setLeftItem = function setLeftItem(headerbar) {

    headerbar.leftItemSetBy = sliderDrawer;
    headerbar.leftItemEnabled = true;
    var sliderDrawerItem = new HeaderBarItem({
        image: Image.createFromFile("images://sliderdrawer.png"),
        color: Color.WHITE,
        onPress: function() {
            sliderDrawer.show();
        }
    });
    headerbar.setLeftItem(sliderDrawerItem);
    headerbar.leftItem = sliderDrawerItem;
    sliderDrawer.enabled = true;
};



module.exports = exports = sliderDrawer;
