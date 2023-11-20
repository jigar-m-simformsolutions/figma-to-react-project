import { BecomePartnerIcon } from "../assets/Icons/BecomePartnerIcon";
import { BenifitsIcon } from "../assets/Icons/BenifitsIcons";
import { CustomerServiceIcon } from "../assets/Icons/CustomerServiceIcon";
import { MarketingIcon } from "../assets/Icons/MarketingIcon";

export const footerList = {
  productlist: [
    "Product",
    "Landingpage",
    "Features",
    "Documentation",
    "Referral Program",
    "Pricing",
  ],

  serviceList: [
    "Services",
    "Documentation",
    "Design",
    "Themes",
    "Illustrations",
    "UI Kits",
  ],

  companyList: ["Company", "About", "Terms", "Privacy Policy", "Careers"],

  moreList: ["More", "Documantation", "License", "Changelog"],
};

export const planPricing = [
  {
    planColor: "#183B56",
    price: "$39",
    month: "/month",
    planName: "Standard",
    description: "All the basics for businesses that are just getting started.",
    planIncluded: [
      "Single project use",
      "Basic dashboard",
      "All components included",
    ],
  },
  {
    planColor: "#36B37E",
    price: "$99",
    month: "/month",
    planName: "Essentials",
    description: "Better for growing businesses that want more customers.",
    planIncluded: [
      "Unlimited project use",
      "Advanced dashboard",
      "All components included",
      "Advanced insight",
    ],
  },
  {
    planColor: "#1565D8",
    price: "$339",
    month: "/month",
    planName: "Premium",
    description: "Advanced features for pros who need more customization.",
    planIncluded: [
      "Unlimited project use",
      "Advanced dashboard",
      "Mutlivariate components",
      "Phone Support",
    ],
  },
];

export const FAQs = [
  {
    question: "How do I pay for the Essentials or Premium plan?",
    answer:
      "You can pay with a credit card or via net banking (if you're in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    question:
      "Can I cancel my Essentials or Premium plan subscription at any time?",
    answer:
      "You can pay with a credit card or via net banking (if you're in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    question: "We need to add new users to our team. How will that be billed?",
    answer:
      "You can pay with a credit card or via net banking (if you're in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    question:
      "My team wants to cancel its subscription. How do we do that? Can we get a refund?",
    answer:
      "You can pay with a credit card or via net banking (if you're in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    open: false,
    question:
      "Do you offer discounts for non-profit organizations or educational institutions?",
    answer:
      "You can pay with a credit card or via net banking (if you're in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
];

export const pricingPlanFeatures = [
  {
    title: "Marketing tools",
    description:
      "Materials, education and campaigns to help you share with current and future clients.",
    icon: MarketingIcon(),
  },
  {
    title: "Benefits",
    description:
      "Digital employee records, quoting, enrollment, and reporting in English and Indonesian.",
    icon: BenifitsIcon(),
  },
  {
    title: "Customer services",
    description:
      "Access to our team of industry experts, personal training, support line and help desk.",
    icon: CustomerServiceIcon(),
  },
  {
    title: "Become partners",
    description:
      "We can help you set up and manager your groups if you are become our partner.",
    icon: BecomePartnerIcon(),
  },
];
