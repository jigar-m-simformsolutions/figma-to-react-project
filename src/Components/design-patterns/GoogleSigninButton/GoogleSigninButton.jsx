import { GoogleIcon } from "../../../assets/Icons/GoogleIcon";
import "./GoogleSigninButton.scss";
import PropTypes from "prop-types";

export default function GoogleSigninButton({ children, onClick }) {
  return (
    <button className={`google__signin__btn`} onClick={onClick}>
      <span className="google_icon_block">{<GoogleIcon />}</span>
      <p>{children}</p>
    </button>
  );
}

GoogleSigninButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
