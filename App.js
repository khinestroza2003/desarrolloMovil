
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './src/components/Screens/Registro';
import RelojPantalla from './src/components/Screens/RelojPantalla';
import { CharacterCard } from './src/components/Screens/CharacterCard';
import Personajes from './src/components/Screens/Personajes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen 
          name="Registro" 
          component={Registro}
          options={{
            title: 'Registro',
            headerRight: () => <RelojPantalla style={{fontSize: 18, color: 'black'}} />
          }}
        />
        <Stack.Screen 
          name="Reloj" 
          component={RelojPantalla}
          options={{
            title: 'Reloj'
          }}
        />
        <Stack.Screen
          name="Personajes"
          component={Personajes}
          options={{ title: 'Lista de Personajes' }}
        />
        <Stack.Screen
          name="Card"
          component={CharacterCard}
          options={{ title: 'Detalle del personaje' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}