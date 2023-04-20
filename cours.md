# Intro

React Native est une librairie permettant de créer des applications natives android et IOS.

## Dev IOS

Normalement pour développer sur IOS il faut avoir un ordi avec macOS et un terminal mobile sous IOS.

Voir la doc sur :
https://developer.apple.com/ios

Le langage de programmation utilise est Swift. (ou Objective-C)

### Dev Android

Nous allons utiliser Android Studio, avec un emulateur intégré. Dans notre cas ce sera Pixel 3

### Différence

React Native /== de React.
En react on va faire du HTML, alors que en react native non.

EXEMPLE

### React Native

C'est un framework cross-platform qui permet de produire des applications natives IOS et Android, le tout avec la synthaxe de la bibliothèque React :

```javascript
const App = (props) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
```

### Principes de developpement : Le développement mobile natif

Android Sutdio :
Virtual Device Manager :
SDK Manager :
Code source -> compilation -> executable

### Principes de developpement : Les core coponents

RN (React Native) fournit un nombre de core components pré-intégrés qui permettent de couvrir un large eventail de possibilités de développement. Ils repondent aux besoins les plus courants de la plupart des applications mobiles les plus simples.

// Path(pictures/basic-component.PNG) -> Les composants basiques

### Installation (Sous Android)

Il existe deux manières de mettre en place son environnement dev:

- Expo et Expo Go (debutant friendly)
- React Native CLI

Expo est un ensemble d'outils construit autour de React Native, c'est la méthode la pmlus rapide pour commencer à développer sans avoir à trop se soucier de la configuration du projet.

Pre requis :

- Node JS (Version LTS) installé sur la machine

Pour creer un projet avec Expo il suffit de taper la commande suivante :

```bash
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start
```

Une fois l'installation terminée on obtient une application RN dont la structure des fichiers et dossiers rappelle fortement un projet React.

Pour lancer l'appli on utilise npm start qui utilise la lib expo pour lancer notre application.

### Le composant View

C'est le composant de base poru la construction d'interface utilisateru mobile.
C'est un conteneur qui embarque nativements des fonctionnalités :

- Flex
- Du style
- Des fonctionnalités tactiles https://reactnative.dev/docs/handing-touches
- des fonctionnalités d'accessibilité https://reactnative.dev/docs/accessibility

```javascript
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default LotsOfStyles;
```

### La navigation entre les écrans

lien doc : https://reactnavigation.org/docs/getting-started
Si on veut rajouter sur notre projet, on utilisera npm :

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

si on utilise expo il faudra faire des installations suppl.

```bash
npx expo install react-native-screens react-native-safe-area-context
```

ensuite comme vu sur la doc on englobe notre app avec le navcontainer :

```javascript
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

### React Native Paper

Nous sommes un peu plus limité que sur du css en web. Et donc des bibliothèques existe (doc : https://reactnativepaper.com/).
Nous avons vu avec le prof react native paper.
Leur description en FR :

```text
React Native Paper est une bibliothèque de conception de matériaux de haute qualité et conforme aux normes qui vous couvre dans tous les principaux cas d'utilisation.
```

Ca nous permet d'utiliser des composants. C'est simple d'utilisation, encore une fois il faudra npm install les dépendances.

### Express et BodyParser

voir image dans pictures/explicationExpresss
