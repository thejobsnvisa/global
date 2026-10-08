import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight10() {
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
                 Tuition Fee Requirements:
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
               <li>Tuition fee as mentioned on <b>CAS letter</b></li>
               <li>Tuition deposit generally must be paid before CAS issuance</li>
              </ul>
            </div>

            {/* Dependents */}
            <div className="mb-3">
              <h4 className="text-[#008A73] mb-1">
               <b>Living Cost Requirements:</b> (for 9 months)
              </h4>
              <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                 Inside London:
              </h4>

              <ul className="list-disc pl-5  font-bold space-y-[2px]">
               <li>£1,483 per month × 9 months = £13,347</li>
              </ul>
            </div>
                 <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                 Outside London:
              </h4>

              <ul className="list-disc pl-5  font-bold space-y-[2px]">
               <li>£1,136 per month × 9 months = £10,224</li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Dependent Costs (if applicable):
              </h4>

              <ul className="list-disc pl-5 font-bold space-y-[2px]">
               <li>£845/month in London</li>
               <li>£680/month outside London</li>
              </ul>
            </div>
             <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Accepted Financial Proof
              </h4>

              <ul className="list-disc pl-5  space-y-[2px]">
               <li>Bank savings account (funds must be maintained for 28 days)</li>
               <li>Education loan (approved & disbursed letter required)</li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Additional Costs
              </h4>

              <ul className="list-disc pl-5  space-y-[2px]">
               <li>Visa Fee: £558</li>
               <li>IHS Fee: £776 per year</li>
               <li>TB Test: approx ₹2500</li>
              </ul>
            </div>
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
              <li>Valid <b>Passport</b></li>
              <li><b>CAS Letter</b> (Confirmation of Acceptance for Studies)</li>
              <li><b>Academic Transcripts & Certificates</b></li>
              <li><b>Letter of Recommendation (LORs)</b> – 2</li>
              <li><b>Statement of Purpose (SOP) / Personal Statement</b></li>
              <li><b>Proof of Funds</b> (Tuition + Living Costs)</li>
              <li><b>28-day Bank Statement</b></li>
              <li><b>TB Test Certificate</b>(if applicable)</li>
              <li><b>Passport-size Photographs</b></li>
              <li><b>Visa Fee & IHS Payment Receipt</b></li>
              <li><b>English Test Score</b> (IELTS / PTE / TOEFL) or <b>MOI Letter</b></li>
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
               Academic :
              </h4>

           <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               Undergraduate (UG) :
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Minimum <b>60% in Class 12</b> (varies by university)</li>
                <li><b>IELTS 6.0 overall</b>, no band less than 5.5</li>
                <li><b>Equivalent tests accepted:</b> PTE, TOEFL</li>
                <li className="font-bold text-[#008A73] mb-1">MOI / English Test Waiver:</li>
                <li className="ml-3">Many universities accept a <b>Medium of Instruction (MOI) letter</b></li>
                <li className="ml-3">Academic English score <b>65–70%+ in English</b> may qualify for waiver</li>
              </ul>
                <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
              Alternative pathways:
              </h4>

              <ul className="list-disc pl-5 ml-3 space-y-[2px]">
                <li>Pre-sessional English</li>
                <li>Foundation Program</li>
                <li>International Year One</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
              Postgraduate (PG):
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
              <li>Minimum <b>55–60% in Bachelor’s Degree</b></li>
              <li><b>IELTS 6.5 overall</b>, minimum 6.0 in each band</li>
              <li>PTE / TOEFL accepted as equivalent</li>
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}