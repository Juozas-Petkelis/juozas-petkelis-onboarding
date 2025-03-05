const weatherApiVersion = 2.5;
export const weatherBaseUrl = `https://api.openweathermap.org/data/${weatherApiVersion}`;

export const weatherUrl = {
  list: 'group',
};

export const weatherIconUrl = (iconId: string) =>
  `https://openweathermap.org/img/wn/${iconId}.png`;
