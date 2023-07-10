import * as React from "react";
import {Text, StyleSheet, Image, View, Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MorningSurvey = ({ navigation }) => {
  	return (
        <LinearGradient style={styles.morningSurvey} locations={[0,1]} colors={['#053b63','#edf5e0']} useAngle={true} angle={168.32}>
            <Text style={styles.howAreYou1}>How are you this morning?</Text>
            <Image style={styles.arrowLeftCircleIcon1} resizeMode="cover" />
            <View style={[styles.pillExerciseDetailsParent, styles.pillLayout]}>
                <View style={[styles.pillExerciseDetails1, styles.pillLayout]} />
                <Text style={[styles.jenny, styles.jennyTypo]}>Jenny</Text>
                <Text style={[styles.text1, styles.jennyTypo]}>02/20/1992</Text>
            </View>
            <Text style={[styles.whatsYourName1, styles.yourTypo]}>What’s your name?</Text>
            <Text style={[styles.whatYourBirthday1, styles.yourTypo]}>What your birthday?</Text>
            <Image style={[styles.morningSurveyChild, styles.morningLayout]} resizeMode="cover" />
            <View style={[styles.morningSurveyItem, styles.morningLayout]} />
            <Button title="Next!" onPress={() => navigation.navigate('GoalSetting')}/>
        </LinearGradient>
    );
};
          					
const styles = StyleSheet.create({
        letsGetStarted1: {
            fontSize: 18,
            top: 500,
            width: 400
        },
        meetLunaYour1Typo: {
            textAlign: "center",
            color: "#fff",
            fontWeight: "500",
            position: "absolute"
        },
        pillLayout: {
            height: 317,
            width: 358,
            position: "absolute"
        },
        jennyTypo: {
            height: 25,
            textAlign: "left",
            color: "#000",
            left: 24,
            fontSize: 24,
            position: "absolute"
        },
        yourTypo: {
            height: 68,
            width: 315,
            textAlign: "left",
            color: "#000",
            fontWeight: "600",
            fontSize: 24,
            position: "absolute"
        },
        morningLayout: {
            height: 8,
            width: 323,
            borderRadius: 5,
            position: "absolute"
        },
        howAreYou1: {
            top: 60,
            left: 38,
            color: "#fff",
            textAlign: "center",
            width: 346,
            fontWeight: "600",
            fontSize: 24,
            position: "absolute"
        },
        arrowLeftCircleIcon1: {
            top: 65,
            width: 24,
            height: 24,
            left: 16,
            position: "absolute",
            overflow: "hidden"
        },
        pillExerciseDetails1: {
            top: 0,
            left: 0,
            borderRadius: 15,
            backgroundColor: "#fff"
        },
        jenny: {
            top: 63,
            width: 75
        },
        text1: {
            top: 200,
            width: 135
        },
        pillExerciseDetailsParent: {
            top: 115,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                    width: 0,
                    height: 4
            },
            shadowRadius: 4,
            elevation: 4,
            shadowOpacity: 1,
            left: 16
        },
        whatsYourName1: {
            top: 143,
            left: 39
        },
        whatYourBirthday1: {
            top: 269,
            left: 41
        },
        morningSurveyChild: {
            top: 257,
            left: 31
        },
        morningSurveyItem: {
            top: 393,
            left: 32,
            backgroundColor: "#d9d9d9"
        },
        morningSurvey: {
            flex: 1,
            width: "100%",
            height: 844,
            backgroundColor: "transparent",
            overflow: "hidden"
        }
});

export default MorningSurvey;
          					