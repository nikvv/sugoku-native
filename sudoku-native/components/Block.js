import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Row({ block }) {

      const [value, setValue] = useState(String(block))
      return (
            <TextInput value={value} keyboardType={'numeric'} maxLength={1}
                  onChangeText={text => setValue(text)}
            >

            </TextInput>
      )
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
      },
});

