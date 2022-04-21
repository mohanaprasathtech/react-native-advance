import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
function Blur() {
  const [blur, setblur] = useState(0);
  return (
    <View>
      <Image
        style={{marginTop: 50}}
        resizeMode="cover"
        source={require('../img-crop/pic.jpg')}
        blurRadius={blur}
      />
      <Button title="+" onPress={() => setblur(blur + 5)} />
      <Button title="-" onPress={() => setblur(blur - 5)} />
    </View>
  );
}

export default Blur;
