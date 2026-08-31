import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k5 from "../assets/k5.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";

const Assist = () => {
  const cards = [
    { title: "Skilled Migration Visas", desc: "For professionals with in-demand skills and relevant work experience background", img: k1, titleColor: "text-emerald-700" },
    { title: "Employer-Sponsored Visas", desc: "For individuals who have a confirmed job offer and employer sponsorship", img: k2, titleColor: "text-emerald-700" },
    { title: "Points Based Migration Programs", desc: "Where eligibility is assessed on factors such as age, skills, language ability, and work experience", img: k5, titleColor: "text-emerald-700" },
    { title: "Family & Partner Visas", desc: "For applicants joining close family members abroad", img: k3, titleColor: "text-cyan-700" },
    { title: "Permanent Residency Pathways", desc: "For individuals who are planning to settle permanently", img: k4, titleColor: "text-cyan-700" },
  ];

  return (
    <div className="w-full min-h-[750px] lg:h-[950px] md:h-[1050px] sm:h-[1250px] bg-teal-50 py-10 xl:h-[780px] xl:py-0">
      <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-10 min-h-full">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-14">
          <p className="m-0 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[24px] xl:text-[40px] leading-[1.15] text-[#26839A] pt-4 xl:pt-10">
            Types of Migration Visas
          </p>

          <h2 className="m-0 mt-1 text-[30px] sm:text-[34px] md:text-[40px] lg:text-[34px] xl:text-[60px] font-bold leading-[1.05] text-[#5B9E7D]">
            We Assist With
          </h2>

          <p className="w-full max-w-[845px] mt-4 md:mt-6 text-[14px] sm:text-[15px] md:text-[16px] text-slate-600 leading-6 md:leading-7 lg:leading-[1.5]">
            However, the type of visa varies by country. At Growmore Global Visa, we assist mainly with the following types of migration visas:
          </p>
        </div>

        {/* --- Mobile / Tablet View (Responsive Grid: 1 col on mobile, 2 cols on tablet/laptop) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:hidden">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[14px] shadow-[0px_0px_30px_0px_#76767633] flex items-center gap-4">
              <img src={card.img} alt={card.title} className="w-24 h-24 object-contain flex-shrink-0" />
              <div>
                <h3 className={`text-[16px] font-semibold ${card.titleColor}`}>{card.title}</h3>
                <p className="text-[14px] text-slate-700 mt-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- XL View (Preserved Exact Legacy Layout) --- */}
        <div className="hidden xl:block">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-3 gap-6 mt-6 ml-6">
            <div className="bg-white w-[360px] h-[150px] mt-[30px] rounded-[14px] shadow-[0px_0px_30px_0px_#76767633]">
              <img src={k1} alt="image" className="w-[150px] h-[160px] mt-[-5px] ml-[-40px]" />
              <h3 className="w-[212px] h-[11px] text-[16px] font-semibold text-emerald-700 ml-36 mt-[-130px]">
                Skilled Migration Visas
              </h3>
              <p className="w-[200px] h-[52px] ml-36 mt-[22px] text-[14px] text-slate-700">
                For professionals with in-demand skills and relevant work experience background
              </p>
            </div>

            <div className="bg-white w-[360px] h-[150px] mt-[30px] rounded-[14px] shadow-[0px_0px_30px_0px_#76767633]">
              <img src={k2} alt="image" className="w-[150px] h-[150px] mt-[5px] ml-[-40px]" />
              <h3 className="w-[212px] h-[11px] text-[16px] font-semibold text-emerald-700 ml-36 mt-[-130px]">
                Employer-Sponsored Visas
              </h3>
              <p className="w-[200px] h-[52px] ml-36 mt-[22px] text-[14px] text-slate-700">
                For individuals who have a confirmed job offer and employer sponsorship
              </p>
            </div>

            <div className="bg-white w-[360px] h-[150px] mt-[30px] rounded-[14px] shadow-[0px_0px_30px_0px_#76767633]">
              <img src={k5} alt="image" className="w-[150px] h-[150px] mt-[5px] ml-[-40px]" />
              <h3 className="w-[212px] h-[11px] text-[16px] font-semibold text-emerald-700 ml-36 mt-[-140px]">
                Points Based Migration Programs
              </h3>
              <p className="w-[200px] h-[52px] ml-36 mt-[33px] text-[14px] text-slate-700">
                Where eligibility is assessed on factors such as age, skills, language ability, and work experience
              </p>
            </div>
          </div>

          {/* Bottom Row - 2 Centered Cards */}
          <div className="flex justify-center gap-10 mt-10 ml-6">
            <div className="bg-white w-[360px] h-[150px] rounded-[14px] shadow-[0px_0px_30px_0px_#76767633]">
              <img src={k3} alt="image" className="w-[150px] h-[150px] mt-[5px] ml-[-40px]" />
              <h3 className="w-[212px] h-[11px] text-[16px] font-semibold text-cyan-700 ml-36 mt-[-130px]">
                Family & Partner Visas
              </h3>
              <p className="w-[200px] h-[52px] ml-36 mt-[22px] text-[14px] text-slate-700">
                For applicants joining close family members abroad
              </p>
            </div>

            <div className="bg-white w-[360px] h-[150px] rounded-[14px] shadow-[0px_0px_30px_0px_#76767633]">
              <img src={k4} alt="image" className="w-[150px] h-[150px] mt-[5px] ml-[-30px]" />
              <h3 className="w-[212px] h-[11px] text-[16px] font-semibold text-cyan-700 ml-36 mt-[-130px]">
                Permanent Residency Pathways
              </h3>
              <p className="w-[200px] h-[52px] ml-36 mt-[40px] text-[14px] text-slate-700">
                For individuals who are planning to settle permanently
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assist;