import { useState } from "react";
import { blogs } from "../Data/blogsData";
import { Link } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";
const BlogStep = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 9;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  return (
    <section className="bg-white py-20 mb-40 lg:mb-40 md:mb-40 xl:mb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Grid */}
        <div className="mx-auto w-full">
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
            {currentBlogs.map((article) => (
              <article
                key={article.id}
                className="
                group
                w-full
                max-w-[450px]
                overflow-hidden
                rounded-[30px]
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
                  rounded-[20px]
                "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                    h-[180px]
                    p-3
                    rounded-[40px]
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                  "
                  />
                </div>

                {/* Content */}
                <div className="flex min-h-[190px] flex-col px-[12px] pb-[15px] pt-[10px]">
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

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <p className="text-gray-500 text-sm mt-6 flex items-center gap-2 ml-1">
                      <LuCalendarDays className="h-4 w-4 text-slate-400 " />{" "}
                      {article.date}
                    </p>
                    <Link to={`/blogs/${article.slug}`}>
                      <button className="group text-[#078C67] mt-[-20px] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                        <span className="relative">
                          READ MORE
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#078C67] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ✅ PAGINATION */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {/* PREV */}
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-cyan-700 font-bold cursor-pointer ${
              currentPage === 1
                ? "text-blue-400 cursor-pointer hover:text-green-500"
                : "text-black hover:text-green-500 cursor-pointer"
            }`}
          >
            ←
          </button>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-cyan-700 font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogStep;
