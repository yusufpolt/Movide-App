import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import PopularMovies from '../../screens/popularMovies';
import UpcomingMovies from '../../screens/upcomingMovies';
import Profile from '../../screens/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    paddingVertical: 15,
  },
};

const homeOptions = {
  tabBarIcon: ({color, size}) => {
    return <Icon name={'home'} color={color} size={35} />;
  },
};

const popularMoviesOptions = {
  tabBarIcon: ({color, size}) => {
    return <Icon name={'movie-filter-outline'} color={color} size={35} />;
  },
};

const upcomingMoviesOptions = {
  tabBarIcon: ({color, size}) => {
    return <Icon size={35} color={color} name={'movie-roll'} />;
  },
};

const profileOptions = {
  tabBarIcon: ({color, size}) => {
    return <Icon size={35} color={color} name={'account-outline'} />;
  },
};

const TabRouter = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen options={homeOptions} name={'Home'} component={Home} />
      <Tab.Screen
        options={popularMoviesOptions}
        name={'Popular Movies'}
        component={PopularMovies}
      />
      <Tab.Screen
        name={'Upcoming Movies'}
        component={UpcomingMovies}
        options={upcomingMoviesOptions}
      />
      <Tab.Screen
        options={profileOptions}
        name={'Profile'}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabRouter;
