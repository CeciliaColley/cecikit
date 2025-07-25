"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkFactory = linkFactory;
function linkFactory(page, linksPreview) {
    const basket = {};
    for (const key in linksPreview) {
        const blueprint = linksPreview[key];
        basket[key] = {
            target: blueprint.target(page),
            url: blueprint.url,
            newTab: blueprint.newTab,
        };
    }
    return basket;
}
