import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const statesList = [
  { id: "nsw", title: "New South Wales (NSW)" },
  { id: "qld", title: "Queensland (QLD)" },
  { id: "act", title: "Australian Capital Territory (ACT)" },
  { id: "sa", title: "South Australia (SA)" },
  { id: "nt", title: "Northern Territory (NT)" },
  { id: "wa", title: "Western Australia (WA)" },
  { id: "vic", title: "Victoria (VIC)" },
];

const stateData = {
  nsw: {
    title: "New South Wales (NSW)",
    capital: "Sydney",
    population: "8.1 million (2023 estimate)",
    economy: "Largest state economy in Australia, driven by services and finance.",
    jobMarket: [
      "Strong demand in IT, financial services, and construction.",
      "Opportunities in healthcare and education.",
    ],
    keyIndustries: [
      "Financial and professional services",
      "Information technology and telecommunications",
      "Tourism and hospitality",
      "Property and construction",
    ],
    specialties: [
      "Home to iconic landmarks like the Sydney Opera House and Harbour Bridge.",
      "Major global financial hub in the Asia-Pacific region.",
    ],
    immigrationAppeal: "Popular choice for skilled migrants and international students.",
  },
  qld: {
    title: "Queensland (QLD)",
    capital: "Brisbane",
    population: "5.4 million (2023 estimate)",
    economy: "Resource-rich, tourism-heavy, and agricultural focus.",
    jobMarket: [
      "Growing demand in renewable energy, tourism, and healthcare.",
      "Construction boom ahead of global events.",
    ],
    keyIndustries: [
      "Mining and resources",
      "Tourism and agriculture",
      "Construction and infrastructure",
    ],
    specialties: [
      "Gateway to the Great Barrier Reef and Sunshine Coast.",
      "Warm climate and relaxed lifestyle.",
    ],
    immigrationAppeal: "High regional migration interest with diverse lifestyle choices.",
  },
  act: {
    title: "Australian Capital Territory (ACT)",
    capital: "Canberra",
    population: "466,000 (2023 estimate)",
    economy: "Public sector dominated with high average income.",
    jobMarket: [
      "High demand for public administration, cybersecurity, and defence roles.",
      "Strong research and tertiary education sector.",
    ],
    keyIndustries: [
      "Government and public service",
      "Cybersecurity and defence",
      "Education and research",
    ],
    specialties: [
      "Nation's capital, housing Parliament House and national institutions.",
      "Highest median income and lowest unemployment rates.",
    ],
    immigrationAppeal: "Attractive pathway for skilled professionals and graduates.",
  },
  sa: {
    title: "South Australia (SA)",
    capital: "Adelaide",
    population: "1.8 million (2023 estimate)",
    economy: "Focus on defence manufacturing, renewable energy, and premium food/wine.",
    jobMarket: [
      "Growth in space technology, defence engineering, and healthcare.",
      "Opportunities in renewable energy projects.",
    ],
    keyIndustries: [
      "Defence and aerospace",
      "Renewable energy and technology",
      "Wine and agriculture",
    ],
    specialties: [
      "Known as the festival state with world-renowned wine regions like Barossa Valley.",
      "Affordable lifestyle and high livability.",
    ],
    immigrationAppeal: "Strong state nomination pathways for regional migration.",
  },
  nt: {
    title: "Northern Territory (NT)",
    capital: "Darwin",
    population: "250,000 (2023 estimate)",
    economy: "Driven by mining, energy, logistics, and tourism.",
    jobMarket: [
      "High demand across healthcare, trade, education, and hospitality.",
      "Special incentives for skilled workers.",
    ],
    keyIndustries: [
      "Mining and natural gas",
      "Tourism and eco-adventures",
      "Agriculture and pastoral industry",
    ],
    specialties: [
      "Rich Indigenous culture and natural wonders like Kakadu National Park.",
      "Strategic gateway to Asia.",
    ],
    immigrationAppeal: "Flexible migration pathways and targeted occupation lists.",
  },
  wa: {
    title: "Western Australia (WA)",
    capital: "Perth",
    population: "3.03 million (2025 estimate)",
    economy: "Resource-rich state, with mining as its backbone.",
    jobMarket: [
      "Dominated by mining, oil and gas industries.",
      "High demand for skilled workers in trades and renewable energy.",
    ],
    keyIndustries: [
      "Mining and resources (iron ore, gold, natural gas)",
      "Agriculture (wheat, cattle, sheep)",
      "Tourism (eco and adventure tourism)",
      "Renewable energy",
    ],
    specialties: [
      "The largest state by land area, offering vast wilderness and natural beauty.",
      "Home to major mining companies like Rio Tinto and BHP.",
      "Attractions: Margaret River, Ningaloo Reef, and Karijini National Park.",
      "Perth offers a laid-back lifestyle with beautiful beaches.",
    ],
    immigrationAppeal: "High demand for skilled migrants in trades and resources.",
  },
  vic: {
    title: "Victoria (VIC)",
    capital: "Melbourne",
    population: "7.05 million (2025 estimate)",
    economy: "Australia's second-largest economy, with diverse industries.",
    jobMarket: [
      "Thriving in healthcare, creative industries, and manufacturing.",
      "High demand for education and research professionals.",
    ],
    keyIndustries: [
      "Arts, culture, and entertainment",
      "Education and research",
      "Manufacturing and automotive",
      "Agriculture and viticulture",
    ],
    specialties: [
      "Melbourne is Australia's cultural capital, with world-class arts, music, and food.",
      "Home to top universities like the University of Melbourne and Monash University.",
      "Attractions: Great Ocean Road, Yarra Valley, and Phillip Island.",
      "Major events capital including the Australian Open and Formula 1 Grand Prix.",
    ],
    immigrationAppeal: "Offers regional migration options for areas outside Melbourne.",
  },
};

