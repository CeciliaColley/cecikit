import { Locator, Response} from "@playwright/test"

export type Button = {
    button: Locator,
    clickAndWait?: () => Promise<Response> | undefined,
    url?: RegExp,
}