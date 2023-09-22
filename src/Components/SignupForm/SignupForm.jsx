import Button from "../design-patterns/Button/Button";

export default function SignupForm() {
  return (
    <form>
      <div className="flex flex-col gap-2 mb-4">
        <label className="font-semibold" htmlFor="name">
          Your name*
        </label>
        <input
          id="name"
          className="appearance-none placeholder-gray-600 border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="flex flex-col gap-2  mb-4">
        <label className="font-semibold" htmlFor="email">
          Email address*
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
          Password*
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
          Agree to terms & conditions
        </label>
      </div>
      <Button block>Sign Up</Button>
    </form>
  );
}
