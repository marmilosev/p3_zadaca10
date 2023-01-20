import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

export function SettingsScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendRequest = async () => {
    try {
      await fetch('https://webhook.site/8fca78f7-31e9-4084-9e30-492c12ae8ca7', {
        method: 'post',
        mode: 'no-core',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
        }),
      });
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate('Settings');
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Unesi ime:</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Unesi prezime:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSurname}
          value={surname}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Unesi email: </Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Unesi šifru: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <Button title="Send request" onPress={sendRequest} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: "center",
    backgroundColor: "#e7e7ff",
  },
  inputWrapper: {
    alignItems: 'center',
  },
  input: {
    height: 25,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#fff"
  },
  inputText: {
    fontWeight: 30,
    fontSize: 16,
  }
});
