import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight6() {
  const [openSection, setOpenSection] = useState("financial");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-[500px] flex flex-col gap-3">
      {/* ================= FINANCIAL REQUIREMENTS ================= */}
      <div
        className="
          w-full
          rounded-[16px]
          bg-[#EEF9FF]
          px-5
          py-4
          mt-45
          shadow-[0_2px_10px_rgba(0,0,0,0.03)]
        "
      >
        {/* Header */}
        <button
          type="button"
          onClick={() => toggleSection("financial")}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="text-[18px] sm:text-[18px] font-bold text-[#006B8F]">
            Financial Requirements
          </h3>

          <span
            className="
              w-[30px]
              h-[30px]
              rounded-full
              bg-[#DDF3FF]
              flex
              items-center
              justify-center
              text-[#087A9C]
            "
          >
            {openSection === "financial" ? (
              <ChevronUp size={17} strokeWidth={2.5} />
            ) : (
              <ChevronDown size={17} strokeWidth={2.5} />
            )}
          </span>
        </button>

        {/* Content */}
        {openSection === "financial" && (
          <div className="mt-3 text-[14px]  leading-[1.45] text-[#08739A]">
            {/* Minimum Funds */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                 Tuition Fee Requirements
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
               <li>MBBS / Medicine: USD 3,500 - 7,000</li>
               <li>Other UG Programs: USD 2,000 - 5,000</li>
               <li>Postgraduate Programs: USD 2,500 -6,000</li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Living Cost Requirements
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>
                30,000 - 80,000 RUB per month approx. 
                </li>
              </ul>
            </div>
            {/* Dependents */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Accepted Financial Proof 
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Proof of funds for tuition fees + living expenses for the first year</li>
                <li>Personal bank statement / financial proof of sponsor</li>
                <li>Sponsorship letter if funded by parent/guardian</li>
                <li>Education loan documents, if applicable</li>
                <li>Proof of tuition fee payment, if applicable</li>
                <li>Scholarship or government funding letter, if applicable</li>
                <li>Visa application fee: Approx. ₹4,000 – ₹8,000</li>
                <li>Medical certificate, including HIV test</li>
                <li>Health insurance: Mandatory for visa</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* ================= DOCUMENT CHECKLIST ================= */}
      <div
        className="
          w-full
          rounded-[14px]
          bg-[#EEF9FF]
          overflow-hidden
        "
      >
        <button
          type="button"
          onClick={() => toggleSection("documents")}
          className="
            w-full
            min-h-[48px]
            px-5
            flex
            items-center
            justify-between
            text-left
          "
        >
          <span className="text-[18px] font-bold text-[#08739A]">
            Document Checklist
          </span>

          {openSection === "documents" ? (
            <ChevronUp
              size={18}
              className="text-[#08739A]"
              strokeWidth={2.5}
            />
          ) : (
            <ChevronDown
              size={18}
              className="text-[#08739A]"
              strokeWidth={2.5}
            />
          )}
        </button>

        {openSection === "documents" && (
          <div className="px-5 pb-4 text-[14px] leading-[1.5] text-[#08739A]">
            <ul className="list-disc pl-5 space-y-1">
              <li>Valid passport with minimum 18 months validity</li>
              <li>Completed visa application form</li>
              <li>University admission letter</li>
              <li>Official invitation letter from the university</li>
              <li>Academic documents (mark sheets & certificates)</li>
              <li>Passport-size photographs as per specifications</li>
              <li>Medical certificate, including HIV test report</li>
              <li>Health insurance (mandatory)</li>
              <li>Financial proof (bank statement / sponsor proof)</li>
              <li>Sponsorship letter, if applicable</li>
            </ul>
          </div>
        )}
      </div>

      {/* ================= ACADEMIC & ENGLISH ================= */}
      <div
        className="
          w-full
          rounded-[14px]
          bg-[#EEF9FF]
          overflow-hidden
        "
      >
        <button
          type="button"
          onClick={() => toggleSection("academic")}
          className="
            w-full
            min-h-[48px]
            px-5
            flex
            items-center
            justify-between
            text-left
          "
        >
          <span className="text-[18px]  font-bold text-[#08739A]">
            Academic & English Test Requirements
          </span>

          {openSection === "academic" ? (
            <ChevronUp
              size={18}
              className="text-[#08739A]"
              strokeWidth={2.5}
            />
          ) : (
            <ChevronDown
              size={18}
              className="text-[#08739A]"
              strokeWidth={2.5}
            />
          )}
        </button>

        {openSection === "academic" && (
          <div className="px-5 pb-4 text-[14px] leading-[1.5] text-[#08739A]">
           <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               Undergraduate (UG):
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Academics: 50-60% in 12th</li>
                <li>NEET required for MBBS (VERY IMPORTANT)</li>
                <li>English: IELTS not mandatory in many universities (may require interview)</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               Postgraduate (PG):
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Academics: Bachelor’s degree with 55-60%</li>
                <li>English: IELTS 5.5-6.0 (varies by university)</li>
              </ul>

          </div>
        )}
      </div>
    </div>
  );
}