import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import SignupForm from "../../Components/SignupForm/SignupForm";
import GoogleSigninButton from "../../Components/design-patterns/GoogleSigninButton/GoogleSigninButton";
import "./signuppage.scss";

function SignupPage() {
  return (
    <>
      <div className="signup__container mx-auto bg-white my-6">
        <h1 className="text-2xl font-extrabold text-center md:text-3xl mb-4">
          Let&apos;s join us
        </h1>

        <GoogleSigninButton>Sign in with Google</GoogleSigninButton>

        <div className="flex items-center my-6">
          <div className="border-t h-[3px] border-gray-300 flex-grow mr-4 font-extrabold"></div>
          <div className="text-gray-600 font-bold text-center">
            Or, sign up with your email
          </div>
          <div className="border-t border-gray-300 flex-grow ml-4"></div>
        </div>

        <SignupForm />

        <p className="mt-6 font-semibold">
          Already have an account?{" "}
          <a href="/login" className=" ml-2 text-blue-500">
            Sign in now
          </a>
        </p>
      </div>
    </>
  );
}
const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: false })(
  SignupPage
);
export default hoc;
