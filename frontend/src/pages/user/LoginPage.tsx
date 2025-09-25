import { NavLink } from 'react-router-dom'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { useState } from 'react';

interface IFormData{
  email: string;
  password: string;
}

const LoginPage = () => {

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: ''
  });

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div id="loginForm" className="space-y-6">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">Welcome Back</h1>
          <p className="text-center text-text-light">Log in to your account to continue.</p>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <InputField title="email" type="email" placeholder="Email address"/>
            </div>

            <div>
              <InputField title="password" type="password" placeholder="Password"/>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                <NavLink to="/signup" className="font-medium text-primary hover:text-primary-dark transition duration-300 underline hover:no-underline">Create an account?</NavLink>
              </div>
            </div>

            <div className='text-center'>
              <Button onClick={() => {}}>Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;