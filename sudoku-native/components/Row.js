import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Block from './Block'

export default function Row({ row }) {
      return (
            row.map((block, idx) => {
                  return <Block key={idx} block={block} />
            })
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection="row",
            borderWidth: 1,
      },
});

