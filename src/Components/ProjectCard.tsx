import { FC } from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  logo: React.ReactNode;
  secondaryLogo?: React.ReactNode;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  logo,
  secondaryLogo,
}) => {
  return (
    <div className="card">
      <div className="border"></div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="logo">
          <div className="logo1">{logo}</div>
          {secondaryLogo && <div className="logo2">{secondaryLogo}</div>}
        </div>
        <span className="logo-bottom-text">{title}</span>
      </div>
      <span className="bottom-text">{subtitle}</span>
    </div>
  );
};
