
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles/GlobalStyles";

export default function RelojPantalla({ style }) {
  const navigation = useNavigation();
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

  
  return () => {
    clearInterval(segundosInverval);
    clearInterval(minutosInterval);
    clearInterval(horasInterval);
  };
}, []);




  
  if (style) {
    return (
      <Text style={style}>
        {hora}:{minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}
      </Text>
    );
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reloj Digital</Text>
      <Text style={styles.clockText}>
        {hora < 10 ? `0${hora}` : hora}:{minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}
      </Text>
      <View style={{marginTop: 20}}>
        <Button 
          title="Volver al Registro" 
          onPress={() => navigation.navigate('Registro')} 
        />
      </View>
    </View>
  );
}