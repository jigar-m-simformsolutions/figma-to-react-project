import useScreenType from "../../../hooks/useScreenType.hooks";
import ListItems from "./FooterListItem/ListItems";
import "./Footer.scss";
import FooterLogoItem from "./FooterLogoItem/FooterLogoItem";
import FooterLastContainer from "./FooterLastContainer/FooterLastContainer";
import { footerList } from "../../../config/Constants";

export default function Footer() {
  const { isDesktopScreen, isLaptopScreen, isMobileScreen, isTabletScreen } =
    useScreenType();

  if (isDesktopScreen || isLaptopScreen) {
    return (
      <div className="footer-container-laptop-screen">
        <div className="footer-first-wrapper">
          <FooterLogoItem />
          <ListItems arr={footerList.productlist} />
          <ListItems arr={footerList.serviceList} />
          <ListItems arr={footerList.companyList} />
          <ListItems arr={footerList.moreList} />
        </div>
        <div>
          <FooterLastContainer />
        </div>
      </div>
    );
  } else if (isTabletScreen) {
    return (
      <div className="footer-container-tablet-screen">
        <div className="footer-first-wrapper">
          <FooterLogoItem />
          <ListItems arr={footerList.productlist} />
          <ListItems arr={footerList.serviceList} />
        </div>
        <div className="footer-second-wrapper">
          <ListItems arr={footerList.companyList} />
          <ListItems arr={footerList.moreList} />
        </div>
        <div>
          <FooterLastContainer />
        </div>
      </div>
    );
  } else if (isMobileScreen) {
    return (
      <div className="footer-container-mobile-screen">
        <div className="footer-first-wrapper">
          <ListItems arr={footerList.productlist} />
          <ListItems arr={footerList.serviceList} />
        </div>
        <div className="footer-second-wrapper">
          <ListItems arr={footerList.companyList} />
          <ListItems arr={footerList.moreList} />
        </div>
        <div className="footer-third-wrapper">
          <FooterLogoItem />
        </div>
      </div>
    );
  } else return <></>;
}
