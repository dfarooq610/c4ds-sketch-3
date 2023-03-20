import { GlassButton } from "../GlassButton";

interface LocationQuestionProps {
    getLocation: () => void;
}

export default function LocationQuestion({getLocation}: LocationQuestionProps) {
    return (
        <>
          <h2 className="text-slate-100 text-3xl font-bold my-2">
            First, please enable location services so we can recommend resorts
            closest to you
          </h2>
          <GlassButton text="Enable Location Services" onClick={getLocation} />
        </>
    )
}