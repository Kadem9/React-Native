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

### Principes de developpement : Les core coponents

RN (React Native) fournit un nombre de core components pré-intégrés qui permettent de couvrir un large eventail de possibilités de développement. Ils repondent aux besoins les plus courants de la plupart des applications mobiles les plus simples.

// Path(pictures/basic-component.PNG) -> Les composants basiques

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
