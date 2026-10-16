import BlogsStep from "../Components/BlogStep"
import img from "../assets/img23.png";

const Blogs = () => {
  return (
    <>
      <div>
        <section className="relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[370px] lg:h-[480px]">
          <img
            src={img}
            alt="Blogs banner"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.78) 35%, rgba(255,255,255,0) 80%)",
            }}
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10 xl:px-0">
            <p className="mb-2 text-sm sm:text-base md:text-[17px] lg:text-[18px]">
              <span className="text-sky-500">Home &gt; </span>
              <span className="text-cyan-800">Blogs</span>
            </p>

            <h1 className="mt-3 text-[32px] font-semibold leading-[1.1] text-[#669980] sm:mt-5 sm:text-[44px] md:mt-7 md:text-[52px] lg:mt-8 lg:text-[60px]">
              Blogs
            </h1>
          </div>
        </section>
        <BlogsStep />
      </div>
    </>
  );
};

export default Blogs;
