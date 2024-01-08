import {Alert, StyleSheet, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import LayOut from 'src/Components/Layout';
import {CustomButton} from 'src/Components';
import {checkUsernameExist, createUserProfile} from 'src/Services/Firestore';

const CreateUser = () => {
  const [username, setUserName] = useState<string>('');
  const [id, setUserId] = useState<string>('');

  const onPress = async () => {
    try {
      const checkUserExist = await checkUsernameExist(username);
      if (!checkUserExist) {
        await createUserProfile(Math.random().toString(), username).then(() => {
          Alert.alert('Create User Success');
        });
      }
    } catch (error) {}
  };
  return (
    <LayOut titileHeader="Create User">
      <Text style={styles.titleContainer}>Username</Text>
      <TextInput
        value={username}
        autoFocus
        style={styles.inputContainer}
        placeholder={'Username'}
        onChangeText={setUserName}
      />
      <Text style={styles.titleContainer}>User Id</Text>
      <TextInput
        value={id}
        autoFocus
        style={styles.inputContainer}
        secureTextEntry={true}
        placeholder={'Username'}
        onChangeText={setUserId}
      />
      <CustomButton
        onPress={onPress}
        label={[
          {
            text: 'Submit',
          },
        ]}
      />
    </LayOut>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  titleContainer: {
    marginBottom: 8,
  },
});
