import { Page, Locator } from "@playwright/test"

export type IconBlueprint = {
    position: number;
    target: (page: Page) => Locator;
    text: string;
    url: RegExp;
}