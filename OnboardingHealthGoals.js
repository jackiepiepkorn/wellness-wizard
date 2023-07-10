import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color } from "./OnboardingHealthGoals.styles";

const OnboardingHealthGoals = () => {
  return (
    <LinearGradient
      style={styles.onboardingHealthGoals}
      locations={[0, 1]}
      colors={["#053b63", "#edf5e0"]}
      useAngle={true}
      angle={168.32}
    >
      <Text style={styles.letsChooseYour}>Let’s choose your health goals!</Text>
      <Image
        style={styles.arrowLeftCircleIcon}
        resizeMode="cover"
      />
      <Image
        style={[
          styles.onboardingHealthGoalsChild,
          styles.onboardingChildLayout,
        ]}
        resizeMode="cover"
      />
      <Image
        style={[styles.onboardingHealthGoalsItem, styles.onboardingChildLayout]}
        resizeMode="cover"
      />
      <Image
        style={[styles.onboardingHealthGoalsInner, styles.onboardingPosition]}
        resizeMode="cover"
      />
      <Image
        style={[styles.groupIcon, styles.onboardingPosition]}
        resizeMode="cover"
      />
      <Image
        style={[
          styles.onboardingHealthGoalsChild1,
          styles.onboardingChildPosition,
        ]}
        resizeMode="cover"
      />
      <Image
        style={[styles.onboardingHealthGoalsChild2, styles.onboardingPosition]}
        resizeMode="cover"
      />
      <Image
        style={[
          styles.onboardingHealthGoalsChild3,
          styles.onboardingChildPosition,
        ]}
        resizeMode="cover"
      />
      <Text style={[styles.sleep, styles.sleepTypo]}>Sleep</Text>
      <Text style={[styles.hydration, styles.sleepTypo]}>Hydration</Text>
      <Text style={[styles.foodIntake, styles.foodIntakeTypo]}>
        Food Intake
      </Text>
      <Text style={[styles.stressManagement, styles.foodIntakeTypo]}>
        Stress Management
      </Text>
      <Text style={[styles.exercise, styles.sleepTypo]}>Exercise</Text>
      <Text
        style={[styles.wellnessChallenge, styles.foodIntakeTypo]}
      >{`Wellness Challenge `}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  onboardingChildLayout: {
    height: 165,
    width: 177,
  },
  onboardingPosition: {
    top: 374,
    position: "absolute",
  },
  onboardingChildPosition: {
    top: 551,
    height: 165,
    width: 177,
    position: "absolute",
  },
  sleepTypo: {
    width: 106,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    
    fontWeight: "600",
    position: "absolute",
  },
  foodIntakeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontWeight: "600",
    position: "absolute",
  },
  letsChooseYour: {
    top: 60,
    left: 30,
    fontSize: 24,
    textAlign: "center",
    width: 345,
    color: Color.white,
    fontWeight: "600",
    position: "absolute",
  },
  arrowLeftCircleIcon: {
    top: 65,
    width: 24,
    height: 24,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  onboardingHealthGoalsChild: {
    left: 14,
    top: 197,
    width: 177,
    position: "absolute",
  },
  onboardingHealthGoalsItem: {
    left: 202,
    top: 197,
    width: 177,
    position: "absolute",
  },
  onboardingHealthGoalsInner: {
    width: 169,
    height: 157,
    left: 16,
  },
  groupIcon: {
    left: 12,
    height: 165,
    width: 177,
  },
  onboardingHealthGoalsChild1: {
    left: 12,
  },
  onboardingHealthGoalsChild2: {
    left: 203,
    height: 165,
    width: 177,
  },
  onboardingHealthGoalsChild3: {
    left: 205,
  },
  sleep: {
    left: 70,
    top: 261,
    width: 106,
  },
  hydration: {
    left: 241,
    top: 261,
    width: 106,
  },
  foodIntake: {
    top: 438,
    left: 45,
    width: 162,
  },
  stressManagement: {
    top: 608,
    left: 226,
    width: 139,
  },
  exercise: {
    top: 613,
    left: 50,
  },
  wellnessChallenge: {
    top: 423,
    left: 225,
    width: 163,
  },
  onboardingHealthGoals: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default OnboardingHealthGoals;
