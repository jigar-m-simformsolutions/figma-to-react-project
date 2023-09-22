import "./resetpassword.scss";
import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import Button from "../../Components/design-patterns/Button/Button";
import { LeftArrowIcon } from "../../assets/Icons/LeftArrowIcon";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const router = useNavigate();

  return (
    <>
      <div className="reset__password__container mx-auto bg-white my-6">
        <h1 className="text-2xl font-extrabold text-center md:text-3xl mb-4">
          Reset password
        </h1>

        <div className=" font-extralight text-center mb-8">
          Enter your email to reset your password.
        </div>

        <form>
          <div className="flex flex-col gap-2 mb-4">
            <label className="font-semibold" htmlFor="email">
              Email address
            </label>
            <div>
              <input
                id="email"
                className="placeholder-gray-600 border rounded w-full py-3 px-3  focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter email address"
              />
            </div>
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
