import { useState } from "react";

export default function VisaStep({ updateScore, nextStep }) {
  const [selected, setSelected] = useState(null);

  const handleVisa = (value, pts) => {
    setSelected(value);
    updateScore("visa", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] min-h-[500px] h-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:h-[500px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[210px] xl:ml-[30px]">
        Visa Subclass
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />
      
      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">Which visa Subclass are you applying for?</p>

      {/* 189 */}
      <label
        className={`option ${selected === "189" ? "active" : ""}`}
        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
      >
        <input
          type="CHECKBOX"
          name="visa"
          checked={selected === "189"}
          onChange={() => handleVisa("189", 0)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-3.5 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">Skilled Independent visa (Subclass 189)</b>
          <p className="text-[18px] text-slate-400 ">You must have an occupation on the MLTSSL.</p>
        </div>
      </label>

      {/* 190 */}
      <label className={`option ${selected === "190" ? "active" : ""}`}
      style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <input
           type="CHECKBOX"
          name="visa"
          checked={selected === "190"}
          onChange={() => handleVisa("190", 5)}
          className="h-5 w-5 mt-4 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-2.5 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600" >Skilled Nominated visa (Subclass 190)</b>
          <p className="text-[18px] text-slate-400 w-full xl:w-[643px]">
            Requires nomination by a State or Territory government. You must
            have an occupation on the MLTSSL or STSOL.
          </p>
        </div>
      </label>

      {/* 491 */}
      <label className={`option ${selected === "491" ? "active" : ""}`}
      style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <input
           type="CHECKBOX"
          name="visa"
          checked={selected === "491"}
          onChange={() => handleVisa("491", 15)}
          className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
        />
        <div className="mt-3.5 min-w-0">
          <b className="font-semibold text-[20px] text-teal-600">Skilled Work Regional (Provisional) visa (Subclass 491)</b>
          <p className="text-[18px] text-slate-400 w-full xl:w-[643px]">
            Requires nomination by a State or Territory government, or
            sponsorship by a suitable family member.You must have an occupation
            on the MLTSSL or STSOL or ROL.
          </p>
        </div>
      </label>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "25px",
          marginLeft: "22px"
        }}
      >
        <button className="bg-cyan-800 w-[170px] h-[52px] mr-0 mb-3 text-white text-[18px] rounded-[20px] sm:mr-2 xl:mr-10 xl:mt-[-10px]" onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}
