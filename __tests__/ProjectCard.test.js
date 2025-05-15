import { render, screen, waitFor } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

const mockProps = {
  title: "test project",
  description: "this is a test project",
  techs: ["JS", "html", "CSS"],
  image: "/test.png",
  link: "test.project",
};

test("it renders the ProjectCard with correct values", async () => {
  render(<ProjectCard {...mockProps} />);

  await expect(screen.getByText(mockProps.title)).toBeInTheDocument();

  await expect(screen.getByText(mockProps.description)).toBeInTheDocument();

  mockProps.techs.forEach((tech) => {
    expect(screen.getByText(tech)).toBeInTheDocument();
  });

  const image = screen.getByAltText(`${mockProps.title} project screenshot`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockProps.image);

  const link = screen.getByRole("link", { name: /github/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", mockProps.link);
});
