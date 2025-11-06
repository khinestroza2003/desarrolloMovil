// ✅ EditAnimal.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { updateAnimal } from "../../api/animalesService";
import styles from "../styles/GlobalStyles";

export default function EditAnimal({ route, navigation }) {
  const { animal } = route.params;

  const [nombre, setNombre] = useState(animal.nombre);
  const [descripcion, setDescripcion] = useState(animal.descripcion);
  const [urlImagen, setUrlImagen] = useState(animal.urlImagen);

  const handleUpdate = async () => {
    await updateAnimal(animal._id, {
      nombre,
      descripcion,
      urlImagen
    });

    Alert.alert("Éxito", "Animal actualizado");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Animal</Text>

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

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleUpdate}>
        <Text style={styles.buttonPrimaryText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}
