import { Link } from "react-router-dom";

export default function FinalResult({
  prevStep,
  reset,
  total,
}) {

  // ✅ FORCE NUMBER
  const score = Number(total);

  // ✅ ELIGIBILITY
  const isEligible = score >= 65;

  return (
    <div className="w-[calc(100%-2rem)] max-w-[750px] min-h-[500px] h-auto border-[1px] border-slate-200 mt-6 mb-10 mx-auto rounded-[30px] bg-slate-50 px-4 sm:px-6 xl:w-[750px] xl:h-[500px] xl:mt-[40px] xl:mb-[270px] xl:ml-[180px] xl:mr-0 xl:px-0">

      {/* CENTER CONTENT */}
      <div className="mt-8 sm:mt-12 md:mt-20 text-center px-4 sm:px-6 py-8 sm:py-10">

        {/* ✅ SHOW ONLY IF ELIGIBLE */}
        {isEligible && (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 mb-4 ">
              Congratulations !!!
            </h2>

            <p className="text-base sm:text-lg font-semibold md:text-xl text-teal-500">
              Based on your responses, you meet the eligibility criteria.
            </p>

            <p className="mt-2 text-gray-500">
              <Link
                to="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Contact Us
              </Link>{" "}
              to know more.
            </p>
             <div
          className="
            flex
            flex-col
            gap-3
            w-full
            mt-6
            ml-0
            justify-center
            sm:flex-row
            sm:gap-4

            md:col-span-2

            xl:flex
            xl:flex-row
            xl:w-auto
            xl:gap-8
            xl:mt-[-120px]
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
              xl:mt-[160px]
              xl:ml-[45px]
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
              xl:mt-[160px]
              xl:ml-[-15px]
            "
            onClick={reset}
          >
           ↻ Start Over
          </button>
        </div>
          </>
        )}

      </div>

      {!isEligible && (
        <div className="mt-6 sm:mt-10 md:mt-[-50px] text-center px-4 sm:px-6 py-8 sm:py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 mb-4 ">
             Criteria doesn’t match
            </h2>

            <p className="text-base sm:text-lg font-semibold md:text-xl text-teal-500">
              Based on your responses, you don’t meet the eligibility criteria.
            </p>
              <p className="mt-2 text-gray-500">
              <Link
                to="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Contact Us
              </Link>{" "}
              to know more.
            </p>
           <div
          className="
            flex
            flex-col
            gap-3
            w-full
            mt-6
            ml-0
            justify-center
            sm:flex-row
            sm:gap-4

            md:col-span-2

            xl:flex
            xl:flex-row
            xl:w-auto
            xl:gap-8
            xl:mt-[-120px]
            xl:ml-100
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
              xl:mt-[160px]
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
              xl:mt-[160px]
              xl:ml-[-15px]
            "
            onClick={reset}
          >
           ↻ Start Over
          </button>
        </div>
        </div>
      )}
    </div>
  );
}