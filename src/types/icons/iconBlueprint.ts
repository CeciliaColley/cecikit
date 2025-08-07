import { Page, Locator } from "@playwright/test"

export type IconBlueprint = {
    target: (page: Page) => Locator;
    position?: number;
    text?: string;
    url?: RegExp;
    newTab?: boolean;
}