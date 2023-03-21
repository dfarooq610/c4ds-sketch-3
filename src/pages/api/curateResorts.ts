// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NewEnglandSkiResorts, SkiResort } from "../../../services/resorts";
import getDistance from "geolib/es/getDistance";

type ResortReccomendation = {
  id: string;
  // liftCount: number;
  // openLifts: number;
  temperatureFahrenheit: number;
  visibilityMiles: number;
  windSpeedMph: number;
  distance?: number;
  score?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResortReccomendation[]>
) {
  const {
    latitude,
    longitude,
    level,
    priceRange,
    hasEquipment,
    isWeekendTrip,
    travelPreference,
  } = req.query;
  try {
    const resortInfoForResults: any[] = [];
    for (let i = 0; i < NewEnglandSkiResorts.length; i++) {
      const resort = NewEnglandSkiResorts[i];
      const [resortLatitude, resortLongitude] = resort.ll;

      // in an ideal world, we can call axios.get to the liftie api to get the lift count and open lifts,
      // but the liftie api rate limits way sooner than we expected, so we unfortunately had to remove this feature

      // const resortInfo = await axios.get(
      //   `https://cors.office.dataculturegroup.org/https://liftie.info/api/resort/${resort.id}`,
      //   {
      //     headers: {
      //       origin:
      //         process.env.NODE_ENV === "production"
      //           ? "https://c4ds-sketch-3.app"
      //           : "http://localhost:3000",
      //     },
      //   }
      // );

      // const { data } = resortInfo;

      // const [totalLifts, openLifts] = [
      //   Object.keys(resortInfo.lifts.status).length,
      //   data.lifts.stats.open,
      // ];

      const currentResortWeather = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${
          process.env.WEATHER_API_APP_KEY
        }&q=${resortLatitude.toFixed(4)},${resortLongitude.toFixed(4)}&aqi=no`
      );
      const { current } = currentResortWeather.data;

      const resortReccomendation: ResortReccomendation = {
        id: resort.id,
        temperatureFahrenheit: current.temp_f,
        visibilityMiles: current.vis_miles,
        windSpeedMph: current.wind_mph,
      };

      let distance;
      if (latitude !== undefined && longitude !== undefined) {
        distance = getDistance(
          { latitude: Number(latitude), longitude: Number(longitude) },
          {
            latitude: Number(resortLatitude),
            longitude: Number(resortLongitude),
          }
        );
        resortReccomendation["distance"] = Number(
          getMiles(distance).toFixed(3)
        );
        resortReccomendation["score"] = getReccomendationScore(
          resortReccomendation.temperatureFahrenheit,
          resortReccomendation.visibilityMiles,
          resortReccomendation.windSpeedMph,
          resortReccomendation.distance,
          Number(priceRange),
          Boolean(hasEquipment),
          Boolean(isWeekendTrip),
          resort
        );
      }

      resortInfoForResults.push(resortReccomendation);
    }

    return res
      .status(200)
      .send(resortInfoForResults.sort((a, b) => b.score - a.score));
  } catch (e) {
    console.error(e);
    res.status(500).send([]);
  }
}

function getMiles(meters: number) {
  return meters * 0.000621371192;
}

const getReccomendationScore = (
  temp_f: number,
  vis_mi: number,
  wind_mph: number,
  distance: number,
  priceRange: number,
  hasEquipment: boolean,
  isWeekendTrip: boolean,
  resort: SkiResort
) => {
  const numerator = 5 * temp_f + 3 * vis_mi + 2 * 1;

  const priceFactor =
    [0, 0.5, 1][priceRange] *
    (isWeekendTrip ? resort.weekendTicketPrice : resort.weekdayTicketPrice);
  const equipmentFactor = hasEquipment
    ? 0
    : [0.9, 0.7, 0.5][priceRange] * resort.averageRentalPrice;
  const denominator =
    0.2 * distance + 2 * wind_mph + priceFactor + equipmentFactor;

  console.log(numerator / denominator);

  return numerator / denominator;
};
