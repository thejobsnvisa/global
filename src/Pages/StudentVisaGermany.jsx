import img from "../assets/ge1.png";
import Contact from "../Components/Contact";
import a3 from "../assets/ge2.png";
import a4 from "../assets/ge3.png";
import States2 from "../Components/States2";
import RequirementsRight3 from "../Components/RequirementsRight3";

const StudentvisaGermany = () => {
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
                      2xl:h-[580px]
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
                        translate-x-0
                        md:translate-x-[60px]
                        xl:translate-x-[130px]
                        xl:object-contain
                        2xl:object-cover
                        object-cover
                      "
              />
      
              {/* Gradient Overlay */}
              <div
                className="
                        absolute
                        inset-0
                        bg-[linear-gradient(89.92deg,#FFFFFF_25%,rgba(255,255,255,0)_58.4%)]
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
                          mt-[-70px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          lg:ml-[10px]
                        "
                >
                  <span className="text-sky-500">Home &gt; </span>
                  <span className="text-sky-500">Services &gt; </span>
                  <a href="/services/student-visa" className="text-sky-500">Student Visa &gt; </a>
                  <span className="text-cyan-800">Germany</span>
                </p>
      
                {/* Banner Heading */}
                <h1
                  className="
                          mt-6
                          w-full
                          max-w-[450px]
                          text-[38px]
                          font-semibold
                          leading-[1.1]
                          text-[#669980]
              
                          sm:mt-8
                          sm:text-[44px]
              
                          md:mt-10
                          md:text-[50px]
                          lg:ml-[8px]
                          lg:mt-12
                          lg:text-[50px]
                        "
                >
                  Student Visa Germany
                </h1>
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
                   xl:mb-14
                   xl:mt-10
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
                     lg:text-[35px]
                     xl:text-[40px]
                   "
            >
              Benefits Of Studying In
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
                     lg:text-[54px]
                     xl:text-[60px]
                   "
            >
              The Germany
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
           rounded-[30px]
     
           sm:h-[340px]
           sm:max-w-[560px]
     
           md:h-[400px]
           md:max-w-[600px]
     
           lg:h-[450px]
           lg:w-[50%]
           lg:max-w-none
     
           xl:h-[420px]
           xl:w-[613px]
         "
            >
              <img
                src={a3}
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
           xl:mt-[10px]
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
     
             lg:text-[18px]
             lg:leading-[1.6]
     
             xl:text-[18px]
             xl:leading-[1.6]
           "
              >
Germany is one of the world’s most powerful and reliable destinations for higher education, offering international students a compelling combination of globally recognised education, industry-driven learning, affordability, and long-term career security. Renowned for its academic excellence and research leadership, Germany’s universities emphasise practical, application-oriented teaching closely aligned with industry needs, making graduates highly employable. As Europe’s largest economy and a global leader in engineering, automotive, artificial intelligence, IT, renewable energy, healthcare, and manufacturing, Germany provides exceptional career opportunities for skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-sky-50 mt-4 px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-[1024px] text-center font-semibold text-2xl text-cyan-700 sm:text-3xl">
          Key Highlights
        </h2>
        <div className="mx-auto mt-8 max-w-[1024px]">
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                4,00,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                International students
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                300+ Universities
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
              An 18-month post-study job search visa, Schengen access to 27 countries, and a high PR success rate make it an ideal study destination.
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                10,00,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                Annual job openings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-[1200px] grid-cols-1 gap-6 px-4 pb-10 sm:grid-cols-2 xl:grid-cols-3">
       <h2 className="col-span-full mt-4 w-full text-center text-[32px] text-[#4298A9] sm:text-[36px]">
          Choose Your
        </h2>
        <p className="col-span-full -mt-10 w-full text-center text-[44px] font-bold text-[#5B9E7D] sm:text-[52px]">
          Pathway
        </p>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
            Healthcare & Nursing
          </h2>
          <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
            <li>Nursing (RN, EN)</li>
            <li>Aged Care Nursing</li>
            <li>Mental Health Nursing</li>
            <li>Midwifery</li>
            <li>Medical Laboratory Science</li>
            <li>Pharmacy</li>
            <li>Physiotherapy</li>
            <li>Occupational Therapy</li>
            <li>Radiography & Medical Imaging</li>
            <li>Public Health</li>
          </ul>
        </div>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
            Education & Teaching
          </h2>
          <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
            <li>Early Childhood Education</li>
            <li>Primary School Teaching</li>
            <li>Secondary School Teaching</li>
            <li>Special Education</li>
            <li>TESOL / English Teaching</li>
            <li>Vocational & Training Teacher</li>
          </ul>
        </div>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
            Engineering
          </h2>
          <div className="mt-4 space-y-4">
            <p className="w-full text-[16px] font-semibold text-sky-800">
              Civil Engineering
            </p>
            <ul className="w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
              <li>Structural Engineering</li>
              <li>Construction Management</li>
              <li>Transport & Highway Engineering</li>
            </ul>
            <p className="w-full text-[16px] font-semibold text-sky-800">
              Mechanical Engineering
            </p>
            <ul className="w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
              <li>HVAC Engineering</li>
              <li>Automotive Engineering</li>
              <li>Robotics & Mechatronics</li>
              <li>Manufacturing Engineering</li>
            </ul>
            <p className="w-full text-[16px] font-semibold text-sky-800">
              Electrical Engineering
            </p>
            <ul className="w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
              <li>Power Engineering</li>
              <li>Electronics Engineering</li>
              <li>Telecommunications Engineering</li>
            </ul>
          </div>
        </div>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
           Business & Management
          </h2>
          <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
            <li>Business Administration (MBA)</li>
            <li>Project Management</li>
            <li>Human Resource Management</li>
            <li>Accounting & Finance</li>
            <li>Marketing & Communication</li>
            <li>Supply Chain & Logistics</li>
            <li>Hospitality & Tourism Management</li>
          </ul>
        </div>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
            Information Technology & Computer Science
          </h2>
          <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
            <li>Software Engineering</li>
            <li>Cyber Security</li>
            <li>Data Science & Analytics</li>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Network & System Administration</li>
            <li>Web Development</li>
            <li>Information Systems</li>
            <li>ICT Business Analyst</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="box-border w-full rounded-[20px] bg-sky-100 p-5">
          <h2 className="w-full font-bold text-[18px] text-teal-700">
           Other
          </h2>
          <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-[16px] text-sky-800">
            <li>Arts & Design</li>
            <li>Trades & Vocational Studies</li>
            <li>Agriculture & Environmental Science</li>
          </ul>
        </div>
      </div>
      <States2/>
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

    {/* Main Content */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">

      {/* ================= LEFT SECTION ================= */}
      <div className="lg:col-span-6">

        {/* Heading */}
        <div className="mb-8 text-left sm:mb-8 mt-10">
          <p
            className="
              m-0
              text-2xl
              font-normal
              leading-tight
              text-[#26839A]
              sm:text-3xl
              md:text-4xl
              lg:text-[38px]
            "
          >
            Requirements For
          </p>

          <h2
            className="
              m-0
              mt-1
              text-4xl
              font-bold
              leading-tight
              text-[#5B9E7D]
              sm:text-5xl
              lg:text-[48px]
            "
          >
            Visa
          </h2>
        </div>

        {/* Visa Image */}
        <div className="relative h-[350px] w-full overflow-hidden rounded-xl sm:h-[350px] md:h-[400px] lg:col-span-6 lg:h-[520px] xl:h-[580px]">
          <img
            src={a4}
            alt="Abroad Education"
            className="h-full w-full object-cover"
          />

          {/* Overlay visual framing */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(180deg,rgba(255,255,255,0)_84.79%,#FFFFFF_100%),linear-gradient(1.81deg,rgba(255,255,255,0)_66.81%,#FFFFFF_96.98%),linear-gradient(90deg,rgba(255,255,255,0)_83.12%,rgba(255,255,255,0.83)_91.88%,#FFFFFF_100%),linear-gradient(268.94deg,rgba(255,255,255,0)_90.57%,#FFFFFF_99.02%)]
            "
          />
        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div
        className="
          flex
          w-full
          items-start
          justify-center
          lg:col-span-6
          lg:justify-end
        "
      >
        <RequirementsRight3
          title="Germany Student Visa Requirements"
          requirements={[]}
        />
      </div>

    </div>
  </div>
</section>
      <Contact />
    </>
  );
};

export default StudentvisaGermany;
