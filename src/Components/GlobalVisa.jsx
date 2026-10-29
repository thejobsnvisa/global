import { motion } from "framer-motion";
import bgImage from "../assets/bgImage.png";

const GlobalVisa = () => {
  const visaPoints = [
    {
      title: "Expert Guidance You Can Trust:",
      description:
        "Get professional visa guidance from our registered MARA agent, with support aligned with Australian immigration standards and professional requirements.",
    },
    {
      title: "Global Work Visa Knowledge:",
      description:
        "Planning to work in Australia, Canada, the UK, USA, New Zealand, or beyond? Our team helps you explore the right work visa pathway for your career goals.",
    },
    {
      title: "From Profile to Visa:",
      description:
        "From your initial profile assessment and document preparation to application submission and follow-ups, we stay with you throughout the journey.",
    },
    {
      title: "Employer-Sponsored Visa Support:",
      description:
        "Have an employer ready to sponsor you? We help you understand the sponsorship process and ensure your application meets the relevant requirements.",
    },
    {
      title: "Get It Right the First Time:",
      description:
        "Small mistakes can create unnecessary delays. Our team carefully reviews your application and documentation to help ensure everything is accurate, complete, and immigration ready.",
    },
  ];

  // Continuous keyframe animation for looping right-to-left slide
  const getItemVariants = (index) => ({
    animate: {
      opacity: [0, 1, 1, 0],
      x: [80, 0, 0, -40],
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        repeat: Infinity,
        repeatDelay: 1.5,
        delay: index * 0.3, // Staggers the initial start of each bullet point
        times: [0, 0.25, 0.85, 1], // Timeline keyframes for smooth fade-in, hold, and fade-out
      },
    },
  });

  return (
    <div
      className="w-full mt-10 min-h-[940px] bg-cover bg-center bg-no-repeat px-4 py-10 sm:px-6 sm:py-10  md:px-8 md:py-12 md:min-h-[980px] lg:px-10 lg:py-16 lg:min-h-[880px] mb-30 lg:mb-24 xl:mb-30 2xl:mb-27 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(#70CBDB99, #70CBDB99), url(${bgImage})`,
      }}
    >
      {/* ================= HEADING ================= */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-4xl text-center text-lg leading-tight text-[#295963] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px]"
      >
        Why Trust Growmore Global Visa
      </motion.p>

      {/* ================= SUB HEADING ================= */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-2 w-full max-w-3xl text-center font-bold leading-tight text-[#1E744A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        For Work Visa?
      </motion.p>

      {/* ================= CONTENT CARD ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 h-auto min-h-0 w-full max-w-5xl rounded-2xl bg-[#FFFFFF4D] p-4 backdrop-blur-[6px] sm:mt-8 sm:rounded-3xl sm:p-6 md:mt-10 md:p-8 lg:mt-10 lg:p-10"
      >
        <ul className="list-disc space-y-3 pl-5 font-semibold sm:space-y-4 sm:pl-6 md:pl-7 lg:pl-8">
          {visaPoints.map((point, index) => (
            <motion.li
              key={index}
              variants={getItemVariants(index)}
              animate="animate"
              className="text-sm leading-relaxed text-cyan-950 sm:text-base md:text-lg"
            >
              <span className="font-bold text-cyan-900">{point.title}</span>{" "}
              {point.description}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default GlobalVisa;