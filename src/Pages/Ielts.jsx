
import img from "../assets/img11.png";
import b1 from "../assets/b1.svg";
import f1 from "../assets/F1.png";
import f2 from "../assets/F2.png";
import f3 from "../assets/F3.png";
import f4 from "../assets/F4.png";
import f5 from "../assets/F5.png";
import f6 from "../assets/F6.png";
import { IoIosArrowForward } from "react-icons/io";

const Ielts = () => {
  return (
    <>
      {/* ==================== BANNER ==================== */}
      <section className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] w-full overflow-hidden ">
        {/* Banner Image */}
        <img
          src={img}
          alt="Migration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]" />
        
        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-6 sm:px-10 lg:px-12">
          {/* Breadcrumb */}
          <p className="mb-2 text-[14px] sm:text-[16px]">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">English Test &gt;</span>
            <span className="text-cyan-800 font-medium"> IELTS</span>
          </p>
          
          {/* Banner Heading */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.1] text-[#669980]">
            IELTS
          </h1>
        </div>
      </section>

      {/* ==================== MAIN ==================== */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20x">
        <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row items-start gap-8 lg:gap-12 px-6 sm:px-10 lg:px-12">
          
          {/* ==================== SIDEBAR ==================== */}
          <aside className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 rounded-[24px] sm:rounded-[30px] bg-sky-50 p-6 shadow-sm">
            <h3 className="mb-6 text-center text-[20px] sm:text-[24px] font-semibold text-slate-600">
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
                  className="flex min-h-[80px] items-center rounded-[12px] bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={test.img}
                    alt={test.title}
                    className="h-[50px] w-[60px] sm:h-[60px] sm:w-[76px] flex-shrink-0 object-contain"
                  />

                  <div className="ml-3 flex-1 pr-2">
                    <p className="text-[14px] sm:text-[15px] font-bold leading-tight text-slate-800">
                      {test.title}
                    </p>
                    <p className="line-clamp-2 text-[12px] sm:text-[14px] leading-relaxed text-slate-500 mt-0.5">
                      {test.subtitle}
                    </p>
                  </div>

                  <div className="ml-auto flex h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                    <IoIosArrowForward className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] text-teal-600" />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Box */}
            <div className="mt-8 rounded-[20px] bg-emerald-100 p-6 text-center">
              <p className="text-[15px] sm:text-[16px] font-bold text-slate-600">
                Not sure which test is right for you?
              </p>

              <a
                href="/contact"
                className="mx-auto mt-4 inline-flex h-[40px] w-[150px] items-center justify-center gap-2 rounded-[30px] bg-[#84C8AF] text-[15px] font-semibold text-[#27456E] transition-transform hover:scale-105"
              >
                Contact Us
                <img src={b1} alt="" className="h-[18px] w-[18px]" />
              </a>
            </div>
          </aside>

          {/* ==================== MAIN CONTENT ==================== */}
          <div className="w-full min-w-0 flex-1 space-y-12">
            
            {/* ==================== SECTION 1 ==================== */}
            <div>
              <div className="mb-6">
                <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-tight text-[#31859A]">
                  The Globally Approved Test For
                </p>
                <h2 className="mt-1 text-[32px] sm:text-[42px] lg:text-[54px] font-bold leading-tight text-[#8DC8AB]">
                  Many Visa Pathways
                </h2>
              </div>

              <div className="space-y-4 text-[16px] sm:text-[17px] leading-relaxed text-slate-700 text-justify">
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
                  their visitor visa application.
                </p>
              </div>
            </div>

            {/* ==================== SECTION 2 ==================== */}
            <section>
              <div className="mb-6">
                <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-tight text-[#31859A]">
                  Top Countries
                </p>
                <h2 className="mt-1 text-[32px] sm:text-[42px] lg:text-[54px] font-bold leading-tight text-[#8DC8AB]">
                  Accepting IELTS
                </h2>
              </div>

              <div className="rounded-[24px] sm:rounded-[34px] bg-sky-50 p-6 sm:p-8">
                <p className="text-[16px] sm:text-[17px] text-sky-600 font-medium">
                  The following are the top countries that accept IELTS scores
                </p>

                <ul className="ml-6 mt-4 list-disc text-[16px] sm:text-[17px] text-teal-600 space-y-2">
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
            <section>
              <div className="mb-6">
                <h2 className="text-[32px] sm:text-[42px] lg:text-[54px] font-bold leading-tight text-[#8DC8AB]">
                  IELTS Test Format
                </h2>
              </div>

              <div className="space-y-8 bg-white">
                {/* Test Overview */}
                <ul className="ml-6 list-disc text-[16px] sm:text-[17px] text-cyan-700 space-y-2">
                  <li>
                    IELTS evaluates your English proficiency across four key
                    areas: listening, reading, writing, and speaking.
                  </li>
                  <li>
                    The timing for the entire test section is 2 hours and 45
                    minutes.
                  </li>
                  <li>
                    Listening, reading, and writing happen on the same day
                    without any break, while a speaking test can also be
                    scheduled on the same day or up to a week before or after.
                  </li>
                </ul>

                {/* ==================== LISTENING ==================== */}
                <div>
                  <h3 className="pb-3 text-[20px] sm:text-[24px] font-semibold text-sky-600">
                    Listening – 30 minutes*
                  </h3>
                  <ul className="ml-6 list-disc text-[16px] sm:text-[17px] text-slate-600 space-y-2">
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
                <div>
                  <h3 className="pb-3 text-[20px] sm:text-[24px] font-semibold text-sky-600">
                    Reading – 60 minutes*
                  </h3>
                  <ul className="ml-6 list-disc text-[17px] sm:text-[18px] text-emerald-600">
                    <li>Format for reading section differs based on test type</li>
                  </ul>

                  {/* Academic + General Reading Card */}
                  <div className="mt-4 rounded-[24px] bg-slate-100 p-6 sm:p-8">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                      
                      {/* Academic Reading */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-[18px] sm:text-[20px] font-semibold text-emerald-700">
                            For Academic Reading
                          </p>
                          <ul className="mt-3 text-[16px] sm:text-[17px] text-cyan-600 space-y-3 list-disc ml-5">
                            <li>Three long passages, each followed by tasks.</li>
                            <li>Topics are suitable for undergraduate or postgraduate study.</li>
                            <li>Texts may include diagrams, graphs, or illustrations.</li>
                            <li>Sources include books, journals, and newspapers.</li>
                            <li>40 questions with mixed question types.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Vertical Divider (Desktop only) */}
                      <div className="hidden xl:block w-px bg-slate-300 mx-auto self-stretch" />

                      {/* General Training Reading */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-[18px] sm:text-[20px] font-semibold text-emerald-700">
                            For General Training Reading
                          </p>
                          <ul className="mt-3 text-[16px] sm:text-[17px] text-cyan-600 space-y-3 list-disc ml-5">
                            <li>Five to six texts of different lengths, divided into 3 sections.</li>
                            <li>Section 1: Short everyday texts.</li>
                            <li>Section 2: Work-related, factual texts.</li>
                            <li>Section 3: One longer passage on a general-interest topic.</li>
                            <li>40 questions with mixed question types.</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* ==================== WRITING ==================== */}
                <div>
                  <h3 className="pb-3 text-[20px] sm:text-[24px] font-semibold text-sky-600">
                    Writing – 60 minutes*
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-slate-600 mb-2">
                    Divided into 2 Tasks:
                  </p>
                  <ul className="ml-6 list-disc text-[16px] sm:text-[17px] text-slate-600 space-y-2">
                    <li>Task 1: Need to write at least 150 words in about 20 minutes.</li>
                    <li>Task 2: Need to write 250+ words on a viewpoint, argument, or problem in 40 minutes.</li>
                  </ul>
                </div>

                {/* ==================== SPEAKING ==================== */}
                <div>
                  <h3 className="pb-3 text-[20px] sm:text-[24px] font-semibold text-sky-600">
                    Speaking – 11-14 minutes*
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-slate-600 mb-2">
                    Divided into 3 Parts:
                  </p>
                  <ul className="ml-6 list-disc text-[16px] sm:text-[17px] text-slate-600 space-y-2">
                    <li>Part 1 (4–5 minutes): General questions about yourself and familiar topics.</li>
                    <li>Part 2 (3–4 minutes): Speak for 2 minutes based on a provided task card.</li>
                    <li>Part 3 (4–5 minutes): Discussion of more abstract ideas related to the topic of Part 2.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* ==================== SECTION 4 ==================== */}
            <section>
              <div className="mb-6">
                <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-tight text-[#31859A]">
                  Step Forward Globally
                </p>
                <h2 className="mt-1 text-[32px] sm:text-[42px] lg:text-[54px] font-bold leading-tight text-[#8DC8AB]">
                  With IELTS
                </h2>
              </div>

              <div className="rounded-[24px] sm:rounded-[34px] bg-emerald-50 p-6 sm:p-8">
                <p className="text-justify text-[16px] sm:text-[17px] leading-relaxed text-emerald-700">
                  IELTS opens doors to study, work, and migration worldwide.
                  With Growmore Global Visa, you get clear guidance on
                  required scores, test formats, and preparation so you can aim
                  for the result your visa pathway truly needs.
                </p>
              </div>
            </section>

            {/* ==================== IELTS RESULTS ==================== */}
            <section>
              <div className=" mb-35 md:mb-50 lg:mb-48 xl:mb-50">
                <h2 className="text-[32px] sm:text-[42px] lg:text-[54px] font-bold leading-tight text-[#8DC8AB] mb-6">
                  IELTS Results
                </h2>

                <p className="text-[17px] sm:text-[18px] font-semibold text-cyan-700 leading-relaxed">
                  Your IELTS score is reported on a 9-band scale ranging from
                  1 (non-user) to 9 (expert), and the duration of the result to
                  come depends on the test format:
                </p>

                <ul className="ml-6 mt-4 list-disc text-[16px] sm:text-[17px] text-cyan-700 space-y-2">
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

          </div>

        </div>
      </div>
    </>
  );
};

export default Ielts;