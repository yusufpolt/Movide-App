import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
