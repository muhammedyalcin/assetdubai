require("./theme");

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
stylerBuilder.registerThemes(settings.config.theme.themes || "defaultTheme");

stylerBuilder.setActiveTheme(Data.getStringVariable("theme") || settings.config.theme.currentTheme);

// Define routes and go to initial page of application
Router.add("assetLoginPage", require("./pages/assetLoginPage"));
Router.add("dashboardPg", require("./pages/dashboardPg"));
Router.add("proceduresPage", require("./pages/proceduresPage"));
Router.add("step1Page", require("./pages/step1Page"));
Router.add("step2Page", require("./pages/step2Page"));
Router.add("step3Page", require("./pages/step3Page"));
if (System.OS === "iOS") {
    Router.add("workOrders", require("./pages/workOrders"), true);
}
else Router.add("workOrders", require("./pages/workOrders"));

Router.add("workOrderSumpg", require("./pages/workOrderSumpg"));

if (System.OS === "iOS") {
    Router.add("confirmPg", require("./pages/confirmPg"), true);
}
else Router.add("confirmPg", require("./pages/confirmPg"));
if (System.OS === "iOS") {
    Router.add("workOrderProcPg", require("./pages/workOrderProcPg"), true);
}
else Router.add("workOrderProcPg", require("./pages/workOrderProcPg"));

Router.add("locationPg", require("./pages/locationPg"));
Router.add("assetPg", require("./pages/assetPg"));
Router.add("setting", require("./pages/setting"))
Router.go("assetLoginPage");

var sliderDrawer = require("./sliderDrawer");
Router.sliderDrawer = sliderDrawer;
Router.sliderDrawer.enabled = false;
