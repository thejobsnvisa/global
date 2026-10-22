
import img from "../assets/img29.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import t1 from "../assets/travel.svg"
import t2 from "../assets/Group3.png"
import t3 from "../assets/file.png"
import t4 from "../assets/language.svg"
import t5 from "../assets/Heart.svg"

// Requirements list formatted with Teal icons
const requirements = [
  {
    id: 0,
    title: "Valid Passport",
    description: "A passport with sufficient validity beyond the intended period of stay.",
    icon:t1,
  },
  {
    id: 1,
    title: "Relevant Educational Qualifications",
    description: "Degrees, diplomas, or certifications related to the occupation.",
    icon: t2,
  },
  {
    id: 2,
    title: "Job Offer or Employer Sponsorship",
    description: "Required for employer-sponsored work visas in many countries.",
    icon: t3,
  },
  {
    id: 3,
    title: "Language Proficiency",
    description: "Proof of language skills, such as English proficiency tests, where applicable.",
    icon: t4,
  },
  {
    id: 4,
    title: "Health Requirements",
    description: "Medical examinations as per the destination country’s standards.",
    icon: t5,
  },
];

const WorkVisa = () => {
  const listSectionRef = useRef(null);
  const listSectionInView = useInView(listSectionRef, { margin: "-50px" });

  // Key to force reset animation loop across all items
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!listSectionInView) return;

    // Total cycle time = (5 items * 0.4s delay) + 2.5s hold display before restart
    const totalCycleTime = requirements.length * 400 + 2500;

    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, totalCycleTime);

    return () => clearInterval(interval);
  }, [listSectionInView]);

  // Icon animation: Drops down along Y axis
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

  // Text animation: Slides in along X axis
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

  // Teal Dashed line draw animation
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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-12

        sm:py-14
        md:py-16
        lg:h-[796px]
        xl:h-[691px]
        lg:py-0
      "
    >
      {/* =====================================================
          LEFT IMAGE
      ====================================================== */}
      <div
        className="
          absolute
          left-0
          top-0
          hidden
          h-full
          w-[578px]

          lg:block
        "
      >
        <img
          src={img}
          alt="Work visa requirements"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Soft white fade toward the content */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(255,255,255,0)_35%,rgba(255,255,255,0.55)_72%,#FFFFFF_100%)]
          "
        />
      </div>

      {/* =====================================================
          MOBILE IMAGE
      ====================================================== */}
      <div className="relative mb-8 h-[320px] w-full sm:h-[380px] lg:hidden">
        <img
          src={img}
          alt="Work visa requirements"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(255,255,255,0)_25%,rgba(255,255,255,0.4)_65%,#FFFFFF_100%)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          flex-col

          px-5

          sm:px-8
          md:px-12

          lg:flex-row
          lg:px-16
        "
      >
        {/* =================================================
            LEFT HEADING
        ================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center

            lg:w-[55%]
            lg:justify-start
            lg:pt-[42px]
            lg:pl-[-15px]
          "
        >
          <p
            className="
              text-[28px]
              leading-[1.15]
              text-[#31859A]

              sm:text-[32px]
              md:text-[36px]

              lg:text-[40px]
            "
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            General Requirements for
          </p>

          <h2
            className="
              mt-1
              text-[42px]
              font-bold
              leading-[1.05]
              text-[#36865F]

              sm:text-[48px]
              md:text-[54px]

              lg:text-[60px]
            "
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Work Visa
          </h2>
        </div>

        {/* =================================================
            RIGHT REQUIREMENTS CONTENT
        ================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center

            lg:w-[55%]
            lg:pl-[35px]
            xl:pl-[15px]
            lg:pr-[55px]
          "
        >
          {/* Intro Paragraph */}
          <p
            className="
              mb-6
              text-[16px]
              font-medium
              text-justify
              leading-[1.5]
              text-[#00637D]

              sm:text-[17px]
              md:text-[18px]
              mt-10
              lg:mb-6
              lg:text-[22px]
            "
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Your global career starts with the right visa. While requirements
            differ by country and visa pathway, meeting the essential
            eligibility criteria can put you one step closer to working and
            building your future abroad.
          </p>

          {/* =================================================
              UPDATED TEAL BULLET CARDS
          ================================================== */}
          <div ref={listSectionRef} className="w-full">
            {requirements.map((item, index) => (
              <div
                key={`${item.id}-${animationKey}`}
                className="relative pb-5 last:pb-0 flex items-center gap-[clamp(4rem,4vw,4rem)]"
              >
                {/* Teal Connecting Dashed Line */}
                {index !== requirements.length - 1 && (
                  <motion.div
                    custom={index}
                    variants={lineVariant}
                    initial="initial"
                    animate={listSectionInView ? "animate" : "initial"}
                    style={{ originY: 0 }}
                    className="absolute left-[28px] top-[56px] w-[2px] h-[24px] border-l-2 border-dashed border-[#0099B8]/50 z-0"
                  />
                )}

                {/* Teal Icon Badge */}
                <motion.div
                  custom={index}
                  variants={iconVariant}
                  initial="initial"
                  animate={listSectionInView ? "animate" : "initial"}
                  className="w-[56px] h-[56px] rounded-[6px] bg-white flex items-center justify-center flex-shrink-0 shadow-[0px_0px_15px_2px_rgba(0,153,184,0.18)] z-10"
                >
                  <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                </motion.div>

                {/* Title & Description */}
                <motion.div
                  custom={index}
                  variants={textVariant}
                  initial="initial"
                  animate={listSectionInView ? "animate" : "initial"}
                  className="min-w-0"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-emerald-600">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#52647A] mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkVisa;