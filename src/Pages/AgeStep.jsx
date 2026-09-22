import { useState } from "react";

export default function AgeStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectAge = (value, pts) => {
    setSelected(value);
    updateScore("age", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] min-h-[500px] h-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:h-[500px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[210px] xl:ml-[30px]">
        Age
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        Your age at the time of invitation to apply for the visa.
      </p>

      {/* 189 */}
      <label
        className={`option ${selected === "189" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="age"
          checked={selected === "18-24"}
          onChange={() => selectAge("18-24", 25)}
          className="h-5 w-5 mt-14 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-[50px] min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">18 to 24</b>
        </div>
      </label>

      {/* 190 */}
      <label
        className={`option ${selected === "190" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="age"
          checked={selected === "25-32"}
          onChange={() => selectAge("25-32", 30)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-[14px] min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">25 to 32</b>
        </div>
      </label>

      {/* 491 */}
      <label
        className={`option ${selected === "491" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="age"
          checked={selected === "33-39"}
          onChange={() => selectAge("33-39", 25)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-3.5 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">
            33 to 39
          </b>
        </div>
      </label>
      {/* 491 */}
      <label
        className={`option ${selected === "491" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="age"
          checked={selected === "40-44"} onChange={() => selectAge("40-44",15)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-4 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">
            40 to 44
          </b>
        </div>
      </label>

      {/* Buttons */}
       {/* Buttons */}
        <div
          className="
            flex
            flex-col
            gap-3
            w-full
            mt-6

            sm:flex-row
            sm:gap-4

            md:col-span-2

            xl:flex
            xl:flex-row
            xl:w-auto
            xl:gap-0
            xl:mt-0
          "
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
              xl:mt-[140px]
              xl:ml-[-360px]
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
              xl:mt-[140px]
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
