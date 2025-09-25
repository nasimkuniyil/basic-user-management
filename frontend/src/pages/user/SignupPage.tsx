import { NavLink } from "react-router-dom"
import InputField from "../../components/InputField"
import Button from "../../components/Button"
import { useState } from "react"
import API from "../../utils/axios";

interface IFormData{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const SignupPage = () => {

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    console.log(formData);
    
    if(formData.name.trim() == ""){
      alert("invalid name")
      console.log("invalid name");
    }

    if(formData.email.length < 3){
      alert("invalid email")
      console.log("invalid email");
      return;
    }

    if(formData.password !== formData.confirmPassword){
      alert("password do not match");
      console.log("passwords do not match");
      return;
    }
    
    if(formData.password.length < 6){
      alert("password must be at least 6 characters")
      console.log("password must be at least 6 characters");
      return;
    }

    API.post("/user/register", formData).then((res) => {
      console.log("signup success");
      console.log(res.data);
    }).catch((err) => {
      console.log("signup error");
      console.log(err.response.data);
    });
    
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div id="signupForm" className="space-y-3">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">Create an Account</h1>
          <p className="text-center text-sm pb-3">Get started with a new account today.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <InputField name="name" value={formData.name} onChange={onChange} title="name" type="text" placeholder="Full Name"/>
            </div>
            <div>
              <InputField name="email" value={formData.email} onChange={onChange} title="email" type="email" placeholder="Email address"/>
            </div>
            <div>
             <InputField name="password" value={formData.password} onChange={onChange} title="password" type="password" placeholder="Password"/>
            </div>
            <div>
              <InputField name="confirmPassword" value={formData.confirmPassword} onChange={onChange} title="confirm password" type="password" placeholder="Confirm Password"/>
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