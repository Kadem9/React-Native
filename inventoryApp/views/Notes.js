import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";
import { Button } from "react-native-paper";

const Notes = () => {
  const [noteText, setNoteText] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const createNotesDirectory = async () => {
      try {
        const notesDirectory = FileSystem.documentDirectory + "notes/";
        console.log("notesDirectory", notesDirectory);
        const directoryExists = await FileSystem.getInfoAsync(notesDirectory);
        if (!directoryExists.exists) {
          await FileSystem.makeDirectoryAsync(notesDirectory, {
            intermediates: true,
          });
          console.log("Fichier notes crée avec succès");
        } else {
          console.log("Ce fichier existe déjà, pas besoin de le créer");
        }
      } catch (error) {
        console.error("Impsoible de créer le fichier voici l erreur :", error);
      }
    };
    createNotesDirectory();
  }, []);

  const saveNote = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "notes/notes.txt";
      await FileSystem.writeAsStringAsync(fileUri, noteText, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log("Note enregistrée!");
    } catch (error) {
      console.error("erreur de note", error);
    }
  };

  const showNotes = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "notes/notes.txt";
      const content = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      setNotesContent(content);
      console.log("Contenu des notes:", content);
      setIsOpen(!isOpen);
      setNoteText("");
    } catch (error) {
      console.error("erreur de lecture", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Entre une note"
        onChangeText={setNoteText}
        value={noteText}
      />
      <Button buttonColor={"#FFE600"} title="Sauvegarder" onPress={saveNote}>
        Sauvegarder
      </Button>
      <Button
        buttonColor={"#FFE100"}
        title="Afficher les notes"
        onPress={showNotes}
      >
        Voir ma note
      </Button>
      <Text>{notesContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Notes;
