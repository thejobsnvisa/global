import img from "../assets/q8.png";
import q2 from "../assets/q12.png";
import Application1 from "../Components/Application1";
import GlobalVisa1 from "../Components/GlobalVisa1";
import c3 from "../assets/29.svg";
import Country from "../Components/Country";

const Student = () => {
  const offerIcon = c3;
  const offerItems = [{ icon: offerIcon, title: "Visa Offer" }];

  return (
    <>
      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[380px] lg:h-[450px]">
        {/* Banner Image */}
        <img
          src={img}
          alt="Student Visa Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]" />

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-10">
          {/* Breadcrumb */}
          <p className="mb-2 text-sm sm:text-base md:text-lg">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Services &gt; </span>
            <span className="font-medium text-cyan-800">Student Visa</span>
          </p>

          {/* Banner Heading */}
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#669980] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Student Visa
          </h1>
        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="mb-8 text-left sm:mb-10 lg:mb-12">
            <p className="m-0 text-xl font-normal leading-snug text-[#26839A] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Start Your Abroad Study Adventure
            </p>
            <h2 className="m-0 mt-1 text-2xl font-bold leading-tight text-[#5B9E7D] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              By Getting Your Student Visa
            </h2>
          </div>

          {/* Main Content Grid with Expanded Desktop Width */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            {/* Image Column - Enlarged for lg/xl */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-xl sm:h-[350px] md:h-[400px] lg:col-span-6 lg:h-[520px] xl:h-[580px]">
              <img
                src={q2}
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
              />{" "}
            </div>

            {/* Text Column - Enlarged font & tracking for lg/xl */}
            <div className="flex flex-col justify-center space-y-4 text-justify text-sm leading-relaxed text-cyan-800 sm:text-base lg:col-span-6 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
              <p>
                Are you dreaming of studying abroad at a place that offers
                top-quality education, global career potential, and
                life-changing experiences? Then, you are at the right place. At
                Growmore Immigration, we are here to make your international
                education journey smoother, smarter, and completely stress-free
                by providing the best student visa service.
              </p>
              <p>
                Whether you are heading for a Student Visa Australia, a Student
                Visa the UK, or a Student Visa UAE, processing it perfectly is
                your first step on the pathway to making your dreams a reality.
              </p>
              <p className="text-teal-700">
                By studying abroad, you won’t simply obtain a piece of paper
                that represents your qualification but will also equip yourself
                with a unique competitive advantage of new exposures and the
                potential to create a successful global career. From world-class
                universities and industry-specific courses to exciting
                student-friendly cities, everything that you need to develop
                personally and professionally can be gained through
                international study.
              </p>
              <p className="text-teal-700">
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
      <Country />
      {/* ================= OFFER / SERVICES SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 text-start sm:mb-12">
            <p className="m-0 text-xl font-normal leading-snug text-[#64D0E6] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Why Studying Abroad Is
            </p>
            <h2 className="m-0 mt-1 text-2xl font-bold leading-tight text-[#8DC8AB] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              By Getting Your Student Visa
            </h2>
            <p className="text-slate-700 lg:w-[974px] md:w-[768px] sm:w-[576px] w-full  mt-8 text-[18px] leading-relaxed">
              Studying abroad will always stand as a smart investment for one’s
              professional and personal growth. One can receive vital practical
              experience, global exposure, self-assurance, and the capacity to
              succeed anywhere across the world.
            </p>
          </div>

          {/* Offer Items Grid - Enlarged Image sizing for Desktop */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
            {offerItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-center p-2">
                <img
                  src={item.icon}
                  alt={item.title || "Offer Icon"}
                  className="h-auto w-full max-w-xs object-contain transition-transform duration-300 hover:scale-105 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL VISA & APPLICATION ================= */}
      <GlobalVisa1 />
      <Application1 />
    </>
  );
};

export default Student;
