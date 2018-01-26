/*globals lang*/
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
const SliderModel = require("./model/slider");
const ImageFillType = require('sf-core/ui/imagefilltype');
const Font = require('sf-core/ui/font');
const pushClassNames = require("@smartface/contx/lib/styling/action/pushClassNames");
const Timer = require("sf-core/global/timer");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");

// var sliderDrawerWidth = 333;
var nameLabel;
var sliderDrawer = new SliderDrawer({
    width: 200,
    enabled: false,
    onLoad: function() {
        //User FlexLayout
        var userFlexLayout = new Flexlayout({
            flexGrow: 2,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        var userinfoContainerfl = new Flexlayout({
            top: 5,
            left: 20,
            bottom: 20,
            right: 10,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER,
            alignItems: Flexlayout.AlignItems.CENTER
        });
        var userImagefl = new Flexlayout({
            flexGrow: 4,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.COLUMN,
            justifyContent: Flexlayout.JustifyContent.CENTER
        });
        var userImage = Image.createFromFile("images://customers_1.png")
        var userImageView = new ImageView({
            backgroundColor: Color.create(0, 255, 255, 255),
            alpha: 1,
            borderRadius: 35,
            borderColor: Color.create(255, 255, 255, 255),
            borderWidth: 1,
            height: 66,
            image: userImage,
            imageFillType: ImageFillType.STRETCH,
            visible: true,
            width: 66,
            positionType: Flexlayout.PositionType.RELATIVE
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
            font: Font.create("Lato", 16, Font.NORMAL),
            textColor: Color.create("#BDBCBC"),
            positionType: Flexlayout.PositionType.RELATIVE,
            textAlignment: TextAlignment.MIDCENTER
        });
        userNamefl.addChild(nameLabel);


        var linefl = new Flexlayout({
            height: 1,
            left: 15,
            bottom: 0,
            right: 15,
            backgroundColor: Color.create("#AB0202"),
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
            left: 20,
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
            direction: setDirection('ar')
            //justifyContent: Flexlayout.JustifyContent.SPACE_BETWEEN
        });


        var dashboardLabel = new Label({
            id: 1,
            height: 22,
            left: 28,
            right: 0,
            top: 0,
            text: lang["sliderDrawer.dasboard"],
            font: baseOnSelectedItem(1),
            textColor: Color.create("#BDBCBC"),
            textAlignment: TextAlignment.MIDLEFT,
            positionType: Flexlayout.PositionType.ABSOLUTE
            // onTouch: function(){
            //     dashboardLabel.font = Font.create("Lato", 16, Font.BOLD);
            // }
        });
        // dashboardLabel.font = Font.create("Lato", 16, Font.BOLD);

        var dashboardImage = Image.createFromFile("images://dashboardicon.png")
        var dashboradImageView = new ImageView({
            image: dashboardImage,
            width: 22,
            height: 22,
            imageFillType: ImageFillType.ASPECTFIT
        });
        dashboardfl.addChild(dashboradImageView);
        dashboardfl.addChild(dashboardLabel);

        var ordersfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START,
            direction: setDirection('ar')
        });
        var ordersLabel = new Label({
            id: 2,
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: lang["sliderDrawer.orders"],
            font: Font.create("Lato", 16, Font.NORMAL),
            textColor: Color.create("#BDBCBC"),
            positionType: Flexlayout.PositionType.ABSOLUTE,
            onTouch: function() {
                ordersLabel.font = Font.create("Lato", 16, Font.BOLD);
            }
        });

        var ordersImage = Image.createFromFile("images://workordericon.png")
        var ordersImageView = new ImageView({
            image: ordersImage,
            width: 22,
            height: 22,
            imageFillType: ImageFillType.ASPECTFIT
        });

        ordersfl.addChild(ordersImageView);
        ordersfl.addChild(ordersLabel);


        var assetfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START,
            direction: setDirection('ar')
        });
        var assetLabel = new Label({
            id: 3,
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: lang["sliderDrawer.assets"],
            font: Font.create("Lato", 16, Font.NORMAL),
            textColor: Color.create("#BDBCBC"),
            positionType: Flexlayout.PositionType.ABSOLUTE,
            onTouch: function() {
                assetLabel.font = Font.create("Lato", 16, Font.BOLD);
            }
        });

        var assetImage = Image.createFromFile("images://assetsicon.png")
        var assetImageView = new ImageView({
            image: assetImage,
            width: 22,
            height: 22,
            imageFillType: ImageFillType.ASPECTFIT
        });

        assetfl.addChild(assetImageView);
        assetfl.addChild(assetLabel);


        var settingsfl = new Flexlayout({
            flexGrow: 1,
            positionType: Flexlayout.PositionType.RELATIVE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START,
            direction: setDirection('ar')
        });
        //settingsfl.direction = setDirection('ar');

        var settingsLabel = new Label({
            id: 4,
            left: 28,
            right: 0,
            height: 22,
            top: 0,
            text: lang["sliderDrawer.settings"],
            font: Font.create("Lato", 16, Font.NORMAL),
            textColor: Color.create("#BDBCBC"),
            positionType: Flexlayout.PositionType.ABSOLUTE,
            onTouch: function() {
                settingsLabel.font = Font.create("Lato", 16, Font.BOLD);
            }
        });

        var settingsImage = Image.createFromFile("images://settingsicon.png")
        var settingsImageView = new ImageView({
            image: settingsImage,
            width: 22,
            height: 22,
            imageFillType: ImageFillType.ASPECTFIT
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
            right: 10,
            left: 20,
            bottom: 30,
            positionType: Flexlayout.PositionType.ABSOLUTE,
            flexDirection: Flexlayout.FlexDirection.ROW,
            justifyContent: Flexlayout.JustifyContent.FLEX_START,
            direction: setDirection('ar')
        });

        var logoutLabel = new Label({
            left: 28,
            right: 0,
            bottom: 0,
            top: 0,
            text: lang["sliderDrawer.logout"],
            font: Font.create("Lato", 16, Font.NORMAL),
            textColor: Color.create("#BDBCBC"),
            positionType: Flexlayout.PositionType.ABSOLUTE,
            onTouch: function() {
                logoutLabel.font = Font.create("Lato", 16, Font.BOLD);
            }
        });

        var logoutImage = Image.createFromFile("images://logouticon.png")
        var logoutImageView = new ImageView({
            image: logoutImage,
            width: 22,
            height: 22,
            imageFillType: ImageFillType.ASPECTFIT
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
        if (Device.language === "ar") {
            console.log("language is " + Device.language);
            sliderDrawer.drawerPosition = SliderDrawer.Position.RIGHT;
        }
        else {
            sliderDrawer.drawerPosition = SliderDrawer.Position.LEFT;
        }
        sliderDrawer.layout.backgroundColor = Color.create("#3E3C3B");
        sliderDrawer.width = 200;

        sliderDrawer.setCurrentData = function setCurrentData() {
            var currentUser = User.currentUser;
            if (currentUser) {
                nameLabel.text = currentUser.firstname;
            }
            else console.log("currentUser is null");
        }
        sliderDrawer.setCurrentData();

        var sliderLabels = [
            { key: "dashboardPg", value: dashboardLabel },
            { key: "workOrders", value: ordersLabel },
            { key: "assetPg", value: assetLabel },
            { key: "setting", value: settingsLabel }
        ];
        sliderDrawer.setBoldAccToPage = function setBoldAccToPage(labelMap) {
            labelMap.forEach(function(eachLabelMap) {
                if (Router.getCurrent() === eachLabelMap.key) {
                    console.log(" if label is " + eachLabelMap.key + "===  page name is " + Router.getCurrent())
                    eachLabelMap.value.font = Font.create("Arial", 16, Font.BOLD);
                }
                else {
                    console.log(" if label is " + eachLabelMap.key + "===  page name is " + Router.getCurrent())
                    eachLabelMap.value.font = Font.create("Lato", 16, Font.NORMAL);
                }
            });
        };

        sliderDrawer.setActions = function setActions() {
            ordersLabel.onTouch = function() {
                SliderModel.selectedItem = ordersLabel;
                sliderDrawer.hide();
                Router.sliderDrawer.enabled = false;
                Timer.setTimeout({
                    delay: 300,
                    task: function() {
                        if (Router.getCurrent() !== "workOrders") {
                            Router.go("workOrders", "", false);
                            sliderDrawer.setBoldAccToPage(sliderLabels);
                        }
                    }
                });
            };
            settingsLabel.onTouch = function() {
                SliderModel.selectedItem = settingsLabel;
                sliderDrawer.hide();
                Router.sliderDrawer.enabled = true;
                Timer.setTimeout({
                    delay: 300,
                    task: function() {
                        if (Router.getCurrent() !== "setting") {
                            Router.go("setting", "", false);
                            sliderDrawer.setBoldAccToPage(sliderLabels);
                        }
                    }
                });

            }
            logoutLabel.onTouch = function() {
                SliderModel.selectedItem = logoutLabel;
                sliderDrawer.hide();
                User.currentUser = null;
                Router.sliderDrawer.enabled = false;
                Timer.setTimeout({
                    delay: 300,
                    task: function() {
                        if (Router.getCurrent() !== "assetLoginPage") {
                            Router.go("assetLoginPage", "", false);
                        }
                    }
                });
            }
            dashboardLabel.onTouch = function() {
                SliderModel.selectedItem = dashboardLabel.id;
                sliderDrawer.hide();
                Router.sliderDrawer.enabled = false;
                Timer.setTimeout({
                    delay: 300,
                    task: function() {
                        if (Router.getCurrent() !== "dashboardPg") {
                            Router.go("dashboardPg", "", false);
                            sliderDrawer.setBoldAccToPage(sliderLabels);
                        }
                    }
                });

            }
            assetLabel.onTouch = function() {
                SliderModel.selectedItem = assetLabel;
                sliderDrawer.hide();
                Router.sliderDrawer.enabled = false;
                Timer.setTimeout({
                    delay: 300,
                    task: function() {
                        if (Router.getCurrent() !== "assetPg") {
                            Router.go("assetPg", "", false);
                            sliderDrawer.setBoldAccToPage(sliderLabels);
                        }
                    }
                });
            }
        }
        sliderDrawer.setActions();
    }

});

