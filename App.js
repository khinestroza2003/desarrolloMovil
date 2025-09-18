
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './src/components/Registro';
import RelojPantalla from './src/components/RelojPantalla';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}