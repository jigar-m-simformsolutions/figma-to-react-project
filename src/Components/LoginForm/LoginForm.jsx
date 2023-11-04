import Button from "../design-patterns/Button/Button";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-2 mb-4">
        <label className="font-semibold" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          className="appearance-none placeholder-gray-600 border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="appearance-none placeholder-gray-600 border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex font-semibold items-center justify-between">
        <label className="flex items-center mb-4">
          <input type="checkbox" className="form-checkbox mr-2" />
          Keep me signed in
        </label>
        <a href="/reset-password" className="text-blue-500 block mb-4">
          Forgot Password?
        </a>
      </div>
      <Button block>Sign In</Button>
    </form>
  );
}
