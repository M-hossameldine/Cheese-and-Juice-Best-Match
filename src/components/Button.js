const Button = (props) => {
  return (
    <button
      className='text-[#282c34] bg-emerald-200 px-3 py-1 rounded-sm hover:bg-emerald-400 focus:outline-1'
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