sliderDrawer.setCurrentData = function() {};

sliderDrawer.hideSlider = function hideSlider() {
    sliderDrawer.hide();
};

sliderDrawer.setLeftItem = function setLeftItem(headerbar) {
    headerbar.leftItemSetBy = sliderDrawer;
    headerbar.leftItemEnabled = true;
    var sliderDrawerItem = new HeaderBarItem({
        image: Image.createFromFile("images://slidericon.png"),
        color: Color.WHITE,
        onPress: function() {
            if (sliderDrawer.shown) {
                Router.sliderDrawer.enabled = false;
                sliderDrawer.hide();
            }
            else {
                Router.sliderDrawer.enabled = true;
                sliderDrawer.show();
            }

        }
    });
    headerbar.setLeftItem(sliderDrawerItem);
    headerbar.leftItem = sliderDrawerItem;
};

function setDirection(lngCode) {
    if (Device.language === lngCode) {
        return Flexlayout.Direction.RTL
    }
    else return Flexlayout.Direction.LTR
};

function baseOnSelectedItem(id) {
    if (SliderModel.selectedItem) {
        if (SliderModel.selectedItem === id) {
            return Font.create("Lato", 16, Font.BOLD);
        }
        else {
            return Font.create("Lato", 16, Font.NORMAL);
        }
    }
    else return Font.create("Lato", 16, Font.BOLD);
}


module.exports = exports = sliderDrawer;
