export type WeatherListResponse = {
  cnt: number;
  list: WeatherData[];
};

export type WeatherData = {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  sys: {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  dt: number;
  visibility: number;
};
