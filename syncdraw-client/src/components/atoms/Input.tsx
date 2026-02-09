type Props = {
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
};

const Input = ({ placeholder, type = "text", autoFocus }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className="
  w-full px-4 py-3
  border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-white
  rounded-lg
  outline-none
  transition-all duration-200
  focus:border-transparent
  focus:ring-2
  focus:ring-[#2EA7FF]
"
    />
  );
};

export default Input;
