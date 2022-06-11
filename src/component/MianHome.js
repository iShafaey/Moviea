import React, {PureComponent} from 'react';
import Search from '../screens/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainNavigation from '../component/MainNavigation';
const Tab = createBottomTabNavigator();

class MianHome extends PureComponent {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-outline' : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0099ff',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={MainNavigation} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    );
  }
}

export default MianHome;
