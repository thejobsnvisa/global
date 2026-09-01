import img from "../assets/x2.png";
import b1 from "../assets/b1.svg";
const Visitor = () => {
  return (
    <>
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[370px] lg:h-[400px] xl:h-[510px]">
        {/* Banner Image */}
        <img
          src={img}
          alt="Visitor Visa"
          className="
    absolute
    top-0
    left-0
    h-full
    w-full
    object-cover
  "
        />

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(89.92deg, #FFFFFF 0.06%, rgba(255, 255, 255, 0) 58.4%)",
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10">
          {/* Breadcrumb */}
          <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Services &gt; </span>
            <span className="text-cyan-800 font-medium">Visitor Visa</span>
          </p>

          {/* Banner Heading */}
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.1] text-[#669980] sm:mt-6 sm:text-[44px] md:mt-8 md:text-[52px] lg:mt-10 lg:text-[60px]">
            Visitor Visa
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-emerald-50 py-12 md:py-16 lg:py-20 h-[990px] md:h-[850px] lg:h-[780px] xl:h-[650px]">
        <div className="mx-auto flex max-w-[1064px] flex-col items-center gap-6 px-5 text-center text-cyan-700 sm:px-8">
          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            A visitor visa or tourist visa is a type of legal document issued by
            a specific country’s government to allow people to stay in their
            country for a short duration for non-immigrant purposes. In short,
            it enables international travellers to enter a foreign territory but
            does not permit permanent employment or long-term residence. The
            validity period and duration of stay vary based on the country and
            the applicant’s profile. So, with this visa, you can travel legally,
            confidently, and within immigration guidelines.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            No matter if you are going for a short holiday, meeting relatives,
            or taking part in an event abroad, careful planning makes all the
            difference. Here, a well-prepared visitor visa application helps you
            in securing approval smoothly, avoiding delays, and converting your
            travel plans into a reality without stress.
          </p>

          <p className="text-[16px] leading-relaxed sm:text-[18px] md:text-[20px]">
            So, get in touch with Growmore Global Visa now and ensure your
            visitor visa application is expertly prepared for maximum approval
            chances.
          </p>

          {/* Centered CTA Button */}
          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#84C8AF] px-6 py-3 text-[16px] font-semibold text-[#27456E] transition-all hover:bg-[#6ebc9f] hover:shadow-md"
          >
            Contact Us
            <img src={b1} alt="Arrow" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Visitor;
