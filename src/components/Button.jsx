function Button({ children , handleClick }) {
  return (
    <button onClick={handleClick} className="transform-all max-w-[350px]  rounded-full border bg-green-500 px-5 py-4 font-mont  text-sm font-bold text-green-950 duration-300 hover:ring-2 hover:ring-green-500 hover:ring-offset-1 sm:max-w-[100%] sm:px-10 sm:text-base">
      {children}
    </button>
  );
}

export default Button;