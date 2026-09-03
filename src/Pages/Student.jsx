import img from "../assets/q8.png";
import q2 from "../assets/q12.png";
import Application1 from "../Components/Application1";
import GlobalVisa1 from "../Components/GlobalVisa1";

const Student = () => {
  return (
    <>
      <section
        className="
            relative
            h-[300px]
            w-full
            overflow-hidden
    
            sm:h-[340px]
            md:h-[370px]
            lg:h-[400px]
            xl:h-[420px]
          "
      >
        {/* Banner Image */}
        <img
          src={img}
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
              lg:px-10
              xl:px-0
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
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Services &gt; </span>
            <span className="text-cyan-800">Student Visa</span>
          </p>

          {/* Banner Heading */}
          <h1
            className="
                mt-6
                text-[38px]
                font-semibold
                leading-[1.1]
                text-[#669980]
    
                sm:mt-8
                sm:text-[44px]
    
                md:mt-10
                md:text-[52px]
    
                lg:mt-12
                lg:text-[60px]
              "
          >
            Student Visa
          </h1>
        </div>
      </section>
      <section
        className="
        relative
        w-full
        overflow-hidden
        bg-white
        min-h-[950px]
        sm:min-h-[1000px]
        md:min-h-[1080px]
        lg:min-h-[880px]
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
              Start Your Abroad Study Adventure
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
              By Getting Your Student Visa
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
    
            lg:flex-row
            lg:items-start
            lg:gap-[30px]
    
            xl:gap-[35px]
          "
          >
            {/* ================= IMAGE ================= */}
            <div
              className="
              relative
              h-[220px]
              w-full
              shrink-0
              overflow-hidden
              rounded-[10px]
    
              sm:h-[300px]
              sm:max-w-[560px]
    
              md:h-[360px]
              md:max-w-[600px]
    
              lg:mt-[130px]
              lg:h-[420px]
              lg:w-[50%]
              lg:max-w-none
              
              xl:mt-8
              xl:h-[491px]
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
              max-w-[680px]
              flex-col
              gap-5
    
              sm:gap-6
              md:gap-7
    
              lg:w-[50%]
              lg:max-w-[680px]
              lg:gap-7
    
              xl:ml-10
              xl:mt-[-18px]
              xl:w-[600px]
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
    
                xl:text-[16px]
                xl:leading-[1.6]
              "
              >
                Are you dreaming of studying abroad at a place that offers
                top-quality education, global career potential, and
                life-changing experiences? Then, you are at the right place. At
                Growmore Immigration, we are here to make your international
                education journey smoother, smarter, and completely stress-free
                by providing the best student visa service.
              </p>
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
    
                xl:text-[16px]
                xl:leading-[1.6]
              "
              >
                Whether you are heading for a Student Visa Australia, a Student
                Visa the UK, or a Student Visa UAE, processing it perfectly is
                your first step on the pathway to making your dreams a reality
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
    
                xl:text-[16px]
                xl:leading-[1.6]
              "
              >
                By studying abroad, you won’t simply obtain a piece of paper
                that represents your qualification but will also equip yourself
                with a unique competitive advantage of new exposures and the
                potential to create a successful global career. From world-class
                universities and industry-specific courses to exciting
                student-friendly cities, everything that you need to develop
                personally and professionally can be gained through
                international study.
              </p>
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
    
                xl:text-[16px]
                xl:leading-[1.6]
              "
              >
                At Growmore Global Visa, we have a great team of experts who
                will guide you through every stage of the student visa process
                and also help you in choosing the right country & course that
                aligns with your goal. With our expertise, you will be able to
                confidently begin your abroad education journey with
                personalized support and transparent advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GlobalVisa1 />
      <Application1 />
    </>
  );
};

export default Student;
