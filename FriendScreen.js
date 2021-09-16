import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Añade algunos amigos aquí!</Text>

        {
          this.context.amigosPosibles.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.context.agregarAmigo(index)
              }
            />
          ))
        }

        <Button
          title="Regresar a home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

FriendsScreen.contextType = FriendsContext;

// ...

export default FriendsScreen;