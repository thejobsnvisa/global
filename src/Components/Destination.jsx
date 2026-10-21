import { useEffect, useRef } from "react";
import newzealand from "../assets/newzealand1.jpg"
import australia1 from "../assets/australia1.jpg"
import canada from "../assets/canada.jpg"
import uk from "../assets/united kingdom.jpg"
import france from "../assets/france.jpg"
import germany from "../assets/germany.jpg"
import russia from "../assets/russia.jpg"
import singapore from "../assets/singapore.jpg"
import dubai from "../assets/dubai.jpg"

const destination = [
  {
    name: "New Zealand",
    image: newzealand,
    link: "/services/student-visa/new-zealand",
  },
  {
    name: "Australia",
    image: australia1,
    link: "/services/student-visa/australia",
  },
  {
    name: "Canada",
    image: canada,
    link: "/services/student-visa/canada",
  },
  {
    name: "UK",
    image: uk,
    link: "/services/student-visa/uk",
  },
  {
    name: "France",
    image: france,
    link: "/services/student-visa/france",
  },
  {
    name: "Germany",
    image: germany,
    link: "/services/student-visa/germany",
  },
  {
    name: "Dubai",
    image: dubai,
    link: "/services/student-visa/dubai",
  },
  {
    name: "Russia",
    image: russia,
    link: "/services/student-visa/russia",
  },
  {
    name: "Singapore",
    image: singapore,
    link: "/services/student-visa/singapore",
  },
];

const Destination = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frameId;
    const speed = 0.5;

    const animate = () => {
      if (!slider) return;
      slider.scrollLeft += speed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="w-full bg-white py-[clamp(3rem,7vw,5rem)]">
      <div className="mx-auto w-full max-w-[1350px] px-[clamp(1.25rem,5vw,3rem)]">

        {/* Heading */}
        <div className="mb-[clamp(1.75rem,4vw,2.5rem)]">
          <p
            className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-[#26839A]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Start with
          </p>

          <h2
            className="mt-0 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] text-[#5B9E7D]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Your Destination
          </h2>
        </div>

        {/* Cards */}
        <div className="relative">
          <div
            id="destination-slider"
            ref={sliderRef}
            className="
              flex
              gap-[clamp(1rem,2vw,1.625rem)]
              overflow-x-auto
              pb-4
              scrollbar-hide
            "
          >
            {destination.concat(destination).map((destination, index) => (
              <a
                key={`${destination.name}-${index}`}
                href={destination.link}
                className="
                  group
                  relative
                  h-[clamp(18.75rem,28vw,21.875rem)]
                  min-w-0
                  flex-[0_0_clamp(15rem,22vw,17.5rem)]
                  overflow-hidden
                  rounded-[25px]
                "
              >
                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Bottom gradient */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[45%]
                    bg-gradient-to-t
                    from-black/80
                    via-black/35
                    to-transparent
                  "
                />

                {/* Name */}
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p
                    className="text-[15px] font-medium text-white md:text-[16px]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {destination.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;