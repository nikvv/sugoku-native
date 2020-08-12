import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setResultBlockAction } from '../store/actions'
export default function Row({ rowIdx, blockIdx, block, lastCol, isThird }) {
      const dispatch = useDispatch()
      // const result = useSelector(state => state.resultReducer.data)
      const isEditable = useSelector(state => state.boardReducer.isEditable)




      if (block == 0) block = ''
      // let resultValue = 0
      let disabledStyle = isEditable[rowIdx][blockIdx] ? '300' : '700'
      if (block > 0) isEdited = false
      const [value, setValue] = useState(String(block))

      useEffect(() => {
            setValue(String(block))
      }, [block])

      // if (result.length) resultValue = result[rowIdx][blockIdx]
      // let disabledStyle = '400'
      // if (!isEdited) disabledStyle = '700'
      //CEK JIKA NILAI BUKAN 0
      // if (resultValue) block = resultValue



      function onChangeBlock(text) {
            setValue(text)
            const payload = {
                  rowIdx,
                  blockIdx,
                  value: +text
            }
            dispatch(setResultBlockAction(payload))
      }

      return (
            <View style={[styles.container, { borderRightWidth: lastCol || isThird }]}>
                  <TextInput editable={isEditable[rowIdx][blockIdx]} selectTextOnFocus={isEditable[rowIdx][blockIdx]} style={{ textAlign: 'center', fontWeight: disabledStyle }} value={value} keyboardType={'numeric'} maxLength={1}
                        onChangeText={text => onChangeBlock(text)}
                  >

                  </TextInput>

            </View>
      )
}
const styles = StyleSheet.create({
      container: {
            width: 40,
            height: 40,
            borderLeftWidth: 1,
            borderTopWidth: 1,
      },
});

