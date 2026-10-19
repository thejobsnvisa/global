import bgImage from "../assets/bgImage.png";

const GlobalVisa = () => {
  return (
    <div
      className="
        w-full
        min-h-[880px]
        bg-cover
        bg-center
        bg-no-repeat
        px-4
        py-8
        sm:px-6
        sm:py-10
        md:px-8
        md:py-12
        lg:px-10
        lg:py-16
        mb-5
      "
      style={{
        backgroundImage: `
          linear-gradient(#70CBDB99, #70CBDB99),
          url(${bgImage})
        `,
      }}
    >
      {/* ================= HEADING ================= */}
      <p
        className="
          mx-auto
          w-full
          max-w-4xl
          text-center
          text-xl
          leading-tight
          text-[#295963]
          sm:text-2xl
          md:text-3xl
          lg:text-[40px]
        "
      >
        Why Trust Growmore Global Visa
      </p>

      {/* ================= SUB HEADING ================= */}
      <p
        className="
          mx-auto
          w-full
          max-w-3xl
          mt-2
          text-center
          font-semibold
          leading-tight
          text-[#1E744A]

          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        For Work Visa?
      </p>

      {/* ================= CONTENT CARD ================= */}
      <div
        className="
          mx-auto
          mt-8
          h-auto
          min-h-0
          w-full
          max-w-5xl
          rounded-2xl
          bg-[#FFFFFF4D]
          p-4
          backdrop-blur-[6px]
          sm:mt-10
          sm:rounded-3xl
          sm:p-6
          md:mt-12
          md:p-8
          lg:mt-10
          lg:p-10
        "
      >
        <ul
          className="
            list-disc
            space-y-3
            pl-5
            font-semibold
            sm:space-y-4
            sm:pl-6
            md:pl-7
            lg:pl-8
          "
        >
          {/* ================= ITEM 1 ================= */}
          <li
            className="
              text-sm
              leading-relaxed
              text-cyan-950
              sm:text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
            "
          >
            Expert Guidance You Can Trust : Get professional visa guidance from
            our registered MARA agent, with support aligned with Australian
            immigration standards and professional requirements.
          </li>

          {/* ================= ITEM 2 ================= */}
          <li
            className="
              text-sm
              leading-relaxed
              text-cyan-950
              sm:text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
            "
          >
            Global Work Visa Knowledge: Planning to work in Australia, Canada,
            the UK, USA, New Zealand, or beyond? Our team helps you explore the
            right work visa pathway for your career goals.
          </li>

          {/* ================= ITEM 3 ================= */}
          <li
            className="
              text-sm
              leading-relaxed
              text-cyan-950
              sm:text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
            "
          >
            From Profile to Visa : From your initial profile assessment and
            document preparation to application submission and follow-ups, we
            stay with you throughout the journey.
          </li>

          {/* ================= ITEM 4 ================= */}
          <li
            className="
              text-sm
              leading-relaxed
              text-cyan-950
              sm:text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
            "
          >
            Employer-Sponsored Visa Support: Have an employer ready to sponsor
            you? We help you understand the sponsorship process and ensure your
            application meets the relevant requirements.
          </li>

          {/* ================= ITEM 5 ================= */}
          <li
            className="
              text-sm
              leading-relaxed
              text-cyan-950
              sm:text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
            "
          >
            Get It Right the First Time: Small mistakes can create unnecessary
            delays. Our team carefully reviews your application and
            documentation to help ensure everything is accurate, complete, and
            immigration ready.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalVisa;
