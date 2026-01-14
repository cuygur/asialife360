import { describe, it, expect } from "vitest";
import { formatCurrency, slugify } from "./stringUtils";

describe("stringUtils", () => {
  describe("formatCurrency", () => {
    it("formats USD correctly", () => {
      expect(formatCurrency(100)).toBe("$100.00");
    });

    it("formats EUR correctly", () => {
      expect(formatCurrency(100, "EUR")).toContain("100.00");
    });
  });

  describe("slugify", () => {
    it("converts text to slug correctly", () => {
      expect(slugify("Hello World")).toBe("hello-world");
      expect(slugify("Phuket: The Pearl of Andaman")).toBe(
        "phuket-the-pearl-of-andaman"
      );
    });

    it("handles special characters", () => {
      expect(slugify("Bangkok & Bali")).toBe("bangkok-bali");
    });
  });
});
