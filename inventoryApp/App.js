import Home from "./views/Home";
import { Provider as PaperProvider } from "react-native-paper";
import Users from "./views/Users";
import Notes from "./views/Notes";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoader from "./views/HomeLoader";
import Login from "./views/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="HomeLoader"
            component={HomeLoader}
            options={{ title: "ManiEduc" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Connexion" }}
          /> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Accueil" }}
          />
          <Stack.Screen
            name="Users"
            component={Users}
            options={{ title: "Utilisateurs" }}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{ title: "Notes" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
