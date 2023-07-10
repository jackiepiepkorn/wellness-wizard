import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "./HealthGoalSetting.styles";

const OnboardingHealthGoalSetting = ({navigation}) => {

  return (
    <LinearGradient
      style={styles.onboardingHealthGoalSetti}
      locations={[0, 1]}
      colors={["#053b63", "#edf5e0"]}
    >
      <Text style={styles.letsSetYour}>Let's set your goals!</Text>
      <Image
        style={[styles.arrowLeftCircleIcon, styles.arrowIconLayout]}
        contentFit="cover"
      />
      <View style={[styles.pillExerciseDetailsWrapper, styles.pillShadowBox]}>
        <View style={[styles.pillExerciseDetails, styles.pillLayout]} />
      </View>
      <View style={[styles.pillExerciseDetailsContainer, styles.pillShadowBox]}>
        <LinearGradient
          style={[styles.pillExerciseDetails1, styles.pillLayout]}
          locations={[0, 1]}
          colors={["#64c4a1", "rgba(52, 207, 151, 0)"]}
        />
      </View>
      <View style={[styles.pillExerciseDetailsFrame, styles.pillShadowBox]}>
        <LinearGradient
          style={[styles.pillExerciseDetails1, styles.pillLayout]}
          locations={[0, 1]}
          colors={["#64c4a1", "rgba(52, 207, 151, 0)"]}
        />
      </View>
      <View style={[styles.groupView, styles.pillShadowBox]}>
        <LinearGradient
          style={[styles.pillExerciseDetails1, styles.pillLayout]}
          locations={[0, 1]}
          colors={["#64c4a1", "rgba(52, 207, 151, 0)"]}
        />
      </View>
      <View
        style={[styles.onboardingHealthGoalSettiChild, styles.onboardingLayout]}
      />
      <Text style={[styles.text, styles.textFlexBox]}>3</Text>
      <View
        style={[styles.onboardingHealthGoalSettiItem, styles.onboardingLayout]}
      />
      <Text style={[styles.text1, styles.textFlexBox]}>45</Text>
      <Text style={styles.hydration}>Hydration</Text>
      <Text style={[styles.foodIntake, styles.exerciseTypo]}>Food Intake</Text>
      <Text style={[styles.exercise, styles.exerciseTypo]}>Exercise</Text>
      <Pressable
        style={[
          styles.onboardingHealthGoalSettiInner,
          styles.nextParentShadowBox,
        ]}
        onPress={() => navigation.navigate("Home")}
      />
      <View style={[styles.nextParent, styles.nextParentShadowBox]}>
        <TouchableOpacity onPress={() =>navigation.navigate('Home') }>
          <Text style={[styles.next, styles.textFlexBox]}>Next</Text>
        </TouchableOpacity>
        <Image
          style={[styles.arrowRightIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require('./assets/arrow-right.png')}
        />
      </View>
      <View style={[styles.rectangleView, styles.onboardingLayout]} />
      <Text style={[styles.text2, styles.textFlexBox]}>8</Text>
      <Image
        style={[styles.groupIcon, styles.onboardingChildLayout]}
        contentFit="cover"
        source={require("./assets/potfood.png")}
      />
      <Image
        style={[
          styles.onboardingHealthGoalSettiChild1,
          styles.onboardingChildLayout,
        ]}
        contentFit="cover"
        source={require("./assets/cup.png")}
      />
      <Image
        style={[
          styles.onboardingHealthGoalSettiChild2,
          styles.onboardingChildLayout,
        ]}
        contentFit="cover"
        source={require("./assets/bench.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  arrowIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  pillShadowBox: {
    height: 157,
    width: 358,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 16,
    position: "absolute",
  },
  pillLayout: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 157,
    width: 358,
    position: "absolute",
  },
  onboardingLayout: {
    height: 9,
    width: 106,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  exerciseTypo: {
    width: 185,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    left: 30,
    position: "absolute",
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
  onboardingChildLayout: {
    height: 95,
    width: 95,
    position: "absolute",
  },
  letsSetYour: {
    top: 60,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    width: 345,
    color: Color.white,
    left: 30,
    position: "absolute",
  },
  arrowLeftCircleIcon: {
    top: 65,
    left: 16,
    width: 24,
  },
  pillExerciseDetails: {
    backgroundColor: "#85bba7",
  },
  pillExerciseDetailsWrapper: {
    top: 195,
    width: 358,
  },
  pillExerciseDetails1: {
    backgroundColor: "transparent",
  },
  pillExerciseDetailsContainer: {
    top: 195,
    width: 358,
  },
  pillExerciseDetailsFrame: {
    top: 374,
  },
  groupView: {
    top: 554,
  },
  onboardingHealthGoalSettiChild: {
    top: 483,
    left: 163,
  },
  text: {
    top: 420,
    left: 200,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
  },
  onboardingHealthGoalSettiItem: {
    top: 670,
    left: 165,
  },
  text1: {
    top: 607,
    left: 191,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
  },
  hydration: {
    top: 206,
    left: 32,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 106,
    color: Color.white,
    position: "absolute",
  },
  foodIntake: {
    top: 379,
  },
  exercise: {
    top: 560,
  },
  onboardingHealthGoalSettiInner: {
    top: 749,
    left: 241,
    borderRadius: 80,
    backgroundColor: "#053b63",
    width: 134,
    height: 57,
  },
  next: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  arrowRightIcon: {
    top: 1,
    left: 56,
  },
  nextParent: {
    top: 764,
    left: 269,
    width: 80,
    height: 27,
  },
  rectangleView: {
    top: 317,
    left: 172,
  },
  text2: {
    top: 254,
    left: 204,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
  },
  groupIcon: {
    top: 416,
    left: 39,
    height: 95,
    width: 95,
  },
  onboardingHealthGoalSettiChild1: {
    top: 243,
    left: 40,
  },
  onboardingHealthGoalSettiChild2: {
    top: 597,
    left: 39,
    height: 95,
    width: 95,
  },
  onboardingHealthGoalSetti: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default OnboardingHealthGoalSetting;
