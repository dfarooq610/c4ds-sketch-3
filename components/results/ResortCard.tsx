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
    <div className="m-auto border border-slate-200 rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-3xl dark:border-slate-700 bg-slate-800 flex flex-col items-center ">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`/static/${staticData.id}.jpeg`}
          alt={`Picture of ${staticData.name}'s ski resort logo`}
          width={600}
          height={600}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {staticData.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {staticData.summary}
          </p>
        </div>
      </div>
  );
}
