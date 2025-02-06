import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import EmailForm from "@/components/EmailForm";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("it renders 2 input fields on the screen", () => {
  render(<EmailForm />);

  const inputFields = screen.getAllByRole("textbox");

  expect(inputFields).toHaveLength(2);
});

test("it calls the onSubmit with right arguments upon form submission", async () => {
  render(<EmailForm />);

  const emailField = screen.getByRole("textbox", {
    name: /email/i,
  });

  await user.click(emailField);
  await user.keyboard("example@mail.com");

  const messageField = screen.getByRole("textbox", {
    name: /message/i,
  });

  await user.click(messageField);
  await user.keyboard("hello there");

  const button = screen.getByRole("button");

  await user.click(button);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      process.env.NEXT_PUBLIC_FORM_URL,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "example@mail.com",
          message: "hello there",
        }),
      })
    );
  });
});
