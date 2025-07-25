import { Page} from "@playwright/test";
import { Toast, ToastBlueprint } from "../types";

export function toastFactory(
  page: Page,
  toastsPreview: Record<string, ToastBlueprint>
): Record<string, Toast>{
  const basket: Record<string, Toast> = {};

  for (const key in toastsPreview)
  {
    const blueprint = toastsPreview[key];
    const uiError : Toast = { 
      target: blueprint.target(page),
      message: blueprint.message
    }
    basket[key] = uiError;
  }

  return basket;
}
