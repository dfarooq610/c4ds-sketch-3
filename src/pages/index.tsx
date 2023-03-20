import { getSkiSubtitle } from "../../services/utils";
import { useRouter } from "next/router";
import NeonSkiSign from "../../components/NeonSkiSign";

/**
 *
 * @returns  a landing page with a blue-black radial gradient around the center with the text "So you want to plan a ski trip, huh?" at the center of the radial gradient
 */
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="max-w-7xl">
        <h1
          className="text-center font-tiltNeon font-extrabold text-transparent text-6xl lg:text-8xl p-3 m-auto bg-clip-text
          bg-gradient-to-t from-white via-sky-400 to-white"
        >
          So you want to plan a ski trip in New England
        </h1>
      </section>
      <NeonSkiSign />
      {/* from https://devdojo.com/tailwindcss/buttons */}
      <button
        onClick={() => router.push("/quiz")}
        className="relative inline-flex items-center justify-center lg:text-4xl text-2xl max-w-prose mt-16 mb-4  px-10 py-6 overflow-hidden font-bold font-tiltNeon text-white hover:text-[#0a1b35] rounded-md shadow-2xl group"
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
          Let us give you some recs
        </span>
      </button>
      <a
        className="text-slate-300 text-xl mt-1 mb-7 mx-8 max-w-prose text-center font-tiltNeon underline hover:text-sky-400"
        href="/resorts"
      >
        &#8594; Or just look at our curated list of resorts
      </a>
    </div>
  );
}
