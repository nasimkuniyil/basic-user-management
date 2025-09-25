import { NavLink } from "react-router-dom"


const SignupPage = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div id="signupForm" className="space-y-3">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">Create an Account</h1>
          <p className="text-center text-sm pb-3">Get started with a new account today.</p>

          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="signup-name" name="name" type="text" required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-300" />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="signup-email" name="email" type="email" autoComplete="email" required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-300" />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="signup-password" name="password" type="password" required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-300" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-300" />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300">
                Sign up
              </button>
            </div>
                        <div className="flex items-center justify-between">
              <div className="text-sm">
                <NavLink to="/login" className="font-medium text-primary hover:text-primary-dark transition duration-300 underline hover:no-underline">Already have an account.</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage