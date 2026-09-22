import { useState } from "react";
import img from "../assets/p1.png";
import ScorePanel from "../Components/ScorePanel";
import VisaStep from "./VisaStep";
import AgeStep from "./AgeStep";
import EnglishStep from "./EnglishStep";
import OverseasStep from "../Components/OverseasStep";
import AustralianStep from "../Components/AustralianStep";
import EducationStep from "../Components/EducationStep";
import AustralianEduStep from "../Components/AustralianEduStep";
import SpecialEduStep from "../Components/SpecialEduStep";
import Credit from "../Components/Credit";
import PartnerQualificationStep from "../Components/PartnerQualificationStep";
import ProfessionalStep from "../Components/ProfessionalStep";
import FinalResult from "../Components/FinalResult";

const PointsCalculator = () => {
    /* ---------------- STEP CONTROLLER ---------------- */ const [
    step,
    setStep,
  ] = useState(1);
  /* ---------------- SCORE STATE ---------------- */ const [
    scores,
    setScores,
  ] = useState({
    visa: 0,
    age: 0,
    english: 0,
    overseas: 0,
    australian: 0,
    education: 0,
    australianEdu: 0,
    specialEdu: 0,
    community: 0,
    partnerQualification: 0,
    professional: 0,
  });
  /* ---------------- UPDATE SCORE SAFELY ---------------- */ const updateScore =
    (key, value) => {
      setScores((prev) => ({ ...prev, [key]: value }));
    };
  /* ---------------- NAVIGATION ---------------- */ const nextStep = () =>
    setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  /* ⭐ RESTART CALCULATOR */ const restartCalculator = () => {
    setStep(1);
    setScores({
      visa: 0,
      age: 0,
      english: 0,
      overseas: 0,
      australian: 0,
      education: 0,
      australianEdu: 0,
      specialEdu: 0,
      community: 0,
      partnerQualification: 0,
      professional: 0,
    });
  };
  /* ---------------- TOTAL POINTS ---------------- */ const totalScore =
    Object.values(scores).reduce((sum, val) => sum + (val || 0), 0);
  return (
    <>
      <section
        className="
            relative
            h-[300px]
            w-full
            overflow-hidden
    
            sm:h-[340px]
            md:h-[370px]
            lg:h-[400px]
            xl:h-[420px]
          "
      >
        {/* Banner Image */}
        <img
          src={img}
          alt="Migration"
          className="
              absolute
              inset-0
              h-full
              w-full
              translate-x-0
              md:translate-x-[60px]
              xl:translate-x-[130px]
              xl:object-contain
              object-cover
            "
        />

        {/* Gradient Overlay */}
        <div
          className="
              absolute
              inset-0
              bg-[linear-gradient(89.92deg,#FFFFFF_25%,rgba(255,255,255,0)_58.4%)]
            "
        />

        {/* Banner Content */}
        <div
          className="
              relative
              z-10
              mx-auto
              flex
              h-full
              w-full
              max-w-[1256px]
              flex-col
              justify-center
    
              px-5
              sm:px-8
              md:px-12
              lg:px-10
              xl:px-0
            "
        >
          {/* Breadcrumb */}
          <p
            className="
                mb-2
                text-[14px]
                mt-[-70px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
              "
          >
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Migration Assessment &gt; </span>
            <span className="text-cyan-800">Australia PR Calculator</span>
          </p>

          {/* Banner Heading */}
          <h1
            className="
                mt-6
                w-full
                max-w-[450px]
                text-[38px]
                font-semibold
                leading-[1.1]
                text-[#669980]
    
                sm:mt-8
                sm:text-[44px]
    
                md:mt-10
                md:text-[50px]
    
                lg:mt-12
                lg:text-[50px]
              "
          >
            Australia PR Points Calculator
          </h1>
        </div>
      </section>
      <div className="h-auto min-h-[360px] w-full bg-cyan-50">
        <div className="mx-auto h-auto min-h-[252px] w-full max-w-[1050px] gap-[30px] px-5 py-[34px] xl:ml-[202px]  xl:mr-0 xl:w-[1050px] xl:px-0 xl:py-0">
          <ul className="list-disc pl-5  text-[16px] text-cyan-900 text-justify pt-[68px] xl:text-[18px]">
            <li>
              This New Point Test method is designed to help you determine
              eligibility for skilled migration to Australia. This testing
              mainly assesses your age, work experience, educational
              qualifications, and English language ability. In this, your total
              points will be summed and compared to the number of points
              required to qualify for the visa.
            </li>
            <li className="mt-2">
              Understanding the New Point Test System Australia is crucial for
              all applicants in the Skilled Migration program. This method will
              assist applicants in understanding their overall status and
              potential areas to improve to enhance the overall score and
              increase the opportunity for success.
            </li>
            <li className="mt-2">
              So, use our calculator now and get a clear idea of your
              eligibility under the new system, and if you need any personalized
              advice, contact our expert Immigration Agent today!
            </li>
          </ul>
        </div>
      </div>
      
        <div className="calculator-container w-full">
          {/* LEFT FORM */}
          <div className="form-panel w-full max-w-full">
            {step === 1 && (
              <VisaStep updateScore={updateScore} nextStep={nextStep} />
            )}

            {step === 2 && (
              <AgeStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 3 && (
              <EnglishStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 4 && (
              <OverseasStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 5 && (
              <AustralianStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 6 && (
              <EducationStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 7 && (
              <AustralianEduStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 8 && (
              <SpecialEduStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 9 && (
              <Credit
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 10 && (
              <PartnerQualificationStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 11 && (
              <ProfessionalStep
                updateScore={updateScore}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 12 && (
              <FinalResult
                prevStep={prevStep}
                reset={restartCalculator}
                total={totalScore}
              />
            )}
          </div>

          {/* RIGHT PANEL */}
          <ScorePanel
            scores={scores}
            total={totalScore}
            className="ml-0 h-auto w-full xl:ml-[200px] xl:h-[1000px]"
          />
        </div>
    </>
  );
};

export default PointsCalculator;
