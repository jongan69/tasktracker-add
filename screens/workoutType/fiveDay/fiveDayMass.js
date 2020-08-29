import { CheckBox } from 'native-base';

import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Fragment  } from "react-native";

import React from 'react';

import { FinishedButton } from '../../../components/FinishedButton';

class fiveDayMass extends React.PureComponent {
  state = {
    selectedLang: 0,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>5 Day Mass Focused Workout: </Text>
        
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedLang === 1}
            color="#adffe4"
            onPress={() => this.setState({ selectedLang: 1 })}
          />
          <Text
            style={{
              ...styles.checkBoxTxt,
              color: this.state.selectedLang === 1 ? '#adffe4' : "gray",
              fontWeight: this.state.selectedLang === 1 ? 'bold' : "normal"
            }}>
            Day 1: SHOULDERS, TRAPS, AND ARMS 
          </Text>
           </View>
           <Text style={'color: white'}> BARBELL OVERHEAD PRESS: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> BARBELL FRONT RAISE: 4 Sets of 12</Text> 
           <Text style={'color: white'}> STANDING BARBELL REAR DELT ROW:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> SKULL CRUSHER: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> BARBELL CURL: 50+ (Superset) </Text> 
        
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedLang === 2}
            color="#adffe4"
            onPress={() => this.setState({ selectedLang: 2 })}
          />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 2 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 2 ? 'bold' : "normal"
            }}
          >
          Day 2: Back, Abs, and Lower Body
          </Text>
          </View>
           <Text style={'color: white'}> BARBELL DEADLIFT: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> BROMANIAN DEADLIFT: 4 Sets of 12</Text> 
           <Text style={'color: white'}> BARBELL LUNGE:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> BARBELL HACK SQUAT: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> BARBELL ROLLOUT: 50+ (Superset) </Text> 
           
          <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedLang === 3}
              color="#adffe4"
              onPress={() => this.setState({ selectedLang: 3 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 3 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 3 ? 'bold' : "normal"
            }}>
          Day 3: REST
          </Text>
        </View>
    

           <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedLang === 4}
              color="#adffe4"
              onPress={() => this.setState({ selectedLang: 4 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 4 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 4 ? 'bold' : "normal"
            }}>
          Day 4: Chest, Back, and Arms
          </Text>
        </View>
           <Text style={'color: white'}> BARBELL BENCH PRESS: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> INCLINE BARBELL BENCH PRESS: 4 Sets of 12</Text> 
           <Text style={'color: white'}> BENT-OVER BARBELL ROW:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> PRONE INCLINE BICEPS CURL: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> CLOSE-GRIP BARBELL BENCH PRESS: 50+ (Superset) </Text> 

           <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedLang === 5}
              color="#adffe4"
              onPress={() => this.setState({ selectedLang: 5 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 5 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 5 ? 'bold' : "normal"
            }}>
          Day 5: Legs and Abs
          </Text>
        </View>
           <Text style={'color: white'}> BARBELL SQUAT: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> BARBELL GOOD MORNING: 4 Sets of 12</Text> 
           <Text style={'color: white'}> BBARBELL FRONT SQUAT:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> STANDING BARBELL CALF RAISE ON FLOOR: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> BARBELL ROLLOUT: 50+ (Superset) </Text>
          <FinishedButton workout={this.state.selectedWorkout} workoutType={"5DayMass"}/>
            <TouchableOpacity style={styles.submit} onPress={() =>  this.props.navigation.navigate('User')}>
          <Text style={{color:"black"}}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { fiveDayMass };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'white',
  },
  title:{
   color: '#000000',
   fontSize: 20,
  },
  item:{
    width:"80%",
    padding:10,
    marginBottom:10,
    marginTop: 20,
    flexDirection:"row",
  },
  listitem: {
    color: '#FFF',
    flex: 1,
    opacity: 1, 
    },
  checkBoxTxt:{
    marginLeft: 20,
    color: '#000000',

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

