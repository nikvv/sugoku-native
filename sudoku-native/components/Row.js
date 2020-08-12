import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Block from './Block'

export default function Row({ rowIdx, row, lastRow, isThird }) {
      return (
            <View style={[styles.container, { borderBottomWidth: lastRow || isThird }]}>
                  {
                        row.map((block, idx) => {
                              const isThird = (idx + 1) % 3 === 0 ? 2 : 0
                              const lastCol = row.length === (idx + 1) ? 1 : 0
                              return <Block rowIdx={rowIdx} blockIdx={idx} key={idx} lastCol={lastCol} isThird={isThird} block={block} />
                        })
                  }
            </View>
      )
}
const styles = StyleSheet.create({
      container: {
            flexDirection: "row",
      },
});

