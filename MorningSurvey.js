import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "./MorningSurvey.styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MorningSurvey = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.morningSurvey}
      locations={[0, 1]}
      colors={["#053b63", "#edf5e0"]}
    >
      <Text style={styles.howAreYou}>How are you this morning?</Text>
      <View style={[styles.pillExerciseDetailsParent, styles.pillLayout]}>
        <View style={[styles.pillExerciseDetails, styles.pillLayout]} />
      </View>
      <Text style={[styles.whatsYourName, styles.yourTypo]}>
        What’s your name?
      </Text>
      <Text style={[styles.jenny, styles.yourTypo]}>
        Jenny
      </Text>
      <Text style={[styles.whatYourBirthday, styles.yourTypo]}>
        What your birthday?
      </Text>
      <Text style={[styles.birthday, styles.yourTypo]}>
        05/30/1999
      </Text>
      <View style={[styles.morningSurveyItem, styles.morningLayout]} />
      <View style={[styles.morningSurveyItem2, styles.morningLayout]} />
      <View style={[styles.nextParent, styles.rectanglePressable]}>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('GoalSetting')}>
            <Image
            style={[styles.arrowRightIcon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("./assets/next.png")}
            />
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    top: 725,
    borderRadius: 80,
    backgroundColor: "#053b63",
    width: 140,
    height: 57,
    left: 230,
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
  pillLayout: {
    height: 317,
    width: 358,
    position: "absolute",
  },
  textTypo: {
    height: 25,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    left: 24,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  yourTypo: {
    height: 68,
    width: 315,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  morningLayout: {
    height: 8,
    width: 323,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  howAreYou: {
    top: 60,
    left: 38,
    color: Color.white,
    textAlign: "center",
    width: 346,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
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
  pillExerciseDetails: {
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: Color.white,
  },
  jenny: {
    top: 63,
    width: 75,
  },
  text: {
    top: 200,
    width: 135,
  },
  pillExerciseDetailsParent: {
    top: 115,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 16,
  },
  pillExerciseDetailsParent2: {
    top: 200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 16,
  },
  whatsYourName: {
    top: 143,
    left: 39,
  },
  jenny: {
    top: 180,
    left: 39,
  },
  whatYourBirthday: {
    top: 269,
    left: 41,
  },
  birthday: {
    top: 310,
    left: 41,
  },
  morningSurveyChild: {
    top: 257,
    left: 31,
  },
  morningSurveyItem: {
    top: 360,
    left: 32,
    backgroundColor: "#d9d9d9",
  },
  morningSurveyItem2: {
    top: 240,
    left: 32,
    backgroundColor: "#d9d9d9",
  },
  morningSurvey: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden"
  },
});

export default MorningSurvey;
