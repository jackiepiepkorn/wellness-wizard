import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, Color } from "./OnboardGoalSetting.styles";

const OnboardingGoalSetting = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.onboardingGoalSetting}
      locations={[0, 1]}
      colors={["#053b63", "#edf5e0"]}
      useAngle={true}
      angle={168.32}
    >
      <LinearGradient
        style={styles.lineargradient}
        locations={[0, 1]}
        colors={["#ffeeb2", "#20996d"]}
        useAngle={true}
        angle={125.95}
      />
      <LinearGradient
        style={[styles.lineargradient1, styles.lineargradientShadowBox]}
        locations={[0, 1]}
        colors={["#ffeeb2", "#20996d"]}
        useAngle={true}
        angle={125.95}
      />
      <LinearGradient
        style={[styles.lineargradient2, styles.lineargradientShadowBox]}
        locations={[0, 1]}
        colors={["#d8d1b8", "#b7a43f"]}
        useAngle={true}
        angle={125.95}
      />
      <LinearGradient
        style={[styles.lineargradient3, styles.lineargradientShadowBox]}
        locations={[0, 1]}
        colors={["#d8d1b8", "#b7a43f"]}
        useAngle={true}
        angle={125.95}
      />
      <Text style={styles.letsSetYour}>Let’s set your goals!</Text>
      <LinearGradient
        style={[styles.lineargradient4, styles.lineargradientShadowBox]}
        locations={[0, 1]}
        colors={["#ffeeb2", "#20996d"]}
        useAngle={true}
        angle={125.95}
      />
      <Text style={[styles.productivity, styles.healthTypo]}>Productivity</Text>
      <Text style={[styles.selfGrowth, styles.healthTypo]}>Self Growth</Text>
      <Text style={[styles.financialManagement, styles.healthTypo]}>
        Financial Management
      </Text>
      <Text onPress={() => navigation.navigate("HealthGoals")} style={[styles.health, styles.healthTypo]}>Health</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lineargradientShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: "82.56%",
    height: "18.13%",
    position: "absolute",
    backgroundColor: "transparent",
  },
  healthTypo: {
    textAlign: "left",
    fontSize: FontSize.size_16xl,
    color: Color.white,
    fontWeight: "600",
    position: "absolute",
  },
  lineargradient: {
    borderRadius: Border.br_xl,
    width: "82.56%",
    height: "18.13%",
    position: "absolute",
    left: "7.18%",
    bottom: "67.89%",
    right: "10.26%",
    top: "13.98%",
    backgroundColor: "transparent",
  },
  lineargradient1: {
    top: "56.04%",
    bottom: "25.83%",
    left: "7.69%",
    right: "9.74%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  lineargradient2: {
    top: "34.83%",
    bottom: "47.04%",
    left: "7.69%",
    right: "9.74%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  lineargradient3: {
    top: "77.49%",
    bottom: "4.38%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "7.18%",
    right: "10.26%",
  },
  letsSetYour: {
    top: 60,
    fontSize: 24,
    textAlign: "center",
    width: 345,
    color: Color.white,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  lineargradient4: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "7.18%",
    right: "10.26%",
    bottom: "67.89%",
    top: "13.98%",
  },
  productivity: {
    top: 168,
    left: 39,
    width: 325,
  },
  selfGrowth: {
    top: 348,
    left: 38,
    width: 282,
  },
  financialManagement: {
    top: 680,
    left: 52,
    width: 285,
  },
  health: {
    top: 524,
    left: 40,
    width: 188,
  },
  arrowLeftCircleIcon: {
    top: 65,
    width: 24,
    height: 24,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  onboardingGoalSetting: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default OnboardingGoalSetting;
