interface GlassButtonProps {
    text: string;
    onClick: () => void;
}

export function GlassButton({ text, onClick }: GlassButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center lg:text-4xl text-2xl max-w-prose mt-12 mb-3  px-10 py-6 overflow-hidden font-bold font-tiltNeon text-white hover:text-[#0a1b35] rounded-md shadow-2xl group"
    >
      <span
        className="absolute inset-0 w-full h-full transition duration-500 ease-out opacity-0 
        bg-gradient-to-br from-white via-sky-400 to-sky-400 group-hover:opacity-100 group-active:opacity-100"
      ></span>
      {/* <!-- Top gradient glass effect --> */}
      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
      {/* <!-- Bottom gradient glass effect--> */}
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
      {/* <!-- Left gradient glass effect --> */}
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
      {/* <!-- Right gradient glass effect --> */}
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
      <span className="absolute inset-0 w-full h-full border-4 border-white rounded-md opacity-10"></span>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 group-active:w-56 group-active:h-56 opacity-5"></span>
      <span className="relative text-xl lg:text-2xl">
        {text}
      </span>
    </button>
  );
}
