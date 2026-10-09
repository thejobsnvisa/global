import { useState } from "react";

export default function Age({ nextStep, updateScore }) {
  const [selected, setSelected] = useState(null);

  const ageOptions = [
    { value: "18-35", label: "18-35", points: 12 },
    { value: "36", label: "36", points: 11 },
    { value: "37", label: "37", points: 10 },
    { value: "38", label: "38", points: 9 },
    { value: "39", label: "39", points: 8 },
    { value: "40", label: "40", points: 7 },
    { value: "41", label: "41", points: 6 },
    { value: "42", label: "42", points: 5 },
    { value: "43", label: "43", points: 4 },
    { value: "44", label: "44", points: 3 },
    { value: "45", label: "45", points: 2 },
    { value: "46", label: "46", points: 1 },
    { value: "47", label: "47", points: 0 },
  ];

  const selectage = (value, pts) => {
    setSelected(value);
    updateScore("age", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] h-[400px]  overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[60px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[280px] xl:ml-[30px]">
        Age
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        Your current age
      </p>

      {ageOptions.map(({ value, label, points }) => (
        <label key={value} className={`option ${selected === value ? "active" : ""}`}>
          <input
            type="checkbox"
            name="age"
            checked={selected === value}
            onChange={() => selectage(value, points)}
            className="h-5 w-5 mt-5 ml-0 shrink-0 rounded-[6px] border-[2px] border-slate-200 sm:ml-2 xl:ml-8"
          />

          <div className="mt-[-30px] ml-16 min-w-0">
            <b className="font-semibold text-[20px] text-teal-600">
              {label} 
            </b>
          </div>
        </label>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "25px",
          marginLeft: "22px",
        }}
      >
        <button
          className="bg-cyan-800 w-[170px] h-[52px] mr-0 mb-3 text-white text-[18px] rounded-[20px] sm:mr-2 xl:mr-10 xl:mt-[-10px]"
          onClick={nextStep}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
