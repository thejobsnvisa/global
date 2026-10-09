import { useState } from "react";

export default function Adaptibility({ prevStep, nextStep, updateScore }) {
  const [selected, setSelected] = useState([]);

  const ageOptions = [
    { value: "Previous work in Canada (1+ year NOC 0,A,B)", label: "Previous work in Canada (1+ year NOC 0,A,B)", points: 25 },
    { value: "Previous study in Canada", label: "Previous study in Canada", points: 23 },
    { value: "Spouse previous study in Canada)", label: "Spouse previous study in Canada)", points: 22 },
    { value: "Spouse previous work in Canada", label: "Spouse previous work in Canada", points: 21 },
    { value: "Relative in Canada (18+ years)", label: "Relative in Canada (18+ years)", points: 15 },
    { value: "Spouse language ability (CLB 4+)", label: "Spouse language ability (CLB 4+)", points: 5 },
  ];

  const selectage = (value) => {
    const nextSelected = selected.includes(value)
      ? selected.filter((option) => option !== value)
      : [...selected, value];

    const totalPoints = nextSelected.reduce(
      (total, option) =>
        total + ageOptions.find((item) => item.value === option).points,
      0
    );

    setSelected(nextSelected);
    updateScore("adaptability", Math.min(totalPoints, 10));
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] h-[400px]  overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[60px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[280px] xl:ml-[30px]">
       Adaptability
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[522px] xl:h-[33px] xl:ml-[30px]">
        Select all that apply (maximum 10 points)
      </p>

      {ageOptions.map(({ value, label }) => (
        <label key={value} className={`option ${selected.includes(value) ? "active" : ""}`}>
          <input
            type="checkbox"
            name="age"
            checked={selected.includes(value)}
            onChange={() => selectage(value)}
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
          marginTop: "60px",
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
              xl:ml-[20px]
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
              xl:ml-[-25px]
            "
          onClick={nextStep}
        >
          Next  →
        </button>
      </div>
    </div>
  );
}
