import { CheckBox } from 'native-base';

import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Fragment } from "react-native";

import React from 'react';

import { FinishedButton } from '../../../components/FinishedButton';

class sevenDayTone extends React.PureComponent {
  state = {
    selectedLang: 0,
  };
  render() {
    return (
      <ScrollView >
      <View style={styles.container}>
        <Text style={styles.title}>7 Day Tone Focused Workout: </Text>
        
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
          Day 3: Shoulders, Legs, & Abs
          </Text>
        </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text> 

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
          Day 4: Shoulders, Legs, & Abs
          </Text>
        </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text>

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
          Day 5: Shoulders, Legs, & Abs
          </Text>
        </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text> 

           <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedLang === 6}
              color="#adffe4"
              onPress={() => this.setState({ selectedLang: 6 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 6 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 6 ? 'bold' : "normal"
            }}>
          Day 6: Shoulders, Legs, & Abs
          </Text>
        </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text>


           <View style={styles.item}>
           <CheckBox
              checked={this.state.selectedLang === 7}
              color="#adffe4"
              onPress={() => this.setState({ selectedLang: 7 })}
            />
          <Text
            style={{
            ...styles.checkBoxTxt,
            color: this.state.selectedLang === 7 ? '#adffe4' : "gray",
            fontWeight: this.state.selectedLang === 7 ? 'bold' : "normal"
            }}>
          Day 7: Shoulders, Legs, & Abs
          </Text>
        </View>
           <Text style={'color: white'}> SkullCrusher: 4 Sets of 12 </Text> 
           <Text style={'color: white'}> Bench Press: 4 Sets of 12</Text> 
           <Text style={'color: white'}> Bicycles:  2 Sets of 2 Minutes </Text> 
           <Text style={'color: white'}> Russian Twist: 2 Sets of 30 </Text> 
           <Text style={'color: white'}> Pushups: 50+ (Superset) </Text>  

         <FinishedButton workout={this.state.selectedWorkout} workoutType={"7DayTone"}/>
            <TouchableOpacity style={styles.submit} onPress={() =>  this.props.navigation.navigate('User')}>
          <Text style={{color:"black"}}>Home</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export { sevenDayTone };

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
   marginTop: '20%',
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
    marginTop:40,
    marginBottom: 40
  }
});