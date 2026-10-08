import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States6List = [
  { id: "Lo", title: "London" },
  { id: "Ed", title: "Edinburgh" },
  { id: "Ma", title: "Manchester" },
  { id: "Bi", title: "Birmingham" },
  { id: "Gl", title: "Glasgow" },
  { id: "Ca", title: "Cambridge" },
];

const States6 = () => {

  const stateData = {
    Lo: {
      title: "London",
      PopularUniversities: [
        "University College London (UCL)",
        "King’s College London",
        "London School of Economics and Political Science",
        "Imperial College London",
      ],
      JobOpportunities: [
        "Massive demand in finance, tech, media, & healthcare",
        "Strong part-time job market (hospitality, retail, admin)"
      ],
      KeyIndustries: [
        "Finance & Banking",
        "Media & film",
        "Technology",
        "Fashion",
        "Business & Consulting"
      ],
      CityHighlights: [
        "A global hub with unmatched networking opportunities",
        "Access to top internships across multiple industries",
        "Diverse communities with endless events",
        "High cost of living compared to other UK cities "
    ],
    },
    Ed: {
      title: "Edinburgh",
      PopularUniversities:
       [
        "University of Edinburgh",
        "Edinburgh Napier University", 
        "Heriot-Watt University",
    ],
    JobOpportunities:[
        "Solid openings in tech, finance, education, and tourism",
        "Good part-time roles due to high tourist traffic",
    ],
    KeyIndustries:[
        "Tech & AI",
        "Finance",
        "Education",
        "Tourism"
    ],
    CityHighlights: [
        "Safe, clean, historic environment",
        "More affordable than London", 
        "Strong student culture",
        "Home to several major corporate headquarters"
    ],
    },
    Ma: {
      title: "Manchester",
      PopularUniversities: [
        "University of Manchester", 
        "Manchester Metropolitan University",
        "University of Salford", 
    ],
      JobOpportunities: [
       "Good for IT, engineering, digital media, & healthcare",
       "Large part-time job market"
      ],
      KeyIndustries: [
       "Manufacturing",
       "Technology",
       "Media (BBC & ITV hubs)",
       "Creative Arts",
      ],
      CityHighlights: [
        "Affordable compared to London", 
        "Big city feel without London costs", 
        "Strong music, sports, and nightlife culture",
    ],
    },
    Bi: {
      title: "Birmingham",
      PopularUniversities: [
      "University of Birmingham", 
      "Aston University", 
      "Birmingham City University",
    ],
      JobOpportunities: [
      "Plenty in engineering, business, logistics, & healthcare",
      "Consistent part-time opportunities",
    ],
      KeyIndustries: [
      "Engineering",
      "Manufacturing",
      "Logistics",
      "Finance"
      ],
      CityHighlights: [
      "Centrally located (easy travel anywhere)", 
      "Lower cost of living", 
      "Good cultural diversity",
      "Not as many global corporate HQs"
    ],
    },
    Gl: {
      title: "Glasgow",
      PopularUniversities: [
        "University of Glasgow", 
        "University of Strathclyde", 
        "Glasgow Caledonian University",
    ],
      JobOpportunities: [
        "Engineering, tech, finance, healthcare, creative arts",
        "Strong part-time market, especially retail & hospitality",
      ],
      KeyIndustries:[
        "Technology",
        "Education",
        "Engineering",
        "Creative industries",
      ],
      CityHighlights: [
        "Affordable living", 
        "Friendly student community", 
        "Vibrant arts & music scene",
        "Known for cold & rainy weather"
    ],
    },
    Ca: {
      title: "Cambridge",
      PopularUniversities: [
        "University of Cambridge", 
        "Anglia Ruskin University",
    ],
     JobOpportunities: [
        "Huge demand in research, biotech, engineering, AI, and academia",
        "Fewer part-time roles compared to big cities",
     ],
     KeyIndustries: [
        "Research & development",
        "Biotechnology",
        "AI & tech",
        "Education"
     ],
      CityHighlights: [
        "World-class academic environment", 
        "Perfect for research-focused students", 
        "Safe and peaceful",
        "Compact city with a welcoming atmosphere",
    ],
    },
  
  };

  const [selectedStateId, setSelectedStateId] = useState(States6List[0].id);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States6List.forEach((state, index) => {
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
    <div ref={sectionRef} className="w-full bg-[#EBF7F6] px-4 py-10 sm:px-6 lg:h-[785px] lg:pt-10">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[28px] text-[#4298A9] sm:text-[32px] lg:text-[40px] lg:leading-none">
          UK
        </p>
        <span className="ml-2 text-[40px] font-semibold text-[#5B9E7D] sm:text-[48px] lg:text-[60px] lg:leading-none">
          States
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 sm:gap-8 lg:mt-[65px] lg:flex-row lg:justify-center lg:gap-10 lg:px-10">
        {/* Left Side Buttons */}
        <div className="w-full max-w-[420px] lg:w-[420px] lg:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="mt-0 flex flex-col gap-[18px] lg:mt-14"
            >
              {States6List.map(({ id, title }) => {
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
                    className="flex h-[54px] w-full items-center justify-center rounded-[12px] border text-center text-[17px] font-medium shadow-sm cursor-pointer sm:text-[18px] lg:h-[62px] lg:text-[20px]"
                  >
                    {title}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Entire Card Animated as a Whole */}
        <div className="relative w-full max-w-[580px] lg:h-[592px] lg:w-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStateId}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex h-auto w-full flex-col gap-[16px] rounded-[24px] bg-white px-[20px] py-[22px] shadow-sm sm:px-[26px] lg:h-full lg:rounded-[36px] lg:px-[36px] lg:py-[30px]"
            >
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#20697B] sm:text-[22px] lg:text-[24px]">
                  {activeData.title}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 text-[15px] leading-[1.35] text-[#20697B] sm:text-[16px] lg:text-[16px]">
                <div>
                  <p className="font-bold">Popular Universities</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.PopularUniversities ?? []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Job Opportunities</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.JobOpportunities ?? []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Key Industries</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.KeyIndustries ?? []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">City Highlights</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.CityHighlights ?? []).map((item, index) => (
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

export default States6;