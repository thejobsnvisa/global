import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States3 = () => {
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
        "Unitec Institute of Technology"
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
        "Compact, student-friendly lifestyle"
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
        "Whitecliffe College (Christchurch)"
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
        "Lower living costs"
      ],
    },
   
  };

  const [selectedStateId, setSelectedStateId] = useState("Au");
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
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

  // Button drop-in animation variants
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
    <div ref={sectionRef} className="w-full h-[720px] lg:h-[650px] pt-10 bg-[#EBF7F6]">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[40px] leading-none text-[#4298A9]">New Zealand</p>
        <span className="ml-2 text-[60px] leading-none font-semibold text-[#5B9E7D]">
          States
        </span>
      </div>

      <div className="mt-[60px] flex justify-center gap-10 px-10">
        {/* Left Side Buttons */}
        <div className="w-[420px] min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[18px]"
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
                    className="flex h-[62px] w-full items-center justify-center rounded-[12px] border text-center text-[20px] font-medium cursor-pointer shadow-sm"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Entire Card Animated as a Whole */}
        <div className="w-[580px] h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full rounded-[36px] bg-white px-[36px] py-[30px] shadow-sm flex flex-col gap-[16px]"
            >
              <div className="text-center">
                <p className="text-[24px] font-bold text-[#20697B]">
                  {activeData.title}
                </p>
                <p className="mt-1 text-[16px] text-slate-500">
                  {activeData.description}
                </p>
              </div>

              <div className="text-[16px] leading-[1.35] text-[#20697B] flex flex-col gap-2.5">

                <div>
                  <p className="font-bold">Popular Universities</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.PopularUniversities ?? []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">City Highlights</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
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