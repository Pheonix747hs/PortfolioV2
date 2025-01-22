import { FC, useEffect, useState } from "react";
import "./ProjectCard.css";
import { Code, Github, Laptop } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  language: object;
  languages_url: string;
}

interface ProjectCardProps {
  repository: Repository;
}

export const ProjectCard: FC<ProjectCardProps> = ({ repository }) => {
  const [lang, setlang] = useState({});
  const [loading, setLoading] = useState(true);
  const token = import.meta.env.VITE_SECRET_TOKEN;

  useEffect(() => {
    const fetchlang = async () => {
      try {
        const response = await fetch(repository.languages_url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch language");
        }
        const data = await response.json();
        console.log(
          `gitdata for ${repository.name}:`,
          data,
          `\n`,
          Object.keys(data)
        );
        setlang(data);
      } finally {
        setLoading(false);
        console.log(loading);
      }
    };

    fetchlang();
  }, []);

  return (
    <div className="card">
      <div className="border" />
      <div className="content">
        <h2 className="title">{repository.name}</h2>
        <div className="details">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Github className="h-6 w-6 text-[#bd9f67]" />
              {repository.language && (
                <Code className="h-6 w-6 text-[#bd9f67]" />
              )}
            </div>
            <Laptop className="h-6 w-6 text-[#bd9f67]" />
          </div>
          <p className="text-[#bd9f67] text-sm mb-2">
            {repository.description || "No description available"}
          </p>
          {repository.language && (
            <div className="text-sm font-medium text-[#bd9f67]">
              {Object.keys(lang).join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
