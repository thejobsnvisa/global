import { useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/d7.png";
import d5 from "../assets/d5.png";
import d8 from "../assets/d8.png";
import d3 from "../assets/d9.png";
import d2 from "../assets/Frame 327.png";
import d4 from "../assets/Frame 326.png";

const topRowFeatures = [
  {
    icon: img1,
    title: "Expert Guidance",
    bgColor: "bg-[#F3FAF7]",
    textColor: "text-teal-500",
    description:
      "Our registered MARA agent and experienced consultants guide you through every stage of your migration journey.",
  },
  {
    icon: d8,
    title: "Global Coverage",
    bgColor: "bg-[#EBF7FC]",
    textColor: "text-sky-600",
    description:
      "Comprehensive visa solutions catering to various international destinations across the globe.",
  },
  {
    icon: d3,
    title: "Personalized Pathways",
    bgColor: "bg-[#F3FAF7]",
    textColor: "text-teal-500",
    description:
      "Tailored strategies designed specifically around your skills, qualifications, and future goals.",
  },
];

const bottomRowFeatures = [
  {
    icon: d2,
    title: "Employer-Sponsored Support",
    bgColor: "bg-[#EBF7FC]",
    textColor: "text-sky-600",
    description:
      "Dedicated assistance for business sponsorship, work visas, and employer nomination schemes.",
  },
  {
    icon: d4,
    title: "End-to-End Management",
    bgColor: "bg-[#F3FAF7]",
    textColor: "text-teal-500",
    description:
      "Complete handling of your application from document preparation to final visa lodgement.",
  },
  {
    icon: d5,
    title: "Settlement Assistance",
    bgColor: "bg-[#EBF7FC]",
    textColor: "text-sky-600",
    description:
      "Post-visa arrival guidance to ensure a seamless transition to your new home.",
  },
];

// Flip Card Component
const FlipCard = ({ icon, title, description, bgColor, textColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
  className="h-[204px] w-full cursor-pointer [perspective:1000px]"
  onMouseEnter={() => setIsFlipped(true)}
  onMouseLeave={() => setIsFlipped(false)}
>
  <motion.div
    className="relative h-full w-full rounded-[20px] transition-all [transform-style:preserve-3d]"
    initial={false}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {/* FRONT SIDE */}
    <div
      className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-[20px] p-6 text-center shadow-sm [backface-visibility:hidden] ${bgColor}`}
    >
      <div className="mb-4 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl p-[8px]">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className={`text-[18px] font-semibold leading-snug ${textColor}`}>
        {title}
      </h3>
    </div>

    {/* BACK SIDE */}
    <div
      className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-[20px] p-6 text-center shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] ${bgColor}`}
    >
      <div className="mb-2 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl bg-white p-[8px] shadow-md">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className={`mb-1 text-[16px] font-bold ${textColor}`}>
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  </motion.div>
</div>
  );
};

const Visa = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 md:mt-[-180px] lg:mt-[-120px]">
      <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10 mb-43">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-14">
          <p className="m-0 pt-4 text-[24px] leading-[1.15] text-[#26839A] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:pt-10 xl:text-[40px]">
            Why Trust Growmore Global Visa
          </p>
          <h2 className="m-0 mt-1 text-[30px] font-bold leading-[1.05] text-[#5B9E7D] sm:text-[34px] md:text-[40px] lg:text-[48px] xl:text-[60px]">
            For Your Migration
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6">
          {/* Top Row: Offset Right on Desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:ml-auto lg:w-[88%] lg:grid-cols-3">
            {topRowFeatures.map((item, index) => (
              <FlipCard key={index} {...item} />
            ))}
          </div>

          {/* Bottom Row: Offset Left on Desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:mr-auto lg:w-[88%] lg:grid-cols-3">
            {bottomRowFeatures.map((item, index) => (
              <FlipCard key={index} {...item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visa;