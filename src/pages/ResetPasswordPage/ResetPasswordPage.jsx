import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import Button from "../../Components/design-patterns/Button/Button";
import { LeftArrowIcon } from "../../assets/Icons/LeftArrowIcon";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordPage.scss";

function ResetPasswordPage() {
  const router = useNavigate();

  return (
    <>
      <div className="reset-password-page-container">
        <h1 className="top-text">Reset password</h1>

        <div className="top-sub-text">
          Enter your email to reset your password.
        </div>

        <form className="form-container">
          <div className="input-box">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className="focus:shadow-outline"
              placeholder="Enter email address"
            />
          </div>
          <Button block>Reset password</Button>
        </form>
        <p
          onClick={() => router(-1)}
          className="mt-4 font-semibold text-blue-500"
        >
          <span className="inline-block mr-2 cursor-pointer">
            <LeftArrowIcon />
          </span>
          <a href="/login">Back to homepage</a>
        </p>
      </div>
    </>
  );
}
const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: false })(
  ResetPasswordPage
);
export default hoc;
