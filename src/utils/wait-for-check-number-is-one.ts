export class TypeError extends Error {
  constructor(message?: string) {
    super();
    this.message = message ?? "";
  }
}

export const waitForCheckNumberIsOne = async (
  target: any
): Promise<boolean> => {
  const isNumber = typeof target === "number";
  if (!isNumber) throw new TypeError("should be a number");

  const ok = target === 1;

  return ok;
};
