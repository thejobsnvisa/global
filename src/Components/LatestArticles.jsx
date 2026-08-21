import { ArrowRight } from "lucide-react";
import uk from "../assets/UK.jpg";

const articles = [
  {
    id: 1,
    image: uk,
    title: "Time to Reform Australia’s Student Visa System",
    description:
      "Australia has long been recognized as one of the world's leading destinations for international students.",
  },
  {
    id: 2,
    image: uk,
    title: "Time to Reform Australia’s Student Visa System",
    description:
      "Australia has long been recognized as one of the world's leading destinations for international students.",
  },
  {
    id: 3,
    image: uk,
    title: "Time to Reform Australia’s Student Visa System",
    description:
      "Australia has long been recognized as one of the world's leading destinations for international students.",
  },
];

const LatestArticles = () => {
  return (
    <section className="w-full bg-white px-5 py-[45px] sm:px-8 sm:py-[50px] md:px-12 md:py-[55px] lg:px-8 lg:py-[20px] mt-10">
       {/* Heading */}
        <div className="mb-[28px] lg:ml-3 xl:ml-30">
          <h2
            className="
              text-[28px]
              font-normal
              leading-[1.2]
              text-[#2587A2]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[40px]
            "
          >
            Latest{" "}
            <span
              className="
                text-[42px]
                font-semibold
                text-[#8DC8AB]
                sm:text-[48px]
                md:text-[54px]
                lg:text-[60px]
              "
            >
              Articles
            </span>
          </h2>

          <p
            className="
              mt-[8px]
              text-[18px]
              font-normal
              text-[#4D9EC7]
              sm:text-[20px]
              md:text-[22px]
              lg:text-[25px]
            "
          >
            Global Immigration and Visa News
          </p>
        </div>
      <div className="mx-auto max-w-[984px]">

        {/* Articles */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-[25px]
            sm:grid-cols-2
            sm:gap-[30px]
            md:gap-[35px]
            lg:grid-cols-3
            lg:gap-[40px]
          "
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="
                group
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-[14px]
                bg-gradient-to-b
                from-white
                to-[#ECFFF5]
                shadow-[0px_4px_14px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0px_8px_22px_rgba(0,0,0,0.15)]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  mx-[7px]
                  mt-[7px]
                  overflow-hidden
                  rounded-[10px]
                "
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    h-[125px]
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="px-[12px] pb-[15px] pt-[10px]">

                {/* Title */}
                <h3
                  className="
                    mt-[10px]
                    line-clamp-2
                    text-[17px]
                    font-bold
                    leading-[1.35]
                    text-[#078C67]
                    sm:text-[18px]
                  "
                >
                  {article.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-[10px]
                    line-clamp-2
                    text-[13px]
                    font-normal
                    leading-[1.45]
                    text-[#3295A5]
                    sm:text-[14px]
                  "
                >
                  {article.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="
                    mx-auto
                    mt-[14px]
                    flex
                    items-center
                    gap-[4px]
                    text-[13px]
                    font-semibold
                    text-[#078C67]
                    transition-all
                    duration-200
                    hover:gap-[7px]
                    sm:text-[14px]
                  "
                >
                  Read More
                  <ArrowRight
                    size={10}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;