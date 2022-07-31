const Header = ({ text, link }) => {
  return (
    <>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-300'>
        {text}
      </h2>
      <p className='mt-2 text-center text-sm text-gray-400'>
        Or
        <a
          href='#'
          className='font-medium text-indigo-600 hover:text-indigo-500'
        >
          {" "}
          {link}{" "}
        </a>
      </p>
    </>
  );
};

export default Header;
