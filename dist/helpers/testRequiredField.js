"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRequiredField = testRequiredField;
const test_1 = require("@playwright/test");
async function testRequiredField(target, input) {
    await target.button.click();
    if (input.required) {
        await (0, test_1.expect)(input.required).toBeVisible();
    }
    else {
        const alerts = input.container.getByRole("alert");
        await (0, test_1.expect)(alerts).toHaveCount(0);
    }
}
