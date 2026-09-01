import bg from "../assets/bg3.png";

export default function DependentVisaSection() {
  return (
    <section
      className="
        w-full
        bg-white
        
        /* Layout resets for mobile to avoid text overflow */
        min-h-fit
        py-8

        /* Preserved exact original height constraints on Desktop */
        xl:h-[590px]
        xl:min-h-0
        xl:py-0
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1350px]
          flex-col
          items-center

          /* Tablet & LG layout adjustments (Vertical Stack) */
          md:flex-col
          md:items-center
          lg:flex-col
          lg:items-center

          /* Original Desktop Flex Layout */
          xl:flex-row
          xl:items-start
          xl:gap-10
          xl:gap-[60px]
        "
      >
        {/* ================= IMAGE ================= */}
        <div
          className="
            relative
            h-[280px]
            w-full
            overflow-hidden

            sm:h-[380px]

            /* Tablet & LG sizing */
            md:h-[450px]
            md:w-[90%]
            lg:h-[480px]
            lg:w-[85%]

            /* Original Desktop dimensions and negative margin */
            xl:h-[596px]
            xl:w-[738px]
            xl:shrink-0
            xl:ml-[-85px]
          "
        >
          <img
            src={bg}
            alt="background image"
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* Gradient Overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(90.23deg,rgba(255,255,255,0)_72.75%,#FFFFFF_99.8%)]
            "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-6
            w-full
            px-5

            sm:mt-8
            sm:px-8

            /* Tablet & LG sizing */
            md:mt-10
            md:w-[80%]
            md:px-0
            lg:mt-10
            lg:w-[80%]
            lg:px-0

            /* Original Desktop dimensions and offsets */
            xl:mt-[80px]
            xl:w-[473px]
          "
        >
          <p
            className="
              m-0
              w-full
              text-[24px]
              leading-tight
              text-[#4298A9]

              sm:text-[28px]

              /* Tablet & LG typography */
              md:text-[32px]
              lg:text-[36px]

              /* Original Desktop values */
              xl:w-[473px]
              xl:mt-[-50px]
              xl:ml-6
              xl:text-[40px]
              xl:leading-[60px]
            "
          >
            What is a Dependent Visa
          </p>

          <h2
            className="
              m-0
              w-full
              text-[24px]
              leading-tight
              font-semibold
              text-[#5B9E7D]

              sm:text-[28px]

              /* Tablet & LG typography */
              md:text-[32px]
              lg:text-[38px]

              /* Original Desktop values */
              xl:w-[473px]
              xl:mt-[4px]
              xl:ml-3
              xl:text-[60px]
              xl:leading-[60px]
            "
          >
            Typically Allows ?
          </h2>
        </div>

        {/* ================= INFORMATION CARD ================= */}
        <div
          className="
            mt-8
            w-[calc(100%-40px)]
            max-w-[556px]
            min-h-fit
            rounded-[34px]
            bg-sky-50

            px-6
            py-7

            sm:px-7

            /* Tablet & LG layout */
            md:w-[80%]
            lg:w-[80%]
            lg:mt-8

            /* Original Desktop positioning and pixel offsets */
            xl:relative
            xl:mt-[208px]
            xl:ml-[-520px]
            xl:w-[556px]
            xl:h-[320px]
            xl:min-h-0
            xl:px-[30px]
            xl:pt-[30px]
            xl:pr-[30px]
            xl:pb-[40px]
            xl:pl-[30px]
          "
        >
          <p
            className="
              m-0
              w-full
              text-[14px]
              leading-6
              font-semibold
              text-sky-600

              sm:text-[16px]
              sm:leading-[24px]

              /* Original Desktop values */
              xl:w-[485px]
              xl:h-[59px]
              xl:text-[16px]
            "
          >
            The specific rights and conditions of dependents differ based on
            the type of visa and country, so it is important to understand all
            restrictions before applying.
          </p>

          <p
            className="
              mt-4
              w-full
              text-[14px]
              leading-6
              text-slate-500

              sm:mt-6
              sm:text-[15px]

              /* Original Desktop values */
              xl:mt-8
              xl:w-[486px]
              xl:h-[31px]
              xl:text-[15px]
            "
          >
            According to the visa regulations, a dependent visa can enable
            family members to
          </p>

          <ul
            className="
              mt-4
              ml-5
              w-[calc(100%-20px)]
              list-disc
              space-y-1
              text-[14px]
              leading-6
              font-semibold

              sm:mt-6
              sm:text-[15px]

              /* Original Desktop values */
              xl:mt-8
              xl:ml-4
              xl:w-[372px]
              xl:h-[94px]
              xl:text-[15px]
            "
          >
            <li>Stay with the main visa applicant in a legal way</li>
            <li>Work or seek employment (if permitted)</li>
            <li>Attend school (especially for children)</li>
            <li>
              Utilize the basic services of the host country during the duration
              of their stay
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}