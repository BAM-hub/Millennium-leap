const Input = ({ rounded, type, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={placeholder} className='sr-only'>
        {placeholder}
      </label>
      <input
        id={placeholder}
        name={placeholder}
        type={type}
        autoComplete='current-password'
        required
        className={`bg-gray-300 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
          rounded && "rounded-b-md"
        } ${placeholder === "name" && "rounded-t-md"}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
