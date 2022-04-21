import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fetch from './src/fetch/Fetch';
import Counter from './src/redux/Counter';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Firstpage from './src/navigation/Firstpage';
import Secondpage from './src/navigation/Secondpage';
import Images from './src/img-crop/Image';
import Blur from './src/img-blur/Blur';
const Stack = createNativeStackNavigator();
const App = () => {
  const [image, setImage] = useState(null);
  return (
    //API FETCHING
    // <Fetch />

    //REDUX PART
    // <View style={{flex: 1}}>
    //   <StoreProvider store={store}>
    //     <Counter />
    //   </StoreProvider>
    // </View>

    //SCREEN NAVIGATION PART
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="First"
    //       component={Firstpage}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Second"
    //       component={Secondpage}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //IMAGE CROPPER
    // <Images image={image} setImage={setImage} />

    //IMG-BLUR
    <Blur />
  );
};
export default App;
const styles = StyleSheet.create({});
