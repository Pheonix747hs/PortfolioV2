"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../../styles.css";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="grid md:grid-cols-2 ml-11 md:ml-36 mt-20 gap-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-5xl font-extrabold  text-[#b99757] mb-4 text-left">
            My journey so far
          </h2>
          <p className="text-neutral-300 text-left mt-10 text-xl">
            <p>
              Hey, I'm Ojasvin Borawke, a student at SPPU. I'm currently in my
              4th year of my Bachelors in Computer Engineering (graduating
              2025).
            </p>
            <p className="mt-5">
              Coding, one of my greatest passions, is just the tip of the
              iceberg.One of my favorites to work on was my Spotify controller I
              made in the semi well-known AHK language, you can check it out in
              the projects tab.Currently, I'm working on ARia my Capstone
              project for my degree
            </p>
            <p className="mt-5">
              When im not coding, Im usually either reading, gardening or
              gaming/watching anime/TV shows. I've dipped my hand in a lot of
              activities like video editing, going to the gym, , along with a
              few sports
            </p>
          </p>
          {typeof window !== "undefined" && window.innerWidth > 768 ? (
            <div className="bg-[#1d1d1d91] backdrop-blur-sm  border-[#221D1D4D] rounded-2xl shadow-lg p-6 mt-10 text-white  mx-auto">
              <h3 className="text-xl font-bold mb-4 text-[#b99757]">
                Contact Me
              </h3>

              <p className="text-xl flex gap-1 justify-center">
                <MdOutlineEmail size={28} />
                ojasvinborawke@gmail.com
              </p>

              <div className="flex align-middle justify-center mt-5 gap-10">
                <FaLinkedin
                  size={40}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/ojasvin-borawke-0686b2236/",
                      "_blank"
                    );
                  }}
                  className="iconjump"
                />

                <FaGithub
                  size={40}
                  onClick={() => {
                    window.open("https://github.com/Pheonix747hs", "_blank");
                  }}
                  className="iconjump"
                />

                <FaInstagram
                  size={40}
                  onClick={() => {
                    window.open("https://instagram.com/ojas._.b/", "_blank");
                  }}
                  className="iconjump"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-center">
          <img
            src="src/assets/profile1.jpg"
            alt=""
            className="w-[80vw] md:w-[30vw] rounded-full border-[7px] border-[#b99757]"
          />
        </div>
        {typeof window !== "undefined" && window.innerWidth <= 768 ? (
          <div className="bg-[#221D1D82] backdrop-blur-sm  border-[#221D1D4D] rounded-2xl shadow-lg p-1 text-white max-w-[26rem] mx-auto">
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>

            <p className="text-sm p-2 flex gap-1">
              <MdOutlineEmail size={20} />
              ojasvinborawke@gmail.com
            </p>

            <div className="flex align-middle justify-center my-5 gap-10 ">
              <FaLinkedin
                size={25}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/ojasvin-borawke-0686b2236/",
                    "_blank"
                  );
                }}
                className="iconjump"
              />

              <FaGithub
                size={25}
                onClick={() => {
                  window.open("https://github.com/Pheonix747hs", "_blank");
                }}
                className="iconjump"
              />

              <FaInstagram
                size={25}
                onClick={() => {
                  window.open("https://instagram.com/ojas._.b/", "_blank");
                }}
                className="iconjump"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div ref={ref} className="relative w-[80%] max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full  border p-2 border-zinc-800" />
              </div>
              <h3 className="hidden text-left md:block text-xl md:pl-20 md:text-4xl font-bold text-[#b99757]  dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#b99757]  bg-[#11111171] md:bg-transparent p-1 rounded-sm md:p-0 ">
                {item.title}
              </h3>
              <div>
                {item.content}
                {""}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: "100%",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
