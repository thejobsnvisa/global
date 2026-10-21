import bgImage from "../assets/bgImage.png";

const GlobalVisa = () => {
  return (
    <div
      className="
        w-full
        min-h-[580px]
        bg-cover
        bg-center
        bg-no-repeat
        px-4
        py-10
        sm:px-6
        sm:py-10
        sm:min-h-[640px]
        md:px-8
        md:py-12
        md:min-h-[760px]
        lg:px-10
        lg:py-16
        lg:min-h-[880px]
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
          text-lg
          leading-tight
          text-[#295963]
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-[40px]
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

          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
        "
      >
        For Work Visa?
      </p>

      {/* ================= CONTENT CARD ================= */}
      <div
        className="
          mx-auto
          mt-6
          h-auto
          min-h-0
          w-full
          max-w-5xl
          rounded-2xl
          bg-[#FFFFFF4D]
          p-4
          backdrop-blur-[6px]
          sm:mt-8
          sm:rounded-3xl
          sm:p-6
          md:mt-10
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
              md:text-lg
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
              md:text-lg
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
              md:text-lg
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
              md:text-lg
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
              md:text-lg
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
