import { motion } from "framer-motion";
import bgImage from "../assets/s9.png"; 

const MigrationVisa = () => { 
  const requirements = [ 
    { text: "Occupation eligibility under the country’s migration or skills list" }, 
    { text: "Language proficiency, such as IELTS or equivalent tests" }, 
    { text: "Relevant education, qualifications, and professional experience" }, 
    { text: "Age criteria as defined under the migration programs" }, 
    { text: "Health and character clearances" }, 
    { text: "Proof of financial stability or settlement funds" }, 
    { text: "Points-based eligibility (where applicable)" }, 
  ]; 

  // Smooth scroll reveal variants
  const slideFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    },
  };

  return ( 
    <div 
      className="relative w-full min-h-[1020px] bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${bgImage})` }} 
    > 
      {/* ========================================================= */} 
      {/* 1. DESKTOP VIEW (xl:block)                                */} 
      {/* ========================================================= */} 
      <div className="hidden xl:block w-full h-[1020px] relative"> 
        {/* Requirements Text Overlays */} 
        <p className="w-[209px] h-[59px] pt-[480px] ml-[278px] font-semibold text-[16px] text-slate-600"> 
          Relevant education, qualifications, and professional experience 
        </p> 
        <p className="w-[180px] h-[59px] mt-[-180px] ml-[65px] text-justify font-semibold text-[16px] text-slate-600"> 
          Occupation eligibility under the country’s migration or skills list 
        </p> 
        <p className="w-[209px] h-[59px] mt-[-240px] ml-[260px] text-justify font-semibold text-[16px] text-slate-600"> 
          Language proficiency, such as IELTS or equivalent tests 
        </p> 
        <p className="w-[230px] h-[59px] mt-[50px] ml-[680px] font-semibold text-[16px] text-slate-600"> 
          Age criteria as defined under the migration programs 
        </p> 
        <p className="w-[198px] h-[59px] mt-[-160px] ml-[1080px] font-semibold text-[16px] text-slate-600"> 
          Health and character clearances 
        </p> 
        <p className="w-[198px] h-[59px] mt-[80px] ml-[1280px] font-semibold text-[16px] text-slate-600"> 
          Proof of financial stability or settlement funds 
        </p> 
        <p className="w-[198px] h-[59px] mt-[270px] ml-[1180px] font-semibold text-[16px] text-slate-600"> 
          Points-based eligibility (where applicable) 
        </p> 

        {/* TOP CARD: Heading drops down from TOP */} 
        <div className="w-[532px] min-h-[140px] ml-[500px] mt-[-120px] rounded-[10px] p-4 bg-white/80 backdrop-blur-[4px] shadow-sm border border-slate-200 overflow-hidden"> 
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideFromTop}
          >
            <p className="w-[512px] h-[60px] text-[40px] text-[#006996] ml-5 leading-tight"> 
              General Requirements for 
            </p> 
            <h3 className="w-[450px] h-[42px] font-semibold text-[60px] mt-[-10px] ml-5 text-[#174C32] leading-none"> 
              Migration Visas 
            </h3> 
          </motion.div>
        </div> 

        {/* BOTTOM CARD: Description rises up from BOTTOM */} 
        <div className="w-[794px] min-h-[171px] ml-[352px] mt-6 rounded-[12px] p-5 bg-white/80 backdrop-blur-[10px] shadow-lg border border-slate-200 overflow-hidden"> 
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideFromBottom}
          >
            <p className="font-semibold text-[16px] text-slate-700"> 
              Most of the migration programs assess applicants against a common set of eligibility criteria. This determines their suitability for long-term settlement. In general, applicants may be required to meet all these requirements. 
            </p> 
            <p className="font-semibold text-[16px] text-slate-700 mt-4"> 
              At Growmore Global Visa, we ensure all requirements are met before proceeding with the application to reduce errors, delays, and the risk of refusal. 
            </p> 
          </motion.div>
        </div> 
      </div> 

      {/* ========================================================= */} 
      {/* 2. MOBILE & TABLET VIEW (xl:hidden)                       */} 
      {/* ========================================================= */} 
      <div className="block xl:hidden px-4 py-8 sm:px-8 space-y-6 max-w-4xl mx-auto min-h-full"> 
        {/* Mobile Top Header */} 
        <div className="bg-white/90 backdrop-blur-sm rounded-[12px] p-6 shadow-sm border border-slate-200 text-center overflow-hidden"> 
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideFromTop}
          >
            <p className="text-[24px] sm:text-[32px] text-[#006996] font-medium leading-tight"> 
              General Requirements for 
            </p> 
            <h3 className="text-[36px] sm:text-[48px] font-bold text-[#174C32] leading-tight mt-1"> 
              Migration Visas 
            </h3> 
          </motion.div>
        </div> 

        {/* Requirements Grid */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
          {requirements.map((item, index) => ( 
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-200 font-semibold text-slate-700 text-[15px] flex items-center gap-3" 
            > 
              <span className="w-2.5 h-2.5 rounded-full bg-[#006996] shrink-0" /> 
              <p>{item.text}</p> 
            </div> 
          ))} 
        </div> 

        {/* Mobile Bottom Card */} 
        <div className="w-full rounded-[12px] p-6 bg-white/95 backdrop-blur-sm shadow-md border border-slate-200 space-y-4 overflow-hidden"> 
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideFromBottom}
          >
            <p className="font-semibold text-[15px] sm:text-[16px] text-slate-700 leading-relaxed"> 
              Most of the migration programs assess applicants against a common set of eligibility criteria. This determines their suitability for long-term settlement. In general, applicants may be required to meet all these requirements. 
            </p> 
            <p className="font-semibold text-[15px] sm:text-[16px] text-slate-700 leading-relaxed mt-4"> 
              At Growmore Global Visa, we ensure all requirements are met before proceeding with the application to reduce errors, delays, and the risk of refusal. 
            </p>
          </motion.div>
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default MigrationVisa;