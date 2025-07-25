import { Page } from "@playwright/test";
import { Input, InputBlueprint } from "../types";
export declare function inputFactory(page: Page, inputsPreview: Record<string, InputBlueprint>): Record<string, Input>;
