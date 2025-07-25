import { Page } from "@playwright/test";
import { Toast, ToastBlueprint } from "../types";
export declare function toastFactory(page: Page, toastsPreview: Record<string, ToastBlueprint>): Record<string, Toast>;
