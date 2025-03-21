import React, { useState } from 'react';
import { View, Modal, Button, ActivityIndicator, Text, StyleSheet } from 'react-native';
import styles from './styles.js';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModalVisible(prev => !prev);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return(
    <View style={styles.container}>
      <Button title="Abrir modal" onPress={toggleModal} color="#6200ea" />
      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Carregando...</Text>
              {
                loading ? <ActivityIndicator style={{ paddingBottom: 20 }} size="large" color="#6200ea" /> :
                <Text style={{ paddingBottom: 15 }}>Conteúdo carregado!</Text>
              }
              <Button title="Fechar" onPress={toggleModal} color="#ff5722" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default App;
