import { useState, useRef } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";

import PhoneInput from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import flags from "react-phone-number-input/flags";

import { ChevronDown, ArrowRight } from "lucide-react";

import heroImage from "../assets/hero-image.png";

import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

/* =========================================================
   CUSTOM COUNTRY SELECT
   ========================================================= */

const CountrySelect = ({ value, onChange }) => {
  const selectedCountry = value || "IN";

  const Flag = flags[selectedCountry];

  return (
    <div className="relative h-full w-full">
      {/* Invisible native select */}
      <select
        value={selectedCountry}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select country"
        className="
          absolute
          inset-0
          z-20
          h-full
          w-full
          cursor-pointer
          appearance-none
          opacity-0
        "
      >
        {getCountries().map((country) => (
          <option key={country} value={country}>
            {en[country]} +{getCountryCallingCode(country)}
          </option>
        ))}
      </select>

      {/* Visible country selector */}
      <div
        className="
          pointer-events-none
          flex
          h-full
          w-full
          items-center
          gap-2
          px-3
        "
      >
        {/* Flag */}
        {Flag && (
          <Flag
            title={en[selectedCountry]}
            className="
              h-[16px]
              w-[24px]
              shrink-0
              overflow-hidden
              rounded-[2px]
              object-cover
            "
          />
        )}

        {/* Calling code */}
        <span
          className="
            whitespace-nowrap
            text-[12px]
            font-medium
            text-[#333]
          "
        >
          +{getCountryCallingCode(selectedCountry)}
        </span>

        {/* Arrow */}
        <ChevronDown
          size={14}
          className="
            ml-auto
            shrink-0
            text-[#34506d]
          "
        />
      </div>
    </div>
  );
};

/* =========================================================
   HERO COMPONENT
   ========================================================= */

const Hero = () => {
  const recaptchaRef = useRef(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneCountry: "IN",
    inquiry: "",
    country: "",
    comments: "",
  });

  /* =========================================================
     NORMAL INPUT CHANGE
     ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     PHONE COUNTRY CHANGE
     ========================================================= */

  const handlePhoneCountryChange = (newCountry) => {
    setFormData((prev) => ({
      ...prev,
      phoneCountry: newCountry,
      phone: "",
    }));
  };

  /* =========================================================
     PHONE NUMBER CHANGE
     ========================================================= */

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || "",
    }));
  };

  /* =========================================================
     FORM SUBMIT
     ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      countryCode: `+${getCountryCallingCode(formData.phoneCountry)}`,
      phoneCountryName: en[formData.phoneCountry],
    };

    console.log("Form Data:", submitData);

    // Add your API / Google Sheet submission here
  };

  return (
    <section className="w-full overflow-hidden">
      {/* =====================================================
          HERO BACKGROUND
          ===================================================== */}

      <div
        className="
          relative
          w-full
          bg-gradient-to-r
          from-[#e3fff0]
          via-[#ffffff]
          to-white
        "
      >
        {/* Decorative background */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-[350px]
            w-[500px]
            rounded-full
            bg-[#c9f7df]
            opacity-30
            blur-3xl
          "
        />

        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-16
          "
        >
          {/* =================================================
              IMPORTANT:

              Mobile / Tablet:
              grid-cols-1

              XL:
              YOUR ORIGINAL DESKTOP LAYOUT
              ================================================= */}

          <div
            className="
              relative
              grid
              min-h-0
              grid-cols-1
              items-center
              gap-10

              sm:gap-12
              md:gap-14
              lg:gap-16

              xl:min-h-[550px]
              xl:grid-cols-[46%_54%]
              xl:gap-0
            "
          >
            {/* =================================================
                LEFT CONTENT
                ================================================= */}

            <div
              className="
                relative
                z-20

                py-12
                sm:py-14
                md:py-16
                lg:py-18

                xl:py-24
              "
            >
              <p
                className="
                  mb-5
                  text-center
                  text-[18px]
                  font-medium
                  text-[#07517b]

                  sm:mb-6
                  sm:text-[20px]

                  md:text-[21px]

                  lg:text-left
                  lg:text-[22px]

                  xl:mt-[-10px]
                  xl:mb-6
                  xl:text-[23px]
                "
              >
                Welcome to Growmore Global Visa
              </p>

              <h1
                className="
                  max-w-[650px]
                  text-center
                  font-serif
                  text-[32px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-1px]
                  text-[#0c3158]

                  sm:text-[34px]

                  md:text-[38px]

                  lg:text-left
                  lg:text-[40px]

                  xl:text-[40px]
                "
              >
                YOUR NEXT CHAPTER
                <br />
                BEGINS BEYOND BORDERS
              </h1>

              {/* Green divider */}
              <div
                className="
                  mx-auto
                  my-5
                  h-[3px]
                  w-[92px]
                  bg-[#78cba8]

                  sm:my-6

                  lg:mx-0

                  xl:my-6
                "
              />

              <p
                className="
                  mx-auto
                  max-w-[610px]
                  text-center
                  text-[14px]
                  leading-[1.8]
                  text-[#07517b]

                  sm:text-[15px]

                  md:text-[16px]

                  lg:mx-0
                  lg:text-left

                  xl:text-[16px]
                "
              >
                Whether you are planning to study, work, travel, or settle
                abroad, Growmore Global Visa is here to provide you with
                complete immigration support for student visas, work visas,
                dependent visas, visitor visas and other migration services
                across multiple countries. So, start your immigration journey
                today with clear guidance and reliable support from us.
              </p>

              {/* Know More */}
              <div className="flex justify-center lg:justify-start">
                <Link to="/who-we-are">
                <button
                  type="button"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#5bb1d0]
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-[#083b63]
                    shadow-sm
                    transition
                    duration-300
                    hover:bg-[#48a3c4]
                    hover:shadow-lg

                    sm:mt-8
                    sm:px-8
                    sm:py-4
                  "
                >
                  Know More
                  <ArrowRight size={20} />
                </button></Link>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
                ================================================= */}

            <div
              className="
                relative
                flex
                min-h-0
                w-full
                flex-col
                items-center
                justify-center

                lg:min-h-[700px]

                xl:min-h-[650px]
                xl:flex
                xl:flex-row
              "
            >
              {/* =================================================
                  FLIGHT PATH
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[5%]
                  top-[15%]
                  z-10
                  hidden
                  h-[300px]
                  w-[450px]
                  rounded-[50%]
                  border-t
                  border-dashed
                  border-[#54b79c]
                  opacity-80
                  rotate-[-8deg]

                  xl:block
                "
              />

              {/* =================================================
                  HERO IMAGE
                  ================================================= */}

              <div
                className="
                  relative
                  z-0
                  w-full
                  max-w-[560px]

                  sm:max-w-[620px]

                  md:max-w-[680px]

                  lg:max-w-[720px]

                  xl:max-w-[700px]
                  xl:-ml-10
                "
              >
                <img
                  src={heroImage}
                  alt="Global destinations"
                  className="
                    h-[380px]
                    w-full
                    object-contain

                    sm:h-[430px]

                    md:h-[500px]

                    lg:h-[560px]

                    xl:h-[750px]
                  "
                />
              </div>

              {/* =================================================
                  CONSULTATION FORM

                  MOBILE/TABLET:
                  Normal flow

                  XL:
                  ORIGINAL ABSOLUTE POSITION
                  ================================================= */}

              <div
                className="
                  relative
                  z-30

                  mt-[-20px]
                  mb-12

                  w-full
                  max-w-[500px]

                  rounded-[20px]
                  bg-[#FFFFFFE8]
                  px-4
                  py-5
                  shadow-[0_0_24px_4px_#B2AFAF40]
                  backdrop-blur-[4px]

                  sm:px-5
                  md:max-w-[550px]
                  md:px-6

                  lg:max-w-[600px]

                  xl:absolute
                  xl:left-[380px]
                  xl:right-0
                  xl:top-32
                  xl:mt-0
                  xl:mb-0
                  xl:h-[525px]
                  xl:w-[380px]
                  xl:max-w-none
                  xl:px-[19px]
                  xl:py-[20px]
                  xl:bg-[#FFFFFFA8]
                  xl:opacity-90
                "
              >
                {/* =================================================
                    FORM HEADING
                    ================================================= */}

                <div className="mb-4 text-center sm:mb-5">
                  <p
                    className="
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#026CC0]

                      sm:text-[15px]

                      lg:text-[16px]
                    "
                  >
                    SPEAK WITH US
                  </p>

                  <h2
                    className="
                      mt-1
                      text-[22px]
                      font-semibold
                      text-[#1A4780]

                      sm:text-[24px]

                      xl:text-[25px]
                    "
                  >
                    Book A Consultation
                  </h2>
                </div>

                {/* =================================================
                    FORM
                    ================================================= */}

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* =================================================
                      NAME + EMAIL
                      ================================================= */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-2

                      sm:grid-cols-2
                    "
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        h-[36px]
                        w-full
                        rounded-[9px]
                        border
                        border-[#e0e4e8]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#333]
                        outline-none
                        transition
                        placeholder:text-[#026CC0]
                        focus:border-[#69b99e]
                      "
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        h-[36px]
                        w-full
                        rounded-[9px]
                        border
                        border-[#e0e4e8]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#333]
                        outline-none
                        transition
                        placeholder:text-[#026CC0]
                        focus:border-[#69b99e]
                      "
                    />
                  </div>

                  {/* =================================================
                      PHONE
                      ================================================= */}

                  <div
                    className="
                      flex
                      w-full
                      gap-2
                    "
                  >
                    {/* COUNTRY FLAG + CODE */}

                    <div
                      className="
                        h-[36px]
                        w-[115px]
                        shrink-0
                        rounded-[9px]
                        border
                        border-[#e0e4e8]
                        bg-white

                        sm:w-[120px]
                      "
                    >
                      <CountrySelect
                        value={formData.phoneCountry}
                        onChange={handlePhoneCountryChange}
                      />
                    </div>

                    {/* PHONE NUMBER */}

                    <div className="min-w-0 flex-1">
                      <PhoneInput
                        country={formData.phoneCountry}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Contact Number"
                        required
                        className="
                          phone-number-input
                          h-[36px]
                          w-full
                          rounded-[9px]
                          border
                          border-[#e0e4e8]
                          bg-white
                          px-4
                          text-[12px]
                          text-[#333]
                          outline-none
                          transition
                          placeholder:text-[#026CC0]
                          focus:border-[#69b99e]
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      INQUIRY
                      ================================================= */}

                  <div className="relative">
                    <select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="
                        h-[36px]
                        w-full
                        appearance-none
                        rounded-[9px]
                        border
                        border-[#e0e4e8]
                        bg-white
                        px-4
                        text-[13px]
                        text-[#026CC0]
                        outline-none
                        focus:border-[#69b99e]

                        sm:text-[14px]
                      "
                    >
                      <option value="">Inquiry for</option>

                      <option value="student-visa">Student Visa</option>

                      <option value="work-visa">Work Visa</option>

                      <option value="visitor-visa">Visitor Visa</option>

                      <option value="migration">Migration</option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#34506d]
                      "
                    />
                  </div>

                  {/* =================================================
                      COUNTRY
                      ================================================= */}

                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="
                        h-[36px]
                        w-full
                        appearance-none
                        rounded-[9px]
                        border
                        border-[#e0e4e8]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#026CC0]
                        outline-none
                        focus:border-[#69b99e]
                      "
                    >
                      <option value="">Country</option>

                      <option value="australia">Australia</option>

                      <option value="new-zealand">New Zealand</option>

                      <option value="singapore">Singapore</option>

                      <option value="canada">Canada</option>

                      <option value="uk">United Kingdom</option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#34506d]
                      "
                    />
                  </div>

                  {/* =================================================
                      COMMENTS
                      ================================================= */}

                  <textarea
                    name="comments"
                    placeholder="Your Comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows="2"
                    className="
                      min-h-[70px]
                      w-full
                      resize-none
                      rounded-[10px]
                      border
                      border-[#e0e4e8]
                      bg-white
                      px-4
                      py-3
                      text-[12px]
                      text-[#333]
                      outline-none
                      placeholder:text-[#026CC0]
                      focus:border-[#69b99e]

                      sm:min-h-[75px]
                    "
                  />

                  <div className="flex min-h-[78px] justify-center sm:justify-start">
                    <ReCAPTCHA
                      sitekey={recaptchaSiteKey}
                      ref={recaptchaRef}
                    />
                  </div>

                  {/* =================================================
                      SUBMIT
                      ================================================= */}

                  <button
                    type="submit"
                    className="
                      mx-auto
                      mt-[-4px]
                      xl:mt-[-6px]
                      flex
                      h-[42px]
                      w-[140px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#214c83]
                      text-[14px]
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#163d70]

                      sm:h-[45px]
                      sm:w-[150px]
                    "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
