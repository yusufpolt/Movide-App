import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../../components/input';
import Button from '../../components/button';

const goToSignUp = navigation => {
  navigation.navigate('SignUp');
};

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Sign In</Text>
      <Input placeholder={'username'} onChangeText={null} lowerCase={'none'} />
      <Input placeholder={'password'} onChangeText={null} lowerCase={'none'} />
      <Button onPress={null} title={'Sign In'} />
      <TouchableOpacity
        onPress={() => goToSignUp(navigation)}
        style={styles.alreadyAcountContent}>
        <Text style={styles.alreadAcountText}>
          Don't have an account yet...
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alreadyAcountContent}>
        <Text style={styles.alreadAcountText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
