import { useState } from "react";

export default function EnglishStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectEnglish = (value, pts) => {
    setSelected(value);
    updateScore("english", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] min-h-[780px] h-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:h-[500px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[280px] xl:ml-[30px]">
        English Language
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        What is your English test level?
      </p>

      {/* ---------------- COMPETENT ---------------- */}
      <label className={`option ${selected === "competent" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="english"
          checked={selected === "competent"}
          onChange={() => selectEnglish("competent", 0)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"

        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">Competent English (0 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>Passport from UK, USA, Canada, New Zealand or Ireland</li>
            <li>IELTS: at least 6 in each component</li>
            <li>OET: at least 'B' in each component</li>
            <li>TOEFL iBT: 12 Listening, 13 Reading, 21 Writing, 18 Speaking</li>
            <li>PTE Academic: at least 50 in each component</li>
            <li>Cambridge (CAE): at least 169 in each component</li>
          </ul>
        </div>
      </label>

      {/* ---------------- PROFICIENT ---------------- */}
      <label className={`option ${selected === "proficient" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="english"
          checked={selected === "proficient"}
          onChange={() => selectEnglish("proficient", 10)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">Proficient English (10 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>IELTS: at least 7 in each component</li>
            <li>OET: at least 'B' in each component</li>
            <li>TOEFL iBT: 24 Listening, 24 Reading, 27 Writing, 23 Speaking</li>
            <li>PTE Academic: at least 65 in each component</li>
            <li>Cambridge (CAE): at least 185 in each component</li>
          </ul>
        </div>
      </label>

      {/* ---------------- SUPERIOR ---------------- */}
      <label className={`option ${selected === "superior" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="english"
          checked={selected === "superior"}
          onChange={() => selectEnglish("superior", 20)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />

        <div className="mt-[-30px] ml-16 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">Superior English (20 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-slate-400 space-y-1">
            <li>IELTS: at least 8 in each component</li>
            <li>OET: at least 'A' in each component</li>
            <li>TOEFL iBT: 28 Listening, 29 Reading, 30 Writing, 26 Speaking</li>
            <li>PTE Academic: at least 79 in each component</li>
            <li>Cambridge (CAE): at least 200 in each component</li>
          </ul>
        </div>
      </label>
    <div
         style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "10px",
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

              xl:w-[170px]
              xl:mr-10
              xl:mt-[40px]
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
              xl:mt-[40px]
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
