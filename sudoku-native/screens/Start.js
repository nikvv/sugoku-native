import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, Button, View, TextInput } from 'react-native';




export default function Start({ navigation }) {

      dispatch = useDispatch()
      const difficulties = ['easy', 'medium', 'hard']
      const [name, setName] = useState('')
      function startGame() {

      }


      return (
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{}}>
                        <TextInput value={name} placeholder="Your Name" style={{ borderWidth: 1, width: 200 }}
                              onChangeText={text => setName(text)}
                        >

                        </TextInput>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 20, }}>
                        {
                              difficulties.map(difficulty => (

                                    <Button key={difficulty} title={difficulty} style={{}} onPress={() => navigation.navigate({
                                          name: 'Game',
                                          params: {
                                                difficulty,
                                                name
                                          }
                                    })} />
                              ))

                        }
                  </View>

            </View>

      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
      },
});

