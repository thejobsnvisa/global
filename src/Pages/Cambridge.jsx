import img from "../assets/img15.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const Cambridge = () => {
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

            <span className="text-cyan-800">Cambridge C1 Advanced</span>
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
            Cambridge C1 Advanced
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
                  Advanced English That
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
                  Institutions Trust
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
                    Cambridge C1 Advanced is an internationally recognised
                    English qualification accepted by more than 11,000
                    educational institutions, businesses, and government
                    departments worldwide. It is designed to demonstrate
                    advanced communication ability and is used for academic
                    entry, professional growth, and international mobility.
                  </p>
                  <p>
                    When it comes to C1 Advanced, it is not just another English
                    test; it is a qualification that validates real and
                    high-level language skills. It consistently stands out as
                    one of the most trustworthy and widely acknowledged advanced
                    English tests worldwide.
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
                  Cambridge C1 Advanced
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
                  The following are the top countries that accept Cambridge C1
                  Advanced scores
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
                  <li>UK</li>
                  <li>Australia</li>
                  <li>Canada</li>
                  <li>USA</li>
                  <li>Germany</li>
                  <li>Netherlands</li>
                  <li>Ireland</li>
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
                  Cambridge C1 Advanced Test Format
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
                The C1 Advanced exam evaluates the candidate’s English
                proficiency across four components. Here is the information on 4
                components:
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
                    Reading & Use of English (1 hour 30 minutes)
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>8 parts | 56 questions</li>
                    <li>
                      Tests reading comprehension across various text types
                    </li>
                    <li>
                      Evaluates grammar, vocabulary, and overall language
                      control in context
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
                    Writing (1 hour 30 minutes)
                  </p>

                  <ul className="ml-6 list-disc text-slate-600">
                    <li>2 parts</li>
                    <li>
                      Asks to write two pieces of content related to essays,
                      proposals, reports, reviews, or formal letters/emails.
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
                    Listening (Approximately 40 minutes)
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
                    <li>4 parts | 30 questions</li>
                    <li className="mt-2">
                      Tests your ability to understand a range of spoken
                      material such as interviews, presentations, radio
                      broadcasts, discussions, and everyday conversations.
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
                    Speaking (15–23 minutes)
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
                    <li>4 parts</li>
                    <li className="mt-2">
                      Conducted in pairs or groups to evaluate interactive
                      communication skills by two examiners.
                    </li>
                    <li className="mt-2">
                      One of them interacts with the candidate while the other
                      observes for an accurate assessment.
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
                  C1 Advanced – Scoring
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
                    Your official results are reported using the Cambridge
                    English Scale.
                  </li>

                  <li className=" text-cyan-700 ">
                    The digital exam result will be available within 5–10
                    working days, and for the paper-based exam, the result will
                    be available within 4–6 weeks.
                  </li>

                  <li className=" text-cyan-700 ">
                    Certificates for C1 Advanced do not expire for a lifetime
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
                  For C1 Advanced, results are reported as
                </p>

                {/* Academic + General Reading Card */}
                <div
                  className="
                      mt-4
                      w-full
                      h-auto
                      min-h-[290px]
                      rounded-[24px]
                      bg-slate-100
                      p-5
                      sm:p-6
                      xl:h-[290px]
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
                          xl:w-[370px]
                        "
                    >
                      <p className="text-[18px] text-center font-bold text-emerald-700">
                        Cambridge English Scale Score 
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-4">200-210</li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          193-199
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          180-192
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          160-179
                        </li>
                      </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden h-[235px] mt-3 w-px shrink-0 bg-slate-400 xl:block" />

                    {/* General Training Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[361px]
                          xl:w-[350px]
                        "
                    >
                      <p className="text-[18px] font-bold text-center text-emerald-700">
                        Grade 
                      </p>
                         <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-11">Grade A</li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          Grade B
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          Grade C
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          Grade D
                        </li>
                      </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden h-[235px] mt-3 w-px shrink-0 bg-slate-400 xl:block" />

                    {/* General Training Reading */}
                    <div
                      className="
                          w-full
                          xl:min-h-[381px]
                          xl:w-[400px]
                        "
                    >
                      <p className="text-[18px] font-bold text-center text-emerald-700">
                        CEFR Level
                      </p>

                      <ul
                        className="
                            mt-2
                            text-[17px]
                            text-center
                            text-cyan-600
                          "
                      >
                        <li className="mt-11">C2</li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          C1
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          C1
                        </li>
                        <li className="border-t-2 pt-2 border-slate-300 mt-2">
                          B2
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
                <ul
                  className="
                    ml-6
                    xl:mt-[10px]
                    w-full
                    max-w-[601px]
                    pr-4
                    text-[17px]
                    font-semibold
                    list-disc
                    sm:pr-6
                    xl:w-[601px]
                  "
                >
                  <li className="text-cyan-700 ">
                   Scores of 180 and above show that you have successfully achieved the C1 Advanced level. 
                  </li>

                  <li className=" text-cyan-700 ">
                    Scores between 160–179 do not meet the C1 level, but you still receive a B2 level certificate.
                  </li>
                </ul>
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
                  Unlock Global Opportunities
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
                  With C1 Advanced
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
                  C1 Advanced stands out among other tests because it focuses on
                  real academic and professional language ability rather than
                  just test performance. Its global reputation makes it a
                  trusted qualification for anyone who is aiming to study, work,
                  or build a future in an English-speaking environment. So,
                  unlock your global opportunities by getting expert C1 Advanced
                  test support from Growmore Global Visa.
                </p>
              </div>

            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cambridge;
