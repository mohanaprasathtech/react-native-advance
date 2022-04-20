import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtraction,nulls} from './action';
function Counter() {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '500'}}>{data}</Text>
      <Text>{'\n'}</Text>
      <Button title="ADD" onPress={() => dispatch(addition())} />
      <Text>{'\n'}</Text>
      <Button title="SUBTRACT" onPress={() => dispatch(subtraction())} />
      <Text>{'\n'}</Text>
      <Button title="RESET" onPress={() => dispatch(nulls())} />
    </View>
  );
}

export default Counter;
