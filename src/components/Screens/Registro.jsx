import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, Button, Alert } from 'react-native';
import styles from "../styles/GlobalStyles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [userRegistrados, setUserRegistrados] = useState(0);
  const [success, setSuccess] = useState('');
  
  const handleChange = (setter) => (text) => setter(text);

 
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => setSuccess(''), 2500);
      return () => clearTimeout(timeout);
    }
  }, [success]);

  
  useEffect(() => {
    if (userRegistrados === 0) return;
    if (userRegistrados === 5) {
      Alert.alert('¡Meta lograda!', 'registramos 5 usuarios con éxito.');
    }
  }, [userRegistrados]);
  
  function validarFormulario  () {
    if (!nombre || !email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    setError('');
    return true;
  };

  
  function registrarUsuario () {
    if (validarFormulario()) {
      setSuccess(`Usuario ${nombre} registrado con éxito.`);
      setUserRegistrados(prev => prev + 1);
      setNombre('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={handleChange(setNombre)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleChange(setEmail)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={handleChange(setPassword)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={handleChange(setConfirmPassword)}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={{ color: 'green', marginBottom: 10 }}>{success}</Text> : null}
      <Button title="Registrar" onPress={registrarUsuario} />
      <View style={{marginVertical: 10}} />
      <Button 
        title="Ir al Reloj" 
        onPress={() => navigation.navigate('Reloj')} 
      />
      <Button 
        title="Lista de Personajes" 
        onPress={() => navigation.navigate('Personajes')} 
      />
      <Text style={{marginTop: 10}}>Usuarios registrados: {userRegistrados}</Text>
      {userRegistrados < 5 && userRegistrados > 0 ? (
        <Text style={{marginTop: 5, color: '#555'}}>
          Faltan {5 - userRegistrados} usuario(s) para alcanzar la meta de 5.
        </Text>
      ) : null}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

