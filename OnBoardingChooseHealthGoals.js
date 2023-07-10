import { useState } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color } from "./OnboardingChooseHealthGoals.styles";

const OnboardingHealthGoals = ({ navigation }) => {

  const [hydration, setHydration] = useState(false);
  const [food, setFood] = useState(false);
  const [exercise, setExercise] = useState(false);

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
        source={require("./assets/group-106.png")}
      />
      <Image
        style={[styles.onboardingHealthGoalsItem, styles.onboardingPosition]}
        resizeMode="cover"
        source={require("./assets/group-106.png")}
      />
      <Image
        style={[styles.onboardingHealthGoalsInner, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("./assets/group-106.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={exercise ? require("./assets/group-108.png") : require("./assets/group-106.png")}
      />
      <Image
        style={[styles.onboardingHealthGoalsChild1, styles.onboardingPosition]}
        resizeMode="cover"
        source={food ? require("./assets/group-108.png") : require("./assets/group-106.png")}
      />
      <Image
        style={[
          styles.onboardingHealthGoalsChild2,
          styles.onboardingChildLayout,
        ]}
        resizeMode="cover"
        source={hydration ? require("./assets/group-108.png") : require("./assets/group-106.png")}
      />
      <Text style={[styles.sleep, styles.sleepTypo]}>Sleep</Text>
      <Text onPress={() => setHydration(!hydration)} style={[styles.hydration, styles.sleepTypo]}>Hydration</Text>
      <Text onPress={() => setFood(!food)}  style={[styles.foodIntake, styles.foodIntakeTypo]}>
        Food Intake
      </Text>
      <Text style={[styles.stressManagement, styles.foodIntakeTypo]}>
        Stress Management
      </Text>
      <Text onPress={() => setExercise(!exercise)} style={[styles.exercise, styles.sleepTypo]}>Exercise</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.nextParentShadowBox]}
        onPress={() => navigation.navigate("HealthSetting")}
      />
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
    top: 197,
    position: "absolute",
  },
  onboardingPosition: {
    top: 381,
    height: 165,
    width: 177,
    position: "absolute",
  },
  groupIconPosition: {
    top: 564,
    height: 165,
    width: 177,
    position: "absolute",
  },
  sleepTypo: {
    width: 106,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  foodIntakeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  letsChooseYour: {
    top: 60,
    left: 30,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    width: 345,
    color: Color.white,
    position: "absolute",
  },
  arrowLeftCircleIcon: {
    top: 65,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  onboardingHealthGoalsChild: {
    left: 14,
  },
  onboardingHealthGoalsItem: {
    left: 207,
  },
  onboardingHealthGoalsInner: {
    left: 203,
  },
  groupIcon: {
    left: 14,
  },
  onboardingHealthGoalsChild1: {
    left: 14,
  },
  onboardingHealthGoalsChild2: {
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
    top: 628,
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
  rectanglePressable: {
    top: 749,
    borderRadius: 80,
    backgroundColor: "#053b63",
    width: 134,
    height: 57,
    left: 241,
  },
  nextParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
});

export default OnboardingHealthGoals;
