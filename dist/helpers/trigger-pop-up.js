"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerPopup = triggerPopup;
async function triggerPopup(context, target) {
    const popup = await Promise.all([
        context.waitForEvent("page"),
        target.click(),
    ]).then(([p]) => p);
    return popup;
}
