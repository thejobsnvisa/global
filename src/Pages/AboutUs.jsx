import img from "../assets/img9.png";
import aboutImage from "../assets/about-us.png";
import n1 from "../assets/n1.png";
import one from "../assets/one.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import QualityCommitment from "../Components/QualityCommitment";

const AboutUs = () => {
  const teams = [
    {
      img: team1,
      name: "KRUNAL NAYAK",
      role: "Founder",
    },
    {
      img: team2,
      name: "KEYUR CHAUDHARI",
      role: "General Manager",
    },
    {
      img: team3,
      name: "RUBINA JODHPURWALA",
      role: "Director of Operations",
    },
  ];
  return (
    <>
      {/* =====================================================
          BANNER SECTION
      ====================================================== */}
      <section
        className="
          relative
          h-[300px]
          w-full
          overflow-hidden
          sm:h-[340px]
          md:h-[370px]
          lg:h-[400px]
        "
      >
        {/* Banner Image */}
        <img
          src={img}
          alt="About Us banner"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]
          "
        />

        {/* Banner Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1256px]
            flex-col
            justify-center
            px-5
            sm:px-8
            md:px-12
            lg:px-0
          "
        >
          {/* Breadcrumb */}
          <p
            className="
              mb-2
              text-[14px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
            "
          >
            <span className="text-sky-500 lg:ml-10 xl:ml-0">Home &gt; </span>

            <span className="text-cyan-800">Who We Are</span>
          </p>

          {/* Banner Heading */}
          <h1
            className="
              mt-10
              text-[38px]
              font-semibold
              leading-[1.1]
              text-[#669980]
              sm:mt-12
              sm:text-[44px]
              md:mt-16
              md:text-[52px]
              lg:mt-20
              lg:text-[60px]
              lg:ml-10 xl:ml-0
            "
          >
            Who We Are
          </h1>
        </div>
      </section>

      {/* =====================================================
          ABOUT CONTENT SECTION
      ====================================================== */}
      <section
        className="
          w-full
          bg-white
          px-5
          py-10
          sm:px-8
          sm:py-12
          md:px-12
          md:py-14
          lg:px-0
          lg:py-[42px]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1150px]
            xl:max-w-[1150px]
            lg:max-w-[950px]
            flex-col
            gap-6
          "
        >
          {/* Paragraph 1 */}
          <p
            className="
              mx-auto
              w-full
              max-w-[1065px]
              text-justify
              text-[16px]
              leading-[1.6]
              text-cyan-700
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            Every international journey begins with a reason - a dream to study,
            a career to build, a family to reunite, or a new chapter to begin.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mx-auto
              w-full
              max-w-[1065px]
              text-justify
              text-[16px]
              leading-[1.6]
              text-cyan-700
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            Growmore Global Visa is here to help turn that reason into a
            well-planned journey. We support students, professionals,
            individuals, and families with personalised immigration and overseas
            education guidance for study, work, visitor, dependent, and
            migration pathways.
          </p>

          <p
            className="
              mx-auto
              w-full
              max-w-[1065px]
              text-justify
              text-[16px]
              leading-[1.6]
              text-cyan-700
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            Our approach is simple: understand your goals, explain your options
            clearly, and guide you at every step. Because for us, you are not
            just another application - you are a journey we are proud to be part
            of.
          </p>
        </div>
      </section>

      {/* =====================================================
        WHAT SETS US APART SECTION
    ====================================================== */}
      <section className="w-full bg-white">
        <div
          className="
      mx-auto
      flex
      w-full
      max-w-[1440px]
      flex-col
      px-5
      py-10
      sm:px-8
      sm:py-12
      md:px-12
      md:py-14
      lg:flex-row
      lg:items-center
      lg:px-[54px]
      lg:py-[32px]
      xl:pl-[80px]
      xl:pr-[54px]
    "
        >
          {/* LEFT CONTENT */}
          <div
            className="
        w-full
        lg:w-[48%]
        lg:pr-[40px]
        xl:pr-[55px]
      "
          >
            {/* Heading */}
            <div>
              <p
                className="
            m-0
            text-[28px]
            font-normal
            leading-[1.15]
            text-[#26839A]
            sm:text-[32px]
            md:text-[34px]
            lg:text-[34px]
          "
              >
                What Sets
              </p>

              <h2
                className="
            m-0
            mt-[4px]
            text-[40px]
            font-semibold
            leading-[1.05]
            text-[#669980]
            sm:text-[46px]
            md:text-[48px]
            lg:text-[50px]
          "
              >
                Us Apart
              </h2>
            </div>

            {/* Sub Heading */}
            <h3
              className="
          mt-6
          text-[16px]
          font-semibold
          leading-[1.3]
          text-[#52BFF1]
          sm:mt-7
          sm:text-[18px]
          md:mt-8
          md:text-[18px]
          lg:text-[19px]
        "
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Guidance That Puts Your Journey First
            </h3>

            {/* Description */}
            <div
              className="
          mt-4
          w-full
          max-w-[510px]
          text-justify
          text-[13px]
          leading-[1.5]
          text-[#263B50]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[16px]
        "
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <p className="m-0">
                At Growmore Global Visa, we combine practical knowledge with a
                genuinely personal approach. We take the time to understand your
                goals, explain your options clearly, and guide you through each
                stage of the process with honesty and care.
              </p>

              <p className="m-0 mt-4">
                Whether you are planning to study, work, visit, or settle
                abroad, our focus is on making your journey organised,
                transparent, and easier to navigate.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
        mt-8
        flex
        w-full
        justify-center
        sm:mt-10
        md:mt-10
        lg:mt-0
        lg:w-[52%]
        lg:justify-start
      "
          >
            <div
              className="
          w-full
          max-w-[660px]
          overflow-hidden
          rounded-[20px]
          sm:rounded-[22px]
          lg:ml-[-20px]
          xl:ml-[-30px]
        "
            >
              <img
                src={aboutImage}
                alt="Growmore Global Visa consultation"
                className="
            block
            h-[220px]
            w-full
            object-cover
            object-center
            sm:h-[280px]
            md:h-[320px]
            lg:h-[380px]
          "
              />
            </div>
          </div>
        </div>
      </section>
     <QualityCommitment/>
      {/* =====================================================
    LED BY EXPERTISE AND EXCELLENCE
===================================================== */}
      <section
        className="
    relative
    w-full
    overflow-hidden
    bg-[linear-gradient(180deg,#FFFFFF_0%,#CFFBF9_100%)]
    px-5
    py-12
    sm:px-8
    sm:py-14
    md:px-12
    md:py-16
    lg:px-0
    lg:py-[45px]
    xl:px-0
    xl:py-[55px]
  "
      >
        <div
          className="
      mx-auto
      flex
      w-full
      max-w-[1256px]
      lg:flex-row
      lg:items-center
      lg:justify-between
      flex-col
      xl:flex-row
      xl:items-center
      xl:justify-between
    "
        >
          {/* =================================================
        LEFT CONTENT
    ================================================== */}
          <div
            className="
        w-full
        md:max-w-[700px]
        lg:w-[40%]
        xl:w-[40%]
      "
          >
            {/* Heading */}
            <div>
              <p
                className="
            m-0
            text-[27px]
            font-normal
            leading-[1.15]
            text-[#26839A]
            sm:text-[31px]
            md:text-[34px]
            lg:text-[36px]
            lg:ml-10
            xl:text-[38px]
          "
              >
                Led By Expertise And
              </p>

              <h2
                className="
            m-0
            mt-[4px]
            text-[40px]
            font-semibold
            leading-[1.05]
            text-[#669980]
            sm:text-[46px]
            md:text-[50px]
            lg:ml-10
            xl:text-[54px]
          "
              >
                Excellence
              </h2>
            </div>

            {/* Description */}
            <div
              className="
          mt-7
          w-full
          max-w-[420px]
          text-justify
          text-[13px]
          leading-[1.5]
          sm:mt-9
          sm:text-[14px]
          md:text-[15px]
          lg:mt-6
          lg:text-[15px]
          lg:ml-10
          xl:mt-8
          xl:text-[16px]
        "
            >
              <p className="m-0 text-cyan-700">
                Growmore Global Visa is led by Krunal Nayak, our founder and
                CEO, whose deep knowledge of international student, work,
                dependent, visitor, and migration visas sets the standard for
                our services. Our team works under his supervision to provide
                accurate counselling and thorough visa application support based
                on each client's needs.
              </p>

              <p className="m-0 mt-5 text-teal-600">
                His leadership keeps all of us up to date on global visa
                regulations and country-specific requirements. Based on that
                knowledge, we provide accurate advice and customized strategies
                to individuals, families, and professionals who want to
                confidently navigate international opportunities.
              </p>
            </div>
          </div>

          {/* =================================================
        FOUNDER IMAGE
    ================================================== */}
          <div
            className="
        mt-10
        flex
        w-full
        justify-center
        sm:justify-center
        md:justify-start
        lg:mt-0
        lg:w-[20%]
        lg:justify-left
        xl:mt-0
        xl:w-[28%]
        xl:justify-left
      "
          >
            <div
              className="
          h-[300px]
          w-[220px]
          overflow-hidden
          rounded-[18px]
          sm:h-[340px]
          sm:w-[245px]
          md:h-[390px]
          md:w-[270px]
          xl:h-[400px]
          xl:w-[285px]
        "
            >
              <img
                src={n1}
                alt="Krunal Nayak - Founder and CEO"
                className="
            h-full
            w-full
            object-cover
            object-top
          "
              />
            </div>
          </div>

          {/* =================================================
        QUOTE
    ================================================== */}
          <div
            className="
        mt-10
        w-full
        sm:mt-12
        md:mt-14
        lg:w-[25%]
        lg:justify-center
        lg:mt-[-40px]
        xl:mt-0
        xl:w-[28%]
      "
          >
            <div
              className="
          relative
          pl-[42px]
          sm:pl-[48px]
        "
            >
              {/* Quote Image */}
              <img
                src={one}
                alt="Opening quote"
                className="
            absolute
            left-[-4px]
            top-[-2px]
            h-[28px]
            w-[42px]
            object-contain
            sm:left-[-2px]
            sm:h-[32px]
            sm:w-[48px]
          "
              />

              {/* Quote Text */}
              <p
                className="
            mt-[60px]
            max-w-[250px]
            text-[27px]
            font-normal
            leading-[1.25]
            text-[#0084A1]
            sm:text-[31px]
            md:text-[34px]
            lg:mr-10
            xl:mt-0
            xl:text-[32px]
          "
              >
                Lorem ipsum dolor{" "}
                <span className="font-semibold text-[#008F84]">sit amet,</span>{" "}
                <span className="font-semibold text-[#008F84]">
                  consectetur
                </span>{" "}
                adipiscing elit, sed do eiusmod tempor
              </p>
            </div>

            {/* Founder Details */}
            <div
              className="
          mt-6
          pl-[42px]
          sm:pl-[48px]
        "
            >
              <p
                className="
            m-0
            text-[18px]
            italic
            text-[#273C50]
            sm:text-[20px]
            xl:text-[20px]
          "
                style={{
                  fontFamily: "Caveat, cursive",
                }}
              >
                - Krunal Nayak
              </p>

              <p
                className="
            mt-1
            text-[16px]
            text-[#008B94]
            sm:text-[13px]
            xl:ml-4
            xl:text-[16px]
          "
              >
                Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    TEAM SECTION
===================================================== */}
      <section
        className="
    relative
    w-full
    overflow-hidden
    bg-[#FFFFFF]
    px-5
    py-12
    sm:px-8
    sm:py-14
    md:px-12
    md:py-16
    lg:px-10
    xl:px-0
    xl:py-[125px]
    h-auto
    xl:h-[620px]
  "
      >
        <div
          className="
      mx-auto
      flex
      w-full
      max-w-[1256px]
      flex-col
      xl:flex-row
      xl:items-center
      xl:justify-between
    "
        >
          <div className="w-full">
            <div
              className="
          w-full
          h-auto
          xl:w-[1216px]
          xl:h-[462px]
          xl:top-[79px]
          xl:left-[111px]
          xl:gap-[90px]
        "
            >
              <div
                className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            sm:gap-7
            md:grid-cols-2
            md:gap-8
            lg:grid-cols-3
            lg:gap-6
            xl:gap-10
            xl:ml-12
          "
              >
                {teams.slice(0, 3).map((member, index) => (
                  <div
                    key={index}
                    className="
                relative
                mx-auto
                w-full
                max-w-[346px]
                h-[400px]
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                sm:h-[430px]
                md:h-[440px]
                lg:h-[462px]
                xl:w-[346px]
                xl:h-[462px]
              "
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="
                  w-full
                  h-full
                  object-cover
                "
                    />

                    <div
                      className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[130px]
                  p-5
                  flex
                  flex-col
                  justify-end
                  bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_57.21%,#000000_100%)]
                  sm:h-[140px]
                  lg:h-[143px]
                  xl:h-[143px]
                "
                    >
                      <h3 className="text-md font-semibold text-white">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm text-white/80">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
