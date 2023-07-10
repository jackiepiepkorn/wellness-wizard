import * as React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = ({navigation}) => {
  	
  	return (
        <LinearGradient style={styles.onboarding} locations={[0,1]} colors={['#053b63','#edf5e0']} useAngle={true} angle={168.32}>
            <Image style={[styles.illustrationIcon, styles.letsGetStarted1Position]} resizeMode="cover" source={require('./assets/Illustration.png')} />
            <View style={styles.onboardingChild} />
            <View style={styles.letsGetStartedParent}>
                    <TouchableOpacity onPress={() => navigation.navigate('MorningSurvey')}>
                        <Text style={[styles.letsGetStarted1, styles.meetLunaYour1Typo]}>Let's get started!</Text>
                    </TouchableOpacity>
                    <Image style={styles.arrowRightIcon1} resizeMode="cover" />
            </View>
            <Text style={[styles.meetLunaYour1, styles.meetLunaYour1Typo]}>{`Meet Luna, your wellness companion`}</Text>
            <Text style={[styles.intelligentGuidanceTailored1, styles.meetLunaYour1Typo]}>{`Intelligent guidance  tailored just for you `}</Text>
        </LinearGradient>);
};

const styles = StyleSheet.create({
    letsGetStarted1Position: {
        left: 0,
        top: 0
    },
    meetLunaYour1Typo: {
        textAlign: "left",
        color: "#fff",
        fontWeight: "500",
        position: "absolute"
    },
    illustrationIcon: {
        width: 414,
        height: 492,
        position: "absolute",
        overflow: "hidden"
    },
    onboardingChild: {
        top: 738,
        left: 75,
        borderRadius: 80,
        backgroundColor: "#053b63",
        shadowColor: "rgba(0, 0, 0, 0.07)",
        shadowOffset: {
            width: 0,
            height: 100
        },
        shadowRadius: 80,
        elevation: 80,
        shadowOpacity: 1,
        width: 239,
        height: 57,
        position: "absolute"
    },
    letsGetStarted1: {
        fontSize: 18,
        left: 0,
        top: 0
    },
    arrowRightIcon1: {
        top: 3,
        left: 155,
        width: 24,
        height: 24,
        position: "absolute",
        overflow: "hidden"
    },
    letsGetStartedParent: {
        top: 753,
        left: 102,
        width: 179,
        height: 27,
        position: "absolute"
    },
    meetLunaYour1: {
        top: 504,
        left: 16,
        fontSize: 35,
        width: 364
    },
    intelligentGuidanceTailored1: {
        height: "9.36%",
        width: "77.69%",
        top: "73.82%",
        left: "4.87%",
        fontSize: 20
    },
    onboarding: {
        flex: 1,
        width: "100%",
        height: 844,
        backgroundColor: "transparent",
        overflow: "hidden"
    }
});
            
export default Onboarding;
