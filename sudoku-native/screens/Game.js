import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, View, KeyboardAvoidingView } from 'react-native';
import { setBoardAsync, solveBoardAsync, setResultAction, clearBoardAction, validateBoardAsync } from "../store/actions";
import axios from '../store/actions/axios.config'
import Row from '../components/Row'


export default function Start({ navigation, route }) {

      const dispatch = useDispatch()
      const { difficulty, name } = route.params
      const board = useSelector(state => state.boardReducer.data)
      const status = useSelector(state => state.boardReducer.status)
      useEffect(() => {
            const payload = {
                  difficulty
            }
            dispatch(clearBoardAction())
            dispatch(setBoardAsync(payload))
      }, [])


      useEffect(() => {
            console.log('INI useEffect dari Game.js')
      }, [board])
      // async function fetchData(difficulty) { 
      //       // clearBoard()
      //       const payload = {
      //             difficulty
      //       }
      //       try {
      //             dispatch(setBoardAsync(payload))
      //             navigation.navigate('Game')
      //       } catch (error) {
      //             console.log({ error })
      //       }
      // }


      function clearBoard() {
            dispatch(clearBoardAction())
      }

      function solveBoard() {
            dispatch(solveBoardAsync(board))
      }
      function validateBoard() {
            dispatch(validateBoardAsync(board))
      }
      function finishGame() {
            if (status === 'solved') {
                  navigation.navigate('Finish')
            }
      }

      return <KeyboardAvoidingView style={{ marginTop: 10 }}>
            {
                  board.length > 0 && <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button title='Clear' style={{}} onPress={() => clearBoard()} />
                  </View>
            }

            <KeyboardAvoidingView style={{ marginTop: 10 }} behavior='padding'>
                  {
                        board.length > 0 && board.map((row, idx) => {
                              const lastRow = board.length === (idx + 1) ? 1 : 0
                              const isThird = (idx + 1) % 3 === 0 ? 2 : 0

                              return <View style={{ alignItems: 'center' }} key={idx}>
                                    < Row rowIdx={idx} lastRow={lastRow} isThird={isThird} row={row} />
                              </View>

                        })
                  }
            </KeyboardAvoidingView>


            <View style={{ marginTop: 10 }}>
                  {
                        board.length > 0 && <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Button title='Solve' style={{}} onPress={() => solveBoard()} />
                        </View>
                  }

                  {
                        board.length > 0 && <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Button title='Validate' style={{}} onPress={() => validateBoard()} />
                        </View>
                  }

                  {
                        board.length > 0 && <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Button title='Finish' style={{}} onPress={() => finishGame()} />
                        </View>
                  }

                  <StatusBar />
            </View >
      </KeyboardAvoidingView>
}