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
                Minimum Funds Required
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>
                  AUD 29,710 – living expenses (student – for 12 months)
                </li>
                <li>
                  1 Year Tuition Fees – As per university offer letter
                </li>
                <li>OSHC – Overseas Student Health Cover</li>
                <li>Travel Expenses: Approx. AUD 2,000</li>
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
                Accepted Financial Documents
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Bank savings (student / parents)</li>
                <li>
                  Education loan sanction letter (RBI-approved bank)
                </li>
              </ul>
            </div>

            {/* Not Accepted */}
            <div>
              <h4 className="font-bold text-[#008A73] mb-1">
                Not Accepted
              </h4>

              <ul className="list-disc pl-5 space-y-[2px]">
                <li>Kisan Vikas Patra (KVP)</li>
                <li>Life insurance policies</li>
                <li>Loan against Fixed Deposit</li>
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
              <li>Academic transcripts and certificates</li>
              <li>English language test results</li>
              <li>Offer letter from the education provider</li>
              <li>Proof of financial capacity</li>
              <li>Overseas Student Health Cover (OSHC)</li>
              <li>Statement of Purpose / Genuine Student documents</li>
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Academic requirements depend on the selected course and
                institution.
              </li>
              <li>
                IELTS, PTE, TOEFL or other accepted English tests may be
                required.
              </li>
              <li>
                Minimum English scores vary between universities and courses.
              </li>
              <li>
                Some applicants may qualify for an English test exemption.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}