import img from "../assets/x2.png";
import b1 from "../assets/b1.svg";
import q9 from "../assets/q9.png";
import VisitorVisa from "../Components/VisitorVisa";
import bg2 from "../assets/bg5.png";

const Visitor = () => {
  return (
    <>
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[370px] lg:h-[400px] xl:h-[510px]">
        {/* Banner Image */}
        <img
          src={img}
          alt="Visitor Visa"
          className="
    absolute
    top-0
    left-0
    h-full
    w-full
    object-cover
  "
        />

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(89.92deg, #FFFFFF 0.06%, rgba(255, 255, 255, 0) 58.4%)",
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10">
          {/* Breadcrumb */}
          <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Services &gt; </span>
            <span className="text-cyan-800 font-medium">Visitor Visa</span>
          </p>

          {/* Banner Heading */}
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.1] text-[#669980] sm:mt-6 sm:text-[44px] md:mt-8 md:text-[52px] lg:mt-10 lg:text-[60px]">
            Visitor Visa
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-cyan-50 py-12 md:py-16 lg:py-20 h-[700px] md:h-[650px] lg:h-[560px] xl:h-[580px]">
        <div className="mx-auto flex max-w-[1064px] flex-col items-center gap-6 px-5 text-center text-cyan-700 sm:px-8">
          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            A visitor visa or tourist visa is a type of legal document issued by
            a specific country’s government to allow people to stay in their
            country for a short duration for non-immigrant purposes. In short,
            it enables international travellers to enter a foreign territory but
            does not permit permanent employment or long-term residence. The
            validity period and duration of stay vary based on the country and
            the applicant’s profile. So, with this visa, you can travel legally,
            confidently, and within immigration guidelines.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            No matter if you are going for a short holiday, meeting relatives,
            or taking part in an event abroad, careful planning makes all the
            difference. Here, a well-prepared visitor visa application helps you
            in securing approval smoothly, avoiding delays, and converting your
            travel plans into a reality without stress.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            So, get in touch with Growmore Global Visa now and ensure your
            visitor visa application is expertly prepared for maximum approval
            chances.
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
                h-auto
                py-10
                sm:py-12
                md:py-14
                lg:py-16
              xl:h-[740px]
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
              Who Can Apply
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
              For A Visitor Visa?
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
      
            md:h-[400px]
            md:max-w-[600px]
            lg:mt-[105px]
            lg:h-[310px]
            lg:w-[50%]
            lg:max-w-none
            xl:mt-[40px]
            xl:h-[420px]
            xl:w-[630px]
          "
            >
              <img
                src={q9}
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
      
            xl:mr-20
            xl:mt-[-15px]
            xl:w-[550px]
            xl:gap-[15px]
          "
            >
              {/* Paragraph 1 */}
              <p
                className="
              m-0
              w-full
              text-[15px]
              leading-7
              text-slate-500
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
                You can apply for a visitor visa if you plan to:
              </p>
              <ul className=" gap-3 flex flex-col text-[15px] text-slate-500 sm:text-[15px] sm:leading-7 md:text-[16px] md:leading-[1.7] lg:text-[16px] lg:leading-[1.6] xl:text-[18px] xl:leading-[1.2]">
                <li className="bg-sky-50 border border-slate-100 text-teal-700 rounded-[8px] pl-6 py-3">
                  Travel for tourism and leisure purposes
                </li>
                <li className="bg-sky-50 border border-slate-100 text-teal-700 rounded-[8px] pl-6 py-3">
                  Participate in conferences, business meetings, or professional
                  events
                </li>
                <li className="bg-sky-50 border border-slate-100 text-teal-700 rounded-[8px] pl-6 py-3">
                  Visit family members, friends, or relatives abroad
                </li>
                <li className="bg-sky-50 border border-slate-100 text-teal-700 rounded-[8px] pl-6 py-3">
                  Attend medical appointments or consultations within the
                  visitor visa conditions
                </li>
                <li className="bg-sky-50 border border-slate-100 text-teal-700 rounded-[8px] pl-6 py-3">
                  Attend family gatherings, weddings, or social occasions
                </li>
              </ul>
              {/* Paragraph 2 */}
              <p
                className="
              w-full
              text-[15px]
              leading-7
              text-slate-500
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
                Your eligibility is evaluated based on your profile, travel
                history, financial capability, and personal ties to your home
                country. Making these factors clear and consistent will have a
                big impact on the outcome of your visa application.
              </p>
            </div>
          </div>
        </div>
      </section>
      <VisitorVisa />
    <section
  className="
    relative
    w-full
    overflow-hidden
    bg-white

    h-auto
    py-10

    sm:py-12
    md:py-14
    mb-45
    md:mb-0
    lg:mb-0
    xl:mb-0
    md:h-[1600px]
    lg:h-[1250px]
    lg:py-16

    xl:h-[950px]
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
        What Sets Growmore Global Visa Apart
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
        For Visitor Visa
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
          rounded-[50px]

          sm:h-[340px]
          sm:max-w-[560px]

          md:h-[400px]
          md:max-w-[600px]

          lg:mt-[100px]
          lg:h-[450px]
          lg:w-[50%]
          lg:max-w-none

          xl:h-[480px]
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
        {/* ================= INTRO ================= */}
        <p
          className="
            m-0
            w-full
            text-[15px]
            leading-7
            text-slate-700
            text-justify

            sm:ml-[15px]
            sm:text-[15px]
            sm:leading-7

            md:ml-0
            md:text-[16px]
            md:leading-[1.7]

            lg:text-[16px]
            lg:leading-[1.6]

            xl:ml-[-40px]
            xl:mt-[-45px]
            xl:w-[773px]
            xl:text-[18px]
            xl:leading-[1.6]
          "
        >
          At Growmore Global Visa, we don’t just fill out an application
          form—we maintain accuracy, transparency, and strict adherence to
          regulations to ensure that every visitor visa application meets the
          highest standards. Here's what makes us the preferred choice:
        </p>

        {/* ================= EXPERT GUIDANCE ================= */}
        <p
          className="
            m-0
            w-full
            text-[17px]
            font-semibold
            leading-[1.2]
            text-cyan-600

            sm:ml-[15px]
            sm:text-[18px]

            md:ml-0

            lg:text-[18px]

            xl:ml-[-40px]
            xl:w-[599px]
            xl:h-[11px]
            xl:text-[18px]
            xl:leading-[1]
          "
        >
          Expert Guidance Across Major Countries
        </p>

        <p
          className="
            m-0
            w-full
            text-[15px]
            font-semibold
            leading-6
            text-teal-700
            text-justify

            sm:ml-[15px]
            sm:text-[16px]
            sm:leading-7

            md:ml-0

            lg:text-[16px]

            xl:ml-[-40px]
            xl:mt-[-12px]
            xl:w-[614px]
            xl:h-[83px]
            xl:text-[16px]
          "
        >
          We have vast expertise in processing visitor visa applications for
          all major destinations, including Australia, New Zealand, Canada,
          the United States, the United Kingdom, Europe, and more.
        </p>

        {/* ================= PERSONALISED SUPPORT ================= */}
        <p
          className="
            m-0
            w-full
            text-[17px]
            font-semibold
            leading-[1.2]
            text-cyan-600

            sm:ml-[15px]
            sm:text-[18px]

            md:ml-0

            lg:text-[18px]

            xl:ml-[-40px]
            xl:mt-[-20px]
            xl:w-[599px]
            xl:h-[11px]
            xl:text-[18px]
            xl:leading-[1]
          "
        >
          Personalised Support
        </p>

        <p
          className="
            m-0
            w-full
            text-[15px]
            font-semibold
            leading-6
            text-teal-700
            text-justify

            sm:ml-[15px]
            sm:text-[16px]
            sm:leading-7

            md:ml-0

            lg:text-[16px]

            xl:ml-[-40px]
            xl:mt-[-12px]
            xl:w-[614px]
            xl:h-[83px]
            xl:text-[16px]
          "
        >
          We take care of each application individually to clearly show the
          purpose of your travel.
        </p>

        {/* ================= ERROR FREE ================= */}
        <p
          className="
            m-0
            w-full
            text-[17px]
            font-semibold
            leading-[1.2]
            text-cyan-600

            sm:ml-[15px]
            sm:text-[18px]

            md:ml-0

            lg:text-[18px]

            xl:ml-[-40px]
            xl:mt-[-40px]
            xl:w-[599px]
            xl:h-[11px]
            xl:text-[18px]
            xl:leading-[1]
          "
        >
          Error-Free Applications
        </p>

        <p
          className="
            m-0
            w-full
            text-[15px]
            font-semibold
            leading-6
            text-teal-700
            text-justify

            sm:ml-[15px]
            sm:text-[16px]
            sm:leading-7

            md:ml-0

            lg:text-[16px]

            xl:ml-[-40px]
            xl:mt-[-12px]
            xl:w-[614px]
            xl:h-[83px]
            xl:text-[16px]
          "
        >
          We focus on precision to minimise delays or rejections due to any
          type of mistakes or incomplete documentation. This thing
          significantly enhances your chance of a visitor visa approval.
        </p>

        {/* ================= START TO FINISH ================= */}
        <p
          className="
            m-0
            w-full
            text-[17px]
            font-semibold
            leading-[1.2]
            text-cyan-600

            sm:ml-[15px]
            sm:text-[18px]

            md:ml-0

            lg:text-[18px]

            xl:ml-[-40px]
            xl:mt-[-20px]
            xl:w-[599px]
            xl:h-[11px]
            xl:text-[18px]
            xl:leading-[1]
          "
        >
          Start-to-Finish Support
        </p>

        <p
          className="
            m-0
            w-full
            text-[15px]
            font-semibold
            leading-6
            text-teal-700
            text-justify

            sm:ml-[15px]
            sm:text-[16px]
            sm:leading-7

            md:ml-0

            lg:text-[16px]

            xl:ml-[-40px]
            xl:mt-[-12px]
            xl:w-[614px]
            xl:h-[83px]
            xl:text-[16px]
          "
        >
          We manage the entire visitor visa process, starting from initial
          assessment to final submission and follow-up to provide you with a
          smooth experience. Plus, we also offer guidance on pre-departure
          preparations.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Visitor;
