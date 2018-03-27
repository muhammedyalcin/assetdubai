const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const User = require("../model/user");

exports.deleteItem = deleteItem;

function deleteItem(index) {
    console.log("index is " + index);
    var currentUser = User.currentUser.work
    console.log("current user" + JSON.stringify(currentUser));
    if (currentUser) {
        console.log("in if condition");
        // JSON.parse(currentUser).splice(index,1);
        console.log("item is deleted" + Array.prototype.splice.call(currentUser,index,1));
        // User.currentUser = currentUser;
        console.log("item is deleted");
    }
}
