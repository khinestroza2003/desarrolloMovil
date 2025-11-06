
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './src/components/Screens/Registro';
import RelojPantalla from './src/components/Screens/RelojPantalla';
import { CharacterCard } from './src/components/Screens/CharacterCard';
import Personajes from './src/components/Screens/Personajes';
import LoginScreen from './src/components/Screens/LoginScreen';
import AnimalsScreen from './src/components/Screens/AnimalsScreen';
import CreateAnimals from './src/components/Screens/CreateAnimals';
import EditAnimal from './src/components/Screens/EditAnimal'
import DeleteAnimals from './src/components/Screens/DeleteAnimals';

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
        
         <Stack.Screen
         name="Login"
         component={LoginScreen}
         options={{title: 'inicio de session'}}
         />
        <Stack.Screen
        name="Animal"
        component={AnimalsScreen}
        options={{title: 'Animal'}}
        />
       <Stack.Screen
       name="Crear"
       component={CreateAnimals}
       />
       <Stack.Screen
       name="Editar"
       component={EditAnimal}
       />
       <Stack.Screen
       name="Borrar"
       component={DeleteAnimals}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}