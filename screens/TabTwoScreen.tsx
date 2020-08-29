import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

import { Text as ThemedText } from '../components/Themed';
import { View  as ThemedView } from '../components/Themed';

import { splitMass } from './splitMass/splitMass';
import { splitTone } from './splitTone/splitTone';


class TabTwoScreen extends React.PureComponent {
    render() {
    return (
      <ThemedView style={styles.container} >
        <ImageBackground
          source={require('../assets/images/Background.png')}
          style={styles.background}
        >

        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.Logo}
          resizeMode="center"
        />
        </ImageBackground>

        <ThemedView style={styles.textBox}> 
        <ThemedText style={styles.message} lightColor="rgba(0,0,0,1)" darkColor="rgba(255,255,255,1)"> What is your goal? </ThemedText>
        <ThemedText style={styles.text} lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,1)">  Certain styles of fitness have championed the term “tone” to mean lengthening, leaning out, and strengthening your muscles. All the while not “bulking.”</ThemedText>
        </ThemedView>

        <ThemedView style={styles.separator} lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)" />
        <ThemedView>
        <ThemedView style={styles.getStartedContainer}>
         
        <Button
          style={styles.button}
          title="Gain Mass"
          onPress={() => this.props.navigation.navigate('Mass')}
        />
        <ThemedText
          lightColor="rgba(0,0,0,1)"
          darkColor="rgba(255,255,255,1)"
          style={styles.or}
          >
          or
        </ThemedText>
        <Button
          style={styles.button}
          title="Tone Muscle"
          onPress={() => this.props.navigation.navigate('Tone')}
        />

        <ThemedText
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          To monitor your progress please sign up
        </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
    );
  }
} 
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://1barbell.com'
  );
}

export default TabTwoScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flex: 3,
    width: "100%",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  text: {
    paddingHorizontal: 30,
  },
  background: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "140%",
    height: "112%",
  },
  logo: {
    width: "50%",
    height: "80%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  message: {
    alignSelf: 'center',
    fontSize: 40,
    marginBottom: 10,
  },
  or: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }, 
  getStartedText: {
    marginBottom: 30,
  }
});
