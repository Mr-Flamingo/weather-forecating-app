import { baseUrl, apikey } from "./keys";

const getWeather = async (q) => {
  try {
    const result = await fetch(`${baseUrl}/current.json?key=${apikey}&q=${q}`);
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


export {
  getWeather
}