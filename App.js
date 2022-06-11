import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MianHome from './src/component/MianHome';

const App = () => {
  return (
    <NavigationContainer>
      <MianHome />
    </NavigationContainer>
  );
};

export default App;
