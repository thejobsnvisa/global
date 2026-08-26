import globalCareer from "../assets/image 6.png";
import settlement from "../assets/image 7.png";
import income from "../assets/image 8.png";
import cultural from "../assets/image 9.png";
import communication from "../assets/image 10.png";
import skills from "../assets/image 11.png";
import mobility from "../assets/image 12.png";

// =====================================================
// BENEFIT CARD
// Keep this OUTSIDE the Benefit component
// =====================================================
const BenefitCard = ({ benefit }) => {
  return (
    <div
      className="
        group
        flex
        h-[220px]
        w-full
        items-center
        overflow-hidden
        rounded-[30px]
        bg-white
        px-5
        py-6
        shadow-[inset_0px_0px_40px_0px_#90B8A14D]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        sm:px-6

        md:h-[220px]

        lg:w-[320px]
        lg:px-5

        xl:w-[400px]
        xl:px-6
      "
    >
      {/* =================================================
          IMAGE
      ================================================== */}
      <div
        className="
          flex
          h-[95px]
          w-[95px]
          shrink-0
          items-center
          justify-center

          sm:h-[105px]
          sm:w-[105px]

          md:h-[100px]
          md:w-[100px]

          lg:h-[110px]
          lg:w-[110px]

          xl:h-[120px]
          xl:w-[120px]
        "
      >
        <img
          src={benefit.image}
          alt={benefit.title}
          className="
            block
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}
      <div
        className="
          ml-4
          min-w-0
          flex-1

          sm:ml-5

          lg:ml-3

          xl:ml-4
        "
      >
        <h3
          className="
            m-0
            text-[12px]
            font-bold
            leading-[1.2]
            text-[#0097C7]

            sm:text-[18px]

            md:text-[18px]

            lg:text-[15px]

            xl:text-[15px]
          "
        >
          {benefit.title}
        </h3>

        <p
          className="
            m-0
            mt-2
            text-[18px]
            font-normal
            leading-[1.45]
            text-[#8AA3B8]

            sm:text-[18px]

            md:text-[18px]

            lg:text-[14px]

            xl:text-[15px]
          "
        >
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

// =====================================================
// BENEFIT COMPONENT
// =====================================================
const Benefit = () => {
  const benefits = [
    {
      title: "Global Career Exposure",
      description:
        "Work in internationally recognized job markets and gain experience valued across countries and industries.",
      image: globalCareer,
    },
    {
      title: "Long-Term Settlement Opportunities",
      description:
        "In selected countries, work visas may offer pathways to permanent residency, subject to eligibility and immigration policies.",
      image: settlement,
    },
    {
      title: "Higher Income & Employment Benefits",
      description:
        "Access competitive salaries, structured employment benefits, and better work conditions in many countries.",
      image: income,
    },
    {
      title: "Cultural & Workplace Exposure",
      description:
        "Understand different work cultures, business practices, and professional ethics worldwide.",
      image: cultural,
    },
    {
      title: "Improved Communication & Adaptability",
      description:
        "We monitor the application, respond to immigration queries, and guide you through the process until a final decision is issued.",
      image: communication,
    },
    {
      title: "Professional Skill Enhancement",
      description:
        "Develop advanced technical, managerial, and industry-specific skills that align with global work standards.",
      image: skills,
    },
    {
      title: "Better Career Mobility",
      description:
        "International work experience improves long-term career prospects and opens opportunities across global markets.",
      image: mobility,
    },
  ];

  return (
    <section
      className="
        w-full
        bg-white

        py-12

        sm:py-14

        md:py-16

        lg:py-[50px]

        xl:py-[70px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1350px]
          px-5

          sm:px-8

          lg:px-10

          xl:px-0
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className="
            mb-10

            sm:mb-12

            md:mb-14

            lg:mb-12

            xl:mb-14
          "
        >
          <p
            className="
              m-0
              text-[24px]
              leading-[1.15]
              text-[#26839A]

              sm:text-[26px]

              md:text-[28px]

              lg:text-[24px]

              xl:text-[40px]
            "
          >
            Benefits of
          </p>

          <h2
            className="
              m-0
              mt-1
              text-[30px]
              font-bold
              leading-[1.05]
              text-[#5B9E7D]

              sm:text-[34px]

              md:text-[40px]

              lg:text-[34px]

              xl:text-[60px]
            "
          >
            Working Abroad
          </h2>
        </div>

        {/* =====================================================
            ROW 1
            2 CARDS
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-5

            md:flex-row
            md:gap-5

            xl:gap-[40px]
          "
        >
          <BenefitCard benefit={benefits[0]} />
          <BenefitCard benefit={benefits[1]} />
        </div>

        {/* =====================================================
            ROW 2
            3 CARDS
        ====================================================== */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-5

            md:flex-row
            md:flex-wrap

            lg:flex-nowrap

            xl:gap-[40px]
          "
        >
          <BenefitCard benefit={benefits[2]} />
          <BenefitCard benefit={benefits[3]} />
          <BenefitCard benefit={benefits[4]} />
        </div>

        {/* =====================================================
            ROW 3
            2 CARDS
        ====================================================== */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-5

            md:flex-row
            md:gap-5
            xl:gap-[40px]
          "
        >
          <BenefitCard benefit={benefits[5]} />
          <BenefitCard benefit={benefits[6]} />
        </div>
      </div>
    </section>
  );
};

export default Benefit;
