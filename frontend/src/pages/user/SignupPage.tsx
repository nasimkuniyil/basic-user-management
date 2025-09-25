import { NavLink } from "react-router-dom"
import InputField from "../../components/InputField"
import Button from "../../components/Button"


const SignupPage = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div id="signupForm" className="space-y-3">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">Create an Account</h1>
          <p className="text-center text-sm pb-3">Get started with a new account today.</p>

          <form action="#" method="POST" className="space-y-4">
            <div>
              <InputField title="name" type="text" placeholder="Full Name"/>
            </div>
            <div>
              <InputField title="email" type="email" placeholder="Email address"/>
            </div>
            <div>
             <InputField title="password" type="password" placeholder="Password"/>
            </div>
            <div>
              <InputField title="confirm password" type="password" placeholder="Confirm Password"/>
            </div>
            <div className="text-center">
              <Button onClick={() => {}}>Sign up</Button>
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