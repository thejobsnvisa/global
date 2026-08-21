import g9 from "../assets/g9.png";
import Call from "../assets/Call.svg";
import user from "../assets/user.svg";
import documents from "../assets/documents.svg";
import d4 from "../assets/d4.svg";
import d5 from "../assets/d5.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Approach = () => {
  const cards = [
    {
      id: 0,
      title: "Initial Contact",
      description:
        "Reach out to us via WhatsApp or our website to start your visa process.",
      img: Call,
    },
    {
      id: 1,
      title: "Consult & Enroll",
      description:
        "Get guidance from our counsellor/RMA & confirm your enrollment with us.",
      img: user,
    },
    {
      id: 2,
      title: "Prepare Documents",
      description:
        "Collect, verify, and arrange all documents for your visa application.",
      img: documents,
    },
    {
      id: 3,
      title: "Submit Application",
      description: "Submit your visa application accurately and on time.",
      img: d4,
    },
    {
      id: 4,
      title: "Continuous Guidance",
      description: "Get guidance at every step, from submission to outcome.",
      img: d5,
    },
  ];

  const cardSectionRef = useRef(null);
  const cardSectionInView = useInView(cardSectionRef, { margin: "-50px" });

  // Key to force reset animation loop across all children
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!cardSectionInView) return;

    // Total time = (5 items * 0.4s delay) + 0.5s item duration + 2.0s hold display before restart
    const totalCycleTime = cards.length * 400 + 2500;

    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, totalCycleTime);

    return () => clearInterval(interval);
  }, [cardSectionInView, cards.length]);

  // Icon animation: Drops down along Y
  const iconVariant = {
    initial: {
      opacity: 0,
      y: -25,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Text animation: Slides in along X
  const textVariant = {
    initial: {
      opacity: 0,
      x: 30,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.4 + 0.1,
        ease: "easeOut",
      },
    }),
  };

  // Dashed line draw animation
  const lineVariant = {
    initial: {
      scaleY: 0,
      opacity: 0,
    },
    animate: (index) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: index * 0.4 + 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="w-full min-h-screen bg-[#EFFCFF] py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-10 lg:px-28">
      {/* Header */}
      <div className="flex items-center gap-[10px] sm:mb-3 mb-2 ">
        <span className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[40px] text-[#338292]">Our</span>
      </div>
      <div className="mt-[-30px]">
         <span className="text-[32px] sm:text-[40px] sm:mt-4 md:text-[45px] lg:text-[60px] font-bold text-[#8DC8AB]">
          Approach
        </span>
      </div>
      <p className="text-[14px] mt-2 sm:text-[15px] md:text-[17px] text-[#3682B1] mb-8 sm:mb-10 md:mb-12 leading-snug">
        Workflow at Growmore Global Visa <br /> Making Immigration Simple Across
        All Countries
      </p>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start" ref={cardSectionRef}>
        <div className="w-full lg:w-[580px]">
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${animationKey}`}
              className="relative pb-8 last:pb-0 flex items-center gap-12"
            >
              {/* Connecting Line */}
              {index !== cards.length - 1 && (
                <motion.div
                  custom={index}
                  variants={lineVariant}
                  initial="initial"
                  animate={cardSectionInView ? "animate" : "initial"}
                  style={{ originY: 0 }}
                  className="absolute left-[38px] top-[76px] w-[2px] sm:ml-0 md:ml-10 lg:ml-10 h-[36px] border-l-2 border-dashed border-[#338292]/40 z-0"
                />
              )}

              {/* Icon Container (Y-axis animation) */}
              <motion.div
                custom={index}
                variants={iconVariant}
                initial="initial"
                animate={cardSectionInView ? "animate" : "initial"}
                className="w-[76px] h-[76px] rounded-[6px] bg-white flex items-center md:ml-10 justify-center flex-shrink-0 shadow-[0px_0px_20px_3px_rgba(0,0,0,0.15)] z-10"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-9 h-9 object-contain"
                />
              </motion.div>

              {/* Title & Description (X-axis animation) */}
              <motion.div
                custom={index}
                variants={textVariant}
                initial="initial"
                animate={cardSectionInView ? "animate" : "initial"}
              >
                <h3 className="text-[20px] font-bold text-[#009966]">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#505050] mt-1 leading-normal max-w-[340px]">
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Banner Image */}
        <div className="w-full sm:w-[400px] md:w-[480px] lg:w-[460px] xl:w-[560px] h-[500px] sm:h-[600px] md:h-[650px] xl:h-[700px] rounded-[32px] bg-white overflow-hidden flex-shrink-0 shadow-md xl:ml-10 mt-8 xl:mt-[-80px]">
          <img
            src={g9}
            alt="approach presentation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Approach;
