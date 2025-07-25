import { Locator, Page } from "@playwright/test"

export type Input = {
    container: Locator,
    title: Locator,
    box: Locator,
    required?: Locator,
    reveal?: Locator,
}