import React from 'react';

import {StyleSheet, ImageBackground, Image, Button} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import * as Google from 'react-native-google-signin';

import * as firebase from 'firebase';

import {Text, View} from '../components/Themed';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDCaDjHmmZD101cr91HCe6yzS8Sg9RlK_w',
// };

// const [username, setUsername] = React.useState('');
// const [password, setPassword] = React.useState('');

// const { signIn } = React.useContext(AuthContext);

class SignupScreen extends React.PureComponent {
  // _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { accessToken, idToken } = await GoogleSignin.signIn();
  //     setloggedIn(true);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert('Cancel');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress');
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('PLAY_SERVICES_NOT_AVAILABLE');
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };
  // componentDidMount() {
  //   this.checkIfLoggedIn();
  // }

  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.props.navigation.navigate('User');
  //     } else {
  //     }
  //   });
  // };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken,
          );

          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function (result, user) {
              console.log('user signed in');

              firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  if (result.additionalUserInfo.isNewUser) {
                    firebase
                      .database()
                      .ref('/users/' + user.uid)
                      .set({
                        gmail: result.user.email,
                        profile_picture:
                          result.additionalUserInfo.profile.picture,
                        locale: result.additionalUserInfo.profile.locale,
                        first_name:
                          result.additionalUserInfo.profile.given_name,
                        last_name:
                          result.additionalUserInfo.profile.family_name,
                        created_at: Date.now(),
                        Age: 'Age',
                        Height: 'Height',
                        Gender: 'Sex',
                        one_rep_max: 'max',
                        last_workout_completed: '1',
                      });
                    // .then(this.props.navigation.navigate('UserDash'))
                  } else {
                    firebase
                      .auth()
                      .onAuthStateChanged((user) => {
                        if (user) {
                          firebase
                            .database()
                            .ref('/users/' + user.uid)
                            .update({last_loggedin: Date.now()});
                          //  this.props.navigation.navigate('Profile')
                        }
                      })
                      .bind(this);
                  }
                }
              });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this),
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId:
          '434099004768-674ffp4v5isehklj8pukdblsd8gcnhe7.apps.googleusercontent.com',
        iosClientId:
          '434099004768-t59k55q8cat7bvulhqpjcf26gcih0nom.apps.googleusercontent.com',
        iosStandaloneAppClientId:
          '434099004768-djgibu5rmss35v6eqbg3gumps0ca15de.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.background}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        <Text
          style={styles.message}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,1)">
          Sign Up / Login Screen
        </Text>
        <Button
          title="Sign in with Google"
          onPress={() => this.signInWithGoogleAsync()}
        />
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
    marginBottom: 200,
  },
  logo: {
    width: '50%',
    height: '100%',
  },
});

export {SignupScreen};
