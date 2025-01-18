import { useEffect, useState } from "react";
import { Code } from "lucide-react";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const welcomeText = "Welcome to my portfolio";
  const [text, setText] = useState("");

  useEffect(() => {
    setVisible(true);
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        currentText += welcomeText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div
        className={`transform transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Code size={64} className="text-[#bd9f67] mb-8" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-[#bd9f67] mb-6 text-center">
        {text}
        <span className="animate-blink">|</span>
      </h1>
      <p
        className={`text-gray-400 text-center max-w-2xl transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        I'm a passionate developer creating beautiful and functional web
        experiences. Explore my work and get in touch if you'd like to
        collaborate.
      </p>
    </div>
  );
}
