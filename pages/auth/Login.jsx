import Image from "next/image";
import Header from "../../components/auth/Header";
import TextInput from "../../components/auth/TextInput";
import PasswordInput from "../../components/auth/PasswordInput";
import Actions from "../../components/auth/Actions";
import logo from "../../public/HeroLogo.svg";

const Login = () => {
  return (
    <div className='w-screen flex items-center justify-center mt-20'>
      <div className='rounded-sm min-h-full flex items-center justify-center py-12 px-6 sm:px-6 lg:px-8 bg-gray-800 w-1/1 sm:w-2/4'>
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
          <form className='mt-8 space-y-6'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <TextInput />
              <PasswordInput rounded={true} />
            </div>
            <Actions link='Already have an account?' text='Sign Up' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
