import img from "../assets/img10.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const English = () => {
  return (
    <>
      {/* =========================
          BANNER
      ========================== */}
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
          className="
            absolute
            inset-0
            bg-[linear-gradient(89.92deg,#FFFFFF_0.80%,rgba(255,255,255,0.84)_35.33%,rgba(255,255,255,0)_68.4%)]
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

            <span className="text-cyan-800">
              English Test
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
            English Test
          </h1>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div
        className="
          w-full
          min-h-screen
          bg-white
          mb-45
          md:mb-45
          lg:mb-35
          xl:min-h-[1972px]
          xl:mb-0
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
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
          {/* =========================
              SIDEBAR
          ========================== */}
          <aside
            className="
              w-full
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

          {/* =========================
              MAIN CONTENT
          ========================== */}
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
            {/* =========================
                SECTION 1
            ========================== */}
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
                  Start Your Visa Application With
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
                  The Right English Test
                </h2>
              </div>

              <div
                className="
                  w-full
                  space-y-4
                  text-justify
                  text-[15px]
                  text-slate-700

                  sm:text-[16px]

                  xl:ml-2
                  xl:mt-[-30px]
                  xl:w-[666px]
                "
              >
                <p>
                  Choosing an ideal English test is one of the most important
                  steps in your visa application. Whether you are thinking of
                  applying for a student visa or planning to migrate to another
                  country, proving English proficiency becomes necessary for
                  successful visa applications. However, visitor or dependent
                  visas usually do not require an English test, but the specific
                  requirements vary from one country to another.
                </p>

                <p>
                  At Growmore Global Visa, we know the unique English test needs
                  of each country and guide every applicant in selecting the best
                  English test based on their visa type and desired country.
                </p>
              </div>
            </div>

            {/* =========================
                SECTION 2
            ========================== */}
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
                  Importance of
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
                  English Test
                </h2>
              </div>

              <div
                className="
                  w-full
                  h-auto
                  rounded-[24px]
                  bg-sky-50
                  p-6

                  sm:rounded-[34px]
                  sm:p-8

                  xl:w-[701px]
                  xl:h-[298px]
                  xl:mt-[-15px]
                  xl:rounded-[34px]
                  xl:pt-[30px]
                  xl:pr-[30px]
                  xl:pb-[40px]
                  xl:pl-[30px]
                "
              >
                <p
                  className="
                    text-justify
                    text-[15px]
                    text-slate-700
                    sm:text-[17px]
                  "
                >
                  English is one of the most spoken languages in the world, and
                  that’s why maximum immigration authorities require proof of
                  English proficiency to ensure that applicants can effectively
                  communicate with others during their visit. A strong score in
                  the test can help you in strengthening your visa application
                  and also contribute to removing unnecessary processing delays.
                </p>

                <p
                  className="
                    mt-4
                    text-justify
                    text-[15px]
                    text-slate-700

                    sm:mt-5
                    sm:text-[17px]
                  "
                >
                  For students, it is mandatory to take an English test to
                  demonstrate their ability to interact confidently, follow
                  instructions, and adapt to life in an English-speaking
                  environment, while dependents and visitors may only need it in
                  specific cases.
                </p>
              </div>
            </section>

            {/* =========================
                SECTION 3
            ========================== */}
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
                  Popular English Tests Accepted
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
                  For Various Visa
                </h2>
              </div>

              <div
                className="
                  w-full
                  min-w-0
                  rounded-[34px]
                  bg-white

                  xl:w-[701px]
                  xl:min-h-[298px]
                  xl:mt-[-15px]
                "
              >
                <p
                  className="
                    text-justify
                    text-[15px]
                    font-semibold
                    text-cyan-700

                    sm:text-[17px]
                  "
                >
                  Different countries and visa categories accept different
                  tests. Here are some of the most commonly approved test
                  options for student, dependent, and visitor visa pathways:
                </p>

                <div
                  className="
                    mt-4
                    space-y-4
                    text-justify
                    text-[15px]
                    text-slate-700

                    sm:text-[17px]
                  "
                >
                  <p>
                    <span className="font-bold text-slate-600">
                      IELTS (International English Language Testing System) :
                    </span>{" "}
                    It is accepted globally for migration goals, while offering
                    two formats: Academic and General Training. PTE Academic:
                    It is a fully computer-based test that provides quick
                    results, making it ideal for students who have tight visa
                    deadlines.
                  </p>

                  <p>
                    <span className="font-bold text-slate-600">
                      TOEFL iBT :
                    </span>{" "}
                    It is widely used for academic admissions and known for
                    assessing practical skills like comprehension, analysis, and
                    academic communication.
                  </p>

                  <p>
                    <span className="font-bold text-slate-600">
                      Duolingo English Test :
                    </span>{" "}
                    It is also an online English test, which offers flexibility
                    and makes it increasingly recognized for student visas.
                  </p>

                  <p>
                    <span className="font-bold text-slate-600">
                      Cambridge C1 Advanced :
                    </span>{" "}
                    It is known as a high-level English qualification test that
                    demonstrates English proficiency for university-level study
                    and professional-level work.
                  </p>

                  <p>
                    <span className="font-bold text-slate-600">
                      LanguageCert Academic :
                    </span>{" "}
                    This test is a more convenient language test that offers
                    flexible scheduling, making it the preferred choice for
                    university entrance and academic settings.
                  </p>
                </div>
              </div>
            </section>

            {/* =========================
                SECTION 4
            ========================== */}
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
                  Choose the Right English Test With
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
                  Growmore Global Visa
                </h2>
              </div>

              <div
                className="
                  w-full
                  h-auto
                  rounded-[24px]
                  bg-emerald-50
                  p-6

                  sm:rounded-[34px]
                  sm:p-8

                  xl:w-[701px]
                  xl:h-[298px]
                  xl:mt-[-15px]
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
                    text-[15px]
                    text-emerald-700

                    sm:text-[17px]
                  "
                >
                  Picking the incorrect English test can delay your visa, cost
                  you extra money, and even put your admission in danger. But at{" "}
                  <b>Growmore Global Visa</b>, we do not let it happen. We assist
                  you in identifying the exact test that is best based on your
                  chosen country, university, or visa category. With us, you
                  will get proper guidance on every test’s score requirement,
                  format, and validity period, which helps you in choosing the
                  perfect one that meets your visa goals.
                </p>

                <p
                  className="
                    mt-4
                    text-justify
                    text-[15px]
                    text-emerald-700

                    sm:mt-5
                    sm:text-[17px]
                  "
                >
                  So, put the confusion of choosing an ideal English test aside
                  and connect with Growmore Global Visa to get clear,
                  personalized guidance on the English test before you book your
                  exam slot with any random authority.
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default English;