import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Timer from 'src/Components/CountDown';

const CreateUser = () => {
  return (
    <View style={styles.container}>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Text>CreateUser</Text>
      <Timer initialSeconds={300} />
    </View>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
