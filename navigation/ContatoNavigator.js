import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Cores from "../constantes/Cores";
import ListaDeContatoTela from '../screen/ListaDeConatatoTela';
import DetalhesDoContatoTela from '../screen/DetalhesDoContatoTela';
import NovoContatoTela from '../screen/NovoContatoTela';

const ContatoNavigator = createStackNavigator({
  ListaDeContatos: ListaDeContatoTela,
  NovoContato: NovoContatoTela,
  DetalhesDoContato: DetalhesDoContatoTela,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
});

export default createAppContainer(ContatoNavigator);

