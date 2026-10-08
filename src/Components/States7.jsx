import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States7List = [
  { id: "Ne", title: "Netherlands" },
  { id: "Sp", title: "Spain" },
  { id: "Ir", title: "Ireland" },
  { id: "Sw", title: "Switzerland" },
  { id: "Ma", title: "Malta" },
  { id: "Sd", title: "Sweden" },
  { id: "Fi", title: "Finland"},
];

const States7 = () => {

  const stateData = {
    Ne: {
      title: "Netherlands",
      PopularUniversities: [
        "University of Amsterdam",
        "Delft University of Technology",
        "Erasmus University Rotterdam",
        "Eindhoven University of Technology.",
      ],
      JobOpportunities: [
        "Amsterdam",
        "Rotterdam",
        "Delft",
        "Eindhoven"
      ],
      CityHighlights: [
        "Dutch architecture",
        "Business & innovation",
        "International environment",
    ],
    },
    Sp: {
      title: "Spain",
      PopularUniversities:
       [
        "University of Barcelona",
        "Autonomous University of Madrid", 
        "Complutense University of Madrid",
        "Pompeu Fabra University"
    ],
    JobOpportunities:[
        "Barcelona",
        "Madrid",
        "Valencia",
        "Seville",
    ],
    CityHighlights: [
        "Mediterranean Lifestyle",
        "Architecture", 
        "Beaches",
        "Arts & Culture"
    ],
    },
    Ir: {
      title: "Ireland",
      PopularUniversities: [
        "Trinity College Dublin", 
        "University College Dublin",
        "Dublin City University", 
        "University of Galway",
    ],
      JobOpportunities: [
       "Dublin",
       "Galway",
       "Cork",
      ],
      CityHighlights: [
        "Technology", 
        "English-Taught Education", 
        "Historic Culture",
        "Coastal Life",
    ],
    },
    Sw: {
      title: "Switzerland",
      PopularUniversities: [
      "ETH Zurich", 
      "University of Zurich", 
      "University of Geneva",
    ],
      JobOpportunities: [
      "Zurich",
      "Lausanne",
      "Geneva",
      "Bern",
    ],
      CityHighlights: [
      "Technology", 
      "Research", 
      "Alps & Lakes",
      "Finance"
    ],
    },
    Ma: {
      title: "Malta",
      PopularUniversities: [
        "University of Malta", 
        "Malta College of Arts, Science & Technology (MCAST)", 
        "American University of Malta",
    ],
      JobOpportunities: [
        "Valletta",
        "Msida",
        "St. Julian's",
        "Birkirkara",
      ],
      CityHighlights: [
        "Beaches", 
        "Sunny Climate", 
        "Historic Heritage",
        "International Environment"
    ],
    },
    Sd: {
      title: "Sweden",
      PopularUniversities: [
        "KTH Royal Institute of Technology", 
        "Lund University",
        "Uppsala University",
        "Stockholm University"
    ],
     JobOpportunities: [
        "Stockholm",
        "Gothenburg",
        "Uppsala",
     ],
      CityHighlights: [
        "Innovation & Technology", 
        "Sustainable Living", 
        "Modern Cities",
        "Scandinavian Lifestyle",
    ],
    },
    Fi: {
      title: "Finland",
      PopularUniversities: [
        "University of Helsinki", 
        "Aalto University",
        "University of Turku",
        "Tampere University",
        "University of Oulu",
    ],
     JobOpportunities: [
        "Helsinki",
        "Espoo",
        "Tampere",
        "Turku",
        "Oulu",
     ],
      CityHighlights: [
        "Innovation & Technology", 
        "High-Quality Education", 
        "Beautiful Nature & Forests",
        "Northern & Winter Experiences",
        "Safe & International Environment",
        "Strong Research & Career Opportunities", 
    ],
    },
  };

  const [selectedStateId, setSelectedStateId] = useState(States7List[0].id);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States7List.forEach((state, index) => {
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
    <div ref={sectionRef} className="w-full bg-[#EBF7F6] px-4 py-10 sm:px-6 lg:h-[780px] lg:pt-10">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[28px] text-[#4298A9] sm:text-[32px] lg:text-[40px] lg:leading-none">
          European
        </p>
        <span className="ml-2 text-[40px] font-semibold text-[#5B9E7D] sm:text-[48px] lg:text-[60px] lg:leading-none">
         Countries
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 sm:gap-8 lg:mt-[25px] lg:flex-row lg:justify-center lg:gap-10 lg:px-10">
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
              {States7List.map(({ id, title }) => {
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
        <div className="relative w-full max-w-[580px] lg:h-[565px] lg:w-[580px] mt-10">
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
                  <p className="font-bold">Popular Student Cities</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.JobOpportunities ?? []).map((item, index) => (
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

export default States7;