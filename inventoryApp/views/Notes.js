import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as FileSystem from "expo-file-system";

const Notes = () => {
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    // Create the "notes" directory when the component mounts
    const createNotesDirectory = async () => {
      try {
        const notesDirectory = FileSystem.documentDirectory + "notes/";
        console.log("notesDirectory", notesDirectory);
        const directoryExists = await FileSystem.getInfoAsync(notesDirectory);
        if (!directoryExists.exists) {
          await FileSystem.makeDirectoryAsync(notesDirectory, {
            intermediates: true,
          });
          console.log('Directory "notes" created successfully!');
        } else {
          console.log('Directory "notes" already exists.');
        }
      } catch (error) {
        console.error("Error while creating directory:", error);
      }
    };

    createNotesDirectory();
  }, []);

  const saveNote = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "assets/notes.txt";
      await FileSystem.writeAsStringAsync(fileUri, noteText, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log("Note enregistrée!");
    } catch (error) {
      console.error("erreur de note", error);
    }
  };

  return (
    <View>
      <Text>Notes</Text>
      <TextInput
        placeholder="Entre une note"
        onChangeText={setNoteText}
        value={noteText}
      />
      <Button title="Sauvegarder" onPress={saveNote} />
    </View>
  );
};

export default Notes;
