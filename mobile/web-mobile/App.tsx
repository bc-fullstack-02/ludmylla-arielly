import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, User, UsersThree } from 'phosphor-react-native';
import { useContext } from 'react';
import { useEffect } from 'react';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import { Provider as AuthProvider, Context as AuthContext } from './src/content/AuthContent';

import { Login } from './src/Screens/Login';
import { Loading } from './src/components/Loading';
import { SignUp } from './src/Screens/SignUp';
import { Home } from './src/Screens/Home';
import { Friends } from './src/Screens/Friends';
import { Profile } from './src/Screens/Profile';
import { THEME } from './src/Theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900,
  },
  statusBarStyle: 'dark',
  title: false,
};

function App() {
  const { token, tryLocalLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin && tryLocalLogin()
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <NavigationContainer theme={MyTheme}>
          {!token ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                statusBarStyle: 'dark',
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                switch (route.name){
                  case "Home":
                    return (
                      <House size={size} color={color} />
                    )
                  case "Friends":
                    return (
                      <UsersThree size={size} color={color} />
                    )
                  case "Profile":
                    return (
                      <User size={size} color={color} />
                    )
                }
              },
              tabBarStyle: {backgroundColor: THEME.COLORS.BACKGROUND_900},
              tabBarShowLabel: false,
              headerShown: false,
            })}
          >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Friends" component={Friends} />
              <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
