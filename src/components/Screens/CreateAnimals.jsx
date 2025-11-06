// ✅ CreateAnimals.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createAnimal } from "../../api/animalesService";
import styles from "../styles/GlobalStyles";

export default function CreateAnimals({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlImagen, setUrlImagen] = useState("");

  const handleCreate = async () => {
    if (!nombre || !descripcion || !urlImagen) {
      return Alert.alert("Error", "Todos los campos son obligatorios");
    }

    await createAnimal({ nombre, descripcion, urlImagen });
    Alert.alert("Éxito", "Animal creado correctamente");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Animal</Text>

      <TextInput
        style={styles.formInputLarge}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.formInputLarge}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        style={styles.formInputLarge}
        placeholder="URL Imagen"
        value={urlImagen}
        onChangeText={setUrlImagen}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleCreate}>
        <Text style={styles.buttonPrimaryText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
