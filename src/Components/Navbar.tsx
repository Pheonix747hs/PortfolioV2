import { FC } from "react";
import { Code } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
  // Get current path from window location
  const currentPath = window.location.pathname;

  return (
    <nav className="w-12 lg:w-[3.4rem] bg-[#1a1a1a] flex flex-col items-center py-6 fixed h-screen ">
      {/* Logo at the top */}
      <div className="mb-12">
        <Code size={32} className="text-[#bd9f67] w-7 md:w-20" />
      </div>

      {/* Navigation items in the middle */}
      <div className="flex flex-col items-center gap-8">
        {items.map((item, index) => {
          const isActive = currentPath === item.href;

          return (
            <a
              key={index}
              href={item.href}
              className="group relative flex flex-col items-center"
            >
              <div
                className={`
                  transition-colors duration-200 relative
                  ${
                    isActive
                      ? "text-[#bd9f67]"
                      : "text-gray-400 hover:text-[#bd9f67]"
                  }
                `}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#bd9f67] rounded-r" />
                )}
                {item.icon}
              </div>
              <span className="absolute left-full ml-2 px-2 py-1 bg-[#2a2a2a] text-[#bd9f67] rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
