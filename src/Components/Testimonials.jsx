import { useState } from "react";
import one from "../assets/one.png";
import one1 from "../assets/one1.png";

const testimonials = [
  {
    id: 1,
    name: "Hiya Bhatt",
    visa: "SC500 - Student Visa",
    text: "I am extremely thankful to Growmore Global Visa for helping me secure my Australian student visa smoothly, despite my case being slightly complex. The team provided clear guidance at every step, especially with documentation and SOP preparation. A special thanks to the Growmore Global Visa team for their continuous support and guidance throughout the process, even after admission.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    visa: "SC500 - Student Visa",
    text: "The entire visa process was handled very professionally. The team at Growmore Global Visa guided me through every step and made the documentation process simple and stress-free.",
  },
  {
    id: 3,
    name: "Priya Patel",
    visa: "SC500 - Student Visa",
    text: "I had a great experience with Growmore Global Visa. Their team was always available to answer my questions and provided excellent support throughout my visa application.",
  },
  {
    id: 4,
    name: "Aman Kumar",
    visa: "SC500 - Student Visa",
    text: "Growmore Global Visa made my entire visa journey very easy. The team was supportive, professional and always available whenever I needed assistance.",
  },
  {
    id: 5,
    name: "Neha Singh",
    visa: "SC500 - Student Visa",
    text: "I highly recommend Growmore Global Visa. Their guidance and attention to detail helped me complete my application confidently and successfully.",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    visa: "SC500 - Student Visa",
    text: "The team provided excellent guidance throughout my visa process. Everything was explained clearly and the overall experience was smooth.",
  },
  {
    id: 7,
    name: "Simran Kaur",
    visa: "SC500 - Student Visa",
    text: "I am very happy with the support I received from Growmore Global Visa. They made the entire process simple and easy to understand.",
  },
  {
    id: 8,
    name: "Rohan Verma",
    visa: "SC500 - Student Visa",
    text: "Professional service and excellent communication throughout the application process. I am very thankful to the entire Growmore team.",
  },
  {
    id: 9,
    name: "Ananya Gupta",
    visa: "SC500 - Student Visa",
    text: "The team was extremely helpful and guided me at every stage of my visa application. I would definitely recommend their services.",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(
    slideIndex * 3,
    slideIndex * 3 + 3
  );

  const totalSlides = Math.ceil(testimonials.length / 3);

  const handleNext = () => {
    if (slideIndex < totalSlides - 1) {
      const nextSlide = slideIndex + 1;

      setSlideIndex(nextSlide);

      // Select first testimonial of next group
      setActiveTestimonial(nextSlide * 3);
    }
  };

  const handlePrevious = () => {
    if (slideIndex > 0) {
      const previousSlide = slideIndex - 1;

      setSlideIndex(previousSlide);

      // Select first testimonial of previous group
      setActiveTestimonial(previousSlide * 3);
    }
  };

  return (
    <section
      className="
        relative
        w-full
        min-h-[520px]
        bg-[#EBFFF2]
        overflow-hidden
        px-5
        sm:px-8
        md:px-10
        xl:px-0
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          min-h-[520px]
        "
      >
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div
          className="
            relative
            pt-[35px]
            mx-auto
            w-full
            xl:absolute
            xl:top-[34px]
            xl:left-[54px]
            xl:pt-0
            xl:mx-0
            xl:w-auto
          "
        >
          {/* Client */}
          <div className="flex items-center gap-[10px] xl:ml-12 mb-2 sm:mb-2">
            <span
              className="
                text-[28px]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[40px]
                leading-tight
                text-[#338292]
              "
            >
              Client
            </span>
          </div>

          {/* Testimonials */}
          <div className="mt-[12px] sm:mt-[-8px] md:mt-[-10px] xl:ml-12 xl:mt-[-14px]">
            <span
              className="
                text-[32px]
                sm:text-[40px]
                md:text-[45px]
                lg:text-[60px]
                leading-tight
                font-semibold
                text-[#8DC8AB]
              "
            >
              Testimonials
            </span>
          </div>

          {/* =====================================================
              TESTIMONIAL CARD
          ====================================================== */}

          <div
            className="
              relative
              w-full
              max-w-[510px]
              min-h-[330px]
              h-auto
              mt-[25px]
              mx-auto
              rounded-[30px]
              bg-[linear-gradient(90deg,#C3FFC5,#D5F3FF)]
              pt-[45px]
              px-[30px]
              pb-[85px]

              sm:px-[40px]

              xl:w-[510px]
              xl:h-[330px]
              xl:mt-[20px]
              xl:ml-[90px]
              xl:mx-0
            "
          >
            {/* Opening Quote */}
            <img
              src={one}
              alt="Opening quote"
              className="
                absolute
                top-[3px]
                left-[-12px]
                w-[45px]
                h-[28px]
                object-contain

                sm:left-[-18px]
                sm:w-[50px]
                sm:h-[30px]

                md:left-[-22px]
                md:w-[55px]
                md:h-[32px]

                xl:left-[-25px]
                xl:w-[57px]
                xl:h-[34px]
              "
            />

            {/* Testimonial */}
            <p
              className="
                mt-[5px]
                text-center
                text-[13px]
                leading-[140%]
                text-[#338292]
                italic

                sm:text-[14px]
                sm:leading-[135%]

                md:text-[15px]
                md:leading-[135%]

                xl:text-[18px]
                xl:leading-[120%]
              "
            >
              {testimonials[activeTestimonial].text}
            </p>

            {/* Client Details */}
            <div
              className="
                absolute
                bottom-[20px]
                left-0
                w-full
                px-4
                text-center

                sm:bottom-[22px]

                xl:bottom-[25px]
              "
            >
              <p
                className="
                  text-[15px]
                  font-semibold
                  text-[#338292]

                  sm:text-[17px]

                  md:text-[18px]

                  xl:text-[20px]
                "
              >
                {testimonials[activeTestimonial].name}
              </p>

              <p
                className="
                  text-[11px]
                  font-semibold
                  text-[#338292]

                  sm:text-[12px]

                  md:text-[14px]

                  xl:text-[16px]
                "
              >
                {testimonials[activeTestimonial].visa}
              </p>
            </div>

            {/* Closing Quote */}
            <img
              src={one1}
              alt="Closing quote"
              className="
                absolute
                bottom-[2px]
                right-[-12px]
                w-[45px]
                h-[28px]
                object-contain
                rotate-[-180]

                sm:right-[-18px]
                sm:w-[50px]
                sm:h-[30px]

                md:right-[-22px]
                md:w-[55px]
                md:h-[32px]

                xl:right-[-25px]
                xl:w-[57px]
                xl:h-[34px]
              "
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div
          className="
            relative
            w-full
            mt-[25px]
            pb-[30px]

            md:mt-[40px]

            xl:absolute
            xl:top-[125px]
            xl:left-[780px]
            xl:w-[430px]
            xl:h-[337px]
            xl:mt-0
            xl:pb-0
          "
        >
          {/* Heading */}
          <div className="mb-[10px] sm:mb-[18px]">
            <p
              className="
                text-[18px]
                sm:text-[21px]
                md:text-[23px]
                lg:text-center
                xl:text-[25px]
                xl:text-left
                font-semibold
                md:text-center
                leading-tight
                text-[#338292]
              "
            >
              Journeys Made Simple
            </p>

            <p
              className="
                mt-2
                text-[18px]
                sm:text-[21px]
                md:text-[23px]
                md:text-center
                lg:text-center
                xl:text-[25px]
                xl:text-left
                font-semibold
                leading-tight
                text-[#009966]
              "
            >
              Real Stories of Global Visa Success
            </p>
          </div>

          {/* =====================================================
              CLIENT SLIDES
          ====================================================== */}

          <div className="relative">
            <div
              className="
                flex
                flex-col
                gap-[8px]
                mt-4
              "
            >
              {visibleTestimonials.map((testimonial) => {
                const actualIndex = testimonials.findIndex(
                  (item) => item.id === testimonial.id
                );

                const isActive =
                  activeTestimonial === actualIndex;

                return (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() =>
                      setActiveTestimonial(actualIndex)
                    }
                    className={`
                      flex
                      items-center
                      w-full
                      max-w-[300px]
                      h-[62px]
                      sm:h-[65px]
                      lg:ml-80
                      md:ml-50
                      xl:ml-0
                      xl:h-[68px]
                      rounded-[8px]
                      border
                      px-[8px]
                      text-left
                      cursor-pointer
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "border-[#C9E3EA] bg-[#F2F9FC] shadow-sm"
                          : "border-[#D9E4E8] bg-[#F8FBFC]"
                      }
                    `}
                  >
                    {/* Avatar */}
                    <div
                      className={`
                        flex
                        items-center
                        justify-center
                        w-[32px]
                        h-[32px]
                        sm:w-[36px]
                        sm:h-[36px]
                        rounded-full
                        text-[16px]
                        sm:text-[18px]
                        font-medium
                        shrink-0

                        ${
                          isActive
                            ? "bg-[#C5F1FA] text-[#338292]"
                            : "bg-[#E9EEF2] text-[#75828A]"
                        }
                      `}
                    >
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Details */}
                    <div className="ml-[8px] flex-1 min-w-0">
                      <p
                        className={`
                          text-[12px]
                          sm:text-[13px]
                          md:text-[14px]
                          font-semibold
                          truncate

                          ${
                            isActive
                              ? "text-[#338292]"
                              : "text-[#61727A]"
                          }
                        `}
                      >
                        {testimonial.name}
                      </p>

                      <p
                        className="
                          text-[10px]
                          sm:text-[11px]
                          md:text-[12px]
                          text-[#75828A]
                          truncate
                        "
                      >
                        {testimonial.visa}
                      </p>
                    </div>

                    {/* Dot */}
                    <span
                      className={`
                        w-[7px]
                        h-[7px]
                        sm:w-[8px]
                        sm:h-[8px]
                        mr-3
                        sm:mr-4
                        rounded-full
                        shrink-0

                        ${
                          isActive
                            ? "bg-[#009BB5]"
                            : "bg-[#D1DCE0]"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* =====================================================
                ARROWS
            ====================================================== */}

            <div
              className="
                flex
                items-center
                gap-[10px]
                mt-[18px]
                ml-0

                sm:ml-[120px]

                md:ml-[280px]
                lg:ml-[395px]
                xl:ml-[72px]
              "
            >
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={slideIndex === 0}
                className="
                  flex
                  items-center
                  justify-center
                  w-[34px]
                  h-[34px]
                  sm:w-[38px]
                  sm:h-[38px]
                  rounded-full
                  border
                  border-[#C9E3EA]
                  text-[#338292]
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  hover:bg-white
                  transition
                "
              >
                ←
              </button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-[5px]">
                {Array.from({ length: totalSlides }).map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setSlideIndex(index);
                        setActiveTestimonial(index * 3);
                      }}
                      className={`
                        h-[8px]
                        rounded-full
                        transition-all
                        ${
                          slideIndex === index
                            ? "bg-[#338292] w-[16px]"
                            : "bg-[#C9E3EA] w-[8px]"
                        }
                      `}
                    />
                  )
                )}
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                disabled={slideIndex === totalSlides - 1}
                className="
                  flex
                  items-center
                  justify-center
                  w-[34px]
                  h-[34px]
                  sm:w-[38px]
                  sm:h-[38px]
                  rounded-full
                  border
                  border-[#C9E3EA]
                  text-[#338292]
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  hover:bg-white
                  transition
                "
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;