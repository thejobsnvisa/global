import img from "../assets/icon2.png";

const Work = () => {
  return (
    <>
      {/* =====================================================
              BANNER SECTION
          ====================================================== */}
      <section
        className="
          relative
          w-screen
          h-[300px]
          overflow-hidden
          sm:h-[340px]
          md:h-[390px]
          lg:h-[400px]
        "
      >
        {/* Background Image */}
        <img
          src={img}
          alt="Work Visa"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
            translate-x-[230px]
          "
        />

        {/* White Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1350px]
            flex-col
            justify-center
            px-5
            sm:px-8
            md:px-12
            lg:px-[40px]
          "
        >
          {/* Breadcrumb */}
          <p
            className="
              mb-5
              text-[13px]
              text-[#38A9D1]
              sm:mb-6
              sm:text-[14px]
              md:mb-8
              md:text-[16px]
            "
          >
            Home
            <span className="mx-2 text-gray-400">&gt;</span>

            <span>Services</span>

            <span className="mx-2 text-gray-400">&gt;</span>

            <span>Work Visa</span>
          </p>

          {/* Heading */}
          <h1
            className="
              text-[38px]
              font-semibold
              leading-none
              text-[#669980]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            Work Visa
          </h1>
        </div>
      </section>
    </>
  );
};

export default Work;