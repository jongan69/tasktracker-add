import auth, {firebase} from '@react-native-firebase/auth';

import React from 'react';

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import {Text, View} from '../components/Themed';

class LoadingScreen extends React.PureComponent {
  // Load any resources or data that we need prior to rendering the app
  // constructor(prop) {
  //   super(props);
  //   this.state = {
  //     isLoadingComplete: false,
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(apiKeys.FirebaseConfig);
  // }

  componentDidMount() {
    // let x = 10;
    // 5 Seconds
    // Do your thing here
    // sleep(5);
    this.checkIfLoggedIn();
  }

  componentDidUpdate() {
    this.state = {
      isLoadingComplete: false,
    };
    this.checkIfLoggedIn();
  }
  // __isTheUserAuthenticated = () => {
  //   let user = firebase.auth().currentUser.uid;
  //   if (user) {
  //     console.log(tag, user);
  //     this.setState({authenticated: true});
  //   } else {
  //     this.setState({authenticated: false});
  //   }
  // };

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('User');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };

  render() {
    return (
      <ImageBackground style={styles.background}>
        <View>
          <Text style={styles.message}>Loading</Text>
          {this.checkIfLoggedIn()}
          {/* <Text style={styles.text}>or you broke it...</Text> */}
          <ActivityIndicator style={styles.indicator} size="large" />
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
  message: {
    marginTop: 100,
    fontSize: 25,
    marginBottom: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: '50%',
    height: '100%',
  },
  text: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    marginTop: 15,
  },
});

export {LoadingScreen};
