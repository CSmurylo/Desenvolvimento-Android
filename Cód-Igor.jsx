//data: 13/03/2025
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Switch,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello World</Text>
      <Button title="Click Aqui" onPress={() => alert('Cliquei!!')} />
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled((prev) => !prev)}
      />
      <FlatList
        data={[
          { id: '1', title: 'Item 1' },
          { id: '2', title: 'Item 2' },
          { id: '3', title: 'Item 3' },
          { id: '4', title: 'Item 4' },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 20, // Espaçamento extra nas bordas
  },
  item: {
    fontSize: 18,
    padding: 18,
    backgroundColor: '#f2f2f2',
    marginVertical: 5,
    width: '100%', // Correção no width
    textAlign: 'center', // Correção no textAlign
  },
});
