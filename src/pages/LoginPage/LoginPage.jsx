/* eslint-disable react-refresh/only-export-components */
import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import GoogleSigninButton from "../../Components/design-patterns/GoogleSigninButton/GoogleSigninButton";
import "./loginpage.scss";

function LoginPage() {
  return (
    <>
      <div className="login__container mx-auto bg-white my-6">
        <h1 className="text-2xl font-extrabold text-center md:text-3xl mb-4">
          Welcome back.
        </h1>

        <GoogleSigninButton>Sign in with Google</GoogleSigninButton>

        <div className="flex items-center my-6">
          <div className="border-t h-[3px] border-gray-300 flex-grow mr-4 font-extrabold"></div>
          <div className="text-gray-600 font-bold text-center">
            Or Sign In with Your Email
          </div>
          <div className="border-t border-gray-300 flex-grow ml-4"></div>
        </div>

        <LoginForm />

        <p className="mt-6 font-semibold">
          Don&apos;t have an account?{" "}
          <a href="/signup" className=" ml-2 text-blue-500 hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </>
  );
}

const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: false })(
  LoginPage
);
export default hoc;
