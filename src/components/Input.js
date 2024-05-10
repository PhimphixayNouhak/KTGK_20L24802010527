import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button, IconButton } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Input = ({
  label,
  iconName,
  error,
  password,
  value,
  onFocus = () => { },
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hidePassword, setHidePassword] = useState(password)
  return (
    <View style={{ marginBottom: 5 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, {
        borderColor: error ? Colors.red : isFocused ? Colors.darkBlue : Colors.light
      }]}>
        <Icon name={iconName} style={{ fontSize: 22, color: Colors.darkBlue, marginRight: 10 }} />
        <TextInput
          secureTextEntry={hidePassword}
          {...props}
          autoCorrect={false}
          value={value}
          onFocus={() => { onFocus }}
          onBlur={() => setIsFocused(false)}
          style={{ color: Colors.darkBlue, flex: 1 }} />
        {password &&
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: Colors.darkBlue, fontSize: 22 }}
          />}
      </View>
      {error && <Text style={{ color: Colors.red, fontSize: 12, marginTop: 7 }}>{error}</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: Colors.grey,
    marginVertical: 5
  },

  inputContainer: {
    height: 55,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  }
})

export default Input