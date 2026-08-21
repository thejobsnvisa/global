import Approach from "../Components/Approach"
import Certification from "../Components/Certification"
import Destination from "../Components/Destination"
import Faq from "../Components/Faq"
import Hero from "../Components/Hero"
import LatestArticles from "../Components/LatestArticles"
import Member from "../Components/Member"
import Services from "../Components/Services"
import Testimonials from "../Components/Testimonials"
import VisaGuidance from "../Components/VisaGuidance"
import WhyGrowmore from "../Components/WhyGrowmore"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Destination/>
      <Services/>
      <WhyGrowmore/>
      <Approach/>
      <Member/>
      <VisaGuidance/>
      <Testimonials/>
      <Certification/>
      <LatestArticles/>
      <Faq/>
    </div>
  )
}

export default Home
