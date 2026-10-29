import cover from "../assets/curve.svg";
import call from "../assets/Phone.svg";
import email from "../assets/email.svg";
import location from "../assets/Location.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/X.svg";
import instagram from "../assets/Instagram.svg";
import youtube from "../assets/Youtube.svg";
import { CiLinkedin } from "react-icons/ci";
import logo from "../assets/LOGO.png";
import { FaFileArrowDown } from "react-icons/fa6";
import bg from "../assets/bg.png";


const Footer = () => {
  return (
    <footer className="relative w-full mt-[-302px] text-white pt-16 pb-8 overflow-hidden min-h-[600px] flex flex-col justify-end">
      
      {/* Background Curve Image (Wavy background covering the full area) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 ">
        <img 
          src={cover} 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-100" 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-2 z-2 flex flex-col gap-12 ">
        
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-20 items-start md:pt-30 pt-[-20px] lg:mt-[30px]">
          
          {/* Column 1: Brand Info & Brochure */}
          <div className="xl:col-span-4 flex flex-col items-start gap-5 lg:mt-[-100px] md:mt-10 mt-38">
            <img
              src={logo}
              alt="Growmore logo"
              className="w-[260px] sm:w-[320px] 2xl:w-[380px] h-auto object-contain"
            />

            <p className="text-[15px] lg:text-[20px] sm:lg:text-[17px] 2xl:text-[20px] font-semibold leading-relaxed text-teal-200  max-w-md">
              We guide clients globally through student, work, visitor, dependent,
              and migration visa applications with trusted expertise.
            </p>

            <a
              href="/brochures"
              aria-label="Download Brochures"
              className="inline-flex items-center justify-center gap-2 h-[44px] 2xl:h-[50px] px-6 text-[14px] sm:text-[15px] 2xl:text-[18px] font-semibold text-[#265257] font-[Poppins] rounded-[12px] bg-teal-300 hover:bg-teal-400 transition-colors shadow-md mt-4"
            >
              <span className="text-[17px]">Download Brochures</span>
              <FaFileArrowDown className="w-4 h-4 2xl:w-5 2xl:h-5" />
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="xl:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-4 pt-0 2xl:pt-35 xl:pt-30 md:pt-16 xl:mt-[-100px] ml-0 lg:mt-[-45px] lg:ml-[-30px] md:ml-[-20px]">
            <div>
              <h3 className="mb-4 text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold text-teal-100">
                Services
              </h3>
              <ul className="space-y-2.5 text-[15px] lg:text-[17px] 2xl:text-[18px] text-teal-50">
                <li><a href="/services/student-visa" className="hover:text-white transition-colors">Study Visa</a></li>
                <li><a href="/services/work-visa" className="hover:text-white transition-colors">Work Visa</a></li>
                <li><a href="/services/migration-visa" className="hover:text-white transition-colors">Migration Visa</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold text-teal-100">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-[15px] lg:lg:text-[17px] 2xl:text-[18px] text-teal-50">
                <li><a href="/english-test" className="hover:text-white transition-colors">English Test</a></li>
                <li><a href="/latest-update/blogs" className="hover:text-white transition-colors">Latest Update</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold text-teal-100">
                Useful Links
              </h3>
              <ul className="space-y-2.5 text-[15px] lg:lg:text-[17px] 2xl:text-[18px] text-teal-50">
                <li><a href="/terms-services" className="hover:text-white transition-colors">Terms &amp; Services</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
                <li><a href="/cancellation-and-refund-policy" className="hover:text-white transition-colors">Cancellation &amp; Refund</a></li>
                <li><a href="/aritificial-intelligence-use-policy" className="hover:text-white transition-colors">AI Use Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Support Box */}
          <div className="xl:col-span-4 flex flex-col  md:pt-[-20px] 2xl:pt-[45px]">
            <img
src={bg}
alt="Footer background"
className="hidden xl:block absolute w-[540px] h-[350px] rotate-0 opacity-100 top-[100px] right-[-90px] 2xl:w-[600px] 2xl:h-[390px] 2xl:top-[170px] 2xl:right-[-130px] object-cover pointer-events-none"
/>
            <div className="w-[350px] bg-[#0F727B54] h-[170px] 2xl:h-[180px] xl:mt-13 xl:h-[140px] xl:w-[390px] backdrop-blur-[2px] rounded-[20px] p-6 2xl:p-8 border border-teal-500/20 shadow-xl">
              <p className="text-[18px] 2xl:mt-[-12px] 2xl:text-[24px] font-semibold leading-snug mb-6">
                Looking for Professional Visa Support?
              </p>
              
              {/* Contact Buttons */}
              <div className="flex items-center gap-16 2xl:mt-[-15px] flex-wrap">
                <a
                  href="tel:+1234567890"
                  aria-label="Call us"
                  className="flex items-center justify-center rounded-full bg-[#8FE7F266] w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] hover:bg-[#8FE7F2] transition-colors"
                >
                  <img src={call} alt="" className="w-5 h-5 2xl:w-7 2xl:h-7 filter brightness-0 invert" />
                </a>
                <a
                  href="mailto:info@example.com"
                  aria-label="Email us"
                  className="flex items-center justify-center rounded-full bg-[#8FE7F266] w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] hover:bg-[#8FE7F2] transition-colors"
                >
                  <img src={email} alt="" className="w-5 h-5 2xl:w-7 2xl:h-7 filter brightness-0 invert" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Growmore+Global+Visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Google Maps"
                  className="flex items-center justify-center rounded-full bg-[#8FE7F266] w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] hover:bg-[#8FE7F2] transition-colors"
                >
                  <img src={location} alt="" className="w-5 h-5 2xl:w-7 2xl:h-7 filter brightness-0 invert" />
                </a>
              </div>
            </div>
               {/* Social Icons */}
              <div className="relative z-10 flex items-center justify-between 2xl:mt-[-10px] xl:ml-[-12px] pt-6 gap-2 ml-[-90px] rounded-b-[20px] px-24 xl:px-6 pb-5">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-[12px] transition-colors hover:brightness-125" style={{ backgroundColor: "rgba(143, 231, 242, 0.3)" }}>
                  <img src={facebook} alt="" className="w-5 h-5 filter brightness-0 invert" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-[12px] transition-colors hover:brightness-125" style={{ backgroundColor: "rgba(143, 231, 242, 0.3)" }}>
                  <CiLinkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-[12px] transition-colors hover:brightness-125" style={{ backgroundColor: "rgba(143, 231, 242, 0.3)" }}>
                  <img src={youtube} alt="" className="w-5 h-5 filter brightness-0 invert" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-[12px] transition-colors hover:brightness-125" style={{ backgroundColor: "rgba(143, 231, 242, 0.3)" }}>
                  <img src={instagram} alt="" className="w-5 h-5 filter brightness-0 invert" />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-[12px] transition-colors hover:brightness-125" style={{ backgroundColor: "rgba(143, 231, 242, 0.3)" }}>
                  <img src={twitter} alt="" className="w-5 h-5 filter brightness-0 invert" />
                </a>
              </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 border-t border-[#2E6773] lg:pt-6">
          <p className="text-center text-teal-100/80 text-[14px] sm:lg:text-[17px] 2xl:text-[18px] pt-3">
            © Growmore 2026 | All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;