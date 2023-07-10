import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "./Home.styles";

const HomeScreen = () => {

  const [icon1, setIcon1] = useState(false);
  const[icon1Counter, setIcon1Counter] = useState(0);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);

  return (
    <LinearGradient
      style={styles.homeScreen}
      locations={[0, 1]}
      colors={["#053b63", "#edf5e0"]}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("./assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
      />
      <Text style={[styles.jenny, styles.mintFlexBox]}>{`Jenny`}</Text>
      <Text style={[styles.hi, styles.hiPosition]}>Hi</Text>
      <Text style={[styles.howAreYou, styles.hiPosition]}>
        How are you today?
      </Text>
      <Image
        style={[styles.heroImagesIcon, styles.mintPosition]}
        contentFit="cover"
        source={require("./assets/hero-images.png")}
      />
      <Image
        style={styles.user03aIcon}
        contentFit="cover"
      />
      <View style={[styles.sleepingTime, styles.sleepingLayout]}>
        <View style={styles.mintParent}>
          <Text style={[styles.mint, styles.mintPosition]}>15 mint</Text>
          <Text style={[styles.sleepingTime1, styles.sleepingTime1Position]}>
            Sleeping time
          </Text>
        </View>
        <View style={styles.pillShadowBox}>
          <View
            style={[styles.pillExerciseDetails, styles.sleepingTime1Position]}
          />
        </View>
      </View>
      <View style={[styles.sleepingTime2, styles.sleepingLayout]}>
        <View style={styles.mintParent}>
          <Text style={[styles.mint, styles.mintPosition]}>15 mint</Text>
          <Text style={[styles.sleepingTime1, styles.sleepingTime1Position]}>
            Sleeping time
          </Text>
        </View>
        <View style={styles.pillShadowBox}>
          <View
            style={[styles.pillExerciseDetails, styles.sleepingTime1Position]}
          />
        </View>
        <Image
          style={[styles.airBalloon1, styles.airPosition1]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon3, styles.airPosition1]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon5, styles.airPosition1]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon2, styles.airPosition]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon4, styles.airPosition]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon6, styles.airPosition]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon7, styles.airPosition1]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
        <Image
          style={[styles.airBalloon8, styles.airPosition]}
          contentFit="cover"
          source={require("./assets/weight.png")}
        />
      </View>
      <View style={[styles.sleepingTime4, styles.sleepingLayout]}>
        <View style={styles.mintParent}>
          <Text style={[styles.mint, styles.mintPosition]}>15 mint</Text>
          <Text style={[styles.sleepingTime1, styles.sleepingTime1Position]}>
            Sleeping time
          </Text>
        </View>
        <View style={styles.pillShadowBox}>
          <View
            style={[styles.pillExerciseDetails, styles.sleepingTime1Position]}
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => {
        setIcon1(true)
      }}>
        <Image
          style={[styles.airBalloon11, styles.airLayout4, {
            opacity: icon1Counter >= 1 ? 1 : 0.5,
          }]}
          contentFit="cover"
          source={require("./assets/water.png")}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon10, styles.airLayout2, {
          opacity: icon1Counter >= 4 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon51, styles.airLayout3, {
          opacity: icon1Counter >= 2 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon111, styles.airLayout1, {
          opacity: icon1Counter >= 5 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon16, styles.airLayout1, {
          opacity: icon1Counter >= 6 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon17, styles.airLayout1, {
          opacity: icon1Counter >= 7 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        console.log("BRUH");
        setIcon1(true)
      }}>
      <Image
        style={[styles.airBalloon71, styles.airLayout1, {
          opacity: icon1Counter >= 3 ? 1 : 0.5,
        }]}
        contentFit="cover"
        source={require("./assets/water.png")}
      />
      </TouchableWithoutFeedback>
      <Image
        style={[styles.airBalloon21, styles.airLayout]}
        contentFit="cover"
        source={require("./assets/apple.png")}
      />
      <Image
        style={[styles.airBalloon14, styles.airLayout]}
        contentFit="cover"
        source={require("./assets/apple.png")}
      />
      <Image
        style={[styles.airBalloon15, styles.airLayout]}
        contentFit="cover"
        source={require("./assets/apple.png")}
      />
      {
        icon1 && 
        <TouchableWithoutFeedback onPress={() => {
          setIcon1Counter(icon1Counter => icon1Counter + 1);
          setIcon1(false);
        }}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("./assets/3.png")}
          />
        </TouchableWithoutFeedback>
      }
      {
        icon2 && <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("./assets/3.png")}
      />
      }
      {
        icon3 && <Image
        style={styles.icon3}
        contentFit="cover"
        source={require("./assets/3.png")}
      />
      }
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  icon3: {
    top: 690,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  icon2: {
    top: 560,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  icon1: {
    top: 431,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  mintFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  hiPosition: {
    left: 16,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  mintPosition: {
    left: 0,
    position: "absolute",
  },
  sleepingLayout: {
    height: 110,
    width: 366,
  },
  sleepingTime1Position: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  airPosition1: {
    height: 34,
    top: 44,
    position: "absolute",
  },
  airPosition: {
    height: 35,
    top: 43,
    position: "absolute",
  },
  airLayout4: {
    height: 45,
    top: 456,
  },
  airLayout2: {
    height: 46,
    top: 455,
  },
  airLayout3: {
    width: 45,
    position: "absolute",
  },
  airLayout1: {
    width: 44,
    position: "absolute",
  },
  airLayout: {
    height: 43,
    width: 43,
    top: 712,
    position: "absolute",
  },
  vectorIcon: {
    top: 107,
    left: 107,
    width: 256,
    height: 267,
    position: "absolute",
  },
  vectorIcon1: {
    top: 118,
    left: 114,
    width: 238,
    height: 248,
    position: "absolute",
  },
  jenny: {
    left: 39,
    top: 66,
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  hi: {
    top: 66,
  },
  howAreYou: {
    top: 96,
    fontWeight: "300",
  },
  heroImagesIcon: {
    top: 147,
    width: 361,
    height: 254,
  },
  user03aIcon: {
    left: 335,
    borderRadius: 500,
    width: 41,
    height: 42,
    top: 66,
    position: "absolute",
    overflow: "hidden",
  },
  mint: {
    top: 18,
    fontSize: FontSize.size_4xs,
    width: 69,
    height: 10,
    textAlign: "left",
    color: Color.white,
  },
  sleepingTime1: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    height: 15,
    width: 212,
    textAlign: "left",
    color: Color.white,
  },
  mintParent: {
    top: 15,
    left: 45,
    height: 27,
    width: 212,
    position: "absolute",
  },
  pillExerciseDetails: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.honeydew,
    height: 110,
    width: 366,
  },
  pillShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 110,
    width: 366,
    left: 0,
    position: "absolute",
  },
  sleepingTime: {
    top: 423,
    left: 11,
    width: 366,
    position: "absolute",
  },
  airBalloon1: {
    left: 25,
    width: 35,
    opacity: 0.5,
  },
  airBalloon3: {
    left: 66,
    width: 34,
    opacity: 0.5,
  },
  airBalloon5: {
    left: 106,
    width: 34,
    opacity: 0.5,
  },
  airBalloon2: {
    left: 187,
    width: 35,
    opacity: 0.5,
  },
  airBalloon4: {
    left: 228,
    width: 34,
    opacity: 0.5,
  },
  airBalloon6: {
    left: 268,
    width: 34,
    opacity: 0.5,
  },
  airBalloon7: {
    left: 146,
    width: 35,
    opacity: 0.5,
  },
  airBalloon8: {
    left: 308,
    width: 35,
    opacity: 0.5,
  },
  sleepingTime2: {
    top: 550,
    left: 11,
    width: 366,
    position: "absolute",
  },
  sleepingTime4: {
    top: 679,
    left: 12,
    position: "absolute",
  },
  airBalloon11: {
    left: 44,
    width: 46,
    position: "absolute",
  },
  airBalloon10: {
    left: 167,
    width: 45,
    position: "absolute",
    opacity: 0.5,
  },
  airBalloon51: {
    left: 86,
    height: 45,
    opacity: 0.5,
    top: 456,
  },
  airBalloon111: {
    left: 208,
    height: 46,
    top: 455,

    opacity: 0.5,
  },
  airBalloon16: {
    left: 248,
    opacity: 0.5,
    height: 46,
    top: 455,
  },
  airBalloon17: {
    left: 288,
    opacity: 0.5,
    height: 46,
    top: 455,
  },
  airBalloon71: {
    left: 127,
    height: 45,
    top: 456,
    opacity: 0.5,
  },
  airBalloon21: {
    left: 32,
    opacity: 0.5,
  },
  airBalloon14: {
    left: 80,
    opacity: 0.5,
  },
  airBalloon15: {
    left: 128,
    opacity: 0.5,
  },
  homeScreen: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomeScreen;
