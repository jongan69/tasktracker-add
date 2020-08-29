 import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

// import { Text as ThemedText } from '../components/Themed';
// import { View  as ThemedView } from '../components/Themed';


import { SignupScreen } from './SignupScreen';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import firebase from 'firebase'


class TabOneScreen extends React.PureComponent {

componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.navigation.navigate('User')
      }
      else{
        this.props.navigation.navigate('Root')
      }
    })
  }


render() {
// export default function TabOneScreen() {
  return (
    <View style={styles.container} >
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
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
     
     
     <View >
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Welcome to 1bar
        </Text>

       
          <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"> A simplified fitness app</Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          To monitor your progress please sign up
        </Text>
      </View>

      <View style={styles.helpContainer}>
      <Button title="Login / Signup"
      onPress={() => this.props.navigation.navigate('Signup')} 
      >
      </Button>
      </View>
    </View>
    </View>
  );
}
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
  },
  logo: {
    marginTop: -200,
    marginBottom: 0,
    width: "20%",
    height: "20%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginBottom: 40,
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginBottom: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
