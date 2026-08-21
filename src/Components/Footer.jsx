import cover from "../assets/curve.svg";
import bg from "../assets/bg.png";
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
import card from "../assets/mara-card.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a3f44] shrink-0 pt-12 md:pt-16  xl:bg-transparent">
      <div className="relative w-full min-h-0">
        
        {/* Background Curve (Desktop only 1280px+) */}
        <img 
          src={cover} 
          alt="Footer curve" 
          className="hidden xl:block w-full h-auto pointer-events-none" 
        />

        {/* Content Container: Flex/Grid on Mobile, 768px & 1024px | Absolute on 1280px+ */}
        <div className="max-w-6xl mx-auto px-6 pb-12 xl:max-w-none xl:p-0 xl:static flex flex-col xl:block gap-10">

          {/* Top Row for 768px & 1024px: Brand & Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:block gap-8 items-start">
            
            {/* Brand Section */}
            <div className="flex flex-col xl:block">
              <img
                src={logo}
                alt="logo"
                className="w-[280px] sm:w-[320px] xl:w-[391px] h-auto xl:h-[113px] xl:absolute xl:top-[80px] xl:left-[95px] opacity-100 rotate-0"
              />

              <p className="mt-4 xl:mt-0 xl:absolute xl:top-[200px] xl:left-[101px] xl:w-[362px] xl:h-[72px] xl:rounded-[18px] xl:p-4 text-[15px] xl:text-[16px] font-semibold leading-[140%] xl:leading-[130%] text-teal-200 font-[Poppins]">
                We guide clients globally through student, work, visitor, dependent,
                and migration visa applications with trusted expertise.
              </p>

              <button
                type="button"
                aria-label="Download Brochures"
                className="mt-6 xl:mt-0 xl:absolute xl:top-[325px] xl:left-[115px] w-[180px] h-[40px] flex items-center justify-center gap-2 text-[14px] font-semibold leading-[125%] text-[#265257] font-[Poppins] rounded-[12px] bg-teal-300 hover:bg-teal-400 transition-colors duration-300 px-3"
              >
                <span>Download Brochures</span>
                <FaFileArrowDown className="w-4 h-4" />
              </button>

              <img
                src={card}
                alt="Mara card"
                className="mt-6 xl:mt-0 xl:absolute w-[200px] h-[160px] rotate-0 opacity-100 xl:top-[390px] xl:left-[115px] object-contain"
              />
            </div>

            {/* Support & Contact Card (Positioned neatly for 768px & 1024px) */}
            <div className="relative xl:static">
              {/* Desktop Decorative BG Image */}
              <img
                src={bg}
                alt="Footer background"
                className="hidden xl:block absolute w-[640px] h-[350px] rotate-0 opacity-100 top-[140px] left-[820px] object-cover pointer-events-none"
              />

              <div className="w-full xl:w-[320px] lg:w-[350px] xl:h-[130px] xl:absolute xl:right-[65px] xl:bottom-32 xl:top-[369px] bg-[#0F727B54] backdrop-blur-[6px] rounded-[16px] p-5 xl:p-4 text-white opacity-[0.85] z-10">
                <p className="text-white text-[16px] font-semibold xl:h-[54px] leading-[27px] mb-4 xl:mb-0">
                  Looking for Professional Visa Support?
                </p>
                
                {/* Action Icons */}
                <div className="flex items-center justify-start xl:justify-between gap-2">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center rounded-full bg-[#8FE7F266] opacity-90 p-3 xl:p-0 xl:mt-[-8px] xl:ml-2 w-[54px] h-[54px] shrink-0 hover:bg-[#8FE7F2] transition-colors"
                  >
                    <img
                      src={call}
                      alt="phone"
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </a>
                  <a
                    href="mailto:info@example.com"
                    className="flex items-center justify-center rounded-full bg-[#8FE7F266] opacity-90 p-3 xl:p-0 xl:mt-[-8px] xl:ml-2 w-[54px] h-[54px] shrink-0 hover:bg-[#8FE7F2] transition-colors"
                  >
                    <img
                      src={email}
                      alt="email"
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </a>
                  <div className="flex items-center justify-center rounded-full bg-[#8FE7F266] opacity-90 p-3 xl:p-0 xl:mt-[-8px] xl:ml-2 w-[54px] h-[54px] shrink-0">
                    <img
                      src={location}
                      alt="location"
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center justify-between mt-6 xl:mt-7 w-full px-2 gap-2 sm:gap-4 ml-1 ">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[45px] h-[45px] bg-[rgba(143,231,242,0.4)] rounded-[12px] opacity-90 backdrop-blur-[6px] hover:bg-[rgba(143,231,242,0.8)] transition-colors">
                    <img src={facebook} alt="Facebook" className="w-[24px] h-[24px] object-contain filter brightness-0 invert" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[45px] h-[45px] bg-[rgba(143,231,242,0.4)] rounded-[12px] opacity-90 backdrop-blur-[6px] hover:bg-[rgba(143,231,242,0.8)] transition-colors">
                    <CiLinkedin className="w-[24px] h-[24px] object-contain filter brightness-0 invert text-white" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[45px] h-[45px] bg-[rgba(143,231,242,0.4)] rounded-[12px] opacity-90 backdrop-blur-[6px] hover:bg-[rgba(143,231,242,0.8)] transition-colors">
                    <img src={youtube} alt="YouTube" className="w-[24px] h-[24px] object-contain filter brightness-0 invert" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[45px] h-[45px] bg-[rgba(143,231,242,0.4)] rounded-[12px] opacity-90 backdrop-blur-[6px] hover:bg-[rgba(143,231,242,0.8)] transition-colors">
                    <img src={instagram} alt="Instagram" className="w-[24px] h-[24px] object-contain filter brightness-0 invert" />
                  </a>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[45px] h-[45px] bg-[rgba(143,231,242,0.4)] rounded-[12px] opacity-90 backdrop-blur-[6px] hover:bg-[rgba(143,231,242,0.8)] transition-colors">
                    <img src={twitter} alt="X / Twitter" className="w-[24px] h-[24px] object-contain filter brightness-0 invert" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Links Section (Fluid Grid for 768px & 1024px) */}
          <div className="xl:absolute xl:top-[340px] xl:left-[320px] xl:w-[680px] xl:h-[126px] opacity-100 xl:rounded-[14px] xl:px-6 xl:py-3 z-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-1 text-white">
              {/* Services */}
              <div>
                <h3 className="mb-3 xl:mb-4 text-[18px] font-semibold text-teal-100">
                  Services
                </h3>
                <ul className="space-y-2 text-[16px] text-white">
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Study Visa</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Work Visa</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Migration Visa</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-3 xl:mb-4 text-[18px] font-semibold text-teal-100">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-[16px] text-white">
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">English Test</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Latest Update</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="mb-3 xl:mb-4 text-[18px] font-semibold text-teal-100">
                  Useful Links
                </h3>
                <ul className="space-y-2 xl:space-y-0 xl:left-[20px] text-[16px] text-white list-disc">
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Terms &amp; Services</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Code of Conduct</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Cancellation and Refund Policy</a></li>
                  <li><a href="#" className="hover:text-teal-100/90 transition-colors">Artificial Intelligence Use Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="w-full mt-4 xl:mt-2 xl:absolute xl:top-[568px] border-t border-[#2E6773] py-4 xl:py-0">
          <p className="text-center text-white text-[16px] xl:mt-1">
            © Growmore 2026 | All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;