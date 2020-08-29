import React from "react";

import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

class splitTone extends React.PureComponent {
  render() {
    return (
      <ImageBackground
        source={require("./assets/Background.png")}
        style={styles.background}
      >
        <Text style={styles.message}>
          How many days a week can you workout?
        </Text>

        <View  style={styles.container}>
        <Text> Note: Every workout should start with a stretch</Text>
         <Text> High Knees </Text>
          <Text> Arm Circles </Text>
           <Text> Frog Walk-Ins </Text>
        </View>

        <Button
          title="3 Days"
          onPress={() => this.props.navigation.navigate("ThreeTone")}
        />
        <Button
          title="5 Days"
          onPress={() => this.props.navigation.navigate("FiveTone")}
        />
        <Button
          title="7 Days"
          onPress={() => this.props.navigation.navigate("SevenTone")}
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
    height: '100%'
  },
  message: {
    marginTop: 100,
    fontSize: 25,
    marginBottom: 200
  },
  logo: {
    width: '50%',
    height: '100%'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  }
});

export { splitTone };
