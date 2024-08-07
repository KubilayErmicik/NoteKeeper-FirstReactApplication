import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text, StatusBar, TouchableOpacity } from 'react-native';
import NoteItem from './components/NoteItem';
import NoteInput from './components/NoteInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  function startAddNoteHandler() {
    setModalIsVisible(true);
  }

  function addNoteHandler(enteredNoteText) {
    if (enteredNoteText.length === 0) {
      alert("Not boş olamaz!");
      return;
    }
    setNotes((currentNotes) => [
      ...currentNotes,
      { text: enteredNoteText, id: Math.random().toString() },
    ]);
    endAddNoteHandler();
  }

  function deleteNoteHandler(id) {
    setNotes((currentNotes) => {
      return currentNotes.filter((note) => note.id !== id);
    });
  }

  function endAddNoteHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Text style={styles.header}>Not Defterim</Text>
        <TouchableOpacity style={styles.addButton} onPress={startAddNoteHandler}>
          <Text style={styles.addButtonText}>+ Yeni Not</Text>
        </TouchableOpacity>

        <NoteInput
          visible={modalIsVisible}
          onAddNote={addNoteHandler}
          onCancel={endAddNoteHandler}
        />
        <View style={styles.notesContainer}>
          <FlatList
            data={notes}
            renderItem={(itemData) => {
              return (
                <NoteItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteNoteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notesContainer: {
    flex: 5,
    marginTop: 20,
  },
});