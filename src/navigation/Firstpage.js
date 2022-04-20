import React from 'react';
import {View, Text, Button} from 'react-native';
function Firstpage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Page-1</Text>
      <Button
        title="Move 2nd page"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

export default Firstpage;
