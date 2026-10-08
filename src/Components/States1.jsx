import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States1List = [
  { id: "Pa", title: "Paris" },
  { id: "Ly", title: "Lyon" },
  { id: "To", title: "Toulouse" },
  { id: "Ni", title: "Nice" },
  { id: "Li", title: "Lille" },
];

const stateData = {
  Pa: {
    title: "Paris",
    description: "Largest state economy in Australia, driven by services and finance.",
    PopularUniversities: [
      "Sorbonne University",
      "Université Paris-Saclay",
      "Paris School of Business",
      "ESCP Business School."
    ],
    CityHighlights: [
      "Global business and innovation center",
      "Multicultural student environment",
      "Strong internships and job opportunities ",
    ],
  },
  Ly: {
    title: "Lyon",
    description: "France’s second-largest student city.",
    PopularUniversities: [
      "Université de Lyon",
      "INSA Lyon",
      "EM Lyon Business School",
    ],
    CityHighlights: [
      "Affordable living compared to Paris",
      "Strong business and engineering sectors",
    ],
  },
  To: {
    title: "Toulouse",
    description: "Europe’s aerospace capital.",
    PopularUniversities: [
      "University of Toulouse",
      "ISAE-SUPAERO",
      "Toulouse Business School",
    ],
    CityHighlights: [
      "Aerospace and engineering opportunities",
      "Strong research ecosystem",
    ],
  },
  Ni: {
    title: "Nice",
    description: "Mediterranean lifestyle with academic excellence.",
    PopularUniversities: [
      "Université Côte d'Azur",
      "EDHEC Business School(Nice Campus)",
    ],
    CityHighlights: [
      "Tourism, hospitality, and business opportunities",
      "High quality of life",
    ],
  },
  Li: {
    title: "Lille",
    description: "Student-friendly and affordable city.",
    PopularUniversities: [
      "University of Lille",
      "IESEG School of Management ",
    ],
    CityHighlights: [
      "Affordable cost of living",
      "Strong international student community",
    ],
  },
};

const States1 = () => {
  const [selectedStateId, setSelectedStateId] = useState("Pa");
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States1List.forEach((state, index) => {
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
    <div ref={sectionRef} className="w-full min-h-[720px] bg-[#EBF7F6] px-4 py-10 lg:h-[650px] lg:px-10 lg:pt-10">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap text-center">
        <p className="text-[28px] leading-none text-[#4298A9] sm:text-[32px] lg:text-[40px]">
          France
        </p>
        <span className="ml-2 text-[38px] leading-none font-semibold text-[#5B9E7D] sm:text-[48px] lg:text-[60px]">
          States
        </span>
      </div>

      <div className="mt-[30px] flex flex-col items-center justify-center gap-6 sm:mt-[40px] lg:mt-[60px] lg:flex-row lg:items-start lg:justify-center lg:gap-10">
        {/* Left Side Buttons */}
        <div className="w-full max-w-[420px] lg:w-[420px] lg:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[14px] sm:gap-[18px]"
            >
              {States1List.map(({ id, title }) => {
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
                    className="flex h-[54px] w-full items-center justify-center rounded-[12px] border text-center text-[18px] font-medium cursor-pointer shadow-sm sm:h-[62px] sm:text-[20px] lg:h-[62px] lg:text-[20px]"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Entire Card Animated as a Whole */}
        <div className="w-full max-w-[580px] lg:w-[580px] lg:h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full rounded-[24px] bg-white px-[20px] py-[20px] shadow-sm flex flex-col gap-[16px] sm:rounded-[30px] sm:px-[26px] sm:py-[26px] lg:h-full lg:rounded-[36px] lg:px-[36px] lg:py-[30px]"
            >
              <div className="text-center">
                <p className="text-[22px] font-bold text-[#20697B] sm:text-[24px] lg:text-[24px]">
                  {activeData.title}
                </p>
                <p className="mt-1 text-[14px] text-slate-500 sm:text-[16px] lg:text-[16px]">
                  {activeData.description}
                </p>
              </div>

              <div className="text-[14px] leading-[1.35] text-[#20697B] flex flex-col gap-2.5 sm:text-[16px] lg:text-[16px]">
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

export default States1;