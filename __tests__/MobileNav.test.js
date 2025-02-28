import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/Nav";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockLinks = [
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

test("it renders MobileNav component with correct links", () => {
  usePathname.mockReturnValue("/about");

  render(<MobileNav />);

  mockLinks.forEach((link) => {
    const linkElement = screen.getByText(link.name);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", link.path);
  });
});

test("it applies the correct class to active link", () => {
  usePathname.mockReturnValue("/contact");

  render(<MobileNav />);

  const activeLink = screen.getByText("contact");
  expect(activeLink).toHaveClass("text-accent");
});
