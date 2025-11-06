import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { login } from "../../api/animalesService";
import styles from "../styles/GlobalStyles";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login(username, password);

    if (!res || !res.token) {
      Alert.alert("Error", "Credenciales incorrectas");
      return;
    }

    navigation.navigate("Animal"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <Text style={styles.label}>Ingrese Usuario</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Ingrese Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonPrimaryText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}


