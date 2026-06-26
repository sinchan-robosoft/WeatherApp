import AxiosInstance from "@/Axios/AxiosInstance";
const apiKey = process.env.EXPO_PUBLIC_API_KEY
const GEO_CODING_URL = process.env.EXPO_PUBLIC_GEO_CODING_URL
const CURRENT_WEATHER_URL = process.env.EXPO_PUBLIC_CURRENT_WEATHER_URL

export const getSearchData = async (searchString: string) => {
  const { data: places } = await AxiosInstance.get(
    `${GEO_CODING_URL}?q=${searchString}&limit=5&appid=${apiKey}`
  );

  const weatherData = await Promise.all(
    places.map(async (place: any,index : Number) => {
      const { data: weather } = await AxiosInstance.get(
        `${CURRENT_WEATHER_URL}?lat=${place.lat}&lon=${place.lon}&units=metric&appid=${apiKey}`
      );

      return {
        cityName: place.name,
        country: place.country,
        state: place.state,
        cityTemp: weather.main.temp,
        cityStatus: weather.weather[0].main,
        icon: weather.weather[0].icon,
        isLiked : false,
        index : index,
        gradient: ["#F4A8FF99", "#FFD6A899"]
      };
    })
  );

  return weatherData;
};