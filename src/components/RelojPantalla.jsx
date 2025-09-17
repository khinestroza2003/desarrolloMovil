
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';

export default function RelojPantalla({ style }) {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [hora, setHora] = useState(0);

 useEffect(() => {
 
  const segundosInverval = setInterval(() => {
    setSegundos((s) => (s === 59 ? 0 : s + 1));
  }, 1000);

  
  const minutosInterval = setInterval(() => {
    setMinutos((m) => (m === 59 ? 0 : m + 1));
  }, 60000);


  const horasInterval = setInterval(() => {
    setHora((h) => h + 1);
  }, 3600000);

  // Limpieza de intervalos al desmontar
  return () => {
    clearInterval(segundosInverval);
    clearInterval(minutosInterval);
    clearInterval(horasInterval);
  };
}, []);




  return (
    <Text style={style}>
    Horas: {hora}  Minutos:{minutos}   Segundos:{segundos < 10 ? `0${segundos}` : segundos}
    </Text>
  );
}