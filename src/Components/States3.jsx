import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States3List = [
  { id: "Au", title: "Auckland" },
  { id: "We", title: "Wellington" },
  { id: "Ch", title: "Christchurch" },
  { id: "Ha", title: "Hamilton" },
  { id: "Du", title: "Dunedin" },
];

const stateData = {
  Au: {
    title: "Auckland",
    description: "New Zealand’s largest and most dynamic city.",
    PopularUniversities: [
      "University of Auckland",
      "Auckland University of Technology(AUT)",
      "Massey University",
      "Manukau Institute of Technology",
      "Unitec Institute of Technology",
    ],
    CityHighlights: [
      "Strong job market and internships",
      "Multicultural student environment",
      "Hub for business, IT, and healthcare",
    ],
  },
  We: {
    title: "Wellington",
    description: "The capital city with creative and academic strength.",
    PopularUniversities: [
      "Victoria University of Wellington",
      "Massey University (Wellington Campus)",
      "Whitireia & WelTec",
      "Open Polytechnic of New Zealand",
      "Yoobee Colleges",
    ],
    CityHighlights: [
      "Research-focused education",
      "Growing tech and creative industries",
      "Compact, student-friendly lifestyle",
    ],
  },
  Ch: {
    title: "Christchurch",
    description: "Affordable, calm, and career-focused.",
    PopularUniversities: [
      "University of Canterbury",
      "Lincoln University",
      "Ara Institute of Canterbury",
      "New Zealand College of Business",
      "Whitecliffe College (Christchurch)",
    ],
    CityHighlights: [
      "Lower cost of living",
      "Strong demand in engineering and construction",
      "Safe and peaceful environment",
    ],
  },
  Ha: {
    title: "Hamilton",
    description: "A growing education and innovation hub.",
    PopularUniversities: [
      "University of Waikato",
      "Waikato Institute of Technology (Wintec)",
      "Te Wānanga o Aotearoa",
      "Vision College",
      "Waikato Graduate School",
    ],
    CityHighlights: [
      "Affordable student life",
      "Strong agriculture, business, and IT sectors",
    ],
  },
  Du: {
    title: "Dunedin",
    description: "A classic student city with strong academic culture.",
    PopularUniversities: [
      "University of Otago",
      "Otago Polytechnic",
      "New Zealand School of Education",
      "Te Wānanga o Aotearoa (Otago)",
      "Royal Business College",
    ],
    CityHighlights: [
      "Strong student community",
      "Focus on health sciences and research",
      "Lower living costs",
    ],
  },
};

const States3 = () => {
  const [selectedStateId, setSelectedStateId] = useState("Au");
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States3List.forEach((state, index) => {
      const timer = setTimeout(() => {
        setSelectedStateId(state.id);
      }, index * 1800);
      timeouts.push(timer);
    });

    const cycleInterval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 13500);

    return () => {
      timeouts.forEach((timer) => clearTimeout(timer));
      clearInterval(cycleInterval);
    };
  }, [isInView, animationKey]);

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, y: -25, backgroundColor: "#B8E6FE" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const activeData = stateData[selectedStateId];

  return (
    <div ref={sectionRef} className="w-full h-[720px] bg-[#EBF7F6] pt-10 lg:h-[650px]">
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[28px] leading-none text-[#4298A9] sm:text-[32px] lg:text-[40px]">
          New Zealand
        </p>
        <span className="ml-2 text-[38px] leading-none font-semibold text-[#5B9E7D] sm:text-[48px] lg:text-[60px]">
          States
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:gap-8 lg:mt-[60px] lg:flex-row lg:gap-10 lg:px-10">
        <div className="w-full max-w-[420px] lg:w-[420px] lg:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[10px] sm:gap-[14px] lg:gap-[18px]"
            >
              {States3List.map(({ id, title }) => {
                const isSelected = selectedStateId === id;
                return (
                  <motion.button
                    key={id}
                    variants={buttonItemVariants}
                    onClick={() => setSelectedStateId(id)}
                    animate={{
                      backgroundColor: isSelected ? "#1C5B6C" : "#B8E6FE",
                      color: isSelected ? "#FFFFFF" : "#00609C",
                      borderColor: isSelected ? "#1C5B6C" : "#93D3FB",
                      scale: isSelected ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-[56px] w-full items-center justify-center rounded-[12px] border text-center text-[18px] font-medium shadow-sm cursor-pointer sm:h-[62px] sm:text-[20px] lg:h-[62px] lg:text-[20px]"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full max-w-[580px] lg:w-[580px] lg:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex h-full w-full flex-col gap-[12px] rounded-[24px] bg-white px-[20px] py-[20px] shadow-sm sm:gap-[14px] sm:px-[24px] sm:py-[24px] lg:gap-[16px] lg:rounded-[36px] lg:px-[36px] lg:py-[30px]"
            >
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#20697B] sm:text-[22px] lg:text-[24px]">
                  {activeData.title}
                </p>
                <p className="mt-1 text-[14px] text-slate-500 sm:text-[15px] lg:text-[16px]">
                  {activeData.description}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 text-[14px] leading-[1.35] text-[#20697B] sm:text-[15px] lg:text-[16px]">
                <div>
                  <p className="font-bold">Popular Universities</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#00609C]">
                    {(activeData.PopularUniversities ?? []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">City Highlights</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#00609C]">
                    {activeData.CityHighlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default States3;