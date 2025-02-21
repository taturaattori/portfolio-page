import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockLinks = [
  { name: "about", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

test("it renders Nav component with correct links", () => {
  usePathname.mockReturnValue("/");

  render(<Nav />);

  mockLinks.forEach((link) => {
    const linkElement = screen.getByText(link.name);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", link.path);
  });
});

test("it applies the correct class to active link", () => {
  usePathname.mockReturnValue("/contact");

  render(<Nav />);

  const activeLink = screen.getByText("contact");
  expect(activeLink).toHaveClass("text-accent");
});
