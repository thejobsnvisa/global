import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight5() {
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
                <li>
                 Undergraduate: USD 3,500 - 8,900 per year  
                </li>
                <li>Postgraduate: USD 4,000 - 10,000 per year </li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Living Cost Requirements
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>
                 USD 300 - 500 per month approx.  
                </li>
              </ul>
            </div>
            {/* Dependents */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Accepted Financial Proof 
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Bank Balance: Approx. USD 3,000 - 6,000</li>
                <li>Visa Fee: Approx. USD 50 - 100</li>
                <li>Medical & Insurance: Approx. USD 100 - 200</li>
                <li>Residence Permit (TRC): Approx. USD 100 - 150</li>
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
              <li>Valid passport</li>
              <li>University offer / admission letter</li>
              <li>Academic transcripts & certificates</li>
              <li>English language proof, if applicable</li>
              <li>Proof of financial support (Bank statement/ Sponsor Documents)</li>
              <li>Accommodation details</li>
              <li>Health insurance, if required</li>
              <li>SOP / Statement of Purpose, if required</li>
              <li>CV / Resume, mainly for PG applicants</li>
              <li>Letters of Recommendation, if required</li>
              <li>Passport-size photographs</li>
              <li>Completed student visa application form</li>
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
               UG : 
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
                <li>12th pass with 50-60%+</li>
                <li>English: IELTS/PTE may not be mandatory, depending on the university</li>
                <li>University English assessment, interview or MOI may be accepted, if applicable</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               PG :
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Bachelor’s degree from a recognized institution with 55-60%+</li>
                <li>English: IELTS/PTE may not be mandatory at some universities</li>
                <li>IELTS/PTE or MOI may be accepted, depending on university requirements</li>
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}