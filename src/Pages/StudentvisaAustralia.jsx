import img from "../assets/sg1.png";
import Contact from "../Components/Contact";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import RequirementsRight from "../Components/RequirementsRight";
import States from "../Components/States";

const StudentvisaAustralia = () => {
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
                  translate-x-0
                  md:translate-x-[60px]
                  xl:translate-x-[130px]
                  xl:object-contain
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
                  "
          >
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Student Visa &gt; </span>
            <span className="text-cyan-800">Australia</span>
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
        
                    lg:mt-12
                    lg:text-[50px]
                  "
          >
            Student Visa Australia
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
                   lg:mb-12
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
                     lg:text-[30px]
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
                     lg:text-[46px]
                     xl:text-[60px]
                   "
            >
              The Australia
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
     
           lg:mt-[-45px]
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
     
           xl:ml-[-20px]
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
     
             lg:text-[16px]
             lg:leading-[1.6]
     
             xl:text-[20px]
             xl:leading-[1.6]
           "
              >
                Australia has an amazing education system that is centred around
                real careers rather than just giving degrees for international
                students. It has world-class universities that offer quality
                education along with significant scholarships and part-time work
                options, making it more affordable. With transparent student
                visa rules and a multicultural society, it remains one of the
                safest options . A perk of post-study work rights makes
                rewarding study destinations for students who want both quality
                education and long-term career opportunities.
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
                8,00,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                International students <br />
                studying in Australia
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                6,00,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                Job opportunities available across Australia with strong demand
                in Healthcare, IT, Hospitality and Retail
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                1,00,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                Temporary Graduate Visas approved yearly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] mt-4 max-xl:h-auto max-xl:px-4 max-xl:pb-10">
        <h2 className="ml-165 mt-8 w-[254px] text-center h-[28px] text-[#4298A9] text-[40px] xl:ml-160 max-xl:mx-auto max-xl:w-full max-xl:max-w-[254px] max-xl:h-auto max-xl:text-[32px]">
          Choose Your
        </h2>
        <p className="w-[268px] h-[42px] font-semibold text-center mt-2 ml-165 text-[60px] text-[#5B9E7D] xl:ml-158 max-xl:mx-auto max-xl:w-full max-xl:max-w-[268px] max-xl:h-auto max-xl:text-[44px]">
          Pathway
        </p>
        <div className="w-[284px] h-[320px] mt-[80px] ml-[280px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:min-h-[320px] max-xl:mt-8 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[206px] h-[11px] ml-8.5 font-bold text-[18px] text-teal-700">
            Healthcare & Nursing
          </h2>
          <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-6 ml-6">
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
        <div className="w-[284px] h-[220px] mt-[-318px] ml-[622px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:min-h-[220px] max-xl:mt-6 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[206px] h-[11px] ml-8.5 font-bold text-[18px] text-teal-700">
            Education & Teaching
          </h2>
          <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-6 ml-6">
            <li>Early Childhood Education</li>
            <li>Primary School Teaching</li>
            <li>Secondary School Teaching</li>
            <li>Special Education</li>
            <li>TESOL / English Teaching</li>
            <li>Vocational & Training Teacher</li>
          </ul>
        </div>
        <div className="w-[284px] h-[420px] mt-[-220px] ml-[955px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:mt-6 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[206px] h-[11px] ml-8.5 font-bold text-[18px] ml-20 text-teal-700">
            Engineering
          </h2>
          <div className="mt-8">
            <p className="w-[256px] h-[262px] text-[16px] font-semibold text-sky-800">
              Civil Engineering
            </p>
            <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-[-235px] ml-6">
              <li>Structural Engineering</li>
              <li>Construction Management</li>
              <li>Transport & Highway Engineering</li>
            </ul>
            <p className="w-[256px] h-[262px] text-[16px] mt-[-165px] font-semibold text-sky-800">
              Mechanical Engineering
            </p>
            <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-[-235px] ml-6">
              <li>HVAC Engineering</li>
              <li>Automotive Engineering</li>
              <li>Robotics & Mechatronics</li>
              <li>Manufacturing Engineering</li>
            </ul>
            <p className="w-[256px] h-[262px] text-[16px] mt-[-145px] font-semibold text-sky-800">
              Electrical Engineering
            </p>
            <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-[-235px] ml-6">
              <li>Power Engineering</li>
              <li>Electronics Engineering</li>
              <li>Telecommunications Engineering</li>
            </ul>
          </div>
        </div>
        <div className="w-[284px] h-[260px] mt-[-50px] ml-[280px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:min-h-[260px] max-xl:mt-6 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[226px] h-[11px] ml-6 font-bold text-[18px] text-teal-700">
           Business & Management
          </h2>
          <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-6 ml-6">
            <li>Business Administration (MBA)</li>
            <li>Project Management</li>
            <li>Human Resource Management</li>
            <li>Accounting & Finance</li>
            <li>Marketing & Communication</li>
            <li>Supply Chain & Logistics</li>
            <li className="w-[240px]">Hospitality & Tourism Management</li>
          </ul>
        </div>
        <div className="w-[284px] h-[360px] mt-[-360px] ml-[622px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:min-h-[360px] max-xl:mt-6 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[206px] h-[11px] ml-7.5 font-bold text-[18px] text-teal-700">
            Information Technology & Computer Science
          </h2>
          <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-12 ml-5.5">
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
        <div className="w-[284px] h-[165px] mt-[-165px] ml-[955px] rounded-[20px] pt-[20px] pr-[14] pb-[20px] pl-[14px] gap-[20px] bg-sky-100 max-xl:w-full max-xl:max-w-[420px] max-xl:h-auto max-xl:min-h-[165px] max-xl:mt-6 max-xl:ml-auto max-xl:mr-auto">
          <h2 className="w-[206px] h-[11px] ml-24 font-bold text-[18px] text-teal-700">
           Other
          </h2>
          <ul className="list-disc w-[256px] h-[250px] text-[16px] text-sky-800 mt-6 ml-6">
            <li>Arts & Design</li>
            <li>Trades & Vocational Studies</li>
            <li>Agriculture & Environmental Science</li>
          </ul>
        </div>
      </div>
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

    {/* Main Content */}
    <div className="grid grid-cols-1 gap-[-140px] lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14 lg:mt-[-100px]">

      {/* ================= LEFT SECTION ================= */}
      <div className="lg:col-span-6">

        {/* Heading */}
        <div className="mb-8 text-left sm:mb-8 mt-6">
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
        <RequirementsRight />
      </div>

    </div>
  </div>
</section>
<States/>
      <Contact />
    </>
  );
};

export default StudentvisaAustralia;
