import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function EventScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.text}>
        EventScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 26, fontWeight: 'bold' },
});
