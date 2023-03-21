// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NewEnglandSkiResorts } from "../../../services/resorts";
import getDistance from "geolib/es/getDistance";

type Data = any;

type ResortReccomendation = {
  id: string;
  liftCount: number;
  openLifts: number;
  temperatureFahrenheit: number;
  visibilityMiles: number;
  windSpeedMph: number;
  distance?: number;
  recommendationScore?: number;
};

type SkiQuizQuery = {
  latitude: number;
  longitude: number;
  priceRange: "$" | "$$" | "$$$";
  hasEquipment: boolean;
  isWeekendTrip: boolean;
  travelPreference: 0 | 1 | 2;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resortInfo = await fetch(`https://liftie.info/api/meta`)
    .then((d) => console.log(d.json()))
    .catch((e) => {
      console.log(e.statusCode)
      console.log(e);
    });

  res.send(200);
}

// const shouldCurate = Object.keys(req.query).length > 0;

// const {
//   latitude,
//   longitude,
//   level,
//   priceRange,
//   hasEquipment,
//   isWeekendTrip,
//   travelPreference,
// } = req.query;

// const resortIds = NewEnglandSkiResorts.map((resort) => resort.id);

// const resortInfoForResults: any[] = [];
// for (let id in resortIds) {
//   const resortInfo = await axios.get(`https://liftie.info/api/resort/palisades`);
//   const { data } = resortInfo;
//   res.send(data)

// const [resortLatitude, resortLongitude] = data.ll;
// const [totalLifts, openLifts] = [
//   Object.keys(data.lifts.status).length,
//   data.lifts.stats.open,
// ];

// const currentResortWeather = await axios.get(
//   `https://api.weatherunlocked.com/api/current/${resortLatitude.toFixed(
//     3
//   )},${resortLongitude.toFixed(3)}?app_id=${
//     process.env.WEATHER_UNLOCKED_APP_ID
//   }&app_key=${process.env.WEATHER_UNLOCKED_APP_KEY}`
// );

// const { data } = currentResortWeather;

// const resortReccomendation: ResortReccomendation = {
//   id,
//   liftCount: totalLifts,
//   openLifts,
//   temperatureFahrenheit: 1, // data.temp_f,
//   visibilityMiles: 1, // data.vis_miles,
//   windSpeedMph: 1, //data.windspd_mph,
// };

// let distance;
// if (latitude && longitude) {
//   distance = getDistance(
//     { latitude: Number(latitude), longitude: Number(longitude) },
//     { latitude: Number(resortLatitude), longitude: Number(resortLongitude) }
//   );
//   resortReccomendation.distance = distance;
// }

// resortInfoForResults.push(resortReccomendation);
// }

// return res.status(200).send(resortInfoForResults);

// const resorts = await axios.get("https://liftie.info/api/meta");
// res.status(200).json(resorts.data);
