import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import HomeImage from './HomeImage';

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

// function Display(image) {
//   console.log(image.path, 'imgdis');
//   return (
//     <Image
//       src={{
//         uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
//       }}
//     />
//   );
// }
