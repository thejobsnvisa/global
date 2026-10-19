import img from "../assets/img17.png";
import call from "../assets/Path.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/Rectangle.svg";
import clock from "../assets/clock.png";
import location from "../assets/location1.png";
import Contact from "../Components/Contact";

const ContactUs = () => {

  const offices = [
    
    {
      country: "Australia",
      requestCall: "(03) 8764 3334",
      whatsapp: "(+61) 43450 5002",
      email: "study@growmore.one",
      hours: "Monday-Friday",
      hoursLabel: "9 am -5 pm",
      address: "313/101 Overton Road, Williams Landing, Victoria, 3027, Australia.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.722581616605!2d144.7450264!3d-37.86678109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689c0228e6b0b%3A0x3e9f44742eb30ff9!2sGrowMore%20Global%20Visa%20Melbourne%20Australia!5e0!3m2!1sen!2sin!4v1773826957605!5m2!1sen!2sin",
    },
  ];
  const offices1=[
    {
      country: "India",
      requestCall: "(+91) 9081899668",
      whatsapp: "(+91) 9081899669",
      email: "study@growmore.one",
      hours: "Monday-Saturday",
      hoursLabel: "9 am -5 pm",
      address: "417, Block A, ISCON Centre, Shivranjini Cross Roads, Ahmedabad, Gujarat 380015.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.991827088126!2d72.5299896!3d23.024072299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e858c5649e9f7%3A0x417159f01a72ec1c!2sGrowmore%20Global%20Visa!5e0!3m2!1sen!2sin!4v1773825960657!5m2!1sen!2sin",
    },
  ];

  return (
    <>
      <section className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[480px]">
        <img
          src={img}
          alt="Contact Us banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(89.92deg, #FFFFFF 0.06%, rgba(255, 255, 255, 0.79) 20.33%, rgba(255, 255, 255, 0) 48.4%)",
          }}
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10">
          <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-cyan-800">Contact Us</span>
          </p>

          <h1 className="mt-4 text-[32px] font-semibold leading-tight text-[#669980] sm:mt-8 sm:text-[44px] md:mt-10 md:text-[52px] lg:mt-12 lg:text-[60px]">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="relative w-full py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1256px] px-4 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
            <p className="text-[24px] leading-tight text-[#4298A9] sm:text-[30px] md:text-[36px]">
              Stay Connected With
            </p>
            <h2 className="mt-2 text-[30px] font-semibold leading-tight text-[#5B9E7D] sm:mt-3 sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Growmore Global Visa
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10">
            {[...offices, ...offices1].map((office) => (
              <div key={office.country} className="w-full min-w-0">
                <div className="mb-6 text-center">
                  <p className={`text-[22px] font-semibold ${office.country === "India" ? "text-slate-400" : "text-slate-500"}`}>{office.country}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-[10px] bg-slate-100 px-4 py-[14px] sm:px-5">
                    <img src={call} alt="Call icon" className="h-7 w-7 shrink-0 object-contain" style={{ filter: office.country === "India" ? "brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(780%) hue-rotate(124deg) brightness(92%) contrast(91%)" : "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(704%) hue-rotate(166deg) brightness(91%) contrast(94%)" }} />
                    <div className="ml-3 flex min-w-0 flex-col">
                      <p className={`text-[16px] mt-1 font-semibold ${office.country === "India" ? "text-teal-700" : "text-cyan-700"}`}>Requesting A Call</p>
                      <p className={`break-words text-[15px] sm:text-[16px] ${office.country === "India" ? "text-teal-600" : "text-cyan-600"}`}>{office.requestCall}</p>
                    </div>
                  </div>

                  <div className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-[10px] bg-slate-100 px-4 py-[14px] sm:px-5">
                    <img src={whatsapp} alt="whatsapp icon" className="h-10 w-10 shrink-0 object-contain" style={{ filter: office.country === "India" ? "brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(780%) hue-rotate(124deg) brightness(92%) contrast(91%)" : "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(704%) hue-rotate(166deg) brightness(91%) contrast(94%)" }} />
                    <div className="ml-3 flex min-w-0 flex-col">
                      <p className={`text-[16px] mt-1 font-semibold ${office.country === "India" ? "text-teal-700" : "text-cyan-700"}`}>WhatsApp</p>
                      <p className={`break-words text-[15px] sm:text-[16px] ${office.country === "India" ? "text-teal-600" : "text-cyan-600"}`}>{office.whatsapp}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-[10px] bg-slate-100 px-4 py-[14px] sm:px-5">
                    <img src={email} alt="email icon" className="h-9 w-9 shrink-0 object-contain" style={{ filter: office.country === "India" ? "brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(780%) hue-rotate(124deg) brightness(92%) contrast(91%)" : "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(704%) hue-rotate(166deg) brightness(91%) contrast(94%)" }}/>
                    <div className="ml-3 flex min-w-0 flex-col">
                      <p className={`text-[16px] mt-1 font-semibold ${office.country === "India" ? "text-teal-700" : "text-cyan-700"}`}>Email</p>
                      <p className={`break-all text-[15px] sm:text-[16px] ${office.country === "India" ? "text-teal-600" : "text-cyan-600"}`}>{office.email}</p>
                    </div>
                  </div>

                  <div className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-[10px] bg-slate-100 px-4 py-[14px] sm:px-5">
                    <img src={clock} alt="clock icon" className="h-8 w-8 shrink-0 object-contain" style={{ filter: office.country === "India" ? "brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(780%) hue-rotate(124deg) brightness(92%) contrast(91%)" : "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(704%) hue-rotate(166deg) brightness(91%) contrast(94%)" }}/>
                    <div className="ml-3 flex min-w-0 flex-col">
                      <p className={`text-[16px] mt-1 font-semibold ${office.country === "India" ? "text-teal-700" : "text-cyan-700"}`}>{office.hoursLabel}</p>
                      <p className={`text-[16px] ${office.country === "India" ? "text-teal-600" : "text-cyan-600"}`}>{office.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex min-h-[94px] items-start gap-3 rounded-[10px] bg-slate-100 px-4 py-4 sm:items-center sm:px-5">
                  <img src={location} alt="location icon" className="h-10 w-10 shrink-0 object-contain" style={{ filter: office.country === "India" ? "brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(780%) hue-rotate(124deg) brightness(92%) contrast(91%)" : "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(704%) hue-rotate(166deg) brightness(91%) contrast(94%)" }} />
                  <div className="ml-1 flex min-w-0 flex-col sm:ml-3">
                    <p className={`text-[16px] font-semibold ${office.country === "India" ? "text-teal-700" : "text-cyan-700"}`}>Location</p>
                    <p className={`mt-2 break-words text-[15px] sm:text-[16px] ${office.country === "India" ? "text-teal-600" : "text-cyan-600"}`}>{office.address}</p>
                  </div>
                </div>

                <div className="mt-6 h-[240px] w-full overflow-hidden rounded-xl sm:mt-8 sm:h-[300px] lg:h-[350px]">
                  <iframe
                    src={office.map}
                    className="h-full w-full rounded-xl"
                    title={`${office.country} office location map`}
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
