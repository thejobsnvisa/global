import { useState } from "react";

export default function OverseasStep({ updateScore, nextStep, prevStep }) {
  const [selected, setSelected] = useState(null);

  const selectExperience = (value, pts) => {
    setSelected(value);
    updateScore("overseasExperience", pts);
  };

  return (
    <div
      className="
        w-[calc(100%-2rem)]
        max-w-[750px]
        min-h-[500px]
        h-auto
        border-[1px]
        border-slate-200
        mt-6
        mb-10
        mx-auto
        rounded-[30px]
        bg-slate-50
        px-4
        sm:px-6
        h-[550px]
        /* Keep XL view exactly as before */
        xl:w-[750px]
        xl:h-[500px]
        xl:mt-[40px]
        xl:mb-[270px]
        xl:ml-[180px]
        xl:mr-0
        xl:px-0
      "
    >
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

          xl:w-[420px]
          xl:ml-[30px]
          xl:text-[30px]
        "
      >
        Overseas Work Experience
      </h2>

      <hr className="mx-2 sm:mx-6 mt-2 border-[1px] border-slate-200" />

      {/* Question */}
      <p
        className="
          w-full
          h-auto
          mt-[14px]
          ml-0
          text-[18px]
          leading-7
          text-cyan-600
          font-semibold

          sm:ml-2
          sm:text-[22px]
          sm:leading-8

          xl:w-[680px]
          xl:h-[33px]
          xl:ml-[30px]
          xl:text-[24px]
          xl:leading-normal
        "
      >
        In the last 10 years, how long have you worked in your nominated
        skilled occupation or closely related occupation outside Australia?
      </p>

      {/* Information */}
      <ul
        className="
          list-disc
          font-sm
          pl-5
          mt-8
          w-full
          ml-0
          space-y-2
          text-slate-400
          text-sm
          leading-6

          sm:pl-6
          sm:mt-10
          sm:ml-1
          sm:text-base

          md:w-[90%]

          xl:pl-6
          xl:mt-20
          xl:w-[650px]
          xl:ml-6
          xl:space-y-2
          xl:text-base
        "
      >
        <li>
          Employment must be at least 20 hours per week and for remuneration.
        </li>

        <li>
          The maximum combined points for Overseas Work Experience and
          Australian Work Experience is 20 points.
        </li>
      </ul>

      {/* Experience Options */}
      <div
        className="
          flex
          flex-col
          w-full
          mt-8
          ml-0
          gap-4

          sm:mt-8
          sm:ml-1

          md:grid
          md:grid-cols-2
          md:gap-x-8
          md:gap-y-4

          xl:flex
          xl:flex-row
          xl:justify-start
          xl:mt-[20px]
          xl:ml-[22px]
          xl:gap-0
        "
      >
        {/* 8+ Years */}
        <label
          className={`
            option
            flex
            items-center
            gap-3
            cursor-pointer
            w-full

            md:w-auto

            xl:block
            xl:w-auto
          `}
        >
          <input
            type="checkbox"
            name="exp"
            checked={selected === "15"}
            onChange={() => selectExperience("15", 15)}
            className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200

              xl:mt-[-80px]
              xl:ml-8.5
            "
          />

          <div
            className="
              ml-0
              w-auto
              min-w-0

              xl:mt-[-32px]
              xl:w-[80px]
              xl:ml-16
            "
          >
            <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
              8+ years
            </b>
          </div>
        </label>

        {/* 5 to 7 Years */}
        <label
          className="
            option
            flex
            items-center
            gap-3
            cursor-pointer
            w-full

            md:w-auto

            xl:block
            xl:w-auto
          "
        >
          <input
            type="checkbox"
            name="exp"
            checked={selected === "10"}
            onChange={() => selectExperience("10", 10)}
            className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200

              xl:mt-8
              xl:ml-[-110px]
            "
          />

          <div
            className="
              ml-0
              w-auto
              min-w-0

              xl:mt-[-30px]
              xl:ml-[-80px]
              xl:w-[300px]
            "
          >
            <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
              5 to 7 years
            </b>
          </div>
        </label>

        {/* 3 to 4 Years */}
        <label
          className="
            option
            flex
            items-center
            gap-3
            cursor-pointer
            w-full

            md:w-auto

            xl:block
            xl:w-auto
          "
        >
          <input
            type="checkbox"
            name="exp"
            checked={selected === "5"}
            onChange={() => selectExperience("5", 5)}
            className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200

              xl:mt-17
              xl:ml-[-330px]
            "
          />

          <div
            className="
              ml-0
              w-auto
              min-w-0

              xl:mt-[-30px]
              xl:ml-[-300px]
              xl:w-[300px]
            "
          >
            <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
              3 to 4 years
            </b>
          </div>
        </label>

        {/* Less Than 3 Years */}
        <label
          className="
            option
            flex
            items-center
            gap-3
            cursor-pointer
            w-full

            md:w-auto

            xl:block
            xl:w-auto
          "
        >
          <input
            type="checkbox"
            name="exp"
            checked={selected === "0"}
            onChange={() => selectExperience("0", 0)}
            className="
              h-5
              w-5
              shrink-0
              rounded-[6px]
              border-[2px]
              border-slate-200

              xl:mt-26
              xl:ml-[-330px]
            "
          />

          <div
            className="
              ml-0
              w-auto
              min-w-0

              xl:mt-[-30px]
              xl:ml-[-300px]
            "
          >
            <b className="font-semibold text-[18px] sm:text-[20px] text-teal-600">
              Less than 3 years
            </b>
          </div>
        </label>

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
    </div>
  );
}