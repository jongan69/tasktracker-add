import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TextInput
} from "react-native";

import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";
import { Pedometer } from 'expo-sensors';

import firebase from 'firebase';
import AppleHealthKit from 'rn-apple-healthkit';
import { Text, View } from '../components/Themed';

let options = {
    permissions: {
        read: ["Height", "Weight"],
        write: ["Height", "Weight"]
    }
};

class integrations extends React.PureComponent {
 

  
  render() {

//     AppleHealthKit.initHealthKit(options, (err, results) => {
//     if (err) {
//         console.log("error initializing Healthkit: ", err);
//         return;
//     }

//     // Height Example
//     AppleHealthKit.getDateOfBirth(null, (err, results) => {
//       console.log(results)
//     });

// });
    return (
      <ImageBackground
        style={styles.background}
      >
      <View  style={styles.container}>
        <Text style={styles.message}>
         Integrations
        </Text>
        <Text>
        Please allow access to your Apple Health-kit
        </Text>
        <Text>
        This feature is not yet availible
        </Text>
      </View>

     
       

      <View style={{ padding: 10, marginTop: '10%' }}>
      <Button 
        title="Continue"
        onPress={ () => this.props.navigation.navigate('User')}>
        </Button>


         
         <Button 
        title="Back"
        onPress={ () => this.props.navigation.navigate('Calc')}>
        </Button>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  input: {
     marginTop: 10,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questions:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 100,
    fontSize: 25,
    marginBottom: 20
  },
  logo: {
    width: '50%',
    height: '100%'
  },
  text: {
    color: 'white'
  }
});

export { integrations };