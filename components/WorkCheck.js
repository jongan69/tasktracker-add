import react from 'react';

export default function Workcheck = (selectedWorkout) => {
  if(selectedWorkout===1){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.props.navigation.navigate('Dash').alert("Congrats you did workout `{selectedWorkout}`")
          } else {
          this.props.navigation.navigate('Root').alert("Congrats you did workout `{selectedWorkout}`")
          }
    }
  }
};