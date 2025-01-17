import { Code, Github, Globe, Laptop } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { SiCplusplus } from "react-icons/si";

function ProjectPage() {
  const projects = [
    {
      title: "Portfolio",
      subtitle: "Personal Website",
      logo: <SiCplusplus className="h-8 w-8 text-[#bd9f67]" />,
      secondaryLogo: <Code className="h-8 w-8 text-[#bd9f67]" />,
    },
    {
      title: "GitHub",
      subtitle: "Open Source",
      logo: <Github className="h-8 w-8 text-[#bd9f67]" />,
      secondaryLogo: <Code className="h-8 w-8 text-[#bd9f67]" />,
    },
    {
      title: "Tech Blog",
      subtitle: "Web Development",
      logo: <Laptop className="h-8 w-8 text-[#bd9f67]" />,
      secondaryLogo: <Globe className="h-8 w-8 text-[#bd9f67]" />,
    },
    {
      title: "Tech Blog",
      subtitle: "Web Development",
      logo: <Laptop className="h-8 w-8 text-[#bd9f67]" />,
      secondaryLogo: <Globe className="h-8 w-8 text-[#bd9f67]" />,
    },
    {
      title: "Tech Blog",
      subtitle: "Web Development",
      logo: <Laptop className="h-8 w-8 text-[#bd9f67]" />,
      secondaryLogo: <Globe className="h-8 w-8 text-[#bd9f67]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#bd9f67] mb-4 text-center">
          My Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of projects showcasing web development, design,
          and open source contributions. Hover over each card to learn more
          about the project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              logo={project.logo}
              secondaryLogo={project.secondaryLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
