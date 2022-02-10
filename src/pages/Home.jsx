import { useEffect, useState } from "react";
import { getWeather } from "../apiRequest";

import Typography from "@mui/material/Typography";

import Searchfrom from "../components/Searchfrom";
import Result from "../components/Result";

function Home() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeather("auto:ip")
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Typography variant="p" color="initial">
        {weatherData ? JSON.stringify(weatherData) : "nothing Yet"}
      </Typography>
    </div>
  );
}

export default Home;
