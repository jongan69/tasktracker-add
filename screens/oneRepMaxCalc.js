import React from 'react';

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TextInput,
} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import firebase from 'firebase';

import * as Google from 'expo-google-app-auth';

import {Text, View} from '../components/Themed';

class oneRepMaxCalc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      reps: '',
    };
  }

  // componentDidMount(){
  //   this.calc(weight, reps);
  // }

  // var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.accessToken
  //       )
  // Sample code for getting rid of Letters, Didnt work
  // onTextChanged(number) {
  //   // code to remove non-numeric characters from text
  //   const cleanNumber = number.replace(/[^0-9]/g, "");
  // }

  checkIfLoggedIn(weight, reps) {
    let max = this.state.weight / (1.0278 - 0.0278 * this.state.reps);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref('/users/' + user.uid)
          .update({one_rep_max: max});
        alert('Your one rep max was added to your profile!');
        this.props.navigation.navigate('Integrations');
      } else {
        alert('You dont have an account please sign up!');
      }
    });
  }

  checkIfMax(weight, reps) {
    let max = this.state.weight / (1.0278 - 0.0278 * this.state.reps);
    if (!max) {
      return <Text> You havent calculated your max </Text>;
    } else {
      return <Text> Your max is {max.toFixed(2)} </Text>;
    }
  }

  render() {
    return (
      <ImageBackground style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.message}>One Rep Max Calculator</Text>
          <Text>Enter the numeric weight and reps you can do</Text>
        </View>

        <View style={styles.questions}>
          <View style={styles.input}>
            <Text style={{padding: 10}}>Enter weight</Text>
            <TextInput
              style={{
                width: 100,
                height: 40,
                borderColor: 'gray',
                borderWidth: 2,
              }}
              label={'weight'}
              placeholder={'weight in lbs'}
              onChangeText={(weight) => this.setState({weight})}
              value={this.state.weight}
              multiline={false}
            />
          </View>

          <View style={styles.input}>
            <Text style={{padding: 10}}>Enter reps</Text>
            <TextInput
              style={{
                width: 100,
                height: 40,
                borderColor: 'gray',
                borderWidth: 2,
              }}
              label={'# of reps'}
              placeholder={'# of reps'}
              onChangeText={(reps) => this.setState({reps})}
              value={this.state.reps}
              multiline={false}
            />
          </View>
        </View>

        <View style={{padding: 10, marginTop: '10%'}}>
          {this.checkIfMax(this.state.weight, this.state.reps)}
          <Button
            title="Continue"
            onPress={() =>
              this.checkIfLoggedIn(this.state.weight, this.state.reps)
            }
          />

          <Button
            title="Back"
            onPress={() => this.props.navigation.navigate('User')}
          />
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
    height: '100%',
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
  questions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 100,
    fontSize: 25,
    marginBottom: 20,
  },
  logo: {
    width: '50%',
    height: '100%',
  },
  text: {
    color: 'white',
  },
});

export {oneRepMaxCalc};
