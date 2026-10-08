import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States2List = [
  { id: "Ba", title: "Berlin" },
  { id: "Mu", title: "Munich" },
  { id: "Fr", title: "Frankfurt" },
  { id: "Ha", title: "Hamburg" },
  { id: "St", title: "Stuttgart" },
];

const States2 = () => {

  const stateData = {
    Ba: {
      title: "Berlin",
      description: "Germany’s capital and innovation hub.",
      PopularUniversities: [
        "Humboldt University of Berlin",
        "Freie Universität Berlin",
        "Technische Universität Berlin"
      ],
      CityHighlights: [
        "Startup and tech ecosystem",
        "Affordable student lifestyle",
        "Multicultural environment",
    ],
    },
    Mu: {
      title: "Munich",
      description: "Germany’s economic and technology powerhouse.",
      PopularUniversities: [
        "Technische Universität München",
        "Ludwig-Maximilians-Universität München",
        "Hochschule für Technik und Wirtschaft München",
      ],
      CityHighlights: [
        "Strong engineering and automotive industries",
        "High employability",
        "Premium quality of life",
          ],
    },
    Fr: {
      title: "Frankfurt",
      description: "Germany’s financial and economic center.",
      PopularUniversities: [
        "Goethe University Frankfurt",
        "Frankfurt University of Applied Sciences",
      ],
      CityHighlights: [
        "Major financial hub",
        "Diverse international community",
      ],
    },
    Ha: {
      title: "Hamburg",
      description: "Northern Germany’s cultural and economic center.",
      PopularUniversities: [
        "University of Hamburg",
        "Hamburg University of Applied Sciences",
      ],
      CityHighlights: [
        "Vibrant cultural scene",
        "Strong maritime tradition",
      ],
    },
    St: {
      title: "Stuttgart",
      description: "Center of the German automotive industry.",
      PopularUniversities: [
        "University of Stuttgart",
        "Stuttgart University of Applied Sciences",
      ],
      CityHighlights: [
        "Automotive engineering excellence",
        "Innovation-driven economy",
      ],
    },
  };

  const [selectedStateId, setSelectedStateId] = useState(States2List[0].id);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States2List.forEach((state, index) => {
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

  const activeData = stateData[selectedStateId] ?? stateData[States2List[0].id];

  return (
    <div ref={sectionRef} className="w-full h-[720px] lg:h-[650px] pt-10 bg-[#EBF7F6]">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[28px] leading-none text-[#4298A9] sm:text-[32px] xl:text-[40px]">
          Germany
        </p>
        <span className="ml-2 text-[38px] leading-none font-semibold text-[#5B9E7D] sm:text-[46px] xl:text-[60px]">
          States
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 px-4 sm:px-6 xl:mt-[60px] xl:flex xl:justify-center xl:gap-10 xl:px-10">
        {/* Left Side Buttons */}
        <div className="w-full max-w-[420px] xl:w-[420px] xl:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[14px] xl:gap-[18px]"
            >
              {States2List.map(({ id, title }) => {
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
                    className="flex h-[54px] w-full items-center justify-center rounded-[12px] border text-center text-[18px] font-medium cursor-pointer shadow-sm sm:h-[58px] xl:h-[62px] xl:text-[20px]"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Entire Card Animated as a Whole */}
        <div className="relative w-full max-w-[580px] xl:w-[580px] xl:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full rounded-[28px] bg-white px-[22px] py-[24px] shadow-sm flex flex-col gap-[14px] sm:px-[28px] sm:py-[28px] xl:h-full xl:rounded-[36px] xl:px-[36px] xl:py-[30px] xl:gap-[16px]"
            >
              <div className="text-center">
                <p className="text-[22px] font-bold text-[#20697B] xl:text-[24px]">
                  {activeData.title}
                </p>
                <p className="mt-1 text-[14px] text-slate-500 sm:text-[15px] xl:text-[16px]">
                  {activeData.description}
                </p>
              </div>

              <div className="text-[14px] leading-[1.35] text-[#20697B] flex flex-col gap-2.5 sm:text-[15px] xl:text-[16px]">
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

export default States2;