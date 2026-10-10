import { useState } from "react";

export default function Language2({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectlanguageproficiency = (value, pts) => {
    setSelected(value);

    // RESET SECOND QUESTION IF NO SELECTED
    if (value === "0") {
      updateScore("languageProficiency", 0);
      return;
    }

    // BASE 5 POINTS
    updateScore("languageProficiency", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] h-[400px]  overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[60px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2
        className="
          w-full
          mt-5
          ml-0
          font-semibold
          pb-1
          text-[25px]
          leading-tight
          text-cyan-800

          sm:ml-2
          sm:text-[28px]

          xl:w-[520px]
          xl:ml-[30px]
          xl:text-[30px]
        "
      >
        Language Proficiency
      </h2>

      <hr className="mx-2 sm:mx-6 mt-2 border-[1px] border-slate-200" />
         <p
        className="
          w-full
          h-auto
          mt-[14px]
          ml-0
          text-xl
          leading-7
          text-cyan-600
          font-semibold

          sm:ml-2
          sm:leading-8

          xl:w-[680px]
          xl:h-[33px]
          xl:ml-[30px]
          xl:leading-normal
        "
      >
        What is your language proficiency test level?
      </p>

      {/* ---------------- COMPETENT ---------------- */}
      <label className={`option ${selected === "competent" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="languageproficiency"
          checked={selected === "competent"}
          onChange={() => selectlanguageproficiency("competent", 0)}
            className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[20px]
              xl:ml-8.5
            "
        />

        <div  className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            ">
          <b>CLB 6 or lower (0 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li><b>IELTS General Training:</b> CLB 4 or lower: below 4.5 Listening, below 3.5 Reading, below 4.0 Writing, or below
4.0 Speaking; CLB 5: 5.0 Listening, 4.0 Reading, 5.0 Writing, 5.0 Speaking; CLB 6: 5.5 Listening, 5.0 Reading,
5.5 Writing, 5.5 Speaking</li>
            <li><b>CELPIP-General:</b> CLB 4 or lower: below 4 in any component; CLB 5: 5 in each component; CLB 6: 6 in each
component.</li>
            <li><b>PTE Core:</b> CLB 4 or lower: below 28 Listening, below 33 Reading, below 41 Writing, or below 42 Speaking; CLB
5: 39–49 Listening, 42–50 Reading, 51–59 Writing, 51–58 Speaking; CLB 6: 50–59 Listening, 51–59 Reading,
60–68 Writing, 59–67 Speaking.</li>
          </ul>
        </div>
      </label>

      {/* ---------------- PROFICIENT ---------------- */}
      <label className={`option ${selected === "proficient" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="languageproficiency"
          checked={selected === "proficient"}
          onChange={() => selectlanguageproficiency("proficient", 16)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[20px]
              xl:ml-8.5
            "
        />

        <div className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            ">
          <b>CLB 7 (16 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li><b>IELTS General Training:</b> 6.0 in each component</li>
            <li><b>CELPIP-General:</b> 7 in each component</li>
            <li><b>PTE Core:</b> 60–70 Listening, 60–68 Reading, 69–78 Writing, 68–75 Speaking</li>
          </ul>
        </div>
      </label>

      {/* ---------------- CLB 8 ---------------- */}
      <label className={`option ${selected === "clb8" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="languageproficiency"
          checked={selected === "clb8"}
          onChange={() => selectlanguageproficiency("clb8", 20)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[20px]
              xl:ml-8.5
            "
        />

        <div className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            ">
          <b>CLB 8 (20 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li><b>IELTS General Training:</b> 7.5 Listening, 6.5 Reading, 6.5 Writing, 6.5 Speaking</li>
            <li><b>CELPIP-General:</b> 8 in each component</li>
            <li><b>PTE Core:</b> 71–81 Listening, 69–77 Reading, 79–87 Writing, 76–83 Speaking</li>
          </ul>
        </div>
      </label>

      {/* ---------------- CLB 9 ---------------- */}
      <label className={`option ${selected === "clb9" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="languageproficiency"
          checked={selected === "clb9"}
          onChange={() => selectlanguageproficiency("clb9", 24)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[20px]
              xl:ml-8.5
            "
        />

        <div className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            ">
          <b>CLB 9 (24 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li><b>IELTS General Training:</b> 8.0 Listening, 7.0 Reading, 7.0 Writing, 7.0 Speaking</li>
            <li><b>CELPIP-General:</b> 9 in each component</li>
            <li><b>PTE Core:</b> 82–88 Listening, 78–87 Reading, 88–89 Writing, 84–88 Speaking</li>
          </ul>
        </div>
      </label>

      {/* ---------------- CLB 10+ ---------------- */}
      <label className={`option ${selected === "clb10plus" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="languageproficiency"
          checked={selected === "clb10plus"}
          onChange={() => selectlanguageproficiency("clb10plus", 24)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[20px]
              xl:ml-8.5
            "
        />

        <div className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            ">
          <b>CLB 10 or higher (24 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li><b>IELTS General Training:</b> 8.5+ Listening, 8.0+ Reading, 7.5+ Writing, 7.5+ Speaking</li>
            <li><b>CELPIP-General:</b> 10+ in each component</li>
            <li><b>PTE Core:</b> 89+ Listening, 88+ Reading, 90+ Writing, 89+ Speaking</li>
          </ul>
        </div>
      </label>

     {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "130px",
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
              xl:gap-0
              sm:w-[170px]

              xl:w-[170px]
              xl:mr-10
              xl:mt-0
              xl:ml-[5px]
            "
          onClick={prevStep}
        >
          ←  Preview
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
              xl:mt-0
              xl:ml-[-15px]
            "
          onClick={nextStep}
        >
          Next  →
        </button>
      </div>
    </div>
  );
}