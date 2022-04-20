import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
const link = 'https://reactnative.dev/movies.json';
function Fetch() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  function handleshow() {
    fetch(link)
      .then(res => res.json())
      .then(json => setdata(json.movies))
      .catch(err => alert(err))
      .finally(setloading(false));
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <Button title="Show me" onPress={() => handleshow()} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      )}
    </SafeAreaView>
  );
}

export default Fetch;
