import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Row from './components/Row'
import axios from './axios.config.js'

export default function App() {

  const [board, setBoard] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get('/board')
        setBoard(resp.data.board)
      } catch (error) {
        console.log({ error })
      }
    }
    fetchData()
  }, [])

  console.log(board)
  return (
    <View style={styles.container}>
      {
        board.length > 0 && board.map((row, idx) => {
          return < Row key={idx} row={row} />
        })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
