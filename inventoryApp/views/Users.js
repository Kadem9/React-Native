import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Users = () => {
  // MODIFIER L'IP ET LE PORT ICI
  const envIp = "192.168.0.31";
  const envPort = "3000";

  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = (id, firstname, lastname, email) => {
    setEditUserId(id);
    setNewFirstname(firstname);
    setNewLastname(lastname);
    setNewEmail(email);
  };
  const handleSave = () => {
    fetch(`http://${envIp}:${envPort}/update/users/${editUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEditUserId(null);
        setNewFirstname("");
        setNewLastname("");
        setNewEmail("");
        fetchData();
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.error("erreur json ?:", error.message);
        }
        console.error(error);
      });
  };

  const renderItem = ({ item }) => {
    if (editUserId === item.id) {
      return (
        <View style={styles.editItem}>
          <TextInput
            style={styles.input}
            value={newFirstname}
            onChangeText={setNewFirstname}
            placeholder="Prénom"
          />
          <TextInput
            style={styles.input}
            value={newLastname}
            onChangeText={setNewLastname}
            placeholder="Nom"
          />
          <TextInput
            style={styles.input}
            value={newEmail}
            onChangeText={setNewEmail}
            placeholder="Email"
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.item}>
          <Text style={styles.name}>
            {item.firstname} {item.lastname}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              handleEdit(item.id, item.firstname, item.lastname, item.email)
            }
          >
            <Text style={styles.editButtonText}>Modifier</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const fetchData = () => {
    fetch(`http://${envIp}:${envPort}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.error("Erreur JSON :", error.message);
        }
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des utilisateurs</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  email: {
    fontSize: 14,
    color: "#999",
    flex: 2,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
  },
  editItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default Users;
