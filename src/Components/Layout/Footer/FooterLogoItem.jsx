import {
  GoogleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import ehyaLogo from "../../../assets/Images/ehya-logo.jpg";

export default function FooterLogoItem() {
  return (
    <div className="footer__logo__container">
      <div>
        <img src={ehyaLogo} alt="app-logo" />
      </div>
      <p>Build a modern and creative website with crealand</p>
      <div className="icon__listing">
        <span>
          <GoogleOutlined />
        </span>
        <span>
          <TwitterOutlined />
        </span>
        <span>
          <InstagramOutlined />
        </span>
        <span>
          <LinkedinFilled />
        </span>
      </div>
    </div>
  );
}
