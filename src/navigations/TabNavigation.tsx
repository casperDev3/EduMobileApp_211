import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ForumScreen from '../screens/forum/ForumScreen.tsx';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EventsScreen from '../screens/events/EventsScreen.tsx';
import StoreScreen from '../screens/store/StoreScreen.tsx';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#090808',
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Forum" component={ForumScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
