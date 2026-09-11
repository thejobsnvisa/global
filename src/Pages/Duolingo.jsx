import img from "../assets/img14.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const Duolingo = () => {
  return (
    <>
      {/* ==================== BANNER ==================== */}
      <section
        className="
          relative
          h-[300px]
          w-full
          overflow-hidden
          sm:h-[340px]
          md:h-[370px]
          lg:h-[480px]
        "
      >
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
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(89.92deg, #FFFFFF 0.06%, rgba(255, 255, 255, 0.79) 20.33%, rgba(255, 255, 255, 0) 48.4%)",
          }}
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

            <span className="text-sky-500">English Test &gt;</span>

            <span className="text-cyan-800">Duolingo</span>
          </p>

          {/* Banner Heading */}
          <h1
            className="
              mt-6
              text-[32px]
              font-semibold
              leading-[1.1]
              text-[#669980]
              sm:mt-10
              sm:text-[44px]
              md:mt-16
              md:text-[52px]
              lg:mt-20
              lg:ml-10
              lg:text-[60px]
              xl:ml-0
            "
          >
            Duolingo
          </h1>
        </div>
      </section>

      {/* ==================== MAIN ==================== */}
      <div
        className="
          w-full
          min-h-screen
          bg-white
          xl:min-h-[2300px]
          xl:mb-0
          lg:mb-38
          md:mb-45
          mb-45
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1256px]
            flex-col
            items-start
            gap-8
            px-5
            py-8
            sm:px-8
            md:px-10
            lg:flex-row
            lg:gap-6
            lg:px-6
            lg:py-12
            xl:gap-10
            xl:px-0
          "
        >
          {/* ==================== SIDEBAR ==================== */}
          <aside
            className="
              w-full
              min-h-auto
              flex-shrink-0
              rounded-[30px]
              bg-sky-50
              p-5
              shadow-sm
              sm:p-6

              lg:w-[330px]

              xl:w-[400px]
              xl:min-h-[810px]
            "
          >
            <h3
              className="
                mx-auto
                mb-6
                mt-3
                text-center
                text-[20px]
                font-semibold
                text-slate-600
                sm:text-[24px]
              "
            >
              Choose A Test
            </h3>

            <div className="grid gap-4">
              {[
                {
                  img: f1,
                  title: "IELTS",
                  subtitle: "International English Language Testing System",
                  path: "/english-test/ielts",
                },
                {
                  img: f2,
                  title: "PTE",
                  subtitle: "Pearson Test of English",
                  path: "/english-test/pte",
                },
                {
                  img: f3,
                  title: "TOEFL",
                  subtitle: "Test of English as a Foreign Language",
                  path: "/english-test/toefl",
                },
                {
                  img: f4,
                  title: "DUOLINGO",
                  subtitle: "English Test",
                  path: "/english-test/duolingo",
                },
                {
                  img: f5,
                  title: "CAMBRIDGE C1 ADVANCED",
                  subtitle: "Cambridge English Test",
                  path: "/english-test/cambridge-c1-advanced",
                },
                {
                  img: f6,
                  title: "LANGUAGECERT ACADEMIC",
                  subtitle: "Language cert",
                  path: "/english-test/languagecert-academic",
                },
              ].map((test) => (
                <a
                  key={test.title}
                  href={test.path}
                  className="
                    flex
                    h-[80px]
                    items-center
                    rounded-[12px]
                    bg-white
                    p-2
                    shadow-sm
                    sm:p-0
                  "
                >
                  <img
                    src={test.img}
                    alt={test.title}
                    className="
                      ml-2
                      h-[50px]
                      w-[60px]
                      flex-shrink-0
                      object-contain
                      sm:ml-[12px]
                      sm:h-[60px]
                      sm:w-[76px]
                    "
                  />

                  <div
                    className="
                      ml-3
                      flex-1
                      pr-2
                      sm:ml-[14px]
                    "
                  >
                    <p
                      className="
                        text-[14px]
                        font-bold
                        leading-tight
                        text-slate-800
                        sm:text-[15px]
                      "
                    >
                      {test.title}
                    </p>

                    <p
                      className="
                        line-clamp-2
                        text-[12px]
                        leading-4.5
                        text-slate-500
                        sm:text-[14px]
                      "
                    >
                      {test.subtitle}
                    </p>
                  </div>

                  <div
                    className="
                      ml-auto
                      mr-2
                      flex
                      h-[35px]
                      w-[35px]
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-sky-100
                      sm:mr-4
                    "
                  >
                    <IoIosArrowForward
                      className="
                        h-[24px]
                        w-[24px]
                        text-teal-600
                        sm:h-[30px]
                        sm:w-[30px]
                      "
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Box */}
            <div
              className="
                mt-8
                rounded-[20px]
                bg-emerald-100
                px-4
                py-6
              "
            >
              <p
                className="
                  text-center
                  text-[15px]
                  font-bold
                  text-slate-600
                  sm:text-[16px]
                "
              >
                Not sure which test is right for you?
              </p>

              <a
                href="/contact"
                className="
                  mx-auto
                  mt-4
                  flex
                  h-[34px]
                  w-[140px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[30px]
                  bg-[#84C8AF]
                  text-[16px]
                  font-semibold
                  text-[#27456E]
                  transition-transform
                  hover:scale-105
                "
              >
                Contact Us
                <img
                  src={b1}
                  alt="Button Image"
                  className="h-[20px] w-[20px]"
                />
              </a>
            </div>
          </aside>

          {/* ==================== MAIN CONTENT ==================== */}
          <section
            className="
              w-full
              min-w-0
              flex-1
              py-4

              lg:ml-0
              lg:py-6

              xl:ml-10
              xl:py-10
            "
          >
            {/* ==================== SECTION 1 ==================== */}
            <div>
              <div
                className="
                  mb-6
                  sm:mb-8
                  lg:mb-12
                  xl:mb-14
                  xl:mt-[-30px]
                "
              >
                <p
                  className="
                    m-0
                    text-[22px]
                    leading-[1.15]
                    text-[#64D0E6]
                    sm:text-[26px]
                    md:text-[28px]
                    lg:text-[30px]
                    xl:text-[40px]
                  "
                >
                  A Smarter Way to Measure
                </p>

                <h2
                  className="
                    m-0
                    mt-1
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    text-[#8DC8AB]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  English Proficiency
                </h2>
              </div>

              <div
                className="
                  w-full
                  text-justify
                  text-[15px]
                  text-slate-700
                  sm:text-[16px]
                  xl:ml-2
                  xl:mt-[-30px]
                  xl:w-[666px]
                "
              >
                <div className="space-y-4">
                  <p>
                    The Duolingo English Test has become one of the most
                    accessible and efficient English proficiency exams
                    worldwide. Fully online and trusted by 6,000+ institutions,
                    it is available remotely anytime without the need for an
                    advanced appointment booking. Its computer-adaptive
                    technology adjusts difficulty in real time and also delivers
                    precise result promptly. All this together makes Duolingo a
                    preferred choice for students and professionals worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== SECTION 2 ==================== */}
            <section className="mt-10 lg:mt-14">
              <div
                className="
                  mb-6
                  sm:mb-8
                  lg:mb-12
                  xl:mb-14
                  xl:mt-[-30px]
                "
              >
                <p
                  className="
                    m-0
                    text-[22px]
                    leading-[1.15]
                    text-[#64D0E6]
                    sm:text-[26px]
                    md:text-[28px]
                    lg:text-[30px]
                    xl:text-[40px]
                  "
                >
                  Top Countries Accepting
                </p>

                <h2
                  className="
                    m-0
                    mt-1
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    text-[#8DC8AB]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  Duolingo
                </h2>
              </div>

              <div
                className="
                  w-full
                  rounded-[24px]
                  bg-sky-50
                  p-6
                  sm:rounded-[34px]
                  sm:p-8
                  xl:mt-[-15px]
                  xl:w-[701px]
                  xl:rounded-[34px]
                  xl:pt-[30px]
                  xl:pr-[30px]
                  xl:pb-[40px]
                  xl:pl-[30px]
                "
              >
                <p className="text-[16px] text-sky-600">
                  The following are the top countries that accept Duolingo
                  scores
                </p>

                <ul
                  className="
                    ml-6
                    mt-4
                    list-disc
                    text-[16px]
                    text-teal-600
                  "
                >
                  <li>USA</li>
                  <li>Canada</li>
                  <li>UK</li>
                  <li>Germany</li>
                  <li>France</li>
                  <li>Italy</li>
                </ul>
              </div>
            </section>

            {/* ==================== SECTION 3 ==================== */}
            <section className="mt-10 lg:mt-14">
              <div
                className="
                  mb-6
                  sm:mb-8
                  lg:mb-12
                  xl:mb-14
                  xl:mt-[-30px]
                "
              >
                <h2
                  className="
                    m-0
                    mt-1
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    text-[#8DC8AB]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  Duolingo Test Format
                </h2>
              </div>
              <p
                className="
                      xl:mt-[-35px]
                      pb-4
                      text-[22px]
                      leading-[1.35]
                      text-cyan-700
                      sm:text-[16px]
                      md:text-[16px]
                      lg:text-[18px]
                      xl:text-[18px]
                    "
              >
                It is the 1-hour test that evaluates candidate’s reading,
                writing, listening, and speaking skills in real-world English
                communication.
              </p>

              <div
                className="
                  w-full
                  min-w-0
                  rounded-[34px]
                  bg-white
                  xl:mt-[-30px]
                  xl:w-[701px]
                "
              >
                {/* ==================== LISTENING ==================== */}
                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-emerald-700
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[22px]
                      xl:text-[24px]
                    "
                  >
                    The complete test is divided into 3 parts
                  </p>
                  <p
                    className="
                      m-0
                      pb-2
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[22px]
                      xl:text-[24px]
                    "
                  >
                    Setup & ID Verification – 5 minutes
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>
                      Quickly checks and identifies verification before you
                      begin the exam.
                    </li>
                  </ul>
                </div>

                {/* ==================== READING ==================== */}
                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-2
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[22px]
                      xl:text-[24px]
                    "
                  >
                    Scored Assessment – 45 minutes
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>
                      Adaptive test that evaluates reading, writing, listening,
                      and speaking skills.
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-1
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[22px]
                      xl:text-[24px]
                    "
                  >
                    Writing & Speaking Samples – 10 minutes
                  </p>

                  <ul
                    className="
                      ml-6
                      mt-2
                      list-disc
                      text-[17px]
                      text-slate-600
                    "
                  >
                    <li className="mt-2">
                      Record quick speaking and writing tasks that reflect how
                      you use English in real situations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10 lg:mt-14">
              <div
                className="
                  mb-6
                  sm:mb-8
                  lg:mb-12
                  xl:mb-14
                  xl:mt-[-30px]
                "
              >
                <h2
                  className="
                    m-0
                    mt-1
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    text-[#8DC8AB]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  Duolingo Scoring System
                </h2>
              </div>

              <div
                className="
                  w-full
                  min-w-0
                  rounded-[34px]
                  bg-white
                  xl:mt-[-10px]
                  xl:w-[701px]
                "
              >
                {/* Test Overview */}
                <ul
                  className="
                    ml-6
                    xl:mt-[-30px]
                    w-full
                    pr-4
                    text-[17px]
                    list-disc
                    sm:pr-6
                  "
                >
                  <li className="text-cyan-700 ">
                    All scores are reported on a 10-160 scale, in increments of
                    5.
                  </li>

                  <li className=" text-cyan-700 ">
                    Subscores are also given to measure specific skill areas and
                    are averaged to create your overall score.
                  </li>

                  <li className=" text-cyan-700 ">
                    The result of test is given within 48 hours which remain
                    valid for two years.
                  </li>
                </ul>
              </div>

              {/* ==================== READING ==================== */}
              <div className="mt-8">
                <p
                  className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-slate-400
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[22px]
                      xl:text-[24px]
                    "
                >
                  Here is the quick comparison of Duolingo with IELTS & TOEFL
                  iBT Score:
                </p>

                {/* Academic + General Reading Card */}
                <div
                  className="
                      mt-4
                      w-full
                      min-h-[441px]
                      rounded-[24px]
                      bg-slate-100
                      p-5
                      sm:p-6
                      xl:w-[800px]
                      xl:p-[30px]
                    "
                >
                  <div
                    className="
                        flex
                        flex-col
                        gap-8
                        xl:flex-row
                        xl:gap-[40px]
                      "
                  >
                    {/* Academic Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[381px]
                          xl:w-[270px]
                        "
                    >
                      <p className="text-[18px] text-center font-bold text-emerald-700">
                        Duolingo Score
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-4">160</li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          155
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          150
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          145
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          140
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          135
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          130
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          125
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          120
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          115
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          110
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          105
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          100
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          95
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          90
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          85
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          80
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          75
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          70
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          65
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          60
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          5-10
                        </li>
                      </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden h-[995px] mt-3 w-px shrink-0 bg-slate-400 xl:block" />

                    {/* General Training Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[361px]
                          xl:w-[400px]
                        "
                    >
                      <p className="text-[18px] font-bold text-center text-emerald-700">
                        IELTS Equivalent
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-4">8.5-9</li>
                        <li className="border-t-2 pt-8 border-slate-400 mt-2">
                          8
                        </li>
                        <li className="border-t-2 pt-8 border-slate-400 mt-7.5">
                          7.5
                        </li>
                        <li className="border-t-2 pt-8 border-slate-400 mt-6.5">
                          7
                        </li>
                        <li className="border-t-2 pt-8 border-slate-400 mt-7">
                          6.5
                        </li>
                        <li className="border-t-2 pt-12 border-slate-400 mt-7">
                          6
                        </li>
                        <li className="border-t-2 pt-6 border-slate-400 mt-13">
                          5.5
                        </li>
                        <li className="border-t-2 pt-12 border-slate-400 mt-9">
                          5
                        </li>
                        <li className="border-t-2 pt-12 border-slate-400 mt-14">
                          4.5
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-13">
                          4
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          0-4
                        </li>
                      </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden h-[995px] mt-3 w-px shrink-0 bg-slate-400 xl:block" />

                    {/* General Training Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[381px]
                          xl:w-[400px]
                        "
                    >
                      <p className="text-[18px] font-bold text-center text-emerald-700">
                        TOEFL iBT Equivalent
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-4">120</li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          119
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          117-118
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          113-116
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          109-112
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          104-108
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          98-103
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          93-97
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          87-92
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          82-86
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          76-81
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          70-75
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          65-69
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          59-64
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          53-58
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          47-52
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          41-46
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          35-40
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          30-34
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          24-29
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          18-23
                        </li>
                        <li className="border-t-2 pt-2 border-slate-400 mt-2">
                          0-17
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== SECTION 4 ==================== */}
            <section className="mt-10 lg:mt-14">
              <div
                className="
                  mb-6
                  sm:mb-8
                  lg:mb-12
                  xl:mb-14
                  xl:mt-[-30px]
                "
              >
                <p
                  className="
                    m-0
                    text-[22px]
                    leading-[1.15]
                    text-[#64D0E6]
                    sm:text-[26px]
                    md:text-[28px]
                    lg:text-[30px]
                    xl:text-[30px]
                  "
                >
                  Make Your Duolingo Results
                </p>

                <h2
                  className="
                    m-0
                    mt-1
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    text-[#8DC8AB]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  Work for Your Future
                </h2>
              </div>

              <div
                className="
                  w-full
                  min-h-[50px]
                  rounded-[24px]
                  bg-emerald-50
                  p-6
                  sm:rounded-[34px]
                  sm:p-8
                  xl:mt-[-15px]
                  xl:w-[701px]
                  xl:rounded-[34px]
                  xl:pt-[25px]
                  xl:pr-[30px]
                  xl:pb-[40px]
                  xl:pl-[30px]
                "
              >
                <p
                  className="
                    text-justify
                    text-[17px]
                    leading-relaxed
                    text-emerald-700
                    sm:text-[17px]
                  "
                >
                  This Duolingo English Test is a fast, fully online exam
                  recognized by thousands of institutions worldwide. With the
                  ability to provide quick results and globally accepted scores,
                  it remains the smart choice for advancing your studies or
                  career abroad. So, get your Duolingo English Test done with
                  ease by following expert guidance from Growmore Global Visa.
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Duolingo;
