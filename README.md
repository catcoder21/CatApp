# CatApp
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐱 Cat News 📰</Text>
      <Image
        source={{ uri: 'https://placekitten.com/300/300' }}
        style={styles.image}
      />
      <Text style={styles.fact}>Cat Fact: Cats sleep 12–16 hours a day!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  fact: {
    fontSize: 18,
    textAlign: 'center',
  },
});