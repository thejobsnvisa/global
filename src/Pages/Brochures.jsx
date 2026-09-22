import img from "../assets/brochure.png";
import Australia from "../assets/Australia.png";
import Dubai from "../assets/Dubai.png";
import UK from "../assets/UK.png";
import USA from "../assets/USA.png";
import Canada from "../assets/Canada.png";
import France from "../assets/France.png";
import Russia from "../assets/Russia.png";
import NewZealand from "../assets/NewZealand.png";
import AustraliaPdf from "../assets/Australia.pdf";
import DubaiPdf from "../assets/Dubai.pdf";
import UkPdf from "../assets/UK1.pdf";
import UsaPdf from "../assets/USA.pdf";
import CanadaPdf from "../assets/Canada.pdf";
import FrancePdf from "../assets/France.pdf";
import RussiaPdf from "../assets/Russia.pdf";
import NewZealandPdf from "../assets/New Zealand.pdf";
import l1 from "../assets/l1.png";
import { PiFileArrowUpDuotone } from "react-icons/pi";

const Brochures = () => {
  const Data = [
    {
      id: "australia",
      img: Australia,
      pdf: AustraliaPdf,
      title: "Australia",
    },
    {
      id: "dubai",
      img: Dubai,
      pdf: DubaiPdf,
      title: "Dubai",
    },
    {
      id: "uk",
      img: UK,
      pdf: UkPdf,
      title: "United Kingdom",
    },
    {
      id: "usa",
      img: USA,
      pdf: UsaPdf,
      title: "USA",
    },
    {
      id: "canada",
      img: Canada,
      pdf: CanadaPdf,
      title: "Canada",
    },
    {
      id: "france",
      img: France,
      pdf: FrancePdf,
      title: "France",
    },
    {
      id: "russia",
      img: Russia,
      pdf: RussiaPdf,
      title: "Russia",
    },
    {
      id: "new-zealand",
      img: NewZealand,
      pdf: NewZealandPdf,
      title: "New Zealand",
    },
  ];
  return (
    <>
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[370px] lg:h-[480px]">
        <img
          src={img}
          alt="About Us banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(89.92deg, #FFFFFF 0.06%, rgba(255, 255, 255, 0.79) 20.33%, rgba(255, 255, 255, 0) 48.4%)",
          }}
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-0">
          <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="text-sky-500 lg:ml-10 xl:ml-0">Home &gt; </span>
            <span className="text-cyan-800">Brochures</span>
          </p>

          <h1 className="mt-6 w-full text-[32px] font-semibold leading-[1.1] text-[#669980] sm:mt-10 sm:text-[44px] md:mt-16 md:text-[52px] lg:mt-20 lg:ml-10 lg:text-[60px] xl:ml-0">
            Brochures
          </h1>
        </div>
      </section>
      <div className="mb-50 w-full px-4 py-8 sm:mb-20 sm:px-6 md:mb-50 lg:mb-55 lg:px-8 xl:mb-32">
        <div className="mx-auto w-full max-w-[1200px]">
          <style>{`
            @keyframes brochureCardIn {
              from { opacity: 0; transform: translateY(24px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {Data.map((item, index) => (
              <div
                key={item.id}
                style={{
                  animation: "brochureCardIn 0.6s ease-out both",
                  animationDelay: `${index * 100}ms`,
                }}
                className="xl:h-[340px] lg:h-[320px] md:h-[322px] h-[310px] w-full max-w-[328px] overflow-hidden rounded-[30px] shadow-[0_0_10px_0_#59595933] transition duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#59595955]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="eager"
                  decoding="async"

                  className="mt-[-40px] lg:h-[290px] md:h-[280px] h-[270px] w-full rounded-t-[30px] object-contain"
                />
                <div>
                  <img
                    src={l1}
                    alt="bg image"
                    className="-mt-[70px]  w-full rounded-b-[30px] object-cover"
                  />
                  <h2 className="relative z-10 -mt-[120px] ml-5 text-[20px] font-semibold text-teal-800 sm:text-[20px]">
                    {item.title}
                  </h2>
                  <a
                    href={item.pdf}
                    download
                    aria-label="Download Brochures"
                    className="relative z-10 mx-auto mb-5 mt-8 flex h-10 w-[min(160px,calc(100%-2rem))] items-center justify-center gap-2 rounded-[12px] bg-sky-300 px-3  text-sm font-semibold leading-[125%] text-[#265257] transition-colors duration-300"
                  >
                    <span className="text-[20px] font-semibold text-sky-950">Download</span>
                    <PiFileArrowUpDuotone className="h-6 w-6 text-sky-950" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brochures;
