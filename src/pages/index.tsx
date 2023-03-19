import { getSkiSubtitle } from "@/services/utils";

/**
 *
 * @returns  a landing page with a blue-black radial gradient around the center with the text "So you want to plan a ski trip, huh?" at the center of the radial gradient
 */
export default function Home() {
  return (
    <div className="h-fit min-h-screen min-w-full flex flex-col">
      <section className="m-auto max-w-7xl">
        <h1
          className="text-center font-tiltNeon font-extrabold text-transparent text-8xl p-3 m-auto bg-clip-text
          bg-gradient-to-t from-white via-sky-400 to-white"
        >
          So you want to plan a ski trip in New England
        </h1>
        <h3 className="text-slate-300 text-2xl lg:text-4xl m-3 text-center">{getSkiSubtitle(new Date())}</h3>
      </section>
      <h5>

      </h5>
    </div>
  );
}
