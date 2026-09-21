import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import y22 from "../assets/y24.jpg"
import y23 from "../assets/y25.jpg"
import y24 from "../assets/y26.jpg"

const article = [
  {
    id: 1,
    slug:"uk-graduate-visa-changes-2027-what-international-students-need-to-know",
    title:"UK Graduate Visa Changes 2027: What International Students Need to Know",
    metaTitle: "UK Graduate Visa Changes 2027: What International Students Need to Know",
    description:
      "Learn about the UK Graduate Visa changes expected in 2027, including the latest updates, eligibility requirements, application process, and what international students should prepare for.",
    metaDescription:
      "Discover the UK Graduate Visa changes for 2027 and understand how they may affect international students, post-study work options, eligibility, and future applications.",
    date: "sep 11, 2026",
    image: y24,
  },
  {
    id: 2,
    slug:"parents-biggest-concerns-about-sending-children-abroad",
    title:"Parents’ Biggest Concerns About Sending Children Abroad",
    metaTitle: "Parents’ Biggest Concerns About Sending Children Abroad",
    description:
      "Explore the biggest concerns parents have when sending their children abroad, from safety and finances to accommodation, wellbeing, and academic success.",
    metaDescription:
      "Understand parents’ common concerns about children studying abroad and learn how to prepare for safety, costs, accommodation, support, and student wellbeing.",
    date: "sep 1, 2026",
    image: y23,
  },
   {
    id: 3,
    slug:"common-reasons-why-student-visas-get-rejected",
    title:"Common Reasons Why Student Visas Get Rejected",
    metaTitle: "Common Reasons Student Visas Get Rejected and How to Avoid Them",
    description:
      "Learn the most common reasons student visa applications are rejected, including financial evidence, incomplete documents, credibility concerns, and how international students can avoid common mistakes.",
    metaDescription:
      "Discover why student visas get rejected and how to strengthen your application with accurate documents, clear financial evidence, and strong interview preparation.",
    date: "Aug 21, 2026",
    image: y22,
  },
];

const LatestArticles = () => {
  return (
    <section className="mt-10 w-full overflow-hidden bg-white px-4 py-[45px] sm:px-8 sm:py-[50px] md:px-12 md:py-[55px] lg:px-8 lg:py-[20px]">
       {/* Heading */}
        <div className="mx-auto mb-[28px] w-full max-w-[1250px]">
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
    <div className="mx-auto w-full max-w-[1250px]">
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
                 {article.map((article) => (
                   <article
                     key={article.id}
                     className="
                     group
                     w-full
                     max-w-[450px]
                     min-w-0
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
                         h-auto
                         min-h-[150px]
                         w-full
                         rounded-[40px]
                         p-3
                         sm:h-[180px]
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
                           <CalendarDays className="h-4 w-4 text-slate-400 " />{" "}
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
    </section>
  );
};

export default LatestArticles;