import { CheckBox } from 'native-base';

import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Fragment  } from "react-native";

import React from 'react';

import { FinishedButton } from '../../../components/FinishedButton';

class threeDayMass extends React.PureComponent {
  state = {
    selectedWorkout: 0,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>3 Day Mass Focused Workout: </Text>
        
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedWorkout === 1}
            color="#adffe4"
            onPress={() => this.setState({ selectedWorkout: 1 })}
          />
          <Text
            style={{
              ...styles.checkBoxTxt,
              color: this.state.selectedWorkout === 1 ? '#adffe4' : "gray",
              fontWeight: this.state.selectedWorkout === 1 ? 'bold' : "normal"
            }}>
            Day 1: Chest, Triceps, & Abs 
          </Text>
           </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text> 
        
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedWorkout === 2}
            color="#adffe4"
            onPress={() => this.setState({ selectedWorkout: 2 })}
          />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedWorkout === 2 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedWorkout === 2 ? 'bold' : "normal"
            }}
          >
          Day 2: Back & Bicepts
          </Text>
          </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text> 
           
          <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedWorkout === 3}
              color="#adffe4"
              onPress={() => this.setState({ selectedWorkout: 3 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedWorkout === 3 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedWorkout === 3 ? 'bold' : "normal"
            }}>
          Day 3: Shoulders, Legs, & Abs
          </Text>
        </View>
          <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text> 
           <FinishedButton workout={this.state.selectedWorkout} workoutType={"3DayMass"}/>
            <TouchableOpacity style={styles.submit} onPress={() =>  this.props.navigation.navigate('User')}>
          <Text style={{color:"black"}}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { threeDayMass };

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
   marginBottom: '10%',
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
