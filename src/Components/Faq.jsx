import { useState } from "react";
import logo from "../assets/logo2.svg";
import b1 from "../assets/b1.svg";

/* ============================================================
   REUSABLE FAQ CARD
============================================================ */
const FaqCard = ({ faq, size = "desktop", isFlipped, onToggle }) => {
  const sizeClasses = {
   
    desktop: {
      wrapper: "h-[186px] w-[260px]",
      question: "text-[20px]",
      answer: "text-[17px]",
      padding: "px-[16px] py-[12px]",
    },

    /* ========================================================
       LG / LARGE
       Responsive between 1024px - 1279px
    ======================================================== */
    large: {
      wrapper: "h-[170px] w-full max-w-[230px]",
      question: "text-[16px]",
      answer: "text-[14px]",
      padding: "px-[12px] py-[10px]",
    },

    /* ========================================================
       MD / TABLET
    ======================================================== */
    tablet: {
      wrapper: "h-[150px] w-full",
      question: "text-[15px]",
      answer: "text-[14px]",
      padding: "px-[16px] py-[12px]",
    },

    /* ========================================================
       MOBILE
    ======================================================== */
    mobile: {
      wrapper: "h-[125px] w-full",
      question: "text-[14px]",
      answer: "text-[13px]",
      padding: "px-[14px] py-[10px]",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      onClick={onToggle}
      className={`
        ${currentSize.wrapper}
        relative
        cursor-pointer
        [perspective:1000px]
      `}
    >
      <div
        className={`
          relative
          h-full
          w-full
          transition-transform
          duration-700
          ease-in-out
          [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* =====================================================
            FRONT - QUESTION
        ====================================================== */}
        <div
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-[16px]
            border
            border-sky-200
            bg-sky-100
            ${currentSize.padding}
            text-center
            shadow-[0px_4px_20px_rgba(0,0,0,0.10)]
            [backface-visibility:hidden]
          `}
        >
          <p
            className={`
              m-0
              ${currentSize.question}
              font-bold
              leading-[1.35]
              text-teal-700
            `}
          >
            {faq.text}
          </p>
        </div>

        {/* =====================================================
            BACK - ANSWER
        ====================================================== */}
        <div
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-[16px]
            border
            border-[#A8DCCA]
            bg-[#C8EBD9]
            ${currentSize.padding}
            text-center
            shadow-[0px_4px_20px_rgba(0,0,0,0.10)]
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          `}
        >
          <p
            className={`
              m-0
              ${currentSize.answer}
              font-semibold
              leading-[1.4]
              text-[#007D7D]
            `}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   FAQ CTA
============================================================ */
const FaqCTA = ({ size = "desktop" }) => {
  /* ==========================================================
     XL / DESKTOP CTA
  ========================================================== */
  if (size === "desktop") {
    return (
      <div
        className="
          col-start-2
          row-start-2
          col-span-2
          row-span-2
          flex
          h-[412px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-[24px]
          bg-slate-100
          px-[40px]
          text-center
          shadow-[0px_4px_20px_rgba(0,0,0,0.10)]
        "
      >
        <img
          src={logo}
          alt="Growmore Global Visa"
          className="
            mt-[-40px]
            h-[172px]
            w-[572px]
            object-contain
          "
        />

        <h3
          className="
            m-0
            mt-[10px]
            bg-gradient-to-r
            from-[#60C2D7]
            to-[#9BCD8F]
            bg-clip-text
            text-[40px]
            font-bold
            leading-[1.15]
            text-transparent
          "
        >
          Too many Queries?
        </h3>

        <p
          className="
            m-0
            mt-[10px]
            max-w-[310px]
            text-[20px]
            font-normal
            leading-[1.45]
            text-slate-600
          "
        >
          Talk to our team – we'll simplify the process and guide you step by
          step.
        </p>

        <a
          href="/contact"
          className="
            mt-4
            hidden
            h-[46px]
            w-[150px]
            items-center
            justify-center
            gap-2
            rounded-[30px]
            bg-[#84C8AF]
            px-[16px]
            py-[12px]
            text-[16px]
            font-semibold
            text-[#27456E]
            xl:flex
          "
        >
          Contact Us

          <img
            src={b1}
            alt="Button Image"
            className="h-[20px] w-[20px]"
          />
        </a>
      </div>
    );
  }

  /* ==========================================================
     LG / LARGE CTA
     1024px - 1279px
  ========================================================== */
  if (size === "large") {
    return (
      <div
        className="
          col-start-2
          row-start-2
          col-span-2
          row-span-2

          flex
          h-[360px]
          w-full
          flex-col
          items-center
          justify-center

          overflow-hidden

          rounded-[22px]
          bg-slate-100

          px-[20px]

          text-center

          shadow-[0px_4px_20px_rgba(0,0,0,0.10)]
        "
      >
        <img
          src={logo}
          alt="Growmore Global Visa"
          className="
            h-[135px]
            w-full
            max-w-[430px]
            object-contain
          "
        />

        <h3
          className="
            mt-2
            bg-gradient-to-r
            from-[#60C2D7]
            to-[#9BCD8F]
            bg-clip-text
            text-[30px]
            font-bold
            leading-[1.15]
            text-transparent
          "
        >
          Too many Queries?
        </h3>

        <p
          className="
            mt-2
            max-w-[280px]
            text-[16px]
            leading-[1.4]
            text-slate-600
          "
        >
          Talk to our team – we'll simplify the process and guide you step by
          step.
        </p>

        <a
          href="/contact"
          className="
            mt-4
            flex
            h-[42px]
            w-[140px]
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#84C8AF]
            text-[14px]
            font-semibold
            text-[#27456E]
          "
        >
          Contact Us

          <img
            src={b1}
            alt=""
            className="h-5 w-5"
          />
        </a>
      </div>
    );
  }

  /* ==========================================================
     TABLET / MOBILE CTA
  ========================================================== */
  return (
    <div
      className={`
        flex
        w-full
        flex-col
        items-center
        justify-center
        rounded-[20px]
        bg-[#F0F5F7]
        px-6
        text-center
        shadow-[0px_4px_20px_rgba(0,0,0,0.10)]

        ${size === "tablet" ? "min-h-[300px]" : "min-h-[280px]"}
      `}
    >
      <img
        src={logo}
        alt="Growmore Global Visa"
        className={`
          object-contain

          ${
            size === "tablet"
              ? "w-[210px]"
              : "w-[190px]"
          }
        `}
      />

      <h3
        className={`
          font-bold
          text-[#67B6BF]

          ${
            size === "tablet"
              ? "mt-3 text-[27px]"
              : "mt-2 text-[24px]"
          }
        `}
      >
        Too many Queries?
      </h3>

      <p
        className={`
          mt-2
          leading-relaxed
          text-gray-600

          ${
            size === "tablet"
              ? "max-w-[360px] text-sm"
              : "max-w-[300px] text-xs"
          }
        `}
      >
        Talk to our team – we'll simplify the process and guide you step by
        step.
      </p>

      <a
        href="/contact"
        className="
          mt-4
          flex
          h-[42px]
          w-[140px]
          items-center
          justify-center
          gap-2
          rounded-full
          bg-[#84C8AF]
          text-sm
          font-semibold
          text-[#27456E]
        "
      >
        Contact Us

        <img
          src={b1}
          alt=""
          className="h-5 w-5"
        />
      </a>
    </div>
  );
};

/* ============================================================
   FAQ COMPONENT
============================================================ */
const Faq = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const faqCards = [
    {
      id: 1,
      text: "Can Growmore Global Visa assist with all types of visa queries?",
      answer:
        "Yes. Growmore Global Visa can assist with a wide range of Australian visa queries, including student, work, dependent, visitor and migration-related visa pathways.",
    },

    {
      id: 2,
      text: "For which country does Growmore Global Visa offer student visa services?",
      answer:
        "Growmore Global Visa provides guidance and support for students looking to study in Australia, helping them understand their visa requirements and application process.",
    },

    {
      id: 3,
      text: "What support is available for work visas?",
      answer:
        "Our team can guide you through suitable work visa options, eligibility requirements, documentation and the overall application process.",
    },

    {
      id: 4,
      text: "How can I apply for a visa with Growmore Global Visa?",
      answer:
        "You can begin by contacting our team for an initial consultation. We will discuss suitable visa options and guide you through the application process.",
    },

    {
      id: 5,
      text: "Can my spouse or children come with me as a dependent?",
      answer:
        "Depending on the visa pathway and your circumstance. Our team can assess your situation and explain the available options.",
    },

    {
      id: 6,
      text: "When is an RMA consultation recommended for visa applications?",
      answer:
        "An RMA consultation is recommended when you need professional guidance about your visa eligibility, pathway, documentation or a complex migration situation.",
    },

    {
      id: 7,
      text: "What documents are required for visa applications?",
      answer:
        "Document requirements vary depending on the visa type and your individual circumstances. Our team will provide you with a tailored document checklist for your application.",
    },

    {
      id: 8,
      text: "What type of services does Growmore Global Visa offer for student visas?",
      answer:
        "We provide guidance throughout the student visa journey, including preparing documentation and navigating the application process.",
    },
  ];

  /* ==========================================================
     FLIP HANDLER
  ========================================================== */
  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="
        w-full
        bg-white

        min-h-[1000px]

        md:min-h-[1000px]

        lg:min-h-[1000px]

        xl:h-[980px]
        xl:min-h-0
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}
      <div
        className="
          mb-[20px]
          mt-8
          px-5

          sm:mt-9
          sm:px-8

          md:mb-[25px]
          md:px-10

          lg:mb-[30px]
          lg:mt-9
          lg:px-[35px]

          xl:mb-[34px]
          xl:mt-10
          xl:ml-35
          xl:px-0
        "
      >
        <h2
          className="
            m-0
            font-medium
            leading-[1]
            text-[#338292]

            text-[26px]

            sm:text-[30px]

            md:text-[34px]

            lg:text-[38px]

            xl:text-[40px]
            xl:ml-3
          "
        >
          Frequently
        </h2>

        <h2
          className="
            m-0
            font-semibold
            leading-[1.05]
            text-[#8DC8AB]

            text-[34px]

            sm:text-[40px]

            md:text-[46px]

            lg:text-[52px]

            xl:text-[60px]
          "
        >
          Asked Questions
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1256px]

          px-5
          pt-[20px]
          pb-[40px]

          sm:px-8
          sm:pt-[25px]

          md:px-10
          md:pt-[30px]

          lg:px-[35px]
          lg:pt-[35px]

          xl:px-0
          xl:pt-[50px]
          xl:pb-[55px]
        "
      >
        {/* =====================================================
            XL
            1280px+
            EXACT DESKTOP FIGMA LAYOUT
        ====================================================== */}
        <div
          className="
            hidden
            xl:grid
            w-full

            grid-cols-[1fr_1fr_1fr_1fr]
            grid-rows-[124px_124px_124px]

            gap-x-[70px]
            gap-y-[100px]
          "
        >
          {/* CARD 1 */}
          <FaqCard
            faq={faqCards[0]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[0].id]}
            onToggle={() => toggleFlip(faqCards[0].id)}
          />

          {/* CARD 2 */}
          <FaqCard
            faq={faqCards[1]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[1].id]}
            onToggle={() => toggleFlip(faqCards[1].id)}
          />

          {/* CARD 3 */}
          <FaqCard
            faq={faqCards[2]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[2].id]}
            onToggle={() => toggleFlip(faqCards[2].id)}
          />

          {/* CARD 4 */}
          <FaqCard
            faq={faqCards[3]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[3].id]}
            onToggle={() => toggleFlip(faqCards[3].id)}
          />

          {/* CARD 5 */}
          <FaqCard
            faq={faqCards[4]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[4].id]}
            onToggle={() => toggleFlip(faqCards[4].id)}
          />

          {/* CENTER CTA */}
          <FaqCTA size="desktop" />

          {/* CARD 6 */}
          <FaqCard
            faq={faqCards[5]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[5].id]}
            onToggle={() => toggleFlip(faqCards[5].id)}
          />

          {/* CARD 7 */}
          <FaqCard
            faq={faqCards[6]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[6].id]}
            onToggle={() => toggleFlip(faqCards[6].id)}
          />

          {/* CARD 8 */}
          <FaqCard
            faq={faqCards[7]}
            size="desktop"
            isFlipped={!!flippedCards[faqCards[7].id]}
            onToggle={() => toggleFlip(faqCards[7].id)}
          />
        </div>

        {/* =====================================================
            LG
            1024px - 1279px

            FIXED:
            - No horizontal overflow
            - Fluid columns
            - Responsive cards
            - Responsive CTA
        ====================================================== */}
        <div
          className="
            hidden
            lg:grid
            xl:hidden

            w-full
            h-[280px]
            grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]

            grid-rows-[170px_360px_170px]

            gap-x-[40px]
            gap-y-[40px]

            items-start
            justify-items-center
          "
        >
          {/* =================================================
              CARD 1
          ================================================== */}
          <div className="col-start-1 row-start-1 w-full flex justify-center">
            <FaqCard
              faq={faqCards[0]}
              size="large"
              isFlipped={!!flippedCards[faqCards[0].id]}
              onToggle={() => toggleFlip(faqCards[0].id)}
            />
          </div>

          {/* =================================================
              CARD 2
          ================================================== */}
          <div className="col-start-2 row-start-1 w-full flex justify-center">
            <FaqCard
              faq={faqCards[1]}
              size="large"
              isFlipped={!!flippedCards[faqCards[1].id]}
              onToggle={() => toggleFlip(faqCards[1].id)}
            />
          </div>

          {/* =================================================
              CARD 3
          ================================================== */}
          <div className="col-start-3 row-start-1 w-full flex justify-center">
            <FaqCard
              faq={faqCards[2]}
              size="large"
              isFlipped={!!flippedCards[faqCards[2].id]}
              onToggle={() => toggleFlip(faqCards[2].id)}
            />
          </div>

          {/* =================================================
              CARD 4
          ================================================== */}
          <div className="col-start-4 row-start-1 w-full flex justify-center">
            <FaqCard
              faq={faqCards[3]}
              size="large"
              isFlipped={!!flippedCards[faqCards[3].id]}
              onToggle={() => toggleFlip(faqCards[3].id)}
            />
          </div>

          {/* =================================================
              CARD 5
          ================================================== */}
          <div className="col-start-1 row-start-2 w-full flex justify-center">
            <FaqCard
              faq={faqCards[4]}
              size="large"
              isFlipped={!!flippedCards[faqCards[4].id]}
              onToggle={() => toggleFlip(faqCards[4].id)}
            />
          </div>

          {/* =================================================
              CENTER CTA
          ================================================== */}
          <FaqCTA size="large" />

          {/* =================================================
              CARD 6
          ================================================== */}
          <div className="col-start-4 row-start-2 w-full flex justify-center">
            <FaqCard
              faq={faqCards[5]}
              size="large"
              isFlipped={!!flippedCards[faqCards[5].id]}
              onToggle={() => toggleFlip(faqCards[5].id)}
            />
          </div>

          {/* =================================================
              CARD 7
          ================================================== */}
          <div className="col-start-1 row-start-3 w-full mt-[-200px] flex justify-center">
            <FaqCard
              faq={faqCards[6]}
              size="large"
              isFlipped={!!flippedCards[faqCards[6].id]}
              onToggle={() => toggleFlip(faqCards[6].id)}
            />
          </div>

          {/* =================================================
              CARD 8
          ================================================== */}
          <div className="col-start-4 row-start-3 w-full mt-[-200px] flex justify-center">
            <FaqCard
              faq={faqCards[7]}
              size="large"
              isFlipped={!!flippedCards[faqCards[7].id]}
              onToggle={() => toggleFlip(faqCards[7].id)}
            />
          </div>
        </div>

        {/* =====================================================
            TABLET
            768px - 1023px
        ====================================================== */}
        <div
          className="
            hidden
            md:grid
            lg:hidden

            grid-cols-2

            gap-x-5
            gap-y-5
          "
        >
          {faqCards.map((faq) => (
            <FaqCard
              key={faq.id}
              faq={faq}
              size="tablet"
              isFlipped={!!flippedCards[faq.id]}
              onToggle={() => toggleFlip(faq.id)}
            />
          ))}

          {/* TABLET CTA */}
          <div className="col-span-2">
            <FaqCTA size="tablet" />
          </div>
        </div>

        {/* =====================================================
            MOBILE
            < 768px
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            md:hidden
          "
        >
          {faqCards.map((faq) => (
            <FaqCard
              key={faq.id}
              faq={faq}
              size="mobile"
              isFlipped={!!flippedCards[faq.id]}
              onToggle={() => toggleFlip(faq.id)}
            />
          ))}

          {/* MOBILE CTA */}
          <FaqCTA size="mobile" />
        </div>
      </div>
    </section>
  );
};

export default Faq;