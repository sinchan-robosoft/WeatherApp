import AxiosInstance from "@/Axios/AxiosInstance";

//const apiKey = "c311e78b5e3f40b9863120130262406" //api.weather
const apiKey = "d284bcfbf4a27faaeda5abe0c187a8d4"

export const getSearchData = async (searchString: string) => {
    // if(searchString.length <=0){
    //     return null
    // }
    console.log(searchString)
  const { data: places } = await AxiosInstance.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=5&appid=${apiKey}`
  );

  const weatherData = await Promise.all(
    places.map(async (place: any,index : Number) => {
      const { data: weather } = await AxiosInstance.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&units=metric&appid=${apiKey}`
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