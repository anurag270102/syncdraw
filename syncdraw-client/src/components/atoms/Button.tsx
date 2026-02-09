type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button
      className="
  w-full py-3 rounded-lg
  text-white font-semibold
  bg-gradient-to-r from-[#2EA7FF] to-[#22C55E]
  hover:opacity-90
  transition
"
    >
      {title}
    </button>
  );
};

export default Button;
