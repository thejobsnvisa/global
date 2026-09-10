import img from "../assets/img11.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import { IoIosArrowForward } from "react-icons/io";

const IELTS = () => {
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
            translate-x-[140px]
            object-cover
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0.79)_20.33%,rgba(255,255,255,0)_48.4%)]
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
            <span className="text-sky-500 lg:ml-10 xl:ml-0">
              Home &gt;{" "}
            </span>

            <span className="text-sky-500">
              English Test &gt;
            </span>

            <span className="text-cyan-800">
              IELTS
            </span>
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
            IELTS
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
                  subtitle:
                    "International English Language Testing System",
                  path: "/english-test/ielts",
                },
                {
                  img: f2,
                  title: "PTE",
                  subtitle: "Pearson Test of English",
                  path: "/pte",
                },
                {
                  img: f3,
                  title: "TOEFL",
                  subtitle:
                    "Test of English as a Foreign Language",
                  path: "/toefl",
                },
                {
                  img: f4,
                  title: "DUOLINGO",
                  subtitle: "English Test",
                  path: "/duolingo",
                },
                {
                  img: f5,
                  title: "CAMBRIDGE C1 ADVANCED",
                  subtitle: "Cambridge English Test",
                  path: "/cambridge-c1-advanced",
                },
                {
                  img: f6,
                  title: "LANGUAGECERT ACADEMIC",
                  subtitle: "Language cert",
                  path: "/languagecert-academic",
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
                  The Globally Approved Test For
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
                  Many Visa Pathways
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
                    The IELTS is a major language test that is accepted by over
                    12,500 organizations worldwide, including many immigration
                    authorities, universities, and expert firms. It is used as
                    proof of your English-language proficiency for study and
                    migration by giving a clear idea of your English
                    communication skills in both academic and daily life
                    situations.
                  </p>

                  <p>
                    With two available types, IELTS Academic and IELTS General
                    Training, you can choose the format that matches your
                    English requirement goals. It remains the most popular
                    choice for people who want to go to an overseas university,
                    secure better career opportunities, or even strengthen
                    their visitor visa application
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
                  Accepting IELTS
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
                  The following are the top countries that accept IELTS scores
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
                  <li>United Kingdom</li>
                  <li>United States</li>
                  <li>New Zealand</li>
                  <li>Ireland</li>
                  <li>France</li>
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
                  IELTS Test Format
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
                    IELTS evaluates your English proficiency across four key
                    areas: listening, reading, writing, and speaking.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    The timing for the entire test section is 2 hours and 45
                    minutes.
                  </li>

                  <li className="mt-2 text-cyan-700">
                    Listening, reading, and writing happen on the same day
                    without any break, while a speaking test can also be
                    scheduled on the same day or up to a week before or after.
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
                      xl:text-[40px]
                    "
                  >
                    Listening – 30 minutes*
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>Divided into 4 parts</li>
                    <li>Includes 40 questions</li>
                    <li>
                      Covers topics like daily conversations, academic
                      interactions, and monologues in both social and academic
                      contexts.
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
                      xl:text-[40px]
                    "
                  >
                    Reading – 60 minutes*
                  </p>

                  <ul className="ml-6 list-disc text-emerald-600">
                    <li>
                      Format for reading section differs based on test type
                    </li>
                  </ul>

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
                      xl:w-[621px]
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
                        <p className="text-[18px] font-semibold text-emerald-700">
                          For Academic Reading
                        </p>

                        <ul
                          className="
                            mt-2
                            text-[17px]
                            text-cyan-600
                          "
                        >
                          <li className="mt-4">
                            Three long passages, each followed by tasks.
                          </li>

                          <li className="mt-4">
                            Topics are suitable for undergraduate or
                            postgraduate study.
                          </li>

                          <li className="mt-4">
                            Texts may include diagrams, graphs, or
                            illustrations.
                          </li>

                          <li className="mt-4">
                            Sources include books, journals, and newspapers.
                          </li>

                          <li className="mt-4">
                            40 questions with mixed question types.
                          </li>
                        </ul>
                      </div>

                      {/* Vertical Divider */}
                      <div className="hidden h-[381px] w-px shrink-0 bg-slate-400 xl:block" />

                      {/* General Training Reading */}
                      <div
                        className="
                          w-full
                          xl:min-h-[381px]
                          xl:w-[270px]
                        "
                      >
                        <p className="text-[20px] font-semibold text-emerald-700">
                          For General Training Reading
                        </p>

                        <ul
                          className="
                            mt-2
                            text-[17px]
                            text-cyan-600
                          "
                        >
                          <li className="mt-4">
                            Five to six texts of different lengths, divided
                            into 3 sections.
                          </li>

                          <li className="mt-4">
                            Section 1: Short everyday texts.
                          </li>

                          <li className="mt-4 xl:mt-10">
                            Section 2: Work-related, factual texts.
                          </li>

                          <li className="mt-4">
                            Section 3: One longer passage on a general-interest
                            topic.
                          </li>

                          <li className="mt-4">
                            40 questions with mixed question types.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================== WRITING ==================== */}
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
                      xl:text-[40px]
                    "
                  >
                    Writing – 60 minutes*
                  </p>

                  <p className="text-[16px] text-slate-600">
                    Divided into 2 Tasks:
                  </p>

                  <ul
                    className="
                      ml-6
                      mt-2
                      w-full
                      list-disc
                      text-[17px]
                      text-slate-600
                      xl:w-[582px]
                    "
                  >
                    <li className="mt-2">
                      Task 1: Need to write at least 150 words in about 20
                      minutes.
                    </li>

                    <li>
                      Task 2: Need to write 250+ words on a viewpoint,
                      argument, or problem in 40 minutes.
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
                      xl:text-[40px]
                    "
                  >
                    Speaking – 11-14 minutes*
                  </p>

                  <p className="text-[16px] text-slate-600">
                    Divided into 3 Parts:
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
                      Part 1 (4–5 minutes): General questions about yourself
                      and familiar topics.
                    </li>

                    <li>
                      Part 2 (3–4 minutes): Speak for 2 minutes based on a
                      provided task card.
                    </li>

                    <li>
                      Part 3 (4–5 minutes): Discussion of more abstract ideas
                      related to the topic of Part 2.
                    </li>
                  </ul>
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
                    xl:text-[40px]
                  "
                >
                  Step Forward Globally
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
                  With IELTS
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
                  IELTS opens doors to study, work, and migration worldwide.
                  With Growmore Global Visa, you get clear guidance on
                  required scores, test formats, and preparation so you can aim
                  for the result your visa pathway truly needs.
                </p>
              </div>
            </section>

            {/* ==================== IELTS RESULTS ==================== */}
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
                  IELTS Results
                </h2>

                <p
                  className="
                    mt-8
                    min-h-[131px]
                    w-full
                    text-[18px]
                    font-semibold
                    text-cyan-700
                    xl:w-[701px]
                  "
                >
                  Your IELTS score is reported on a 9-band scale ranging from
                  1 (non-user) to 9 (expert), and the duration of the result to
                  come depends on the test format:
                </p>

                <ul
                  className="
                    ml-5
                    mt-4
                    list-disc
                    text-[16px]
                    text-cyan-700
                    xl:mt-[-60px]
                  "
                >
                  <li>
                    <b>IELTS on paper:</b> 13 days after your test
                  </li>

                  <li>
                    <b>IELTS on computer:</b> 1–5 days after your test
                  </li>

                  <li>
                    <b>IELTS Online:</b> 6–8 days after your test
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default IELTS;