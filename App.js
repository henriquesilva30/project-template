import React , {useState} from "react";
import Home from './app/components/Home';
import WelcomeScreen from "./app/components/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
      return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Bem vindo" >
         <Stack.Screen name="Bem vindo"component={WelcomeScreen}/>
          <Stack.Screen name="Home"component={Home}/>
     </Stack.Navigator>
     </NavigationContainer>
  );
};



export default App;