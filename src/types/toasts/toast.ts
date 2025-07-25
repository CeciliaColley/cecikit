import { Locator } from "@playwright/test";

export type Toast = {
  target: Locator;
  message: string;
};
