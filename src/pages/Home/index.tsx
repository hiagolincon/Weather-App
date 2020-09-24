import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import {Container, Locale, Title, Cel, Description, Details, Tex, Winds } from './styles';

const Home: React.FC = () => {
  
  const [city, setCity] = useState<String>();
  const [celcius, setCelcius] = useState<Number>();

  const [clouds, setClouds] = useState<String[]>();
  const [speed, setSpeed] = useState<Number>();
  const [humidity, setHumidity] = useState<Number>();
  const [pressure, setPressure] = useState<Number>();

  const key = '&appid=7fc3ded8b288e8600dcf1b3e00178d6a';

  useEffect(() => {
    try {
       const apiWeather = async() => {
        const response = await api.get(`/weather?q=Medeiros Neto, Bahia${key}`);

        console.log(response.data);

        const data = response.data;

        setCity(data.name);

        var tempCel = Math.round(data.main.temp - 273.15);

        setCelcius(tempCel);
        
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);

        setClouds(data.weather[0].description);
        setSpeed(data.wind.speed);
      }

      apiWeather();
    } catch (err) {
      return err;
    }
  }, []);

  return (
    <Container>
      <Locale>{city}</Locale>
      <Title>Weather</Title>
      <Cel>{celcius}º C</Cel>

      <Description>
        <Details>
          <Tex>Humidity</Tex>
          <Tex>{humidity}%</Tex>
        </Details>
        <Details>
          <Tex>Pressure</Tex>
          <Tex>{pressure}Pa</Tex>
        </Details>
      </Description>

    <Winds>{clouds} and winds of {speed}km/h</Winds>
    </Container>
  );
};

export default Home;
