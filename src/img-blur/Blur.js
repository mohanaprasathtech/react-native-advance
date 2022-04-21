import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
function Blur() {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={require('../img-crop/pic.jpg')}
        blurRadius={10}
      />
    </View>
  );
}

export default Blur;
