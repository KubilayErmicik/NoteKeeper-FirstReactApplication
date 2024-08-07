import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, Text } from "react-native";

function NoteInput(props) {
  const [enteredNoteText, setEnteredNoteText] = useState('');

  function noteInputHandler(enteredText) {
    setEnteredNoteText(enteredText);
  }

  function addNoteHandler() {
    props.onAddNote(enteredNoteText);
    setEnteredNoteText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/notes.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Notlarınızı buraya yazın...'
          placeholderTextColor="#888"
          onChangeText={noteInputHandler}
          value={enteredNoteText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Ekle' color='#007BFF' onPress={addNoteHandler} />
          </View>
          <View style={styles.button}>
            <Button title="İptal" color='#FF6347' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NoteInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});