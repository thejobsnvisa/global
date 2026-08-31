import img from "../assets/q1.png";
import q2 from "../assets/q2.png";
import Assist from "../Components/Assist";
import MigrationVisa from "../Components/MigrationVisa";
import { useEffect,useRef } from "react";
import Overseas from "../Components/Overseas";
import Visa from "../Components/Visa";

const destination = [
  {
    name: "Australia",
    description:
      "Australia offers excellent opportunities for skilled professionals across a wide range of industries, with strong career prospects and a high quality of life.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "New Zealand",
    description:
      "New Zealand provides opportunities in skilled professions, healthcare, construction, technology, and other growing sectors.",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Germany",
    description:
      "Germany offers strong opportunities for skilled workers in engineering, IT, healthcare, manufacturing, and other in-demand industries.",
    image:
      "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "France",
    description:
      "France provides opportunities in IT, finance, and tourism. Strong labor laws and benefits ensure a stable and balanced work environment.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "United Kingdom",
    description:
      "The United Kingdom offers diverse career opportunities for skilled professionals across healthcare, technology, finance, engineering, and more.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Canada",
    description:
      "Canada offers excellent opportunities for skilled workers, with pathways across technology, healthcare, engineering, construction, and other sectors.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
  },
];

const Migration = () => {
   const sliderRef = useRef(null);
  
    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
  
      let frameId;
      const speed = 0.5;
  
      const animate = () => {
        if (!slider) return;
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft -= slider.scrollWidth / 2;
        }
        frameId = requestAnimationFrame(animate);
      };
  
      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }, []);
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
            <span className="text-cyan-800">Migration</span>
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
            Migration
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
        Migration Visa Services for
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
        Leading Global Destinations
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

            xl:text-[16px]
            xl:leading-[1.6]
          "
        >
          Migrating to another country is a life-changing decision for
          everyone, which requires much more than normally meeting basic
          eligibility criteria. Every country has its own migration laws,
          assessment systems, occupation lists, and settlement rules that an
          aspirant migrant must follow to make a well-prepared visa
          application. This is where professional migration guidance becomes
          essential.
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
          At Growmore Global Visa, with a deep understanding of laws, we
          provide professional migration services to individuals and families
          who are planning long-term settlement abroad. Whether you are
          confused about choosing the right country to settle in or with clear
          visa planning, we handle every type of query. Here, each case is
          handled with a clear focus on legal compliance, accuracy, and
          long-term positive migration outcomes.
        </p>

        {/* Paragraph 3 */}
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
          Our structured approach simplifies complex migration procedures and
          ensures applicants move forward with confidence and a well-planned
          settlement strategy so you can start your migration journey with
          ease and settle abroad confidently.
        </p>
      </div>
    </div>
  </div>
</section>
      <Assist />
      <MigrationVisa/>
      <section className="w-full bg-white py-16 md:py-20 lg:py-[50px] xl:py-[70px] xl:h-[680px] lg:h-[1050px] md:h-[800px] sm:h-[600px]">
        <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-0">
          <div className="mb-8 md:mb-10 lg:mb-7 xl:mb-[28px]">
            <p
              className="text-[25px] leading-[1.15] text-[#26839A] md:text-[28px] lg:text-[32px] xl:text-[40px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Top Countries You Should
            </p>
            <h2
              className="mt-0 text-[32px] font-bold leading-[1.1] text-[#5B9E7D] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[60px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Consider for Migration
            </h2>
          </div>
      
          <div className="relative">
            <div
              id="destination-slider"
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide sm:gap-5 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0 xl:grid-cols-6 xl:gap-5"
            >
              {destination.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  tabIndex={0}
                  className="
                    group
                    relative
                    isolate
                    h-[300px]
                    min-w-[245px]
                    overflow-hidden
                    rounded-[30px]
                    bg-[#056835]
                    cursor-pointer
                    sm:h-[330px]
                    sm:min-w-[210px]
                    md:h-[350px]
                    md:min-w-[225px]
                    lg:h-[300px]
                    lg:min-w-0
                    lg:w-full
                    xl:h-[300px]
                    transition-all
                    duration-500
                    ease-out
                    hover:shadow-lg
                    focus:outline-none
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      absolute
                      inset-0
                      z-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                      group-focus:scale-105
                      group-active:scale-105
                    "
                  />
      
                  {/* DARK GRADIENT */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[1]
                      bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.85)_98.21%,#000000_100%)]
                      transition-opacity
                      duration-500
                      group-hover:opacity-0
                      group-focus:opacity-0
                      group-active:opacity-0
                    "
                  />
      
                  {/* DEFAULT COUNTRY NAME */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      flex
                      justify-center
                      px-3
                      pb-5
                      opacity-100
                      translate-y-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-y-3
                      group-hover:opacity-0
                      group-focus:translate-y-3
                      group-focus:opacity-0
                      group-active:translate-y-3
                      group-active:opacity-0
                    "
                  >
                    <p
                      className="text-center text-[20px] font-normal leading-tight text-white sm:text-[21px] md:text-[22px] lg:text-[19px] xl:text-[22px]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.name}
                    </p>
                  </div>
      
                  {/* HOVER INFORMATION OVERLAY */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-[30px]
                      bg-black/60
                      px-6
                      py-8
                      text-center
                      opacity-0
                      translate-y-4
                      scale-[0.96]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-y-0
                      group-hover:scale-100
                      group-hover:opacity-100
                      group-focus:translate-y-0
                      group-focus:scale-100
                      group-focus:opacity-100
                      group-active:translate-y-0
                      group-active:scale-100
                      group-active:opacity-100
                    "
                  >
                    <p
                      className="max-w-[205px] text-[14px] font-semibold leading-[1.45] text-white sm:text-[14px] md:text-[15px] lg:max-w-[220px] lg:text-[13px] xl:max-w-[205px] xl:text-[15px]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Overseas/>
      <Visa/>
    </>
  );
};

export default Migration;
