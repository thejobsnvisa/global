import img from "../assets/icon2.png";
import { useEffect, useRef } from "react";
import WorkVisa from "../Components/WorkVisa";
import Application from "../Components/Application";
import Benefit from "../Components/Benefit"
import GlobalVisa from "../Components/GlobalVisa";

const destination = [
  {
    name: "Australia",
    description:
    "Turn your skills into global opportunities in Australia. With thriving industries, strong demand for skilled professionals, and an outstanding quality of life, Australia offers the chance to build a rewarding career while enjoying a lifestyle that’s hard to beat.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "New Zealand",
    description:
    "Build a career where work and life find the perfect balance. New Zealand offers skilled professionals exciting career opportunities, a supportive work culture, and the chance to enjoy a more relaxed, rewarding way of life.",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Germany",
    description:
      "Put your skills where innovation meets opportunity. Germany’s strong economy, world-leading industries, and demand for skilled talent make it an ideal destination to grow your career and build a secure future.",
    image:
      "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "France",
    description:
      "Work, grow, and experience life the French way. From dynamic industries to international career opportunities, France offers skilled professionals the chance to develop their careers while embracing its culture, lifestyle, and global outlook.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "United Kingdom",
    description:
      "Take your career to a global stage. The UK brings together world-class industries, diverse career opportunities, and an international work environment where skilled professionals can grow, connect, and move forward.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Canada",
    description:
      "Build more than a career - Build your future. Canada offers skilled professional’s opportunities across growing industries, a welcoming work environment, and the freedom to pursue both professional success and a fulfilling lifestyle.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
  },
];
const Work = () => {
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
      {/* =====================================================
              BANNER SECTION
          ====================================================== */}
      <section
        className="
    relative
    w-full
    h-[280px]
    overflow-hidden

    sm:h-[320px]
    md:h-[360px]
    lg:h-[380px]

    xl:h-[400px]
  "
      >
        {/* =====================================================
      BACKGROUND IMAGE
  ====================================================== */}
        <img
          src={img}
          alt="Work Visa"
          className="
      absolute
      inset-0
      h-full
      w-full

      object-cover
      object-center

      /* Mobile */
      max-[639px]:object-cover
      max-[639px]:object-[65%_center]

      /* Small */
      sm:object-cover
      sm:object-[68%_center]

      /* Tablet */
      md:object-cover
      md:object-[70%_center]

      /* Large */
      lg:object-cover
      lg:object-[72%_center]

      /* XL - KEEP YOUR PERFECT DESIGN */
      xl:object-contain
      xl:translate-x-[140px]
    "
        />

        {/* =====================================================
      WHITE GRADIENT OVERLAY
  ====================================================== */}
        <div
          className="
      absolute
      inset-0
      z-[1]

      /* Mobile */
      bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.94)_28%,rgba(255,255,255,0.55)_58%,rgba(255,255,255,0)_100%)]

      /* Small */
      sm:bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.92)_27%,rgba(255,255,255,0.45)_62%,rgba(255,255,255,0)_100%)]

      /* Tablet */
      md:bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.90)_25%,rgba(255,255,255,0.35)_65%,rgba(255,255,255,0)_100%)]

      /* Large */
      lg:bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_55%)]

      /* XL - KEEP YOUR PERFECT DESIGN */
      xl:bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]
    "
        />

        {/* =====================================================
      CONTENT
  ====================================================== */}
        <div
          className="
      relative
      z-10
      mx-auto
      flex
      h-full
      w-full
      max-w-[1350px]
      flex-col
      justify-center

      px-5

      sm:px-8

      md:px-12

      lg:px-[40px]

      xl:px-[40px]
    "
        >
          {/* Breadcrumb */}
          <p
            className="
        mb-4
        text-[12px]
        leading-tight
        text-[#38A9D1]

        sm:mb-5
        sm:text-[13px]

        md:mb-6
        md:text-[14px]

        lg:mb-7
        lg:text-[15px]

        xl:mb-8
        xl:text-[16px]
      "
          >
            Home
            <span className="mx-1.5 text-gray-400 sm:mx-2">&gt;</span>
            <span>Services</span>
            <span className="mx-1.5 text-gray-400 sm:mx-2">&gt;</span>
            <span>Work Visa</span>
          </p>

          {/* Heading */}
          <h1
            className="
        text-[34px]
        font-semibold
        leading-none
        text-[#669980]

        sm:text-[40px]

        md:text-[48px]

        lg:text-[54px]

        xl:text-[60px]
      "
          >
            Work Visa
          </h1>
        </div>
      </section>
   <section className="w-full bg-white py-16 md:py-20 lg:py-[50px] xl:py-[70px]">
  <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-0">
    <div className="mb-8 md:mb-10 lg:mb-7 xl:mb-[28px]">
      <p
        className="text-[25px] leading-[1.15] text-[#26839A] md:text-[28px] lg:text-[32px] xl:text-[40px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Top Countries to
      </p>
      <h2
        className="mt-0 text-[32px] font-bold leading-[1.1] text-[#5B9E7D] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[60px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Work Abroad
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
      <WorkVisa />
      <Application/>
      <Benefit/>
      <GlobalVisa/>
    </>
  );
};

export default Work;
