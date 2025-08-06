import { expect } from "@playwright/test";
import { Button, Input } from "../types"

export async function testRequiredField(target: Button, input: Input) {
  await target.target.click();
  if (input.required) {
    await expect(input.required).toBeVisible();
  } else {
    const alerts = input.container.getByRole("alert");
    await expect(alerts).toHaveCount(0);
  }
}
