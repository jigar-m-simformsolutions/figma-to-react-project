import ehyaLogo from "../../../assets/Images/ehya-logo.jpg";
import LandingPopover from "./LandingPopover/LandingPopover";
import PagePopover from "./PagePopover/PagePopover";
import OutlineButton from "../../design-patterns/OutlinedButton/OutlinedButton";
import { Disclosure } from "@headlessui/react";
import { DrawerCloseIcon } from "../../../assets/Icons/DrawerCloseIcon";
import { RightArrowIcon } from "../../../assets/Icons/RightArrowIcon";
import ehyaLogoWhite from "../../../assets/Images/ehya-logo-white.png";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.scss";

export default function Navbar({ isWhite = false }) {
  return (
    <div className="navbar_main_container">
      <header className={`navbar__container`}>
        <span>
          {isWhite ? (
            <img src={ehyaLogoWhite} alt="ehya-logo-white" />
          ) : (
            <img src={ehyaLogo} alt="ehya-logo" />
          )}
        </span>
        <nav className="right__sideof__navbar">
          <ul className={`${isWhite ? "text-white" : ""}`}>
            <li>Home</li>
            <li>
              <LandingPopover isWhite={isWhite} />
            </li>
            <li>
              <PagePopover isWhite={isWhite} />
            </li>
            <li>Docs</li>
            <li>Help</li>
            <li>
              <div className={`${isWhite ? "white-btn" : "get-it-now-btn"}`}>
                Get it now
              </div>
            </li>
          </ul>
        </nav>
        <div className="drawer__container">
          <Disclosure>
            {({ open, close }) => (
              <>
                <Disclosure.Button>
                  <MenuOutlined
                    className={`${isWhite ? "text-xl text-white" : ""}`}
                  />
                </Disclosure.Button>

                {open && (
                  <Disclosure.Panel className="drawer__wrapper">
                    <div>
                      <div className="drawer__close__btn" onClick={close}>
                        <DrawerCloseIcon />
                      </div>
                      <div className="drawer__list__item">
                        <ul>
                          <li>Home</li>
                          <li>
                            <span>Landing </span>
                            <RightArrowIcon />
                          </li>
                          <li>
                            <span>Pages </span>
                            <RightArrowIcon />
                          </li>
                          <li>Docs</li>
                          <li>Help</li>
                          <li>
                            <OutlineButton block>Get it now</OutlineButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        </div>
      </header>
    </div>
  );
}
