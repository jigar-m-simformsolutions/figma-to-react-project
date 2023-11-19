import { Switch } from "@headlessui/react";
import Navbar from "../Layout/Navbar/Navbar";
import "./PricingHero.scss";
import { planPricing } from "../../config/Constants";
import { ArrowRightOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import useScreenType from "../../hooks/useScreenType.hooks";

export default function PricingHero() {
  const { isDesktopScreen, isLaptopScreen } = useScreenType();

  return (
    <div className="pricing-page-hero-container">
      <Navbar />
      <div className="pricing-hero-labels">
        <p className="heading">Our pricing plan made simple</p>
        <p className="sub-heading">
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </p>
        <div className="pricing-switch">
          <span>Bill Monthly</span>
          <Switch
            className={`bg-gray-200 inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`translate-x-6 inline-block h-4 w-4 transform rounded-full transition`}
              style={{ background: "#35B27D" }}
            />
          </Switch>
          <div className="switch-right">
            <span>Bill Annually</span>
            <span style={{ color: "#35B27D" }}>Save 15%</span>
          </div>
        </div>
      </div>
      <div className="pricing-hero-price-list-card">
        {planPricing.map((plan, index) => (
          <div
            key={index}
            className="pricing-plan"
            style={{ borderTop: `3px solid ${plan.planColor}` }}
          >
            <div className="price-plan-list-upper">
              <div>
                <span
                  style={{ color: plan.planColor }}
                  className="price-rupees"
                >
                  {plan.price}
                </span>
                <span>{plan.month}</span>
              </div>
              <div className="price-name">{plan.planName}</div>
              <div>{plan.description}</div>
            </div>

            <div className="divider" />

            <div className="price-plan-list-lower">
              <div className="plan-included-list">
                {plan.planIncluded.map((inc, index) => (
                  <div key={index}>
                    <CheckCircleTwoTone twoToneColor={"#36B37E"} />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
              <div
                className={`${
                  index === planPricing.length - 1
                    ? "last-indexed-btn plan-started-btn"
                    : "plan-started-btn"
                } ${
                  isDesktopScreen || isLaptopScreen
                    ? "rounded-3xl"
                    : "rounded-lg"
                }`}
              >
                <span>Get Started</span>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
