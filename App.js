import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  function change(text) {
    setAge(text);
    const Lower = ((220 - parseInt(text)) * 0.65);
    const Upper = ((220 - parseInt(text)) * 0.85);
    setLower(Lower.toFixed(0));
    setUpper(Upper.toFixed(0));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => change(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}> {lower} - {upper} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 100,
    alignItems: 'center',
  },
  field: {
    marginBottom: 15,
    fontSize: 20,
  }
});
