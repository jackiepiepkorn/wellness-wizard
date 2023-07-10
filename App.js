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
      <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="MorningSurvey" component={MorningSurvey} />
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
