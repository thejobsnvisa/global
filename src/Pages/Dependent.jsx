import img from "../assets/x1.png";
import b1 from "../assets/b1.svg";
import q2 from "../assets/q3.png";
import DependentVisa from "../Components/DependentVisa";
import DependentVisaSection from "../Components/DependentVisaSection";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import bg2 from "../assets/bg2.png";

const Dependent = () => {
  const cardData = [
    {
      img: v1,
      title: "Genuine Relationship Proof",
      description:
        "The applicant needs to prove that the partnership is real and of a continuous nature by providing legal documents.",
    },
    {
      img: v2,
      title: "Financial Proof",
      description:
        "Applicant is required to give evidence such as salary slips, bank statements, etc, in order to show the capability that she/he can financially support their dependents without relying on government assistance.",
    },
    {
      img: v3,
      title: "Accommodation and Identity  Proof",
      description:
        "Valid passports, birth/marriage certificates for all dependants, and tenancy agreements are required to prove identity.",
    },
  ];
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[370px] lg:h-[400px] xl:h-[420px]">
        {/* Banner Image */}
        <img
          src={img}
          alt="Migration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]" />

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10">
          {/* Breadcrumb */}
          <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Services &gt; </span>
            <span className="text-cyan-800 font-medium">Dependent</span>
          </p>

          {/* Banner Heading */}
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.1] text-[#669980] sm:mt-6 sm:text-[44px] md:mt-8 md:text-[52px] lg:mt-10 lg:text-[60px]">
            Dependent
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-emerald-50 py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1064px] flex-col items-center gap-6 px-5 text-center text-cyan-700 sm:px-8">
          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            Moving abroad is exciting, but it can feel incomplete without your
            family by your side. Most of the people get their visas approved,
            but the real concern begins only after that: What about my spouse?
            What about my children? At that point, the focus naturally shifts to
            securing a dependent visa for the family.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            A dependent visa is a type of visa that permits family members to
            join the main visa holder overseas legally and stay with him/her for
            the same duration. But to ensure a successful onboarding of
            dependents, a proper understanding of eligibility, documentation,
            and application requirements is essential.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            This is where Growmore Global Visa comes in, offering such
            straightforward and well-structured dependent visa services for all
            major countries, including Australia, the UK, Canada, New Zealand,
            etc. We help families move into a foreign country together without
            any unnecessary delay or refusal.
          </p>

          {/* Centered CTA Button */}
          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#84C8AF] px-6 py-3 text-[16px] font-semibold text-[#27456E] transition-all hover:bg-[#6ebc9f] hover:shadow-md"
          >
            Contact Us
            <img src={b1} alt="Arrow" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </section>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
      
          py-10
          sm:py-12
          md:py-14
          lg:py-16
          xl:py-10
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1350px]
            px-5
      
            sm:px-8
            lg:px-10
            xl:px-10
          "
        >
          {/* ================= HEADING ================= */}
          <div
            className="
              mb-8
              sm:mb-10
              md:mb-12
              lg:mb-12
              xl:mb-14
            "
          >
            <p
              className="
                m-0
                text-[24px]
                leading-[1.15]
                text-[#26839A]
      
                sm:text-[26px]
                md:text-[28px]
                lg:text-[30px]
                xl:text-[40px]
              "
            >
              What is a
            </p>

            <h2
              className="
                m-0
                mt-1
                text-[30px]
                font-bold
                leading-[1.05]
                text-[#5B9E7D]
      
                sm:text-[34px]
                md:text-[40px]
                lg:text-[46px]
                xl:text-[60px]
              "
            >
              Dependent Visa?
            </h2>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div
            className="
    mx-auto
    flex
    w-full
    max-w-[1250px]
    flex-col
    items-center
    gap-8

    sm:gap-10
    md:gap-12

    lg:flex-row-reverse
    lg:items-start
    lg:gap-[30px]

    xl:gap-[65px]
  "
          >
            {/* ================= IMAGE ================= */}
            <div
              className="
      relative
      h-[260px]
      w-full
      shrink-0
      overflow-hidden
      rounded-[10px]

      sm:h-[340px]
      sm:max-w-[560px]

      md:h-[400px]
      md:max-w-[600px]

      lg:mt-[13px]
      lg:h-[450px]
      lg:w-[50%]
      lg:max-w-none

      xl:h-[420px]
      xl:w-[613px]
    "
            >
              <img
                src={q2}
                alt="Migration"
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
        bg-[linear-gradient(180deg,rgba(255,255,255,0)_84.79%,#FFFFFF_100%),linear-gradient(1.81deg,rgba(255,255,255,0)_66.81%,#FFFFFF_96.98%),linear-gradient(90deg,rgba(255,255,255,0)_83.12%,rgba(255,255,255,0.83)_91.88%,#FFFFFF_100%),linear-gradient(268.94deg,rgba(255,255,255,0)_90.57%,#FFFFFF_99.02%)]
      "
              />
            </div>

            {/* ================= CONTENT ================= */}
            <div
              className="
      mt-0
      flex
      h-auto
      w-full
      max-w-[550px]
      flex-col
      gap-5

      sm:gap-6
      md:gap-7

      lg:w-[50%]
      lg:max-w-[550px]
      lg:gap-7

      xl:ml-10
      xl:mt-[38px]
      xl:w-[550px]
      xl:gap-[35px]
    "
            >
              {/* Paragraph 1 */}
              <p
                className="
        m-0
        w-full
        text-[15px]
        leading-7
        text-cyan-700
        text-justify

        sm:text-[15px]
        sm:leading-7

        md:text-[16px]
        md:leading-[1.7]

        lg:text-[16px]
        lg:leading-[1.6]

        xl:text-[18px]
        xl:leading-[1.6]
      "
              >
                A dependent visa is granted to the specific relatives of the
                primary visa holder, who can be a student or a working
                professional. It allows the dependents to live in the foreign
                country legally, as long as the main applicant continues to hold
                a particular visa.
              </p>

              {/* Paragraph 2 */}
              <p
                className="
        m-0
        w-full
        text-[15px]
        leading-7
        text-teal-700
        text-justify

        sm:text-[15px]
        sm:leading-7

        md:text-[16px]
        md:leading-[1.7]

        lg:text-[16px]
        lg:leading-[1.6]

        xl:text-[18px]
        xl:leading-[1.6]
      "
              >
                This is granted separately based on the dependent’s eligibility
                requirements. The immigration department evaluates factors such
                as the genuineness of the relationship, the financial situation,
                and the correctness of the documentation very carefully before
                giving a visa approval
              </p>
            </div>
          </div>
        </div>
      </section>
      <DependentVisa />
      <DependentVisaSection />
      <section
        className="
    relative
    w-full
    overflow-hidden
    bg-teal-50
    lg:h-[550px]
    md:h-[650px]
    h-[700px]
    py-10
    sm:py-12
    md:py-14
    lg:py-16
    xl:py-10
  "
      >
        <div
          className="
      mx-auto
      w-full
      max-w-[1350px]
      px-5

      sm:px-8
      lg:px-10
      xl:px-10
    "
        >
          <div
            className="
        mb-8
        sm:mb-10
        md:mb-12
        lg:mb-12
        xl:mb-14
      "
          >
            <p
              className="
          m-0
          text-[24px]
          leading-[1.15]
          text-[#26839A]

          sm:text-[26px]
          md:text-[28px]
          lg:text-[30px]
          xl:text-[40px]
        "
            >
              Key Requirements for a
            </p>

            <h2
              className="
          m-0
          mt-1
          text-[30px]
          font-bold
          leading-[1.05]
          text-[#5B9E7D]

          sm:text-[34px]
          md:text-[40px]
          lg:text-[46px]
          xl:text-[60px]
        "
            >
              Dependent Visa
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1210px] gap-4 sm:gap-4 md:gap-4 lg:gap-5 lg:mt-[80px] xl:gap-[30px] mx-auto px-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white w-full h-auto md:h-[210px] border-[1px] border-slate-200 rounded-[20px] shadow-[inset_0px_0px_28px_0px_#4FABC440] p-4 flex flex-col items-start text-left"
              >
                <div className="flex items-center gap-2 mb-2 ml-0 md:ml-[15px]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-teal-700 text-[16px] sm:text-[18px] font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-800 text-[14px] lg:text-[14px] sm:text-[15px] lg:mt-1 ml-0 md:ml-[15px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
          xl:h-[850px]
          lg:h-[1000px]
          md:h-[1350px]
          h-[1250px]
          py-10
          sm:py-12
          md:py-14
          lg:py-16
          xl:py-10
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1350px]
            px-5
      
            sm:px-8
            lg:px-10
            xl:px-10
          "
        >
          {/* ================= HEADING ================= */}
          <div
            className="
              mb-8
              sm:mb-10
              md:mb-12
              lg:mb-12
              xl:mb-14
            "
          >
            <p
              className="
                m-0
                text-[24px]
                leading-[1.15]
                text-[#26839A]
      
                sm:text-[26px]
                md:text-[28px]
                lg:text-[30px]
                xl:text-[40px]
              "
            >
              Why Choose Growmore Global Visa
            </p>

            <h2
              className="
                m-0
                mt-1
                text-[30px]
                font-bold
                leading-[1.05]
                text-[#5B9E7D]
      
                sm:text-[34px]
                md:text-[40px]
                lg:text-[46px]
                xl:text-[60px]
              "
            >
              For Dependent Visa?
            </h2>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div
            className="
    mx-auto
    flex
    w-full
    max-w-[1250px]
    flex-col
    items-center
    gap-8

    sm:gap-10
    md:gap-12

    lg:flex-row-reverse
    lg:items-start
    lg:gap-[30px]
    lg:ml-[25px]
    xl:gap-[65px]
  "
          >
            {/* ================= IMAGE ================= */}
            <div
              className="
      relative
      h-[260px]
      w-full
      shrink-0
      overflow-hidden
      rounded-[10px]

      sm:h-[340px]
      sm:max-w-[560px]

      md:h-[400px]
      md:max-w-[600px]
      lg:mt-[22px]
      lg:h-[450px]
      lg:w-[50%]
      lg:max-w-none

      xl:h-[420px]
      xl:w-[613px]
    "
            >
              <img
                src={bg2}
                alt="Migration"
                className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
              />
            </div>

            {/* ================= CONTENT ================= */}
            <div
              className="
      mt-0
      flex
      h-auto
      w-full
      max-w-[550px]
      flex-col
      gap-5

      sm:gap-6
      md:gap-7
      lg:w-[50%]
      lg:max-w-[550px]
      lg:gap-7

      xl:ml-[10px]
      xl:mt-[20px]
      xl:w-[550px]
      xl:gap-[35px]
    "
            >
              {/* Paragraph 1 */}
              <p
                className="
        xl:ml-[-40px]
        w-full
        text-[15px]
        leading-7
        text-cyan-700
        text-justify

        sm:text-[15px]
        sm:leading-7
        sm:ml-[15px]
        md:text-[16px]
        md:leading-[1.7]

        lg:text-[16px]
        lg:leading-[1.6]

        xl:text-[18px]
        xl:leading-[1.6]
      "
              >
                Choosing a suitable visa consultant is very important for the
                success of any visa application. Here, Growmore Global Visa
                makes a difference by giving more priority to clarity,
                compliance, and case accuracy at the time of lodging application
                over assumptions or shortcuts.
              </p>
              <p className="w-[599px] h-[11px] text-[18px] font-semibold leading-[1] text-cyan-600 xl:ml-[-40px]">
                Things that set us apart include
              </p>
              <ul className="list-disc text-teal-800 text-[16px] xl:ml-[-28px] leading-[2]">
                <li>
                  Detailed evaluation of dependent eligibility to ensure
                  approval success
                </li>
                <li>Precise and well-organized document guidance</li>
                <li>
                  Accurate verification of the relationship and financial
                  support evidence
                </li>
                <li>
                  Personalized visa strategy for each case, rather than just
                  giving generic templates
                </li>
                <li>
                  Pre-filing inspection by a specialist to reduce mistakes and
                  speed up processing.
                </li>
                <li>
                  Broad experience in handling dependent visas for major
                  destinations worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dependent;
