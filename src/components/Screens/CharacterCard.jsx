import React from 'react';
import { View, Text, Image, FlatList, Button, ScrollView } from 'react-native';
import { getCharacterImageUrl } from '../../api/theSimpsons';
import styles from '../styles/GlobalStyles';

const PhraseItem = ({ phrase }) => (
    <View style={styles.phrasePill}>
        <Text style={styles.phraseText}>{phrase}</Text>
    </View>
);

export const CharacterCard = ({ navigation, route }) => {
    const character = route?.params?.character;
    const imageUrl = getCharacterImageUrl(character?.portrait_path);

    // Normalizar campos que pueden venir con diferentes keys
    const name = character?.name || character?.fullName || 'Sin nombre';
    const age = character?.age || character?.edad || 'Desconocida';
    const gender = character?.gender || character?.genero || 'Desconocido';
    const profession = character?.profession || character?.occupation || 'Desconocida';
    const birthDate = character?.birthDate || character?.birthday || character?.date_of_birth || 'Desconocida';
    const phrases = character?.phrases || character?.quotes || [];
    const status = (character?.status || character?.alive) ? (character?.status === 'Dead' || character?.alive === false ? 'Muerto' : 'Vivo') : 'Desconocido';

    return (
        <ScrollView contentContainerStyle={styles.card}>
            <View style={styles.headerColumn}>
                {imageUrl ? (
                    <Image 
                        source={{ uri: imageUrl }}
                        style={styles.portraitLarge} 
                        resizeMode="cover"
                        accessibilityRole="image"
                        accessibilityLabel={`Retrato de ${name}`}
                    /> 
                ) : (
                    <View style={[styles.portraitLarge, styles.portraitFallback]}>
                        <Text style={styles.portraitFallbackText}>No Image</Text>
                    </View>
                )}
                <View style={styles.infoBlock}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.infoText}>Edad: {age}</Text>
                    <Text style={styles.infoText}>Género: {gender}</Text>
                    <Text style={styles.infoText}>Profesión: {profession}</Text>
                    <Text style={styles.infoText}>Fecha de nacimiento: {birthDate}</Text>
                    <Text style={styles.infoText}>Estado: {status}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Frases</Text>
                {phrases && phrases.length > 0 ? (
                    <FlatList
                        data={phrases}
                        keyExtractor={(item, idx) => `${idx}-${item}`}
                        renderItem={({ item }) => <PhraseItem phrase={item} />}
                        horizontal={false}
                    />
                ) : (
                    <Text style={styles.infoText}>No hay frases disponibles</Text>
                )}
            </View>

            <View style={{ marginTop: 20 }}>
                <Button title="Regresar" onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
}

export default CharacterCard;