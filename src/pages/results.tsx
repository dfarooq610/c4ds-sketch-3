import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/results/LoadingSpinner";
import ResortsList from "../../components/results/ResortsList";
import { RecommendedSkiResort } from "../../services/resorts";

export default function Results() {
  const router = useRouter();
  const {
    latitude,
    longitude,
    level,
    priceRange,
    hasEquipment,
    isWeekendTrip,
    travelPreference,
  } = router.query;
  const [resorts, setResorts] = useState<RecommendedSkiResort[] | null>(null);

  const params = {
    latitude,
    longitude,
    level,
    priceRange,
    hasEquipment,
    isWeekendTrip,
    travelPreference,
  };

  const fetchData = useCallback(async () => {
    const apiData = await axios.get("/api/curateResorts", {
      params,
    });
    setResorts(apiData.data);
  }, [
    setResorts,
    latitude,
    longitude,
    level,
    priceRange,
    hasEquipment,
    isWeekendTrip,
    travelPreference,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      {resorts ? (
        <ResortsList
          curated={Object.keys(router.query).length > 0}
          resorts={resorts}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
