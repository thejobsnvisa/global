import img from "../assets/us1.png";
import Contact from "../Components/Contact";
import a3 from "../assets/us2.png";
import a4 from "../assets/us3.png";
import States5 from "../Components/States5";
import RequirementsRight9 from "../Components/RequirementsRight9";

const StudentvisaUsa = () => {
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
                  <span className="text-cyan-800">Usa</span>
                </p>
      
                {/* Banner Heading */}
                <h1
                  className="
                          mt-6
                          w-full
                          max-w-[350px]
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
                  Student Visa Usa
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
              The USA
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
     
           lg:mt-[-135px]
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
             mt-[-40px]
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
               The United States has long been a dream destination for students around the world. Home to some of the world’s most respected universities, the USA offers an education system that values curiosity, creativity, and individuality. With thousands of universities and an incredible range of programs, students are free to shape their academic journey around their passions, strengths, and future ambitions.Studying in the USA is more than earning a degree—it’s about experiencing innovation firsthand. From cutting-edge research and practical, hands-on learning to internships with global companies.
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
                85,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                H-1B work visas issued every year
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                4,000+
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
               Universities and colleges offering globally recognized education and flexible study options.
              </p>
            </div>
            <div className="min-h-[158px] w-full max-w-[266px] text-center rounded-[14px] p-6 bg-white shadow-[0_0_30px_0_#76767633]">
              <h2 className="font-semibold text-[26px] text-emerald-700">
                11 million
              </h2>
              <p className="mt-3 text-[15px] text-slate-700">
                job openings annually across major industries
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-3xl text-[#4298A9] sm:text-4xl">
            Choose Your
          </h2>
          <p className="mt-1 text-center text-4xl font-bold text-[#5B9E7D] sm:text-5xl">
            Pathway
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Healthcare & Nursing</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Biotechnology</li>
                <li>Biomedical Sciences</li>
                <li>Public Health (STEM-designated tracks)</li>
                <li>Health Informatics & Health Data Analytics</li>
                <li>Clinical Research</li>
                <li>Bioinformatics</li>
                <li>Nursing (STEM pathways available)</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Education & Teaching</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Early Childhood Education</li>
                <li>Primary School Teaching</li>
                <li>Secondary School Teaching</li>
                <li>Special Education</li>
                <li>TESOL / English Teaching</li>
                <li>Vocational & Training Teacher</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Engineering</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
                <li>Chemical Engineering</li>
                <li>Aerospace Engineering</li>
                <li>Biomedical Engineering</li>
                <li>Environmental Engineering</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Business & Management</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Business Administration</li>
                <li>Accountancy</li>
                <li>Finance</li>
                <li>Marketing</li>
                <li>Business Management</li>
                <li>Supply Chain Management</li>
                <li>Human Resource Management</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Information Technology & Computer Science</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Computer Science</li>
                <li>Computer Engineering</li>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Information Systems</li>
                <li>Information Security</li>
                <li>Software Engineering</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-sky-100 p-5 sm:p-6">
              <h3 className="font-bold text-lg text-teal-700">Other</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-sky-800">
                <li>Psychology</li>
                <li>Economics</li>
                <li>International Relations</li>
                <li>Political Science</li>
                <li>Environmental Studies & Sustainability</li>
                <li>Communication & Media Studies</li>
                <li>Law (Pre-Law pathways)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <States5/>
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

    {/* Main Content */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">

      {/* ================= LEFT SECTION ================= */}
      <div className="min-w-0 lg:col-span-6">

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
        <RequirementsRight9
          title="USA Student Visa Requirements"
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

export default StudentvisaUsa;
