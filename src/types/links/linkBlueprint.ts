import { Locator, Page } from "@playwright/test";

export type LinkBlueprint = {
  target: (page: Page) => Locator;
  url: RegExp;
  newTab?: boolean;
};
