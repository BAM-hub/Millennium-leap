const PasswordInput = ({ rounded }) => {
  return (
    <div>
      <label htmlFor='password' className='sr-only'>
        Password
      </label>
      <input
        id='password'
        name='password'
        type='password'
        autoComplete='current-password'
        required
        className={`bg-gray-300 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
          rounded && "rounded-b-md"
        }`}
        placeholder='Password'
      />
    </div>
  );
};

export default PasswordInput;
