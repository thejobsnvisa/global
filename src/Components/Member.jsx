import g1 from "../assets/g.png";
import g from "../assets/Group.png";

const Member = () => {
  const openVideo = () => {
    window.open(
      "https://www.youtube.com/watch?v=-9w0lpLuVz8",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="min-h-[720px] w-full overflow-hidden bg-[#E2F3E6]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pt-[70px] sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="max-w-[1100px] text-center text-[22px] font-medium leading-[1.4] text-[#487CA2] sm:text-[25px] md:text-[28px]">
          Join Our{" "}
          <span className="text-[25px] text-[#CC4242] sm:text-[28px] md:text-[30px]">
            YouTube Community
          </span>{" "}
          Today for Exclusive Immigration Insights
        </h2>

        {/* Description */}
        <p className="mt-5 w-full max-w-[905px] text-center text-[15px] leading-[1.6] text-[#727272] sm:text-[17px] md:text-[18px]">
          Access expert immigration tips, live Q&A sessions, and insider
          updates designed to guide you confidently through every stage of
          your student, work, dependent, visitor, or migration visa journey.
        </p>

        {/* Main Image - Click to Open YouTube Video */}
        <div
          onClick={openVideo}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              openVideo();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Watch Growmore YouTube video"
          className="mt-8 block w-full max-w-[1100px] cursor-pointer"
        >
          <img
            src={g1}
            alt="Growmore YouTube Community"
            className="h-auto w-[700px] lg:ml-30 xl:ml-48 object-contain transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 md:mt-6 sm:flex-row sm:gap-5">

          {/* Member Access Button */}
          <a
            href="https://www.youtube.com/@GrowmoreGlobalVisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[230px] items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-center text-[15px] font-medium text-cyan-800 transition-all duration-300 hover:bg-cyan-300 sm:w-auto sm:px-8 sm:text-[17px]"
          >
            Get Member Access
          </a>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@GrowmoreGlobalVisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[180px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-all duration-300 hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-[17px]"
          >
            <img
              src={g}
              alt="YouTube"
              className="h-6 w-6 object-contain"
            />

            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Member;