import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";


import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";
import RadioButton from '../components/RadioButton'
import firebase from 'firebase';

import { Text, View } from '../components/Themed';


class UserProfile extends React.PureComponent {
  state = {
		value: null,
	};

  constructor(props) {
    super(props);
    this.state = {Age: '', Sex: '', Height: '', value: null };
  }



checkIfLoggedIn (Age, Height, Sex) {
    if(!isNaN(Age) & !isNaN(Height)){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        firebase.database().ref('/users/' + user.uid).update({ 
         Age: Age,
         Height: Height,
         Gender: Sex
          });
        alert('Your profile was updated!')
        this.props.navigation.navigate('Calc')
      }
      else{
        alert('Something went wrong')
      }
    })
    } else {
      alert('Something went wrong')
    }
  }

  render() {

 const PROP = [
	{
		key: 'Male',
		text: 'Male',
	},
	{
		key: 'Female',
		text: 'Female',
	}
];
const { value } = this.state;
    return (
      <ImageBackground
        style={styles.background}
      >
      <View  style={styles.container}>
        <Text style={styles.message}>
         Build your profile
        </Text>
        <Text>
        Hi, You're logged in! Please build your profile
        </Text>
      </View>

      

     <View  style={styles.questions}>
      <View style={styles.input}>
       <Text style={{ padding: 10 }}>
       Enter your age 
        </Text>
        <TextInput
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 2 }}
            label={"Age"}
            placeholder={"Age"}
            onChangeText={(Age) => this.setState({Age})}
            value={this.state.Age}
          />
      </View>

      

        <View style={styles.input}>
       <Text style={{ padding: 10 }}>
       Enter your height 
        </Text>
          <TextInput
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 10 }}
            label={"Height"}
            placeholder={"Height"}
            onChangeText={(Height) => this.setState({Height})}
            value={this.state.Height}
          />
        </View>

        <View style={{marginTop: 20}}>
        {/* <Button title="Male">
      
        </Button> 
        <Button title="Female">
        </Button>  */}

        <View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container1}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
                <Text> Selected: {this.state.value} </Text>
			</View>
          {/* <Dropdown
        label='Favorite Fruit'
        data={data}
      /> */}
        {/* <View style={styles.radio}>
        <RadioButton PROP={PROP} />
      </View> */}
        </View>
      </View >

      
       

      <View style={{ padding: 10, marginTop: '10%' }}>
      <Button 
        title="Continue"
        onPress={ () => this.checkIfLoggedIn(this.state.Age, this.state.Height, this.state.value)}>
        </Button>


         <Button 
        title="Logout"
        onPress={ () => firebase.auth().signOut()}>
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
  },
  radio: {
    alignContent: 'flex-start',
    marginTop: 20,
  },
  container1: {
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginLeft: 30,
        fontSize: 10,
        fontWeight: '600',
        marginRight: 10
    },
	radioCircle: {
		height: 10,
		width: 10,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

export { UserProfile };