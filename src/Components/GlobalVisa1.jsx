import bgImage from "../assets/bgImage1.png";

const GlobalVisa1 = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[550px]
        bg-cover
        bg-center
        bg-no-repeat
        px-5 py-12
        sm:px-8 sm:py-14
        md:px-10 md:py-16
        lg:px-12 lg:py-20
        xl:min-h-[700px] xl:px-8 xl:py-16
      "
      style={{
        backgroundImage: `
          linear-gradient(#084550B0, #084550B0),
          url(${bgImage})
        `,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
      {/* ================= HEADING ================= */}
      <p
        className="
          mx-auto
          w-full
          max-w-[600px]
          text-center
          text-[26px]
          leading-tight
          text-[#C3ECFE]
          sm:max-w-[680px] sm:text-[32px]
          md:max-w-[750px] md:text-[36px]
          lg:max-w-[850px] lg:text-[38px]
          xl:mx-0 xl:max-w-[740px] xl:pt-2 xl:text-left xl:text-[40px] xl:leading-normal
        "
      >
        Why Growmore Global Visa Stands Out in
      </p>

      {/* ================= SUB HEADING ================= */}
      <p
        className="
          mx-auto
          w-full
          max-w-[500px]
          text-center
          font-semibold
          leading-tight
          text-[#5B9E7D]
          text-[36px]
          sm:max-w-[550px] sm:text-[46px]
          md:max-w-[600px] md:text-[52px]
          lg:max-w-[650px] lg:text-[56px]
          xl:mx-0 xl:mt-1 xl:max-w-[700px] xl:text-left xl:text-[60px] xl:leading-normal
        "
      >
        Student Visa Services
      </p>

      {/* ================= DESCRIPTION ================= */}
      <p
        className="
          mx-auto
          mt-6
          w-full
          max-w-[900px]
          text-[17px]
          leading-[1.5]
          text-slate-50
          sm:mt-8 sm:text-[18px]
          md:mt-10 md:text-[19px]
          xl:mx-0 xl:mt-8 xl:max-w-[850px] xl:text-[18px] xl:leading-normal
        "
      >
        We can proudly say that we have become the trusted choice of a number
        of students because of our quality service and personalized approach
        in securing student visas for top global destinations. We have below
        given expertise
      </p>

      {/* ================= LIST ================= */}
      <ul
        className="
          mx-auto
          mt-6
          w-full
          max-w-[900px]
          list-disc
          space-y-3
          pl-6
          text-[16px]
          leading-relaxed
          text-cyan-200

          sm:mt-8 sm:text-[17px]
          md:text-[18px]
          lg:text-[19px]
          xl:mx-0 xl:mt-10 xl:max-w-[900px] xl:space-y-2 xl:text-[18px]
        "
      >
        <li>
          Strong partnerships with globally recognized universities and
          institutions.
        </li>

        <li>
          Personalized counselling with transparent and ethical guidance
          tailored to your goals.
        </li>

        <li>
          Provides full support from choosing the right course to final visa
          approval.
        </li>

        <li>
          High visa success rate backed by expert documentation.
        </li>

        <li>
          Up-to-date knowledge of every country-specific requirement and
          policies.
        </li>
      </ul>
      </div>
    </section>
  );
};

export default GlobalVisa1;