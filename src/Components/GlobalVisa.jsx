import bgImage from "../assets/bgImage.png";

const GlobalVisa = () => {
  return (
    <div
      className="
        w-full
        min-h-[1050px]
        bg-cover
        bg-center
        bg-no-repeat

        px-5
        py-10

        sm:px-8
        sm:py-12

        md:px-10
        md:py-14
        h-[1150px]
        lg:px-12
        lg:py-16

        xl:h-[798px]
        xl:min-h-0
        xl:px-0
        xl:py-0
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
          max-w-[600px]
          text-center

          text-[28px]
          leading-tight
          text-[#295963]

          sm:max-w-[680px]
          sm:text-[32px]

          md:max-w-[750px]
          md:text-[36px]

          lg:max-w-[850px]
          lg:text-[38px]

          xl:mx-0
          xl:w-[665px]
          xl:max-w-none
          xl:h-[60px]
          xl:pt-10
          xl:text-left
          xl:text-[40px]
          xl:leading-normal
          xl:ml-120
        "
      >
        Why Trust Growmore Global Visa
      </p>

      {/* ================= SUB HEADING ================= */}
      <p
        className="
          mx-auto
          w-full
          max-w-[500px]
          pt-3
          text-center
          font-semibold
          leading-tight
          text-[#1E744A]

          text-[40px]

          sm:max-w-[550px]
          sm:text-[46px]

          md:max-w-[600px]
          md:text-[52px]

          lg:max-w-[650px]
          lg:text-[56px]

          xl:mx-0
          xl:w-[447px]
          xl:max-w-none
          xl:h-[42px]
          xl:pt-6
          xl:text-left
          xl:text-[60px]
          xl:leading-normal
          xl:ml-145
        "
      >
        For Work Visa?
      </p>

      {/* ================= CONTENT CARD ================= */}
      <div
        className="
          mx-auto
          mt-10
          w-full
          max-w-[620px]
          min-h-[420px]

          rounded-[24px]
          bg-[#FFFFFF4D]
          p-6
          backdrop-blur-[6px]

          sm:mt-[-10px]
          sm:max-w-[700px]
          sm:min-h-[480px]
          sm:rounded-[28px]
          sm:p-7

          md:mt-14
          md:max-w-[780px]
          md:min-h-[480px]
          md:rounded-[30px]
          md:p-8

          lg:mt-16
          lg:max-w-[850px]
          lg:min-h-[510px]
          lg:rounded-[32px]
          lg:p-9

          xl:w-[965px]
          xl:h-[430px]
          xl:min-h-0
          xl:max-w-none
          xl:mt-[86px]
          xl:ml-[310px]
          xl:rounded-[32px]
          xl:p-[20px]
          xl:gap-[10px]
        "
      >
        <ul
          className="
            list-disc
            pl-5
            font-semibold

            sm:pl-6
            md:pl-7
            lg:pl-8

            xl:pl-0
          "
        >
          {/* ================= ITEM 1 ================= */}
          <li
            className="
              mt-2
              text-[16px]
              leading-7
              text-cyan-950

              sm:text-[17px]
              sm:leading-7

              md:text-[18px]
              md:leading-8

              lg:text-[19px]
              lg:leading-8

              xl:ml-6
              xl:text-[20px]
              xl:leading-normal
            "
          >
            Expert Guidance You Can Trust : Get professional visa guidance from
            our registered MARA agent, with support aligned with Australian
            immigration standards and professional requirements.
          </li>

          {/* ================= ITEM 2 ================= */}
          <li
            className="
              mt-3
              text-[16px]
              leading-7
              text-cyan-950

              sm:mt-4
              sm:text-[17px]
              sm:leading-7

              md:text-[18px]
              md:leading-8

              lg:text-[19px]
              lg:leading-8

              xl:ml-6
              xl:text-[20px]
              xl:leading-normal
            "
          >
            Global Work Visa Knowledge: Planning to work in Australia, Canada,
            the UK, USA, New Zealand, or beyond? Our team helps you explore the
            right work visa pathway for your career goals.
          </li>

          {/* ================= ITEM 3 ================= */}
          <li
            className="
              mt-3
              text-[16px]
              leading-7
              text-cyan-950

              sm:mt-4
              sm:text-[17px]
              sm:leading-7

              md:text-[18px]
              md:leading-8

              lg:text-[19px]
              lg:leading-8

              xl:ml-6
              xl:text-[20px]
              xl:leading-normal
            "
          >
            From Profile to Visa : From your initial profile assessment and
            document preparation to application submission and follow-ups, we
            stay with you throughout the journey.
          </li>

          {/* ================= ITEM 4 ================= */}
          <li
            className="
              mt-3
              text-[16px]
              leading-7
              text-cyan-950

              sm:mt-4
              sm:text-[17px]
              sm:leading-7

              md:text-[18px]
              md:leading-8

              lg:text-[19px]
              lg:leading-8

              xl:ml-6
              xl:text-[20px]
              xl:leading-normal
            "
          >
            Employer-Sponsored Visa Support: Have an employer ready to sponsor
            you? We help you understand the sponsorship process and ensure your
            application meets the relevant requirements.
          </li>

          {/* ================= ITEM 5 ================= */}
          <li
            className="
              mt-1
              text-[16px]
              leading-7
              text-cyan-950

              sm:mt-4
              sm:text-[17px]
              sm:leading-7

              md:text-[18px]
              md:leading-8

              lg:text-[19px]
              lg:leading-8
              
              xl:ml-6
              xl:text-[20px]
              xl:leading-normal
            "
          >
            Get It Right the First Time:Small mistakes can create unnecessary
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
