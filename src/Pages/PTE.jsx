import img from "../assets/img12.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const PTE = () => {
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

            <span className="text-cyan-800">PTE</span>
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
            PTE
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
                  The Fast, Reliable English Test For
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
                  Study, Work & Migration
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
                    Take the stress out of English testing with a completely
                    computer-based exam: PTE. It is currently accepted by over
                    3,900 universities and colleges worldwide. The test delivers
                    results in almost 48 hours, which makes it the preferred
                    choice for many people’s study, work, and migration
                    journeys.
                  </p>

                  <p>
                    PTE provides you with accurate, objective results by
                    combining human expertise with AI scoring.You can approach
                    the test with ease and confidence as you gain full access to
                    its preparation materials.
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
                  Accepting PTE
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
                  The following are the top countries that accept PTE scores
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
                  <li>France</li>
                  <li>Germany</li>
                  <li>Ireland</li>
                  <li>New Zealand</li>
                  <li>United Kingdom (UK)</li>
                  <li>United States of America(USA)</li>
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
                  PTE Academic Test Format
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
                    The PTE test primarily evaluates applicants’ English
                    proficiency based on four skills: listening, reading,
                    writing, and speaking.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    This entirely computer-based test takes only 2 hours to
                    complete.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    You can take the test at one of over 475 locations available
                    worldwide.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    This test is mainly divided into 3 parts. Part 1: Speaking &
                    Writing, Part 2: Reading, Part 3: Listening
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
                      text-sky-600
                      sm:text-[26px]
                      md:text-[28px]
                      lg:text-[30px]
                      xl:text-[30px]
                    "
                  >
                    Part 1: Speaking & Writing
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>Contains 9 different question types</li>
                    <li>
                      Examine speaking and writing skills using English you
                      might hear in academic environments.
                    </li>
                    <li>
                      Its personal introduction part gives you a chance to
                      familiarize yourself with PTE test technology.
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
                    Part 2: Reading
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>Contains 5 different question types</li>
                    <li>
                      “Reading and Writing: Fill in the Blanks” is included in
                      this part that examines your writing along with reading
                      skills
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
                    Part 3: Listening
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
                      Contains 8 different question types
                    </li>

                    <li>
                      All questions come from audio or video clips that play
                      automatically
                    </li>

                    <li>
                      After listening to each question, you need to answer the
                      question in different types of formats, like
                      multiple-choice questions, fill-in-the-blank questions,
                      missing word selection, sentence typing, etc.
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
                  PTE Scoring
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
                    Overall scores range between 10 and 90. 
                  </li>

                  <li className=" text-cyan-700 ">
                    Individual communicative scoring is also given, which helps individuals to pinpoint their strengths and weaknesses. 
                  </li>

                  <li className=" text-cyan-700 ">
                    Results are typically available within 48 hours. 
                  </li>
                   
                  <p className="mt-3 text-cyan-700 font-bold">Here are the general score requirements:</p> 
                  <li className="mt-2 text-cyan-700 ">
                    Foundation courses: 36–50 
                  </li>
                  <li className=" text-cyan-700 ">
                    Undergraduate degrees: 51–60 
                  </li>
                  <li className=" text-cyan-700 ">
                    Postgraduate degrees: 58–67 
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
                  Start Your PTE Journey With
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
                  Clarity and Confidence
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
                  PTE is not complicated when you have the right direction on
                  where to start. Growmore Global Visa helps you understand the
                  exact score requirements, test formats, and preparation
                  strategies for your visa pathway to ensure you don’t waste
                  time making assumptions.
                </p>
                  <p
                  className="
                    mt-4
                    text-justify
                    text-[17px]
                    leading-relaxed
                    text-emerald-700
                    sm:text-[17px]
                  "
                >
                 So, take the first step toward studying or migrating abroad with Growmore Global Visa, and get expert guidance on PTE score requirements. 
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default PTE;
