import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchCharacters, getCharacterImageUrl } from '../../api/theSimpsons';
import styles from '../styles/GlobalStyles';

export default function Personajes({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const loadCharacters = async (pageToLoad = 1) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(pageToLoad);
     
      const list = Array.isArray(data) ? data : (data?.results || []);
      setCharacters(prev => (pageToLoad === 1 ? list : [...prev, ...list]));
      setError(null);
    } catch (err) {
      setError(err.message || 'Error cargando personajes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(1);
  }, []);

  const renderItem = ({ item }) => {
    const imageUrl = getCharacterImageUrl(item?.portrait_path);
    return (
      <View style={styles.card}>
        {imageUrl ? (
          <TouchableOpacity onPress={() => navigation.navigate('Card', { character: item })}>
            <Image source={{ uri: imageUrl }} style={{ width: 150, height: 150, borderRadius: 6 }} />
          </TouchableOpacity>
        ) : (
          <View style={[{ width: 100, height: 100, borderRadius: 6, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center' }]}>
            <Text>No hay imagen</Text>
          </View>
        )}
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 16 }}>{item?.name || 'Sin nombre'}</Text>
          <Text style={{ color: '#666' }}>{item?.occupation || item?.profession || ''}</Text>
        </View>
      </View>
    );
  };

  if (loading && characters.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <FlatList
        data={characters}
        keyExtractor={(item) => item?.id?.toString() || item?.name}
        renderItem={renderItem}
        onEndReached={() => {
          setPage(p => p + 1);
          loadCharacters(page + 1);
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
