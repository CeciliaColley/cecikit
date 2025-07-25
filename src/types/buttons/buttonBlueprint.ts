import { Locator, Page } from "@playwright/test";

export type ButtonBlueprint = {
    button: (page: Page) => Locator;
    endpoint?: string;
    url?: RegExp;
}