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

class UserDash extends React.PureComponent {
constructor(props) {
    super(props);
    this.state = {
      name: null,
      Age: '',
      max: '', 
      reps: '',
      };
  }    


componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
      if(user){
        
          firebase.database().ref('/users/' + user.uid + '/profile_picture/').once('value', function(snapshot){
                
                // this.setState({ google_picture : snapshot.val() })
                let profile_picture = snapshot.val().toString()
                // this.setProfilePic({profile_picture})   
                 const picture = { uri: profile_picture}
                // console.log({picture})           
                // console.log({profile_picture})

                return profile_picture
            })

          firebase.database().ref('/users/' + user.uid + '/first_name/').once('value', function(snapshot) {
                // this.state.name({
                  let name = snapshot.val()
                // })
                // this.setState({ google_picture : snapshot.val() })
                // console.log({first_name})
                // alert('Hi there ' + name + ', Welcome to the beta and thank you for being the reason I havent killed myself <3')
                return name;
            })

          

          firebase.database().ref('/users/' + user.uid + '/Age/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                const AgeCall = snapshot.val();
                // this.setState({Age: AgeCall});
                // console.log({Age})
                // const Age = this.setState({Age})
                return AgeCall;
            })

            firebase.database().ref('/users/' + user.uid + '/one_rep_max/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let maxCall = Object.values(snapshot.val())
                
                // console.log({max})
                // setData(max)
                return maxCall;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/3DayMass/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let threeDayMass = snapshot.val()
                // console.log({threeDayMass})
                return threeDayMass ;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/5DayMass/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let fiveDayMass = snapshot.val()
                // console.log({fiveDayMass})
                return fiveDayMass ;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/7DayMass/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let sevenDay = snapshot.val()
                // const { [Object]:  sevenDayMass } = snapshot.val()
                // console.log({sevenDayMass})
                // console.log({sevenDay})
                return sevenDay;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/3DayTone/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let threeDayTone = snapshot.val()
                // console.log({threeDayTone})
                return threeDayTone ;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/5DayTone/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                let fiveDayTone = snapshot.val()
                // console.log({fiveDayTone})
                return fiveDayTone;
            })

            firebase.database().ref('/users/' + user.uid + '/workouts_completed/7DayTone/').once('value', function(snapshot){
                // this.setState({ google_picture : snapshot.val() })
                const sevenDayTone = snapshot.val()
                // console.log({sevenDayTone})
                return sevenDayTone
            }).then(function(){
               
            })
      }
    });
    // this.setState({
    //               name: name,
    //               isDataLoaded: true
    // })
};






// getName = () => {
//   firebase.auth().onAuthStateChanged(user => {
//       if(user){
//          firebase.database().ref('/users/' + user.uid + '/first_name/').once('value', function(snapshot){
//                 // this.setState({ google_picture : snapshot.val() })
//                 let name = snapshot.val();
//                 JSON.stringify(name);
//                 // console.log({first_name})
//                 alert('Hi there ' + name + ', Welcome to the beta and thank you for being the reason I havent killed myself <3')
//                 console.log(name)
//                 return name
//             })
//       }
//   })
// }






  render() {
    
    // const setData = useState([]);
    let picture = { uri: 'https://i.kinja-img.com/gawker-media/image/upload/s---XUc05cy--/c_fill,fl_progressive,g_north,h_358,q_80,w_636/radxoemoet8ikgyxdmbr.gif'}
    // let name = Object.first_name
    let Age = this.state.AgeCall
    // let max = {maxCall}
    // console.log(name)
     const { profile_picture } = this.props;
    //  const { name } = this.state; 
      
    return (
      <ImageBackground
        style={styles.background}
      >
      <View  style={styles.container}>
        <Text style={styles.message}>
          Welcome back  {this.state.name}
           
        </Text>
      

        <Image source={profile_picture} style = {{height: 200, width: 200, resizeMode : 'center', margin: 10, borderColor: 'white', borderWidth: 5, opacity: 1 }} />
        <Text>
        We missed you, let's get back to work.
        </Text>
      </View>

      <Text>
        Age: {this.state.Age}
      </Text>

      <Text>
        One rep max: {this.maxCall}
      </Text>

      <Text>
        Total Workouts Completed: 
      </Text>

      <Text>
        Current focus: 
      </Text>

      

       
         
       

      <View style={{ padding: 10, marginTop: '10%' }}>
      <Button 
        title="Update profile"
        onPress={ () => this.props.navigation.navigate('Profile')}>
        </Button>

      <Button 
        title="Workout"
        onPress={ () => this.props.navigation.navigate('Root')}>
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

export { UserDash };