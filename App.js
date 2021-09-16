import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import { FriendsContext } from './FriendsContext';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      amigosPosibles: [
        'Alice',
        'Bob',
        'Sammy',
      ],
      amigosActuales: [],
    }
  }

  agregarAmigo = (index) => {
    const {
      amigosActuales,
      amigosPosibles,
    } = this.state

    // Sacar amigo de posibles amigos
    const amigoAñadido = amigosPosibles.splice(index, 1)

    // Agregar amigo a amigosActuales
    amigosActuales.push(amigoAñadido)

    // Actualizar el estado de App
    this.setState({
      amigosActuales,
      amigosPosibles,
    })
  }

  render() {
    return (
      <FriendsContext.Provider>
        value={
          {
            amigosActuales: this.state.amigosActuales,
            amigosPosibles: this.state.amigosPosibles,
            agregarAmigo: this.agregarAmigo
          }
        }
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;