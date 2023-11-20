import { SearchOutlined } from "@ant-design/icons";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import PlanFaqs from "../../Components/PlanFAQs/PlanFaqs";
import StillQuestionSection from "../../Components/StillQuestionSection/StillQuestionSection";
import { DocumentationIcon } from "../../assets/Icons/DocumentationsIcon";
import { LikeIcon } from "../../assets/Icons/LikeIcon";
import { PricingPlanIcon } from "../../assets/Icons/PricingPlanIcon";
import "./FaqsPage.scss";
import Footer from "../../Components/Layout/Footer/Footer";
import useScreenType from "../../hooks/useScreenType.hooks";

export default function FaqsPage() {
  const { isMobileScreen } = useScreenType();

  return (
    <div className="faqs-page-container">
      <div className="hero-container">
        <Navbar isWhite />
        <div className="hero-labels">
          <div className="title">We are here to help you</div>
          {isMobileScreen ? (
            <div className="mobile-search-box">
              <div className="input-wrapper">
                <div className="search-icon">
                  <SearchOutlined className="icon" />
                </div>
                <input type="text" placeholder="Ask a questions…" />
              </div>
              <button className="search-btn">Search</button>
            </div>
          ) : (
            <div className="search-box">
              <div className="search-icon">
                <SearchOutlined className="icon" />
              </div>
              <input type="text" placeholder="Ask a questions…" />
              <div className="btn-container">
                <button>Search</button>
              </div>
            </div>
          )}
          <div>*We are collect your searching keywords to improve our FAQ</div>
        </div>
      </div>
      <div className="faqs-page-listing">
        <div>Or choose a category to quickly find the help you need</div>
        <div className="card">
          <div>
            <span>
              <DocumentationIcon />
            </span>
            <div className="title">Getting started</div>
            <div className="description">
              All you need from A to Z to getting started are available.
            </div>
          </div>
          <div>
            <span>
              <PricingPlanIcon />
            </span>
            <div className="title">Pricing plan</div>
            <div className="description">
              All you need from A to Z to getting started are available.
            </div>
          </div>
          <div>
            <span>
              <LikeIcon />
            </span>
            <div className="title">Sales questions</div>
            <div className="description">
              All you need from A to Z to getting started are available.
            </div>
          </div>
        </div>
      </div>
      <div>
        <PlanFaqs />
      </div>
      <div>
        <StillQuestionSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
