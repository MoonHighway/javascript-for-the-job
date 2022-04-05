import weather from "weather-js";
import { promisify } from "util";

const findWeather = promisify(weather.find);

export async function weatherSearch(city, state) {
  return await findWeather({
    search: `${city}, ${state}`,
    degreeType: "F",
  });
}
