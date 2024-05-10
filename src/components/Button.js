import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Button = (
  { title,
    onPress = () => { },
    disable }
) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: disable ? Colors.grey : Colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({})

export default Button
