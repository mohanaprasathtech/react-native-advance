import React from 'react';
import {View, Text, Button} from 'react-native';
function Secondpage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Pages-2</Text>
      <Button title="back" onPress={() => navigation.navigate('First')} />
    </View>
  );
}

export default Secondpage;
