import React from "react";

import d1 from "../assets/d1.png";
import d2 from "../assets/d3.png";
import d3 from "../assets/d6.svg";
import d4 from "../assets/d2.png";
import d5 from "../assets/d5.png";

import c4 from "../assets/Vector 2876.svg";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const steps = [
  {
    icon: d1,
    title: "Profile Assessment",
    points:
      "We assess your qualifications, work experience, and occupation to determine your eligibility under country-specific work visa rules.",
    // Distinct styles per breakpoint
    lgStyle: { top: "60%", left: "11.5%" },
    xlStyle: { top: "62%", left: "8.5%" },
    position: "bottom",
    image: img1,
  },
  {
    icon: d2,
    title: "Visa Pathway Selection",
    points:
      "Based on your profile, we recommend the most suitable work visa category that goes well with current immigration regulations.",
    lgStyle: { top: "68%", left: "31%" },
    xlStyle: { top: "71%", left: "28.5%" },
    position: "top",
    image: img2,
  },
  {
    icon: d3,
    title: "Document Guidance & Review",
    points:
      "We provide a structured document checklist and carefully review all records to ensure accuracy.",
    lgStyle: { top: "47%", left: "54%" },
    xlStyle: { top: "48%", left: "53%" },
    position: "bottom",
    image: img3,
  },
  {
    icon: d4,
    title: "Application Preparation & Submission",
    points:
      "Once the documents are ready, we carefully prepare and submit your work visa application.",
    lgStyle: { top: "54%", left: "72%" },
    xlStyle: { top: "54%", left: "72%" },
    position: "top",
    image: img4,
  },
  {
    icon: d5,
    title: "Post-Submission Support",
    points:
      "We monitor the application, respond to immigration queries, and guide you through the process until a final decision is issued.",
    lgStyle: { top: "34%", left: "93%" },
    xlStyle: { top: "30.8%", left: "94.8%" },
    position: "bottom",
    image: img5,
  },
];

const Application = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F0FDFA] py-12 sm:py-14 md:py-16 lg:h-[480px] lg:py-0 xl:h-[600px]">
      <div className="relative mx-auto h-full w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-6 xl:px-[54px]">
        {/* Header Section */}
        <div className="relative z-30 lg:absolute lg:left-6 lg:top-4 xl:left-[54px] xl:top-[30px]">
          <p
            className="m-0 mt-4 text-[24px] leading-[1.15] text-[#26839A] sm:text-[26px] md:text-[28px] lg:text-[24px] xl:text-[40px]"
            
          >
            How We Proceed with
          </p>
          <h2
            className="m-0 mt-1 text-[30px] font-bold leading-[1.05] text-[#5B9E7D] sm:text-[34px] md:text-[40px] lg:text-[34px] xl:text-[60px]"
            
          >
            Work Visa Applications?
          </h2>
          <p className="mt-3 w-full max-w-[390px] text-left text-[14px] leading-[1.4] text-slate-600 sm:text-[15px] md:max-w-[480px] md:text-[16px] lg:max-w-[310px] lg:text-[12px] xl:mt-4 xl:max-w-[470px] xl:text-[15px]">
            At Growmore Global Visa, we follow a structured and lawful approach
            to ensure that every work visa application is properly prepared and
            in line with the latest immigration regulations of the destination
            country.
          </p>
        </div>

        {/* Timeline Desktop Container */}
        <div className="absolute inset-x-0 top-0 hidden h-full lg:block">
          <img
            src={c4}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[58%] z-0 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover lg:top-1/2 xl:top-1/2"
          />

          {steps.map((item, index) => (
            <React.Fragment key={index}>
              {/* LG View Node */}
              <div
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 lg:block xl:hidden"
                style={item.lgStyle}
              >
                <StepContent item={item} isXl={false} />
              </div>

              {/* XL View Node */}
              <div
                className="absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 xl:block"
                style={item.xlStyle}
              >
                <StepContent item={item} isXl={true} />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="mt-8 block lg:hidden">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-4 overflow-hidden rounded-2xl border border-[#DCEDEA] bg-white p-4 shadow-sm sm:p-5 md:p-6"
              >
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 h-[90px] w-[90px] -translate-y-1/2 object-contain opacity-[0.08]"
                />
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4FBF7] sm:h-14 sm:w-14 md:h-16 md:w-16">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-[22px] w-[22px] object-contain md:h-[26px] md:w-[26px]"
                    />
                  </div>
                </div>
                <div className="relative z-10 min-w-0 flex-1">
                  <h3
                    className="lg:text-[18px] font-semibold leading-tight text-[#4F6670] sm:text-[19px] md:text-[21px]"
                    
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 lg:text-[20px] leading-[1.45] text-[#26839A] sm:text-[14px] md:text-[15px]">
                    {item.points}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Component to keep code DRY across LG & XL wrappers
const StepContent = ({ item, isXl }) => (
  <>
    <div
      className={`relative z-20 flex items-center justify-center rounded-[8px] border border-[#E5EEF0] bg-white shadow-[0px_3px_10px_rgba(0,0,0,0.10)] ${isXl ? "h-[42px] w-[42px]" : "h-[34px] w-[34px]"}`}
    >
      <img
        src={item.icon}
        alt={item.title}
        className={`object-contain ${isXl ? "h-[20px] w-[20px]" : "h-[15px] w-[15px]"}`}
      />
    </div>

    <div
      className={`absolute left-1/2 z-20 -translate-x-1/2 text-center ${
        item.position === "bottom"
          ? isXl
            ? "top-[52px] w-[165px]"
            : "top-[40px] w-[135px]"
          : isXl
            ? "bottom-[56px] w-[175px]"
            : "bottom-[42px] w-[135px]"
      }`}
    >
      <img
        src={item.image}
        alt=""
        className="absolute w-[30px] h-[90px] top-[-6px] left-[60px] -translate-x-1/2 opacity-100 pointer-events-none"
      />

      <div className="relative z-10">
        <h3
          className={`font-semibold text-[#4F6670] ${isXl ? "mb-2 text-[15px]" : "mb-1 text-[10.5px]"}`}
          
        >
          {item.title}
        </h3>
        <p
          className={`m-0 font-medium text-[#26839A] ${isXl ? "text-[13px] leading-[1.35]" : "text-[9px] leading-[1.25]"}`}
        >
          {item.points}
        </p>
      </div>
    </div>
  </>
);

export default Application;
