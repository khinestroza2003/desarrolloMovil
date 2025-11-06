// ✅ AnimalsScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { getAnimals, deleteAnimal } from "../../api/animalesService";
import styles from "../styles/GlobalStyles";

export default function AnimalsScreen({ navigation }) {
  const [animales, setAnimales] = useState([]);

  const cargarAnimales = async () => {
    const data = await getAnimals();
    setAnimales(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", cargarAnimales);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.animalScroll}>
      {/* Botón crear */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Crear")}
      >
        <Text style={styles.buttonPrimaryText}>Crear Animal</Text>
      </TouchableOpacity>

      {animales.map((a) => (
        <View key={a._id} style={styles.animalCard}>
          <Image source={{ uri: a.urlImagen }} style={styles.animalImage} />

          <Text style={styles.animalName}>{a.nombre}</Text>
          <Text style={styles.animalDesc}>{a.descripcion}</Text>

          {/* Botón editar */}
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => navigation.navigate("Editar", { animal: a })}
          >
            <Text style={styles.buttonPrimaryText}>Editar</Text>
          </TouchableOpacity>

          {/* Botón eliminar */}
          <TouchableOpacity
            style={styles.buttonDanger}
            onPress={async () => {
              await deleteAnimal(a._id);
              cargarAnimales();
            }}
          >
            <Text style={styles.buttonDangerText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
