import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";

const skillsList = [
  {
    name: "Languages",
    items: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Java", icon: "FaJava" },
      { name: "Python", icon: "SiPython" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "SQL", icon: "TbSql" },
    ],
  },
];

test("it renders the Skills component categories", () => {
  render(<Skills />);

  skillsList.forEach((category) => {
    expect(screen.getByText(category.name)).toBeInTheDocument();
  });
});
