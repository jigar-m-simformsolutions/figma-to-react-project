import ehyaLogo from "../../../assets/Images/ehya-logo.jpg";
import LandingPopover from "./LandingPopover/LandingPopover";
import PagePopover from "./PagePopover/PagePopover";
import ehyaLogoWhite from "../../../assets/Images/ehya-logo-white.png";
import "./Navbar.scss";
import Drawer from "./Drawer/Drawer";

export default function Navbar({ isWhite = false }) {
  return (
    <div className="navbar-main-container">
      <header className="navbar-container">
        <span>
          {isWhite ? (
            <img src={ehyaLogoWhite} alt="ehya-logo-white" />
          ) : (
            <img src={ehyaLogo} alt="ehya-logo" />
          )}
        </span>
        <nav className="right-sideof-navbar">
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
        <div className="drawer-container">
          <Drawer isWhite={isWhite} />
        </div>
      </header>
    </div>
  );
}
