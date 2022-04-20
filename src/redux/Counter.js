import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtraction} from './action';
function Counter() {
  const data = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="ADD" onPress={() => dispatch(addition())} />
      <Text style={{fontSize: 20, fontWeight: '500'}}>{data}</Text>
      <Button title="SUBTRACT" onPress={() => dispatch(subtraction())} />
    </View>
  );
}

export default Counter;
