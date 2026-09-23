import { useState } from "react";

export default function EducationStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectEducation = (value, pts) => {
    setSelected(value);
    updateScore("education", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] min-h-[500px] h-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:h-[500px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[450px] xl:ml-[30px]">
        Educational Qualifications
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        What is your highest qualification?
      </p>

      {/* 189 */}
      <label
        className={`option ${selected === "20" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="exp"
          checked={selected === "20"}
          onChange={() => selectEducation("20", 20)}
          className="h-5 w-5 mt-6 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-[20px] min-w-0">
          <b className="font-semibold text-[18px] text-teal-600">A Doctorate degree (PhD) from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard</b>
        </div>
      </label>

      {/* 190 */}
      <label
        className={`option ${selected === "15" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="exp"
          checked={selected === "15"}
          onChange={() => selectEducation("15", 15)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-[16px] min-w-0">
          <b className="font-semibold text-[18px] text-teal-600">A Bachelor degree from an Australian educational institution or a Bachelor qualification from another educational institution that is of a recognised standard</b>
        </div>
      </label>

      {/* 491 */}
      <label
        className={`option ${selected === "10" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="exp"
          checked={selected === "10"}
          onChange={() => selectEducation("10", 10)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-4 min-w-0">
          <b className="font-semibold text-[18px] text-teal-600">
            A diploma or trade qualification completed in Australia; or other award or qualification recognised by the skills assessing authority
          </b>
        </div>
      </label>
      {/* 491 */}
      <label
        className={`option ${selected === "0" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="exp"
          checked={selected === "0"} onChange={() => selectEducation("0",0)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-4 min-w-0">
          <b className="font-semibold text-[18px] text-teal-600">
            No Recognised Qualification
          </b>
        </div>
      </label>

       {/* Buttons */}
        <div
         style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "45px",
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
              gap-0
              xl:w-[170px]
              xl:mr-10
              xl:mt-[-5px]
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
              xl:mt-[-5px]
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
