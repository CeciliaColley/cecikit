import { Page } from "@playwright/test";
import { Toast, ToastBlueprint } from "../types";
export declare function redToastFactory(page: Page, toastsPreview: Record<string, ToastBlueprint>): Record<string, Toast>;
