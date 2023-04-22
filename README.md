## Contexte

J'ai réalisé cette application pour mon entreprise, en effet je souhaitai retranscrire mon application Web (manieduc) sur le mobile etant donné la praticité.
Dans un premier temps, j'ai mis les utilisateurs avec un appel à une API.

## Technologie utilisée

J'ai utilisé React Native pour réalisé mon application.
Concernant l'appel à mon API, j'ai utilisé Express, qui est très utilisé.
J'ai également utilisé Mysql, puisque mes données sont stockées sur une base MySQL.

## Comment lancer et tester mon application

Pour lancer mon application, il faudra d'abord lancer l'api avec Node.
N'oubliez pas de mettre vos informations de base de donnée dans le fichier .env

```bash
npm run dev
```

Ensuite il faudra lancer l'application react native avec la commande suivante :

```bash
npm start
```

N'oubliez pas de régler les urls avec l'adresse ip de votre réseau, sinon vous n'aurez pas accès à une liste d'utilisateur.
(À modifier dans le fichier Users.js)
Vous avez en pj une base de donnée en sql pour importer en local.
