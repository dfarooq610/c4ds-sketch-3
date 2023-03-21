import {
  NewEnglandSkiResorts,
  RecommendedSkiResort,
} from "../../services/resorts";
import { ResortCard } from "./ResortCard";

interface ResortsListProps {
  resorts: RecommendedSkiResort[];
  curated: boolean;
}

export default function ResortsList({ resorts, curated }: ResortsListProps) {
  return (
    <div className="flex flex-col justify-center items-middle m-8">
      <header className="h-1/6">
        <h1
          className="font-tiltNeon text-center font-extrabold text-transparent text-4xl lg:text-6xl p-3 mx-auto bg-clip-text
          bg-gradient-to-t from-white via-sky-400 to-white"
        >
          {curated
            ? "Here are your curated resorts:"
            : "Here are all the resorts:"}
        </h1>
        <hr className="bg-sky-400 h-1 mt-1 mb-3" />
      </header>
      <div className="min-h-5/6">
        {resorts.map((resortRec) => {
          const staticResort = NewEnglandSkiResorts.find(
            (resortContent) => resortRec.id === resortContent.id
          )!;

          return (
            <div className="mx-auto my-5" key={resortRec.id}>
              <ResortCard liveData={resortRec} staticData={staticResort} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
