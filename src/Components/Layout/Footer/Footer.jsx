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
      <div className="footer__container__laptop__screen">
        <div className="footer__first__wrapper">
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
      <div className="footer__container__tablet__screen">
        <div className="footer__first__wrapper">
          <FooterLogoItem />
          <ListItems arr={footerList.productlist} />
          <ListItems arr={footerList.serviceList} />
        </div>
        <div className="footer__second__wrapper">
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
      <div className="footer__container__mobile__screen">
        <div className="footer__first__wrapper">
          <ListItems arr={footerList.productlist} />
          <ListItems arr={footerList.serviceList} />
        </div>
        <div className="footer__second__wrapper">
          <ListItems arr={footerList.companyList} />
          <ListItems arr={footerList.moreList} />
        </div>
        <div className="footer__third__wrapper">
          <FooterLogoItem />
        </div>
      </div>
    );
  } else return <></>;
}
