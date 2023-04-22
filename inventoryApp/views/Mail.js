import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import * as MailComposer from "expo-mail-composer";

// Je crée une fonction qui va envoyer le mail avec les informations en paramètres
const sendMail = async (recipient, subject, body) => {
  /// Voici les options du mail
  const options = {
    recipients: [recipient], // la liste des destinataires
    subject: subject, // le sujet du mail
    body: body, // le corps du mail
  };

  // Appelez la fonction "composeAsync" de la bibliothèque "expo-mail-composer" avec l'objet "options" en paramètre pour envoyer le mail
  await MailComposer.composeAsync(options);
};

// Créez un composant Mail qui contient des inputs pour saisir les informations du mail et un bouton pour envoyer le mail
const Mail = () => {
  // J'utilise UseSTATE Pour mes stocker la valeur de mes inputs
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  // Je crée une fonction qui va appeler la fonction d'envoi de mail
  const handleSendMail = async () => {
    // J'apelle la fonction d'envoi de mail avec les valeurs des inputs en paramètres
    await sendMail(recipient, subject, body);
  };

  // Je fais le rendu de mon composant
  return (
    <View style={styles.container}>
      <Text>Destinataire :</Text>
      <TextInput
        style={styles.input}
        value={recipient}
        onChangeText={setRecipient}
      />
      <Text>Sujet :</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
      />
      <Text>Corps du mail :</Text>
      <TextInput
        style={[styles.input, styles.bodyInput]}
        value={body}
        onChangeText={setBody}
        multiline
        numberOfLines={4}
      />
      <Button title="Envoyer" onPress={handleSendMail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    width: "100%",
  },
  bodyInput: {
    height: 150,
  },
});

export default Mail;
