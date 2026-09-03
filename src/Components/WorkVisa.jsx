import img from "../assets/img29.png";

const WorkVisa = () => {
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

        lg:h-[691px]
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
            lg:pl-[35px]
          "
        >
          <p
            className="
              text-[28px]
              leading-[1.15]
              text-[#26839A]

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
          {/* Intro */}
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
              lg:mb-9
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
              REQUIREMENTS LIST
          ================================================== */}
          <div
            className="
              space-y-5
              text-[13px]
              leading-[1.45]
              text-[#52647A]

              sm:text-[14px]
              xl:space-y-4
              xl:text-[18px]
              lg:space-y-1
              lg:text-[16px]
            "
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {/* Passport */}
            <div className="flex items-start gap-3">
              <span className="mt-[2px] text-[#52647A] h-6">•</span>

              <p>
                <strong className="font-semibold text-[#43556B]">
                  Valid Passport
                </strong>{" "}
                – A passport with sufficient validity beyond the intended period
                of stay.
              </p>
            </div>

            {/* Education */}
            <div className="flex items-start gap-3">
              <span className="mt-[2px] text-[#52647A]">•</span>

              <p>
                <strong className="font-semibold text-[#43556B]">
                  Relevant Educational Qualifications
                </strong>{" "}
                – Degrees, diplomas, or certifications related to the
                occupation.
              </p>
            </div>

            {/* Job Offer */}
            <div className="flex items-start gap-3">
              <span className="mt-[2px] text-[#52647A]">•</span>

              <p>
                <strong className="font-semibold text-[#43556B]">
                  Job Offer or Employer Sponsorship
                </strong>{" "}
                – Required for employer-sponsored work visas in many countries.
              </p>
            </div>

            {/* Language */}
            <div className="flex items-start gap-3">
              <span className="mt-[2px] text-[#52647A]">•</span>

              <p>
                <strong className="font-semibold text-[#43556B]">
                  Language Proficiency
                </strong>{" "}
                – Proof of language skills, such as English proficiency tests,
                where applicable.
              </p>
            </div>

            {/* Health */}
            <div className="flex items-start gap-3">
              <span className="mt-[2px] text-[#52647A]">•</span>

              <p>
                <strong className="font-semibold text-[#43556B]">
                  Health Requirements
                </strong>{" "}
                – Medical examinations as per the destination country’s
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkVisa;
