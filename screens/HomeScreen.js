import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tienes { this.context.amigosActuales.length } amigos.</Text>

        <Button
          title="Añade algunos amigos!"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

HomeScreen.contextType = FriendsContext;

// ...

export default HomeScreen;