import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies variant classes", () => {
    const { container } = render(<Button variant="accent">Accent</Button>);
    expect(container.firstChild).toHaveClass("bg-accent", "text-primary");
  });

  it("applies size classes", () => {
    const { container } = render(<Button size="lg">Large</Button>);
    expect(container.firstChild).toHaveClass("px-8", "py-4", "text-lg");
  });
});
