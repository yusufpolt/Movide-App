import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';

const Input = ({placeholder, isSecure, lowerCase, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize={lowerCase}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
