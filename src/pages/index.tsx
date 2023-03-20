import { getSkiSubtitle } from "../../services/utils";
import { useRouter } from "next/router";
import NeonSkiSign from "../../components/home/NeonSkiSign";
import { GlassButton } from "../../components/GlassButton";

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
      {/* adapted from https://devdojo.com/tailwindcss/buttons */}
      <GlassButton
        onClick={() => router.push("/quiz")}
        text="Let's give you some recs"
      />
      <a
        className="text-slate-300 text-xl mt-1 mb-7 mx-8 max-w-prose text-center font-tiltNeon underline hover:text-sky-400"
        href="/resorts"
      >
        {/* special character is an arrow */}
        &#8594; Or just look at our curated list of resorts
      </a>
    </div>
  );
}
