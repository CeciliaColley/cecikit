"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconFactory = iconFactory;
function iconFactory(page, iconsPreview) {
    const basket = {};
    for (const key in iconsPreview) {
        const blueprint = iconsPreview[key];
        const icon = {
            position: blueprint.position,
            target: blueprint.target(page),
            text: blueprint.text,
            url: blueprint.url,
        };
        basket[key] = icon;
    }
    return basket;
}
