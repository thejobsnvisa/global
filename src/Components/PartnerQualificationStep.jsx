import { useState } from "react";

export default function PatnerQualificationStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectOption = (value, pts) => {
    setSelected(value);
    updateScore("partnerQualification", pts);
  };

  return (
        <div className="w-[calc(100%-2rem)] max-w-[750px] h-[500px] overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[420px] xl:ml-[30px]">
        Partner Qualifications
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        Do you have a partner (spouse or de facto partner) who meets the following criteria?
      </p>

      {/* ---------------- COMPETENT ---------------- */}
      <label className={`option ${selected === "skilled_partner" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="partnerqualification"
          checked={selected === "skilled_partner"}
          onChange={() => selectOption("skilled_partner", 10)}
          className="h-5 w-5 mt-12 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"

        />

        <div className="mt-[-32px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">10 points</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>Partner aged under 45</li>
            <li>Partner has Competent PartnerQualification</li>
            <li>Partner is an applicant of the same visa subclass</li>
            <li>Partner has suitable skilled occupation + positive skills assessment</li>
          </ul>
        </div>
      </label>

      {/* ---------------- PROFICIENT ---------------- */}
      <label className={`option ${selected === "single_pr" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="partnerqualification"
          checked={selected === "single_pr"}
          onChange={() => selectOption("single_pr", 10)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">10 points</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>No spouse or de facto partner</li>
            <li>OR partner is Australian PR / Citizen</li>
          </ul>
        </div>
      </label>

      {/* ---------------- SUPERIOR ---------------- */}
      <label className={`option ${selected === "competent_partner" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="partnerqualification"
          checked={selected === "competent_partner"}
          onChange={() => selectOption("competent_partner", 5)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">5 points</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>Partner has Competent PartnerQualification</li>
            <li>Partner is applicant of same visa subclass</li>
            <li>Partner is NOT Australian PR / Citizen</li>
          </ul>
        </div>
      </label>

       <label className={`option ${selected === "none" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="partnerqualification"
          checked={selected === "none"}
          onChange={() => selectOption("none", 0)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">0 points</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>Partner has Competent PartnerQualification</li>
          </ul>
        </div>
      </label>
    <div
         style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "40px",
          gap:"30px"
        }}
        >
          <button
            className="
              bg-cyan-100
              w-full
              h-[50px]
              mb-0
              text-cyan-700
              text-[18px]
              rounded-[20px]
              sm:w-[170px]
              xl:gap-0
              xl:w-[170px]
              xl:mr-10
              xl:mt-[58px]
              xl:ml-[20px]
            "
            onClick={prevStep}
          >
            ← Preview
          </button>

          <button
            className="
              bg-cyan-800
              w-full
              h-[50px]
              mb-10
              text-white
              text-[18px]
              rounded-[20px]

              sm:w-[170px]

              xl:w-[170px]
              xl:mr-10
              xl:mt-[58px]
              xl:ml-[-15px]
            "
            onClick={nextStep}
          >
            Next →
          </button>
        </div>
    </div>
  );
}
