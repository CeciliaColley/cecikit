import { Locator, Page } from "@playwright/test"

export type InputBlueprint = {
    container: (page: Page) => Locator,
    title: (page: Page) => Locator,
    box: (page: Page) => Locator,
    required?: (page: Page) => Locator,
    reveal?: (page: Page) => Locator,
}