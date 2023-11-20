// import { MarketingIcon } from "../../assets/Icons/MarketingIcon";
import "./PriceFeatures.scss";

import { pricingPlanFeatures } from "../../config/Constants";

export default function PriceFeatures() {
  return (
    <div className="pricing-plan-features-container">
      <div className="premium-badge">
        <span>PREMIUM</span>
      </div>
      <span className="feature-title">
        All subscriptions plan include these features
      </span>
      <div className="feature-container">
        {pricingPlanFeatures.map((feature, idx) => (
          <div className="feature-list-box" key={idx + 1}>
            <span>{feature.icon}</span>
            <div>
              <span className="title">{feature.title}</span>
              <span>{feature.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
