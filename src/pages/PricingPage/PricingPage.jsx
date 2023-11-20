import Footer from "../../Components/Layout/Footer/Footer";
import PlanFaqs from "../../Components/PlanFAQs/PlanFaqs";
import PriceFeatures from "../../Components/PriceFeatures/PriceFeatures";
import PricingHero from "../../Components/PricingHero/PricingHero";
import StillQuestionSection from "../../Components/StillQuestionSection/StillQuestionSection";
import "./PricingPage.scss";

function PricingPage() {
  return (
    <div className="pricing-page-container">
      <div className="hero-container">
        <PricingHero />
      </div>
      <div>
        <div>
          <PriceFeatures />
        </div>
        <div className="divider" />
        <div>
          <PlanFaqs />
        </div>
        <div>
          <StillQuestionSection />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PricingPage;
