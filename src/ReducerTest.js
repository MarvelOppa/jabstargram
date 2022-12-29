import { useState, useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const initState = 0;
const CountType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state, action) => {
  switch (action) {
    case CountType.INCREMENT:
      return state + 1;
    case CountType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const ReducerTest = () => {
  const [result, dispatch] = useReducer(reducer, initState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result}</Text>

      <Button title={'+'} onPress={() => dispatch(CountType.INCREMENT)} />
      <Button title={'-'} onPress={() => dispatch(CountType.DECREMENT)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default ReducerTest;
