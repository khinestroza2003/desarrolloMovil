
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registro from './src/components/Registro';
import RelojPantalla from './src/components/RelojPantalla';



const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Registro,
      options: {title: 'Inicio Registros',
         headerRight: () => <RelojPantalla style={{fontSize: 18, color: 'black'}} />,
    },
    Profile: {
      screen: Registro,
    },
  },
}
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation />;
}