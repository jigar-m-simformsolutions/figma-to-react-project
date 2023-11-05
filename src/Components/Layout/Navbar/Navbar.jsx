import { DrawerIcon } from "../../../assets/Icons/DrawerIcon";
import ehyaLogo from "../../../assets/Images/ehya-logo.jpg";
import LandingPopover from "./LandingPopover/LandingPopover";
import PagePopover from "./PagePopover/PagePopover";
import OutlineButton from "../../design-patterns/OutlinedButton/OutlinedButton";
import { Disclosure } from "@headlessui/react";
import { DrawerCloseIcon } from "../../../assets/Icons/DrawerCloseIcon";
import { RightArrowIcon } from "../../../assets/Icons/RightArrowIcon";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar_main_container">
      <header className={`navbar__container`}>
        <span>
          <img src={ehyaLogo} alt="ehya-logo" />
        </span>
        <nav className="right__sideof__navbar">
          <ul>
            <li>Home</li>
            <li>
              <LandingPopover />
            </li>
            <li>
              <PagePopover />
            </li>
            <li>Docs</li>
            <li>Help</li>
            <li>
              <OutlineButton>Get it now</OutlineButton>
            </li>
          </ul>
        </nav>
        <div className="drawer__container">
          <Disclosure>
            {({ open, close }) => (
              <>
                <Disclosure.Button>
                  <DrawerIcon />
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
