"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redToastFactory = redToastFactory;
function redToastFactory(page, toastsPreview) {
    const basket = {};
    for (const key in toastsPreview) {
        const blueprint = toastsPreview[key];
        const uiError = {
            target: blueprint.target(page),
            message: blueprint.message
        };
        basket[key] = uiError;
    }
    return basket;
}
