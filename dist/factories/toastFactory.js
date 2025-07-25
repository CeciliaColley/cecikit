"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toastFactory = toastFactory;
function toastFactory(page, toastsPreview) {
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
