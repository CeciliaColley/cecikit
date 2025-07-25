import { Page } from "@playwright/test";
import { Icon, IconBlueprint } from "../types";
export declare function iconFactory(page: Page, iconsPreview: Record<string, IconBlueprint>): Record<string, Icon>;
