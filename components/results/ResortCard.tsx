import {
  RecommendedSkiResort as RecommendedSkiResort,
  SkiResort as StaticSkiResort,
} from "../../services/resorts";
import Image from "next/image";
interface ResortCardProps {
  liveData: RecommendedSkiResort;
  staticData: StaticSkiResort;
}

// adapted from https://flowbite.com/docs/components/card/
export function ResortCard({ liveData, staticData }: ResortCardProps) {
  return (
    <div className="m-auto border border-slate-200 rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-6xl dark:border-slate-700 bg-slate-800 flex flex-col items-center ">
      <Image
        className="object-cover w-full rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`/static/${staticData.id}.jpeg`}
        alt={`Picture of ${staticData.name}'s ski resort logo`}
        width={600}
        height={600}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-300">
          {staticData.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {staticData.summary}
        </p>
        <div className="flex flex-row justify-between">
          {[
            `${liveData.windSpeedMph} mph winds`,
            `${liveData.temperatureFahrenheit} degrees Fahrenheit`,
            `${liveData.visibilityMiles} miles visibility`,
            `Located in ${staticData.state}`,
          ].map((item) => {
            return (
              <p
                key={item}
                className="mb-3 font-normal text-slate-600 dark:text-gray-400"
              >
                {item}
              </p>
            );
          })}
        </div>
        <a
          className="text-slate-500 text-sm text-right font-tiltNeon underline hover:text-sk-800"
          href={`https://liftie.info/resort/${staticData.id}/`}
        >
          {/* special character is an arrow */}
          Learn more on liftie.info
        </a>
      </div>
    </div>
  );
}
