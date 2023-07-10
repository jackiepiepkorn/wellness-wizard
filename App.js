import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingGoalSetting from "./OnboardingGoalSetting";
import OnboardingHealthGoals from './OnboardingHealthGoals';
import Onboarding from './Onboarding';
import MorningSurvey from './MorningSurvey';
import Goals from './Home';
import OnboardingHealthGoalSetting from './HealthGoalSetting'
import OnboardingChooseHealthGoals from './OnBoardingChooseHealthGoals';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "#053b63", // Set the desired background color for the header
          },
          headerTintColor: 'white', // Set the text color of the header buttons
        }} initialRouteName="Onboarding">
          <Stack.Screen options={{ headerShown:false }} name="Onboarding" component={Onboarding} />
          <Stack.Screen options={{
            title: "Survey",
          }} name="MorningSurvey" component={MorningSurvey} />
          <Stack.Screen name="GoalSetting" component={OnboardingGoalSetting} />
          <Stack.Screen name="HealthGoals" component={OnboardingChooseHealthGoals} />
          <Stack.Screen name="HealthSetting" component={OnboardingHealthGoalSetting} />
          <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
