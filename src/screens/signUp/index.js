import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../../components/input';
import Button from '../../components/button';

const goToSignIn = navigation => {
  navigation.navigate('SignIn');
};

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Sign Up</Text>
      <Input placeholder={'username'} onChangeText={null} lowerCase={'none'} />
      <Input
        onChangeText={null}
        placeholder={'password'}
        lowerCase={'none'}
        isSecure={true}
      />
      <Button title={'Sign Up'} onPress={null} />
      <TouchableOpacity
        onPress={() => goToSignIn(navigation)}
        style={styles.alreadyAcountContent}>
        <Text style={styles.alreadAcountText}>
          Do you already have an account!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
