import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from './Themed'

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container} >
						
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
              	<Text style={styles.radioText} lightColor="rgba(0,0,0,1)"
          darkColor="rgba(255,255,255,0.8)">{res.text}</Text>
						</View>
					);
				})}
                <Text> Selected: {this.state.value} </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
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
        fontWeight: '600'
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