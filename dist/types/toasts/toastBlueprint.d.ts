import { Page, Locator } from "@playwright/test";
export type ToastBlueprint = {
    target: (page: Page) => Locator;
    message: string;
};
