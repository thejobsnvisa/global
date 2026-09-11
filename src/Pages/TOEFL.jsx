import img from "../assets/img13.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const TOEFL = () => {
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

            <span className="text-cyan-800">TOEFL</span>
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
            TOEFL
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
          lg:mb-30
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
                    xl:text-[30px]
                  "
                >
                  Trusted Worldwide For
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
                  English Assessment
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
                    The TOEFL test has set a unique standard for measuring
                    English proficiency for over 60 years. It is the preferred
                    choice by millions of students and professionals seeking
                    admission to top universities, better employment
                    opportunities, and pursuing other international pathways.
                  </p>

                  <p>
                    The TOEFL exam is known for flexible options in taking tests
                    along with its modern, integrated format. It provides an
                    accurate, dependable measure of proficiency for
                    communicating in English around the world. It is accepted by
                    over 13,000 institutions in 160 countries and is regarded as
                    one of the most trustworthy English tests worldwide.
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
                    xl:text-[30px]
                  "
                >
                  Top Countries
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
                  Accepting TOEFL iBT
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
                  The following are the top countries that accept TOEFL iBT
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
                  <li>Australia</li>
                  <li>Canada</li>
                  <li>New Zealand</li>
                  <li>United Kingdom</li>
                  <li>USA</li>
                  <li>Dubai</li>
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
                  TOEFL iBT Exam Format
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
                    mt-[-10px]
                    w-full
                    pr-4
                    text-[16px]
                    list-disc
                    sm:pr-6
                  "
                >
                  <li className="text-cyan-700">
                    The TOEFL iBT measures how well you can use English across
                    reading, listening, speaking, and writing.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    It is available in two formats, depending on your test date:
                  </li>

                  <li className="mt-2 text-cyan-700">
                    Old format used before 21 January 2026
                  </li>

                  <li className="mt-2 text-cyan-700">
                    Updated format used after 21 January 2026
                  </li>
                  <li className="mt-2 text-cyan-700">
                    The total test takes just under 2 hours for completion.
                  </li>
                </ul>

                {/* ==================== LISTENING ==================== */}
                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-emerald-700
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    New TOEFL iBT Format (After 21 January 2026)
                  </p>
                  <p
                    className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    Reading
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>35-48* items | Approx. 18 to 27 minutes</li>
                    <li>
                      Tasks include completing words, reading daily-life
                      content, and interpreting academic passages
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
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    Listening
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>35-45* items | Approx. 18 to 27 minutes</li>
                    <li>
                      Tasks include responding to audio prompts, conversations,
                      announcements, and academic talks
                    </li>
                  </ul>
                </div>

                {/* ==================== SPEAKING ==================== */}
                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    Writing
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
                    <li className="mt-2">12 items | Approx. 23 minutes</li>

                    <li>
                      Tasks include building sentences, writing emails, and
                      contributing to academic discussions
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p
                    className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    Speaking
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
                    <li className="mt-2">11 items | Approx. 8 minutes</li>

                    <li>
                      Tasks include listening and repeating, along with
                      interview-style responses
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mt-10 lg:mt-14">
              {/* ==================== LISTENING ==================== */}
              <div className="mt-8">
                <p
                  className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-emerald-700
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  New TOEFL iBT Format (before 21 January 2026)
                </p>
                <p
                  className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  Reading
                </p>

                <ul className="ml-6 list-disc text-slate-600">
                  <li>20 questions | Approx. 35 minutes</li>
                  <li>
                    Read academic passages and answer comprehension questions
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
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  Listening
                </p>

                <ul className="ml-6 list-disc text-slate-600">
                  <li>28 questions | Approx. 36 minutes</li>
                  <li>
                    Listen to short lectures or discussions and answer related
                    questions
                  </li>
                </ul>
              </div>

              {/* ==================== SPEAKING ==================== */}
              <div className="mt-8">
                <p
                  className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  Writing
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
                  <li className="mt-2">2 tasks | Approx. 29 minutes</li>

                  <li>
                    Write 2 responses: one integrated task (read + listen +
                    write) and one opinion-based discussion
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p
                  className="
                      m-0
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  Speaking
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
                  <li className="mt-2">4 tasks | Approx. 16 minutes</li>

                  <li>
                    Complete 4 spoken tasks, including personal opinions and
                    integrated responses
                  </li>
                </ul>
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
                  TOEFL iBT Scoring
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
                    mt-[-10px]
                    w-full
                    pr-4
                    text-[16px]
                    list-disc
                    sm:pr-6
                  "
                >
                  <li className="text-cyan-700 ">
                    There are no passing or failing scores set by ETS or the
                    TOEFL Program.
                  </li>

                  <li className=" text-cyan-700 ">
                    You will get your scores in your ETS account within 4–8 days
                    after completing the test.
                  </li>

                  <li className=" text-cyan-700 ">
                    TOEFL scores are valid for 2 years.
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
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[28px]
                    "
                >
                  Current TOEFL iBT Scoring (Before January 21, 2026)
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
                      xl:w-[640px]
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
                      <p className="text-[18px] xl:text-center font-bold text-emerald-700">
                        Skill
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            xl:text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-4">Reading</li>

                        <li className="xl:mt-24 mt-2">Listening</li>

                        <li className="xl:mt-24 mt-2 ">Speaking</li>
                        <li className="xl:mt-30 mt-2">Writing</li>
                      </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden h-[550px] mt-3 w-px shrink-0 bg-slate-400 xl:block" />

                    {/* General Training Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[381px]
                          xl:w-[400px]
                        "
                    >
                      <p className="text-[18px] font-bold text-emerald-700">
                        Proficiency Levels & Score Ranges
                      </p>

                      <ul
                        className="
                            mt-4.5
                            text-[17px]
                            text-cyan-600
                          "
                      >
                        <li>24–30 (Advanced)</li>
                        <li>18–23 (High-Intermediate)</li>
                        <li>
                          4–17 (Low-Intermediate)
                        </li>
                        <li>
                          0–3 (Below Low-Intermediate)
                        </li>
                      </ul>
                      <ul
                        className="
                            mt-5
                            text-[17px]
                            text-cyan-600
                          "
                      >
                        <li>22–30 (Advanced)</li>
                        <li>20–24 (High-Intermediate)</li>
                        <li>
                          9–16 (Low-Intermediate)
                        </li>
                        <li>
                          0–8 (Below Low-Intermediate)
                        </li>
                      </ul>
                      <ul
                        className="
                            mt-5
                            text-[17px]
                            text-cyan-600
                          "
                      >
                        <li>25–30 (Advanced)</li>
                        <li>17–21 (High-Intermediate)</li>
                        <li>
                          16–19 (Low-Intermediate)
                        </li>
                        <li>
                          10–15 (Basic)
                        </li>
                        <li>
                          0–3 (Below Basic)
                        </li>
                      </ul>
                      <ul
                        className="
                            mt-5
                            text-[17px]
                            text-cyan-600
                          "
                      >
                        <li>24–30 (Advanced)</li>
                        <li>17–23 (High-Intermediate)</li>
                        <li >
                          13-16 (Low-Intermediate)
                        </li>
                         <li >
                          10–15(Basic)
                        </li>
                        <li >
                          0–6 (Below Basic)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                  <p
                  className="
                      m-0
                      mt-[20px]
                      pb-4
                      text-[22px]
                      leading-[1.15]
                      text-slate-400
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                >
                  Current TOEFL iBT Scoring (From January 21, 2026)
                </p>
               <div
                className="
                  w-full
                  min-w-0
                  rounded-[34px]
                  bg-white
                  xl:mt-[10px]
                  xl:w-[701px]
                "
              >
                {/* Test Overview */}
                <ul
                  className="
                    ml-6
                    mt-[10px]
                    w-full
                    pr-4
                    text-[16px]
                    list-disc
                    sm:pr-6
                  "
                >
                  <li className="text-cyan-700  mt-1 ">
                    The new scoring scale will align more closely with the Common European Framework of Reference for Languages (CEFR). 
                  </li>

                  <li className=" text-cyan-700  mt-1">
                    TOEFL iBT will shift to a 1–6 scoring scale, with half-point increments (example: 4.5, 5.5). 
                  </li>

                  <li className=" text-cyan-700 mt-1 ">
                    You will receive four section scores (Reading, Listening, Speaking, Writing) along with one overall score on this new scale. 
                  </li>

                   <li className=" text-cyan-700 mt-1 ">
                    The overall score is calculated as the average of the four section scores, rounded to the nearest half band.
                  </li>
                </ul>
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
                  Turn Your TOEFL iBT Results Into
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
                  Real Opportunities
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
                  Your TOEFL iBT score is more than a number. It is a key to
                  unlock global opportunities. Growmore Global Visa ensures that
                  your score is accurately interpreted and correctly aligned
                  with university applications, professional requirements, and
                  visa documentation. So, if you are preparing for your next
                  move abroad, we’re here to guide you through every TOEFL iBT
                  requirement with clarity and confidence.
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default TOEFL;
