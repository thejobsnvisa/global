import q4 from "../assets/q4.png";
import q6 from "../assets/q6.png";
import q5 from "../assets/q5.png";

const DependentVisa = () => {
  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-sky-50

          min-h-[1100px]
          py-10

          sm:min-h-[1050px]
          sm:py-12

          md:min-h-[950px]
          md:py-14

          lg:min-h-[750px]
          lg:py-16

          xl:h-[680px]
          xl:min-h-0
          xl:py-10
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1350px]
            px-5

            sm:px-8
            md:px-10
            lg:px-10
            xl:px-10
          "
        >
          {/* ================= HEADING ================= */}
          <div
            className="
              mb-8

              sm:mb-10
              md:mb-12
              lg:mb-12
              xl:mb-14
            "
          >
            <p
              className="
                m-0
                flex
                justify-center
                text-center
                text-[24px]
                leading-[1.15]
                text-[#26839A]

                sm:text-[26px]
                md:text-[28px]
                lg:text-[30px]
                xl:text-[40px]
              "
            >
              Who Can Apply
            </p>

            <h2
              className="
                m-0
                mt-1
                flex
                justify-center
                text-center
                text-[30px]
                font-bold
                leading-[1.05]
                text-[#5B9E7D]

                sm:text-[34px]
                md:text-[40px]
                lg:text-[46px]
                xl:text-[60px]
              "
            >
              As Dependent?
            </h2>

            {/* ================= DESCRIPTION ================= */}
            <p
              className="
                mx-auto
                mt-6
                w-full
                max-w-[1151px]
                px-0
                text-center
                text-[14px]
                leading-6
                text-slate-600

                sm:mt-7
                sm:px-2
                sm:text-[15px]
                sm:leading-7

                md:mt-8
                md:px-4
                md:text-[16px]
                md:leading-7

                lg:mt-[30px]
                lg:px-0

                xl:mt-[30px]
              "
            >
              <span className="block">
                The determination of a dependent’s eligibility depends on the
                main applicant’s visa category, country, and personal
                circumstances.
              </span>

              <span className="mt-1 block">
                It is necessary for every dependent to meet the eligibility
                requirements and submit verifiable evidence of their
                relationship with the principal applicant.
              </span>

              <span className="mt-1 block">
                Generally, the following are considered eligible dependents:
              </span>
            </p>
          </div>

          {/* ================= CARDS ================= */}
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[893px]
              flex-col
              items-center
              justify-center
              gap-8

              sm:flex-row
              sm:flex-wrap
              sm:items-start
              sm:gap-8

              md:gap-10

              lg:flex-nowrap
              lg:gap-[60px]

              xl:gap-[103px]
            "
          >
            {/* ================= CARD 1 ================= */}
            <div
              className="
                flex
                w-full
                max-w-[220px]
                flex-col
                items-center
              "
            >
              <img
                src={q6}
                alt="Husband or wife"
                className="
                  mt-0
                  h-[180px]
                  w-[200px]
                  rounded-[25px]
                  object-cover
                  shadow-[0px_4px_20px_0px_#00000040]

                  sm:h-[190px]
                  sm:w-[210px]

                  md:h-[200px]
                  md:w-[220px]

                  lg:mt-3

                  xl:h-[200px]
                  xl:w-[220px]
                "
              />

              <p
                className="
                  mt-3
                  w-full
                  text-center
                  text-[14px]
                  font-semibold
                  leading-5
                  text-teal-700

                  sm:text-[15px]
                  sm:leading-6

                  md:text-[16px]

                  xl:text-[16px]
                "
              >
                Husband/wife or legally married partner
              </p>
            </div>

            {/* ================= CARD 2 ================= */}
            <div
              className="
                flex
                w-full
                max-w-[220px]
                flex-col
                items-center
              "
            >
              <img
                src={q4}
                alt="Dependent child"
                className="
                  mt-0
                  h-[180px]
                  w-[200px]
                  rounded-[25px]
                  object-cover
                  shadow-[0px_4px_20px_0px_#00000040]

                  sm:h-[190px]
                  sm:w-[210px]

                  md:h-[200px]
                  md:w-[220px]

                  lg:mt-4

                  xl:h-[200px]
                  xl:w-[220px]
                "
              />

              <p
                className="
                  mt-3
                  w-full
                  text-center
                  text-[14px]
                  font-semibold
                  leading-5
                  text-teal-700

                  sm:text-[15px]
                  sm:leading-6

                  md:text-[16px]

                  xl:text-[16px]
                "
              >
                Biological, adopted, or stepchildren up to certain age limits
              </p>
            </div>

            {/* ================= CARD 3 ================= */}
            <div
              className="
                flex
                w-full
                max-w-[220px]
                flex-col
                items-center
              "
            >
              <img
                src={q5}
                alt="Other eligible dependent"
                className="
                  mt-5
                  h-[180px]
                  w-[200px]
                  rounded-[25px]
                  object-cover
                  shadow-[0px_4px_20px_0px_#00000040]

                  sm:h-[190px]
                  sm:w-[210px]

                  md:h-[200px]
                  md:w-[220px]

                  xl:h-[200px]
                  xl:w-[220px]
                "
              />

              <p
                className="
                  mt-3
                  w-full
                  text-center
                  text-[14px]
                  font-semibold
                  leading-5
                  text-teal-700

                  sm:text-[15px]
                  sm:leading-6

                  md:text-[16px]

                  xl:text-[16px]
                "
              >
                Parents or Grandparents
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DependentVisa;