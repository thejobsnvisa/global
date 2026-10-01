import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RequirementsRight() {
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
                 Tuition Fees (Approx.)
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>
                  Program Level	Fees (AED)
                </li>
                <li>
                  Foundation / Diploma	30,000
                </li>
                <li>Undergraduate	45,000 – 100,000</li>
                <li>Postgraduate	55,000 – 120,000 </li>
              </ul>
            </div>

            {/* Dependents */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Additional Funds for Dependents
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Spouse: AUD 10,394</li>
                <li>Per Child: AUD 4,449</li>
              </ul>
            </div>

            {/* Accepted Documents */}
            <div className="mb-3">
              <h4 className="font-bold text-[#008A73] mb-1">
                Visa Costs Overview
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Visa Application: ₹13,500 (AED 600)</li>
                <li>
                  Biometrics: ₹4,500 (AED 200)
                </li>
                 <li>Medical Insurance: ₹9,000 – ₹18,000 (AED 400 – 800)</li>
                 <li>Visa Issuance: ₹27,000 (AED 1,200)</li>
                 <li>Visa Validity: 1 year (renewable annually) </li>
              </ul>
            </div>

            {/* Not Accepted */}
            <div>
              <h4 className="font-bold text-[#008A73] mb-1">
               Living Expenses
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>AED 2,500 – 4,000 per month</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#008A73] mb-1">
               Additional
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Tuition Fee Deposit (varies by university)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#008A73] mb-1">
               Processing Time
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>2–3 weeks</li>
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
              <li>Valid Passport (6+ months validity)</li>
              <li>Passport-size Photos (white or light blue background)</li>
              <li>Unconditional Admission Letter</li>
              <li>Proof of Tuition Fee Payment</li>
              <li>Student Visa Fee Payment Receipt</li>
              <li>Attested Academic Certificates</li>
              <li>English Test Result / Waiver Documents</li>
              <li>Bonafide Certificate</li>
              <li>Medical Insurance</li>
              <li>Student Undertaking Form</li>
              <li>Visa Application Form</li>

              <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[-20px]">
               Processing Time
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>NOC from parent</li>
                <li>Parent’s passport copy
</li>
              </ul>
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
               Visa Costs Overview
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li><b>Visa Application:</b> ₹13,500 (AED 600)</li>
                <li><b>Biometrics:</b> ₹4,500 (AED 200)</li>
                <li><b>Medical Insurance:</b>₹9,000 – ₹18,000 (AED 400 – 800)</li>
                <li><b>Visa Issuance:</b> ₹27,000 (AED 1,200)</li>
                <li><b>Visa Validity:</b> 1 year (renewable annually)</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
               Living Expenses
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li><b>AED 2,500 – 4,000 per month</b></li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
              Additional
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li><b>Tuition Fee Deposit</b> (varies by university)</li>
              </ul>
               <h4 className="font-bold text-[#008A73] mb-1 mt-3 ml-[2px]">
              Processing Time
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li><b>2–3 weeks</b></li>
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}