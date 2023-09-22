import ehyaLogo from "../../../assets/Images/ehya-logo.jpg";
import LandingPopover from "../../LandingPopover/LandingPopover";
import PagePopover from "../../PagePopover/PagePopover";
import OutlineButton from "../../design-patterns/OutlinedButton/OutlinedButton";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <header className="navbar__container">
        <span>
          <img src={ehyaLogo} alt="web-app-logo" />
        </span>
        <div className="right__sideof__navbar">
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
        </div>
      </header>
    </>
  );
}
