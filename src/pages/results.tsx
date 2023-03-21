import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

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
  const [data, setData] = useState<any>(null);

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
    const apiData = await axios.get("http://localhost:3000/api/curateResorts", {
      params,
    });
    console.log(apiData);
    setData(apiData.data);
  }, [
    setData,
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
    <h1 className="text-slate-200 text-3xl w-screen flex flex-wrap">
      {JSON.stringify(data)}
    </h1>
  );
}
