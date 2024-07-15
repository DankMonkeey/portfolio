"use client";


import React, { useState , useEffect} from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Pin";
import { projects } from "@/data";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import FullScreenVideo from "./ui/FullScreenVideo"; // Import the custom video component
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useSpring, animated } from "react-spring"; // Import useSpring and animated from react-spring
import { useSwipeable } from "react-swipeable"; // Import Swipeable from react-swipeable


export function BackgroundGradientDemo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isPhoneOrTablet, setIsPhoneOrTablet] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const buttonWidth = 120;
  const totalWidth = categories.length * buttonWidth;

  const slideProps = useSpring({
    transform: `translateX(${-slideIndex * buttonWidth}px)`,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneOrTablet(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Setup swipe handlers for phone or tablet
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (slideIndex < categories.length - 1) {
        setSlideIndex(slideIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (slideIndex > 0) {
        setSlideIndex(slideIndex - 1);
      }
    },
  });

  const categoryNavStyle = {
    ...slideProps,
    minWidth: "70%",
    width: `${totalWidth}px`,
    display: "flex",
    justifyContent: isPhoneOrTablet ? "flex-start" : "center",
  };

  return (
    <div className="my-10" id="projects">
      <h1 className="heading">
        Une petite sélection de{" "}
        <span className="text-purple">projets récents</span>
      </h1>

      {/* Swipeable Category Navigation */}
      <div className="flex justify-center my-16 overflow-x-auto" {...handlers}>
        <animated.div style={categoryNavStyle}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-[#e88cff0e] text-white border-2"
                  : "bg-transparent"
              }`}
              style={{ minWidth: `${buttonWidth}px` }}
            >
              {category}
            </button>
          ))}
        </animated.div>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 mx-10 items-center justify-center gap-16"
        id="father"
      >
        {filteredProjects.map((item, index) => (
          <BackgroundGradient
            className="rounded-[22px] max-w-sm overflow-hidden bg-white dark:bg-zinc-900"
            key={index}
          >
            <FullScreenVideo
              id={item.vidid}
              src={item.vid}
              className="object-contain max-w-sm w-full mx-auto relative lg:h-[27rem] h-[23rem] rounded-3xl"
            />
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default BackgroundGradientDemo;
