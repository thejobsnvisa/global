import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const States5List = [
  { id: "Ne", title: "New York City" },
  { id: "Bo", title: "Boston" },
  { id: "Lo", title: "Los Angeles" },
  { id: "Ch", title: "Chicago" },
  { id: "Te", title: "Texas (Dallas / Austin / Houston)" },
  { id: "Sa", title: "San Francisco Bay Area" },
];

const States5 = () => {

  const stateData = {
    Ne: {
      title: "New York City",
      PopularUniversities: [
        "Columbia University",
        "Stony Brook University",
        "University at Buffalo",
        "Long Island University (LIU)",
        "New York University (NYU)"
      ],
      JobOpportunities: [
        "Strong demand in finance, media, technology, consulting, and healthcare",
        "Wide availability of part-time on-campus jobs"
      ],
      KeyIndustries: [
        "Finance & Banking",
        "Media & Entertainment",
        "Technology",
        "Fashion",
        "Business & Consulting"
      ],
      CityHighlights: [
        "Canada’s financial and business heart",
        "Excellent part-time work and internship opportunities",
        "A truly global city where cultures come together",
    ],
    },
    Bo: {
      title: "Boston",
      PopularUniversities:
       ["Harvard University",
        "Massachusetts Institute of Technology (MIT)", 
        "Boston University",
        "Suffolk University",
        "Northeastern University"
    ],
    JobOpportunities:[
        "High demand in research, healthcare, biotech, and technology",
        "Strong co-op and internship culture",
    ],
    KeyIndustries:[
        "Education & Research",
        "Biotechnology",
        "Healthcare",
        "Technology"
    ],
    CityHighlights: [
        "Academic capital of the USA",
        "Strong student ecosystem", 
        "Safe and student-friendly"
    ],
    },
    Lo: {
      title: "Los Angeles",
      PopularUniversities: [
        "University of California, Los Angeles(UCLA)", 
        "University of Southern California(USC)",
        "California State University", 
        "California State University, Long Beach",
        "Loyola Marymount University (LMU)"
    ],
      JobOpportunities: [
       "Opportunities in media, entertainment, tech, and healthcare",
       "On-campus and part-time roles available"
      ],
      KeyIndustries: [
       "Media & Entertainment",
       "Technology",
       "Healthcare",
       "Creative Arts",
      ],
      CityHighlights: [
        "Home of creative industries", 
        "Pleasant weather year-round", 
        "Diverse culture and lifestyle",
    ],
    },
    Ch: {
      title: "Chicago",
      PopularUniversities: [
      "University of Chicago", 
      "Northwestern University", 
      "Roosevelt University",
      "University of Illinois Chicago", 
      "DePaul University"
    ],
      JobOpportunities: [
      "Strong opportunities in finance, engineering, healthcare, and analytics",
      "Good availability of student jobs",
    ],
      KeyIndustries: [
      "Finance",
      "Manufacturing",
      "Technology",
      "Healthcare"
      ],
      CityHighlights: [
      "Affordable compared to coastal cities", 
      "Strong job market", 
      "Cultural and architectural hub"
    ],
    },
    Te: {
      title: "Texas (Dallas / Austin / Houston)",
      PopularUniversities: [
        "University of Texas at Austin", 
        "University of Houston", 
        "Trinity University",
        "The University of Texas at Dallas", 
        "Texas A&M University"
    ],
      JobOpportunities: [
        "High demand in engineering, IT, energy, and business",
        "Growing startup ecosystem",
      ],
      KeyIndustries:[
        "Technology",
        "Energy",
        "Engineering",
        "Business",
      ],
      CityHighlights: [
        "Lower cost of living", 
        "Fast-growing economy", 
        "Excellent job prospects after graduation"
    ],
    },
    Sa: {
      title: "San Francisco Bay Area",
      PopularUniversities: [
        "Stanford University", 
        "University of California, Berkeley", 
        "San Francisco State University", 
        "Golden Gate University",
        "University of the Pacific"
    ],
     JobOpportunities: [
        "Massive demand in technology, AI, data science, and startups",
        "Internship-rich ecosystem",
     ],
     KeyIndustries: [
        "Technology",
        "Artificial Intelligence",
        "Research & Development"
     ],
      CityHighlights: [
        "Global tech innovation hub (Silicon Valley)", 
        "Best opportunities for tech students", 
        "Strong startup culture"
    ],
    },
  
  };

  const [selectedStateId, setSelectedStateId] = useState(States5List[0].id);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Step through each state with readable timing
  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];

    States5List.forEach((state, index) => {
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
    <div ref={sectionRef} className="w-full h-[720px] lg:h-[785px] pt-10 bg-[#EBF7F6]">
      {/* Title Header */}
      <div className="flex items-baseline justify-center whitespace-nowrap">
        <p className="text-[40px] leading-none text-[#4298A9]">USA</p>
        <span className="ml-2 text-[60px] leading-none font-semibold text-[#5B9E7D]">
          States
        </span>
      </div>

      <div className="mt-[65px] flex justify-center gap-10 px-10">
        {/* Left Side Buttons */}
        <div className="w-[420px] min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="flex flex-col gap-[18px] mt-15"
            >
              {States5List.map(({ id, title }) => {
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
        <div className="w-[580px] h-[592px] relative">
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
                  <p className="font-bold">Job Opportunities</p>
                  <ul className="list-disc pl-5 mt-1 text-[#00609C] space-y-0.5">
                    {(activeData.JobOpportunities  ?? []).map((item, index) => (
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

export default States5;