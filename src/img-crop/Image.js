import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function Images({image, setImage}) {
  console.log(image, 'images');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="show" onPress={() => showpic(setImage)} />
      <Image
        style={{height: 100, width: 100}}
        source={{
          uri: image?.path,
        }}
      />
    </View>
  );
}

export default Images;
function showpic(setImage) {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log('image showed', image);

    setImage(image);
  });
}
