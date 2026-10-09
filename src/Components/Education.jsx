import { useState } from "react";

export default function Education({ prevStep, nextStep, updateScore }) {
  const [selected, setSelected] = useState(null);

  const ageOptions = [
    { value: "PhD (Doctoral level)", label: "PhD (Doctoral level)", points: 25 },
    { value: "Masters", label: "Masters", points: 23 },
    { value: "Dual Degree(Bachelor & Diploma)", label: "Dual Degree(Bachelor & Diploma)", points: 22 },
    { value: "Bachelors", label: "Bachelors", points: 21 },
    { value: "Diploma 2 years after 10th std", label: "Diploma 2 years after 10th std", points: 19 },
    { value: "Diploma 3 years after 10th std", label: "Diploma 3 years after 10th std", points: 15 },
    { value: "High School", label: "High School", points: 5 },
  ];

  const selectage = (value, pts) => {
    setSelected(value);
    updateScore("education", pts);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] h-[400px]  overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[60px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">
      <h2 className="w-auto mt-[20px] ml-0 font-semibold pb-1 text-[30px] leading-tight text-cyan-800 sm:ml-2 xl:w-[280px] xl:ml-[30px]">
        Education
      </h2>
      <hr className="mx-6 mt-2 border-[1px] border-slate-200" />

      <p className="w-full h-auto mt-[20px] ml-0 text-xl text-cyan-600 font-semibold sm:ml-2 sm:text-[24px] xl:w-[472px] xl:h-[33px] xl:ml-[30px]">
        Highest Level of Education
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
