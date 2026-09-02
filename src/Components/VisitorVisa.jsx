const VisitorVisa = () => {
  return (
    <>
    <section
            className="
              relative
              w-full
              overflow-hidden
              bg-sky-50
    
              min-h-[1100px]
              py-10
    
              sm:min-h-[1050px]
              sm:py-12
    
              md:min-h-[950px]
              md:py-14
    
              lg:min-h-[750px]
              lg:py-16
    
              xl:h-[900px]
              xl:min-h-0
              xl:py-10
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[1350px]
                px-5
    
                sm:px-8
                md:px-10
                lg:px-10
                xl:px-10
              "
            >
              {/* ================= HEADING ================= */}
              <div
                className="
                  mb-8
    
                  sm:mb-10
                  md:mb-12
                  lg:mb-12
                  xl:mb-14
                "
              >
                <p
                  className="
                    m-0
                    flex
                    justify-center
                    text-center
                    text-[24px]
                    leading-[1.15]
                    text-[#26839A]
    
                    sm:text-[26px]
                    md:text-[28px]
                    lg:text-[30px]
                    xl:text-[40px]
                  "
                >
                  Visitor Visa
                </p>
    
                <h2
                  className="
                    m-0
                    mt-1
                    flex
                    justify-center
                    text-center
                    text-[30px]
                    font-bold
                    leading-[1.05]
                    text-[#5B9E7D]
    
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[46px]
                    xl:text-[60px]
                  "
                >
                  Requirements & Documents
                </h2>
    
                {/* ================= DESCRIPTION ================= */}
                <p
                  className="
                    mx-auto
                    mt-6
                    w-full
                    max-w-[1151px]
                    px-0
                    text-center
                    text-[14px]
                    leading-[1.2]
                    text-slate-600
    
                    sm:mt-7
                    sm:px-2
                    sm:text-[15px]
                    sm:leading-7
    
                    md:mt-8
                    md:px-4
                    md:text-[16px]
                    md:leading-7
    
                    lg:mt-[30px]
                    lg:px-0
    
                    xl:mt-[30px]
                  "
                >
                  <span className="block">
                    Visitor visa document requirements vary based on the destination country, but some common documents
                  </span>
    
                  <span className="mt-1 block">
                    are required for each country. Submitting them accurately and completely is very crucial because immigration 
                  </span>
    
                  <span className="mt-1 block">
                   authorities assess the overall credibility of the applicant based on these papers.
                  </span>
                </p>

                <p
                  className="
                    mx-auto
                    mt-6
                    w-full
                    max-w-[1151px]
                    px-0
                    text-center
                    text-[14px]
                    leading-6
                    text-slate-600
    
                    sm:mt-7
                    sm:px-2
                    sm:text-[15px]
                    sm:leading-7
    
                    md:mt-8
                    md:px-4
                    md:text-[16px]
                    md:leading-7
    
                    lg:mt-[30px]
                    lg:px-0
    
                    xl:mt-[30px]
                  "
                >
                  <span className="block">
                    All documents must align with your stated travel purpose and personal profile because incomplete or inconsistent
                  </span>
    
                  <span className="mt-1 block">
                   documentation can cause delays or refusals.
                  </span>
                  
                </p>

                {/* ================= CARDS SECTION ================= */}
                <div className="mt-10 grid w-full max-w-[830px] grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:mx-0 xl:ml-55 lg:ml-15 lg:grid-cols-2 lg:gap-6 lg:w-[830px] lg:h-[390px]">
                  {/* Financial Proof Card */}
                  <div className="rounded-[20px] shadow-[0px_0px_30px_0px_#76767633] bg-white p-4 sm:p-5 lg:p-6">
                    <h3 className="mb-4 text-lg font-bold text-cyan-700 text-center">Financial Proof</h3>
                    <ul className="space-y-2 text-left text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Recent bank statements showing available funds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Proof of employment or income</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Evidence of financial capacity to cover travel and living expenses</span>
                      </li>
                    </ul>
                  </div>

                  {/* Personal Documents Card */}
                  <div className="rounded-[20px] shadow-[0px_0px_30px_0px_#76767633] bg-white p-4 sm:p-5 lg:p-6">
                    <h3 className="mb-4 text-lg font-bold text-cyan-700 text-center">Personal Documents</h3>
                    <ul className="space-y-2 text-left text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Valid passport with sufficient validity for the duration of stay</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Recent passport-sized photographs meeting country specifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Completed visa application form</span>
                      </li>
                    </ul>
                  </div>

                  {/* Travel Details Card */}
                  <div className="rounded-[20px] shadow-[0px_0px_30px_0px_#76767633] bg-white p-4 sm:p-5 lg:p-6">
                    <h3 className="mb-4 text-lg font-bold text-cyan-700 text-center">Travel Details</h3>
                    <ul className="space-y-2 text-left text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Travel itinerary with planned dates and activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Proof of accommodation, such as hotel reservations or a local invitation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Return flight booking or travel plan confirmation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Additional Documents Card */}
                  <div className="rounded-[20px] shadow-[0px_0px_30px_0px_#76767633] bg-white p-4 sm:p-5 lg:p-6">
                    <h3 className="mb-4 text-lg font-bold text-cyan-700 text-center">Additional Documents (If Applicable)</h3>
                    <ul className="space-y-2 text-left text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Invitation letter from family, friends, or host organization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Medical documents for applicants seeking treatment abroad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Employment letter for business visa applicants</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default VisitorVisa
