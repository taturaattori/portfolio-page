import { render, screen } from "@testing-library/react";
import FormAlert from "@/components/FormAlert";

test("it renders success alert correctly", () => {
  render(<FormAlert type="success" />);

  const alertTitle = screen.getByText("Success!");
  expect(alertTitle).toBeVisible();
});

test("it renders failure alert correctly", () => {
  render(<FormAlert type="failure" />);

  const alertTitle = screen.getByText("Oh no!");
  expect(alertTitle).toBeVisible();
});

test("it renders nothing for unknown type", () => {
  const { container } = render(<FormAlert type="unknown" />);

  expect(container).toBeEmptyDOMElement();
});
