import useScreenType from "../../../hooks/useScreenType";
import ListItems from "./ListItems";
import "./Footer.scss";
import FooterLogoItem from "./FooterLogoItem";
import { HeartFilled } from "@ant-design/icons";

const productlist = [
  "Product",
  "Landingpage",
  "Features",
  "Documentation",
  "Referral Program",
  "Pricing",
];

const serviceList = [
  "Services",
  "Documentation",
  "Design",
  "Themes",
  "Illustrations",
  "UI Kits",
];

const companyList = ["Company", "About", "Terms", "Privacy Policy", "Careers"];

const moreList = ["More", "Documantation", "License", "Changelog"];

export default function Footer() {
  const { isDesktopScreen, isLaptopScreen, isMobileScreen, isTabletScreen } =
    useScreenType();

  return (
    <div className="footer__container">
      <div>
        {(isDesktopScreen || isLaptopScreen || isTabletScreen) && (
          <FooterLogoItem />
        )}
        <ListItems arr={productlist} />
        <ListItems arr={serviceList} />
        <ListItems arr={companyList} />
        <ListItems arr={moreList} />
      </div>
      <div className="footer__last__container">
        <span>
          <HeartFilled />
        </span>
        <p>Copyright © 2019. Crafted with love.</p>
      </div>
    </div>
  );
}
