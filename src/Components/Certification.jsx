import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import maraCard from "../assets/mara-card.png";
import bg18 from "../assets/bg18.svg";
import icef from "../assets/icef.png";
import qeac from "../assets/qeac.svg";
import isana from "../assets/isana.svg";

const certifications = [
  {
    id: 1,
    image: maraCard,
    alt: "MARA Certification",
  },
  {
    id: 2,
    image: bg18,
    alt: "Certification",
  },
  {
    id: 3,
    image: icef,
    alt: "ICEF Certification",
  },
  {
    id: 4,
    image: qeac,
    alt: "QEAC Certification",
  },
  {
    id: 5,
    image: isana,
    alt: "ISANA Certification",
  },
];

export default function Certification() {
  return (
    <section className="max-w-[1400px] rounded-[40px] bg-sky-100 mx-auto px-6 md:px-12 ">
      {/* Heading */}
        <div className="flex items-center gap-[10px] xl:ml-12 mb-2 sm:mb-2 mt-10">
            <span
              className="
                text-[28px]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[40px]
                leading-tight
                text-[#338292]
                mt-10
              "
            >
              Certification And
            </span>
          </div>

          {/* Testimonials */}
          <div className="mt-[12px] sm:mt-[-8px] md:mt-[-10px] xl:ml-12 xl:mt-[-14px]">
            <span
              className="
                text-[32 px]
                sm:text-[40px]
                md:text-[45px]
                xl:text-[60px]
                leading-tight
                font-semibold
                text-[#8DC8AB]
              "
            >
              Accreditation
            </span>
          </div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {certifications.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[280px] flex items-center justify-center">
              <img
                src={item.image}
                alt="certification"
                className="max-h-[200px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
