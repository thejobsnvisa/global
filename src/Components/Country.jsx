import { useEffect, useState } from "react";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import e9 from "../assets/e9.png";
import e10 from "../assets/e10.png";
import e11 from "../assets/e11.png";
import e12 from "../assets/e12.png";

const countries = [
  ["Australia", e1],
  ["Canada", e2],
  ["United Kingdom", e3],
  ["UAE", e4],
  ["France", e5],
  ["USA", e6],
  ["Germany", e7],
  ["New Zealand", e8],
  ["Europe", e9],
  ["Georgia", e10],
  ["Singapore", e11],
  ["Russia", e12],
];

const Country = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveSlide((slide) => slide + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = (event) => {
    if (
      event.propertyName === "transform" &&
      activeSlide >= countries.length
    ) {
      setIsAnimating(false);
      setActiveSlide(0);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-visible">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex gap-3 [--slide-width:calc(50%_-_6px)] sm:[--slide-width:calc(25%_-_9px)] ${
              isAnimating
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(calc(-${activeSlide} * (var(--slide-width) + 0.75rem)))`,
            }}
          >
            {[...countries, ...countries].map(([name, image], index) => (
              <article
                key={`${name}-${index}`}
                className="flex h-[153px] min-w-[calc(50%_-_6px)] shrink-0 flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-[#E4FFED] to-[#E8F7FF] py-3 sm:min-w-[calc(25%_-_9px)]"
              >
                <div className="mt-[-65px] mb-2 flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                  <img
                    src={image}
                    alt={`${name} landmark`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center gap-2 text-[20px] font-bold text-[#26839A]">
                  {name}
                  <span aria-hidden="true"> → </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;