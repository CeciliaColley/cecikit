"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonFactory = buttonFactory;
function buttonFactory(page, buttonsPreview) {
    const basket = {};
    for (const key in buttonsPreview) {
        const bp = buttonsPreview[key];
        const clickAndWait = bp.endpoint
            ? async () => {
                const wait = page.waitForResponse((r) => r.url().includes(bp.endpoint) && r.status() === 200);
                await bp.button(page).click();
                return wait;
            }
            : undefined;
        const button = {
            button: bp.button(page),
            ...(clickAndWait && { clickAndWait }),
        };
        basket[key] = button;
    }
    return basket;
}
