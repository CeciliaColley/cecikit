"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputFactory = inputFactory;
function inputFactory(page, inputsPreview) {
    const basket = {};
    for (const key in inputsPreview) {
        const blueprint = inputsPreview[key];
        const input = {
            container: blueprint.container(page),
            title: blueprint.title(page),
            box: blueprint.box(page),
            required: blueprint.required ? blueprint.required(page) : undefined,
            reveal: blueprint.reveal ? blueprint.reveal(page) : undefined,
        };
        basket[key] = input;
    }
    return basket;
}
