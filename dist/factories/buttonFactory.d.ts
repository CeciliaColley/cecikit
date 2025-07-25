import { Page } from "@playwright/test";
import { Button, ButtonBlueprint } from "../types";
export declare function buttonFactory(page: Page, buttonsPreview: Record<string, ButtonBlueprint>): Record<string, Button>;
