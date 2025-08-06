import { Locator, Response} from "@playwright/test"

export type Button = {
    target: Locator,
    clickAndWait?: () => Promise<Response>,
    url?: RegExp,
}