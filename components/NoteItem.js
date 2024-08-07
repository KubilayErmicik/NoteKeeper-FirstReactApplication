import { StyleSheet, View, Text, Pressable } from "react-native";

function NoteItem(props) {
  return (
    <View style={styles.noteContainer}>
      <Pressable
        android_ripple={{ color: "#dcdcdc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.noteText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default NoteItem;

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  pressedItem: {
    opacity: 0.8,
  },
  noteText: {
    color: '#333',
    fontSize: 18,
    padding: 15,
  },
});