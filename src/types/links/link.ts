import { Locator } from "@playwright/test";

export type Link = {
  target: Locator;
  url: RegExp;
  newTab: boolean;
};
