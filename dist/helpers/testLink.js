"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLink = testLink;
const test_1 = require("@playwright/test");
const triggerPopUp_1 = require("./triggerPopUp");
async function testLink(link, page, context) {
    if (link.newTab) {
        const popup = await (0, triggerPopUp_1.triggerPopup)(context, link.target);
        await (0, test_1.expect)(popup).toHaveURL(link.url);
        await popup.close();
    }
    else {
        await link.target.click();
        await (0, test_1.expect)(page).toHaveURL(link.url);
    }
}
