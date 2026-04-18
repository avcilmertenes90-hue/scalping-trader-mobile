import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import Trading from './screens/Trading';
import BotSettings from './screens/BotSettings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Trading" component={Trading} />
        <Tab.Screen name="Bot Settings" component={BotSettings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;