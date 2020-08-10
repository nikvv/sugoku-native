import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Row({ block }) {

      const [value, setValue] = useState(String(block))
      return (
            <View style={styles.container}>
                  <TextInput value={value} keyboardType={'numeric'} maxLength={1}
                        onChangeText={text => setValue(text)}
                  >

                  </TextInput>

            </View>
      )
}
const styles = StyleSheet.create({
      container: {
            width: 40,
            height: 40,
            borderWidth: 1
      },
});

