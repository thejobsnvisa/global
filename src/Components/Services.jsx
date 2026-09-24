import g1 from "../assets/g1.png";

const servicesData = [
  {
    title: "STUDENT VISA",
    description:
      "Turn your dream of studying abroad into reality with the right guidance, course, and university...",
    path: "/services/student-visa",
    xlClasses: "xl:left-[196px] xl:top-[259px]",
  },
  {
    title: "MIGRATION VISA",
    description:
      "Make your dream of settling abroad a reality with the right migration pathway and expert guidance...",
    path: "/services/migration-visa",
    xlClasses: "xl:left-[644px] xl:top-[114px]",
  },
  {
    title: "WORK VISA",
    description:
      "Ready to take your career global? Get expert work visa guidance tailored to your destination, profession, and career goals...",
    path: "/services/work-visa",
    xlClasses: "xl:left-[1030px] xl:top-[173px]",
  },
  {
    title: "VISITOR VISA",
    description:
      "Dreaming of exploring a new country? Get the right visitor visa guidance and focus on making unforgettable memories...",
    path: "/services/visitor-visa",
    xlClasses: "xl:left-[1054px] xl:top-[536px]",
  },
  {
    title: "DEPENDENT VISA",
    description:
      "Stay close to your loved ones while building your future abroad with the right dependent visa guidance...",
    path: "/services/dependent-visa",
    xlClasses: "xl:left-[163px] xl:top-[567px]",
  },
];

const Services = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(90.06deg,#EEF7FC_0.75%,#FBF6E9_99.05%)]">
      {/* Container */}
      <div className="relative mx-auto min-h-screen w-full max-w-[1440px] px-4 py-8 md:px-8 xl:h-[719px] xl:p-0">
        
        {/* Background White Center Panel (Desktop Only) */}
        <div
          className="
            hidden xl:block absolute left-[310px] top-[124px] z-0 h-[595px] w-[808px] bg-white/45
          "
        />

        {/* Heading Section */}
        <div className="z-30 mb-8  sm:left-[60px] md:text-left xl:absolute xl:left-[50px] xl:top-[57px] xl:mb-0">
          <p
            className="m-0 text-[28px] font-normal leading-[1.15] text-[#26839A] sm:text-[32px] xl:text-[38px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Visa
          </p>
          <h2
            className="m-0 mt-[4px] text-[40px] font-semibold leading-[1.05] text-[#82CBAA] sm:text-[48px] xl:text-[54px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Services
          </h2>
        </div>

        {/* Main Visa Graphic (Background graphic on XL, scaled element on Mobile) */}
        <div className="flex justify-center xl:block">
          <img
            src={g1}
            alt="Visa Services"
            className="
              mb-8 max-h-[300px] w-auto object-contain
              xl:absolute xl:left-[163px] xl:top-[123px] xl:z-10 xl:mb-0 xl:h-[595px] xl:max-h-none xl:w-[1080px] xl:opacity-100
            "
          />
        </div>

        {/* Service Cards Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:block">
          {servicesData.map((service, index) => (
            <a
              key={index}
              href={service.path}
              className={`
                z-20 flex flex-col justify-between rounded-[19px] bg-[#FFFFFF4F] p-4 backdrop-blur-md
                shadow-[0_0_20.9px_0_rgba(131,131,131,0.25)] transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 hover:shadow-[0_8px_24px_0_rgba(131,131,131,0.35)]
                xl:absolute xl:h-[135px] xl:w-[195px] xl:p-0 xl:hover:scale-100 ${service.xlClasses}
              `}
              style={{
                animation: "serviceCardIn 600ms ease-out both",
                animationDelay: `${index * 120}ms`,
              }}
            >
              <p className="font-bold text-center text-[14px] text-[#316C69] xl:ml-2 xl:mt-3 xl:text-center">
                {service.title}
              </p>
              
              <p className="mt-2 text-center text-[11px] font-normal leading-[1.3] text-sky-700 xl:ml-4 xl:w-[160px]">
                {service.description}
              </p>

              <p className="mt-3 text-right font-semibold text-[14px] text-[#67938F] xl:ml-18 xl:mt-1 xl:text-left">
                View →
              </p>
            </a>
          ))}
        </div>

        <style>{`
          @keyframes serviceCardIn {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

      </div>
    </section>
  );
};

export default Services;