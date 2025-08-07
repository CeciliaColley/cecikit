import { Locator } from "@playwright/test";

export type Icon = {
    target: Locator;
    position?: number;
    text?: string;
    url?: RegExp;
    newTab?: boolean,
}