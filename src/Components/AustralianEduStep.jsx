import { useState } from "react";

export default function AustralianEduStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);
  const [regionalStudy, setRegionalStudy] = useState(null);

  const selectAustralianEdu = (value, pts) => {
    setSelected(value);

    // RESET SECOND QUESTION IF NO SELECTED
    if (value === "0") {
      setRegionalStudy(null);
      updateScore("australianEdu", 0);
      updateScore("regionalStudy", 0);
      return;
    }

    // BASE 5 POINTS
    updateScore("australianEdu", pts);
  };

  const selectRegionalStudy = (value) => {
    setRegionalStudy(value);

    // EXTRA 5 POINTS
    if (value === "yes") {
      updateScore("regionalStudy", 5);
    } else {
      updateScore("regionalStudy", 0);
    }
  };

  return (
      <div className="w-[calc(100%-2rem)] max-w-[750px] h-[500px] overflow-y-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">

      {/* Heading */}
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
        Australian Educational Qualification
      </h2>

      <hr className="mx-2 sm:mx-6 mt-2 border-[1px] border-slate-200" />

      {/* Question */}
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
        Degree, diploma, advanced diploma or trade qualification from an
        Australian educational institution which took at least 2 years of
        full-time study and was taught in English.
      </p>

      {/* YES OPTION */}
      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="australianEdu"
          checked={selected === "5"}
          onChange={() => selectAustralianEdu("5", 5)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[70px]
              xl:ml-8.5
            "
        />

        <div
          className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-32px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            "
        >
          <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
            Yes
          </b>
        </div>
      </label>

      {/* NO OPTION */}
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="australianEdu"
          checked={selected === "0"}
          onChange={() => selectAustralianEdu("0", 0)}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-3
              ml-2
              xl:mt-[15px]
              xl:ml-8.5
            "
        />

        <div
          className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            "
        >
          <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
            No
          </b>
        </div>
      </label>

      {/* SECOND QUESTION ONLY IF YES */}
      {selected === "5" && (
        <>
          <p  className="
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
          xl:leading-normal">
            Designated Regional Area Study
          </p>
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
            Degree, diploma, advanced diploma or trade qualification from an
            Australian educational institution which took at least 2 years of
            full-time study and was taught in English.
          </p>

         <label className={`option ${regionalStudy === "yes" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="regionalStudy"
          checked={regionalStudy === "yes"}
          onChange={() => selectRegionalStudy("yes")}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-4
              ml-2
              xl:mt-[70px]
              xl:ml-8.5
            "
        />

        <div
          className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-32px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            "
        >
          <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
            Yes
          </b>
        </div>
      </label>

      {/* NO OPTION */}
      <label className={`option ${regionalStudy === "no" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="regionalStudy"
          checked={regionalStudy === "no"}
          onChange={() => selectRegionalStudy("no")}
          className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200
              mt-3
              ml-2
              xl:mt-[15px]
              xl:ml-8.5
            "
        />

        <div
          className="
              ml-0
              w-auto
              min-w-0
              ml-10
              mt-[-30px]
              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            "
        >
          <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
            No
          </b>
        </div>
      </label>
        </>
      )}

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "140px",
          gap: "30px",
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
