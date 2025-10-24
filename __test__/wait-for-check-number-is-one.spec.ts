import { waitForCheckNumberIsOne } from "src/utils/wait-for-check-number-is-one";
import { describe, expect, test } from "vitest";

describe("waitForCheckNumberIsOne", () => {
  test("not a number !!?error", async () => {
    const target = "";

    await expect(() => waitForCheckNumberIsOne(target)).rejects.toThrow();
  });
});
