/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const System = require("sf-core/device/system");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};


const Router = require("sf-core/ui/router");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
const Data = require('sf-core/data');
stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");

stylerBuilder.setActiveTheme(Data.getStringVariable("theme") || settings.config.theme.currentTheme);


// Define routes and go to initial page of application

Router.add("assetLoginPage", require("./pages/assetLoginPage"));
Router.add("dashboardPg", require("./pages/dashboardPg"));
Router.add("proceduresPage", require("./pages/proceduresPage"),true);
Router.add("step1Page", require("./pages/step1Page"),true);
Router.add("step2Page", require("./pages/step2Page"),true);
Router.add("step3Page", require("./pages/step3Page"),true);
Router.add("workOrders", require("./pages/workOrders"),true);
Router.add("workOrderSumpg", require("./pages/workOrderSumpg"),true);
Router.add("confirmPg", require("./pages/confirmPg"),true);
Router.add("workOrderProcPg", require("./pages/workOrderProcPg"),true);
Router.add("locationPg", require("./pages/locationPg"),true);
Router.add("assetPg", require("./pages/assetPg"),true);
Router.add("setting", require("./pages/setting"))
Router.go("assetLoginPage");


    var sliderDrawer = require("./sliderDrawer");
    Router.sliderDrawer = sliderDrawer;
    Router.sliderDrawer.enabled = false;
