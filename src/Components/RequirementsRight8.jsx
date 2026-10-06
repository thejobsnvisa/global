import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight8() {
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
                 Includes:
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
               <li>Tuition Fees (as mentioned in Offer Letter)</li>
               <li>Living Expenses: CAD 20,635 per year</li>
              </ul>
            </div>

            {/* Dependents */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Accepted Financial Proof 
              </h4>
               <p>(Funds must be liquid and verifiable)</p>
              <ul className="list-disc pl-5 space-y-[2px] mt-3">
                <li>Bank Savings Account</li>
                <li>Education Loan (approved banks)</li>
                <li>College Payment Receipt</li>
                <li>Guaranteed Investment Certificate (GIC – SDS)</li>
                <li>Fixed Deposits (FDs)</li>
                <li>Sponsor Affidavit (Parents/Guardians)</li>
                <li>Income Proof of Sponsor (ITRs, Salary slips)</li>
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
              <li>Valid Passport</li>
              <li>Offer Letter / Letter of Acceptance (LOA) from approved Canadian Institution (DLI)</li>
              <li>Academic Transcripts & Certificates</li>
              <li>English Test Scorecard (IELTS / TOEFL / PTE / Duolingo)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>Letter of Recommendation (if applicable)</li>
              <li>Resume / CV (mainly for PG students)</li>
              <li>Passport-size Photographs</li>
              <li>Provincial Attestation Letter (PAL) (if applicable)</li>
              <li>Biometrics Confirmation</li>
              <li>Medical Examination (if required)</li>
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
               UG :
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
                <li>12th pass, 55–70%+ (higher for top universities)</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               PG :
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
                <li>bachelor’s degree, 2.5–3.0 GPA (≈55–65%)</li>
              </ul>
                <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
              English Test
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>IELTS : 6.0-6.5</li>
                <li>ITOEFL iBT : 80-90</li>
                <li>PTE Academic : 58-65</li>
                <li>Duolingo : 105-120</li>
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}