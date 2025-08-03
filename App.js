import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [newsletter, setNewsletter] = useState("");
  const [submittedNewsletters, setSubmittedNewsletters] = useState([]);

  const handleNewsletterSubmit = () => {
    if (newsletter.trim() !== "") {
      setSubmittedNewsletters([...submittedNewsletters, newsletter]);
      setNewsletter("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🐱 Cat News 📰</Text>
      <Image source={require('./assets/cat.jpg')} style={styles.image} />
      <Text style={styles.fact}>Cat Fact: Cats sleep 12–16 hours a day!</Text>
      <Button title="Meme Generator" onPress={() => navigation.navigate('Meme')} />
      <Button title="Cat Breed Search" onPress={() => navigation.navigate('Breed')} />
      <Button title="Random Cat Fact" onPress={() => navigation.navigate('Fact')} />
      <Button title="Submit Cat Story" onPress={() => navigation.navigate('Story')} />
      <Text style={styles.subHeader}>📬 Post to Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your newsletter post..."
        value={newsletter}
        onChangeText={setNewsletter}
      />
      <Button title="Submit" onPress={handleNewsletterSubmit} />
      {submittedNewsletters.map((post, index) => (
        <Text key={index} style={styles.newsItem}>{post}</Text>
      ))}
    </ScrollView>
  );
};

// More code continues with navigation and styles...