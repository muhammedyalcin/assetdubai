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
stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);


// Define routes and go to initial page of application
Router.add("page1", require("./pages/page1"));
Router.add("page2", require("./pages/page2"));
Router.add("step1Page", require("./pages/step1Page"));
Router.add("assetLoginPage", require("./pages/assetLoginPage"));
Router.add("dashboardPg", require("./pages/dashboardPg"));
Router.add("proceduresPage", require("./pages/proceduresPage"));
Router.add("step2Page", require("./pages/step2Page"));
Router.add("step3Page", require("./pages/step3Page"));
Router.add("workOrders", require("./pages/workOrders"));
Router.add("workOrderSumpg", require("./pages/workOrderSumpg"));
Router.add("confirmPg", require("./pages/confirmPg"));
Router.go("step3Page");


    var sliderDrawer = require("./sliderDrawer");
    Router.sliderDrawer = sliderDrawer;
