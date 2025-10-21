
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
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
  }
,
  
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
  }
  ,
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
  }
});

export default styles;
