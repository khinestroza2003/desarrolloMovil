
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ✅ ====== TUS ESTILOS ORIGINALES (NO TOCADOS) ======
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  clockText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    fontFamily: 'monospace',
  },
  portraitLarge: {
    width: 300,
    height: 300,
    borderRadius: 8,
    backgroundColor: '#e04848ff',
  },
  headerColumn: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  phrasePill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 8,
  },
  phraseText: {
    color: '#333',
  },
  infoBlock: {
    marginTop: 12,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
  },
  section: {
    width: '100%',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  portraitFallbackText: {
    color: '#888',
  },
  card: {
    width: '100%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallPortrait: {
    width: 80,
    height: 100,
    borderRadius: 6,
    backgroundColor: '#eee',
  },

  // ✅ ====== ESTILOS NUEVOS PARA PANTALLAS DE ANIMALES ======

  animalScroll: {
    width: "100%",
    padding: 20,
  },

  animalCard: {
    width: "100%",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  animalImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    backgroundColor: "#ddd"
  },

  animalName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#222",
  },

  animalDesc: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },

  buttonPrimary: {
    width: "100%",
    padding: 12,
    backgroundColor: "#4C8BF5",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  buttonPrimaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonDanger: {
    width: "100%",
    padding: 12,
    backgroundColor: "#E63946",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  buttonDangerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  formInputLarge: {
    width: "100%",
    padding: 12,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
});

export default styles;
