import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

import firebase from 'firebase';

import { Text, View } from '../components/Themed';





class FinishedButton extends React.PureComponent {
  componentDidMount(){
        this.checkLoggedIn();
}

checkLoggedIn(workout) {
  firebase.auth().onAuthStateChanged(user => {
      
  })
}
  
  // state = {
	// 	workout: null,
	// };
  //  constructor(props) {
  //   super(props);
  //   this.state = {
  //     weight: '', 
  //     reps: '',
  //     };
  // }

  SubmitWorkout (workout, workoutType ) {
    firebase.auth().onAuthStateChanged(user => {
      // firebase.database().ref('/users/' + user.uid).update({last_workout_completed: workout})
      if(user){
        // let arr = ['3DayMassCount' , '5DayMassCount' , '7DayMassCount']
        let ref1 = firebase.database().ref('/users/' + user.uid + '/workouts_completed/').child(workoutType)
         ref1.transaction( function(myValue) {
         return (myValue || 0) + 1;
     })
        alert('Your workout was added to your profile!')
        
      } else {
         alert('Note: You can not track workouts with out an account')
      }
    })
  }



   


  

  
  




 



              

  render() {
    
    const {workout, workoutType} = this.props;
    // const workout = this.props;
    return (
      <TouchableOpacity style={styles.submit} onPress={() => this.SubmitWorkout(this.props.workout, this.props.workoutType)}>
          <Text style={{color:"black"}}>Finished</Text>
        </TouchableOpacity>
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
   submit:{
    width:"80%",
    backgroundColor:"#adffe4",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});

export { FinishedButton };