const States = () => {
  const [selectedStateId, setSelectedStateId] = useState("nsw");
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    statesList.forEach((state, index) => {
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
    <div
      ref={sectionRef}
      className="w-full h-auto bg-[#EBF7F6] overflow-x-hidden px-4 pb-10 pt-8 sm:px-6 lg:h-[850px] lg:px-10 lg:pt-10"
    >
      {/* Title Header */}
      <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-baseline sm:whitespace-nowrap">
        <p className="text-[28px] leading-none text-[#4298A9] sm:text-[40px]">
          Australian
        </p>
        <span className="mt-1 text-[36px] leading-none font-semibold text-[#5B9E7D] sm:mt-0 sm:ml-2 sm:text-[60px]">
          States
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 lg:mt-[60px] lg:flex-row lg:justify-center lg:gap-10">
        {/* Left Side Buttons */}
        <div className="w-full max-w-[420px] lg:w-[420px] lg:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[12px] sm:gap-[18px]"
            >
              {statesList.map(({ id, title }) => {
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
                    className="flex h-[52px] w-full items-center justify-center rounded-[12px] border text-center text-[16px] font-medium cursor-pointer shadow-sm sm:h-[62px] sm:text-[20px]"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Entire Card Animated as a Whole */}
        <div className="w-full max-w-[580px] lg:w-[580px] lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex h-full w-full flex-col gap-[16px] rounded-[24px] bg-white px-[18px] py-[20px] shadow-sm sm:rounded-[36px] sm:px-[36px] sm:py-[30px]"
            >
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#20697B] sm:text-[24px]">
                  {activeData.title}
                </p>
                <p className="mt-1 text-[14px] text-slate-500 sm:text-[16px]">
                  Capital&nbsp;<b>{activeData.capital}</b>
                </p>
              </div>

              <div className="flex flex-col gap-2.5 text-[14px] leading-[1.35] text-[#20697B] sm:text-[16px]">
                <p>
                  <span className="font-bold">Population</span> ~ {" "}
                  <span className="text-[#00609C]">{activeData.population}</span>
                </p>
                <p>
                  <span className="font-bold">Economy</span> –{" "}
                  <span className="text-[#00609C]">{activeData.economy}</span>
                </p>

                <div>
                  <p className="font-bold">Job Market</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {activeData.jobMarket.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Key Industries</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {activeData.keyIndustries.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Specialties</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {activeData.specialties.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p>
                  <span className="font-bold">Immigration Appeal</span> –{" "}
                  <span className="text-[#00609C]">
                    {activeData.immigrationAppeal}
                  </span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default States;