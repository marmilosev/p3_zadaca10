import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CommentInput = (props) => {
  //deklaracija state varijable
  const [enteredComment, setEnteredComment] = useState('');

  //postavlja vrijednost enteredComment varijable na vrijednost koju unesemo u textInuptu
  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };

  //kada se pozove onAddComment bilo gdje u aplikaciji proslijeđuje enteredComment vrijednost i čisti textInput
  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    setEnteredComment('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Unesi komentar"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Unesi komentar" onPress={addCommentHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    margin: 10,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '100%',
  },
});
export default CommentInput;
