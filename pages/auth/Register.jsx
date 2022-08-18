import Image from "next/image";
import { useState } from "react";
import Actions from "../../components/auth/Actions";
import Header from "../../components/auth/Header";
import Input from "../../components/auth/Input";
import logo from "../../public/HeroLogo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isCompany, setIsCompany] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      return alert("Passwords do not match");
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        isCompany,
      }),
    });
    const data = await res.json();
    if (data.error) {
      return alert(data.error);
    }
    localStorage.setItem("token", data.token);
  };

  return (
    <div className='w-screen flex items-center justify-center mt-8'>
      <div className='rounded-sm min-h-full flex items-center justify-center py-8 px-6 sm:px-6 lg:px-8 bg-gray-800 w-1/1 sm:w-2/4'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <div className='w-full flex items-center justify-center'>
              <Image
                className='mx-auto h-12 w-auto'
                src={logo}
                alt='Workflow'
                height={100}
                width={200}
              />
            </div>
            <Header text='Sign in to your account' link='Login' />
          </div>
          <form className='mt-8 space-y-6' onSubmit={register}>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <Input
                type='text'
                placeholder='name'
                value={name}
                setValue={setName}
              />
              <Input
                type='email'
                placeholder='email'
                rounded={false}
                value={email}
                setValue={setEmail}
              />
              <Input
                type='password'
                placeholder='password'
                rounded={false}
                value={password}
                setValue={setPassword}
              />
              <Input
                type='password'
                placeholder='password'
                rounded={true}
                value={passwordConfirmation}
                setValue={setPasswordConfirmation}
              />
            </div>
            <div className='flex items-center'>
              <input
                id='is-company'
                name='is-company'
                type='checkbox'
                checked={isCompany}
                onChange={(e) => setIsCompany(e.target.checked)}
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='is-company'
                className='ml-2 block text-sm text-gray-100'
              >
                {" "}
                Company{" "}
              </label>
            </div>
            <Actions link='Already have an account?' text='Sign Up' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
