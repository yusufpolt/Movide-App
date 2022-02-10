import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './src/screens/signIn';
import SignUp from './src/screens/signUp';
import bottomTabNavigator from './src/navigation/bottomTabNavigator';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {
  const [initialScreen, setInitialScreen] = useState('SignIn');
  const isSignedIn = false;
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={initialScreen}>
          {isSignedIn ? (
            <>
              <Stack.Screen name={'SignIn'} component={SignIn} />
              <Stack.Screen name={'SignUp'} component={SignUp} />
            </>
          ) : (
            <>
              <Stack.Screen
                name={'Bottom Tab'}
                component={bottomTabNavigator}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
