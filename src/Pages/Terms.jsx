import img from "../assets/terms.png"

const Terms = () =>{
    return(
        <>
         <section className="relative h-[300px] w-full overflow-hidden 2xl:h-[580px] sm:h-[340px] md:h-[370px] lg:h-[400px] xl:h-[420px]">
                {/* Banner Image */}
                <img
                  src={img}
                  alt="Migration"
                  className="absolute inset-0 h-full w-full object-cover"
                />
        
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]" />
        
                {/* Banner Content */}
                <div className="relative z-10 mx-auto flex h-full w-full max-w-[1256px] flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-10">
                  {/* Breadcrumb */}
                  <p className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                    <span className="text-sky-500">Home &gt; </span>
                    <span className="text-cyan-800 font-medium">Terms & Services</span>
                  </p>
        
                  {/* Banner Heading */}
                  <h1 className="mt-4 text-[38px] font-semibold leading-[1.1] text-[#669980] sm:mt-6 sm:text-[44px] md:mt-8 md:text-[52px] lg:mt-10 lg:text-[60px]">
                    Terms & Services
                  </h1>
                </div>
              </section>

        </>
    )
}
export default Terms;