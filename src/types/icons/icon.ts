import { Locator } from "@playwright/test";

export type Icon = {
    position: number;
    target: Locator;
    text: string;
    url: RegExp;
}