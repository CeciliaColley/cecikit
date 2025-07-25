import { Page } from "@playwright/test";
import { Input, InputBlueprint } from "../types";


export function inputFactory(
  page: Page,
  inputsPreview: Record<string, InputBlueprint>
): Record<string, Input>{
  const basket: Record<string, Input> = {};

  for (const key in inputsPreview) {
    const blueprint = inputsPreview[key];

    const input = {
      container: blueprint.container(page),
      title: blueprint.title(page),
      box: blueprint.box(page),
      required: blueprint.required ? blueprint.required(page) : undefined,
      reveal: blueprint.reveal ? blueprint.reveal(page) : undefined,
    };

    basket[key] = input;
  }

  return basket;
}
