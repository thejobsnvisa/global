import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight11() {
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
               <li>Tuition Fees (as mentioned in Offer Letter)</li>
              </ul>
            </div>

            {/* Dependents */}
            <div className="mb-3">
              <h4 className="text-[#008A73] mb-1">
               Living Cost Requirements
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
               <li>€700 - €1500 per month approx.</li>
              </ul>

             <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Accepted Financial Proof
              </h4>

              <ul className="list-disc pl-5  space-y-[2px]">
               <li>Personal bank statements</li>
               <li>Parents' or sponsor's bank statements</li>
               <li>Scholarship or funding letter</li>
               <li>Education loan sanction letter (if accepted)</li>
               <li>Sponsor's income proof and sponsorship declaration</li>
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
             <li>Country-specific long-stay student visa application</li>
             <li>Proof of financial means, such as a blocked account where required</li>
             <li>Proof of accommodation</li>
             <li>Language proficiency certificate, if required</li>
             <li>Country-specific health insurance</li>
             <li>Visa appointment and biometrics confirmation</li>
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
               Undergraduate (UG) :
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
               <li>12th pass, 55–65%+ (higher for top universities)</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               Postgraduate (PG):
              </h4>
              <ul className="list-disc pl-5 space-y-[2px]">
              <li>Bachelor’s degree, 2.5–3.0 GPA (≈55–65%).</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               IELTS, TOEFL, or equivalent; requirements vary by university.
              </h4>
          </div>
        )}
      </div>
    </div>
  );
}