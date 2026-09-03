import {
  FileText,
  CircleCheck,
  MessagesSquare,
  LockKeyhole,
  BadgeCheck,
  Award,
  Landmark,
  ClipboardCheck,
} from "lucide-react";

const WhyGrowmore = () => {
  const integrityItems = [
    {
      icon: FileText,
      title: "Accurate documentation",
    },
    {
      icon: CircleCheck,
      title: "Expert and reliable direction",
    },
    {
      icon: MessagesSquare,
      title: "Instant query resolution",
    },
    {
      icon: LockKeyhole,
      title: "Confidential Service",
    },
  ];

  const expertiseItems = [
    {
      icon: BadgeCheck,
      title: "Authorized Visa Consultants",
    },
    {
      icon: Award,
      title: "QIEC, ISANA and ICEF Certified",
    },
    {
      icon: Landmark,
      title: "British Council Certified",
    },
    {
      icon: ClipboardCheck,
      title: "Registered Migration Agent",
    },
  ];

  const InfoCard = ({ icon: Icon, title }) => {
    return (
      <div
        className="
          flex
          min-h-[48px]
          w-full
          items-center
          gap-3
          rounded-[10px]
          bg-white
          px-4
          py-2.5
          shadow-[0_5px_18px_rgba(30,90,100,0.08)]
          shadow-[0px_0px_26px_4px_#4C9F761A]
          transition-all
          duration-300
          hover:-translate-y-[2px]
          hover:shadow-[0_8px_22px_rgba(30,90,100,0.13)]
        "
      >
        <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
          <Icon size={18} strokeWidth={1.7} className="text-emerald-700" />
        </div>

        <span
          className="
            text-[16px]
            font-semibold
            leading-[1.25]
            text-emerald-700
            md:text-[14px]
          "
        >
          {title}
        </span>
      </div>
    );
  };
  const Card = ({ icon: Icon, title }) => {
    return (
      <div
        className="
          flex
          min-h-[48px]
          w-full
          items-center
          gap-3
          rounded-[10px]
          bg-white
          px-4
          py-2.5
          shadow-[0_0_26px_4px_rgba(50,93,150,0.08)]
          transition-all
          duration-300
          hover:-translate-y-[2px]
          hover:shadow-[0_0_26px_4px_rgba(50,93,150,0.08)]
        "
      >
        <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
          <Icon size={18} strokeWidth={1.7} className="text-cyan-700" />
        </div>

        <span
          className="
            text-[16px]
            font-semibold
            leading-[1.25]
            text-cyan-700
            md:text-[14px]
          "
        >
          {title}
        </span>
      </div>
    );
  };
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[572px]
          w-full
          max-w-[1440px]
          items-center
          px-6
          py-14
          md:px-10
          lg:px-[70px]
          xl:px-[72px]
          xl:py-[70px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-12
            lg:grid-cols-[1fr_1.05fr]
            lg:gap-[70px]
            xl:grid-cols-[0.95fr_1.05fr]
            xl:gap-[90px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="flex flex-col justify-center">
            <h2
              className="
                m-0
                text-[32px]
                font-normal
                leading-[1.05]
                tracking-[-0.5px]
                text-[#31859A]
                md:text-[38px]
                lg:text-[40px]
              "
            >
              Why Growmore
            </h2>

            <h2
              className="
                m-0
                mt-[2px]
                text-[38px]
                font-bold
                leading-[1.05]
                tracking-[-1px]
                text-[#85CDAE]
                md:text-[44px]
                lg:text-[60px]
              "
            >
              Global Visa ?
            </h2>

            <div
              className="
                mt-10
                max-w-[470px]
                space-y-5
                text-[18px]
                leading-[1.55]
                text-[#263F5C]
                md:text-[16px]
              "
            >
              <p className="mt-2 m-0 text-justify">
                Your dream of going abroad is more than a visa - it’s a step
                towards a new future, new opportunities, and a world of
                possibilities.
              </p>

              <p className="m-0 mt-2 text-justify">
                At Growmore Global Visa, we bring together expert guidance,
                personalised solutions, and complete visa support to help you
                move forward with confidence - whether you’re planning to study,
                work, travel, or settle overseas.
              </p>

            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}
          <div className="flex flex-col justify-center">
            {/* ================= PROVEN INTEGRITY ================= */}
            <div>
              <h3
                className="
                  mb-3
                  text-[20px]
                  font-semibold
                  leading-none
                  text-[#008B62]
                "
              >
                Proven Integrity
              </h3>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-2
                  sm:grid-cols-2
                  sm:gap-[8px_18px]
                "
              >
                {integrityItems.map((item, index) => (
                  <InfoCard key={index} icon={item.icon} title={item.title} />
                ))}
              </div>
            </div>

            {/* ================= TRUSTED EXPERTISE ================= */}
            <div className="mt-8">
              <h3
                className="
                  mb-3
                  text-[20px]
                  font-semibold
                  leading-none
                  text-cyan-700
                "
              >
                Trusted Expertise
              </h3>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-2
                  sm:grid-cols-2
                  sm:gap-[8px_18px]
                "
              >
                {expertiseItems.map((item, index) => (
                  <Card key={index} icon={item.icon} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGrowmore;
