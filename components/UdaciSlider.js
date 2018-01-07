import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

export default function UdaciSlider ({value, unit, step, max, onChange }) {
	return (
		<View style={styles.row}>
			<Slider
				style={{flex: 1}}
				value={value}
				step={step}
				minimumValue={0}
				maximumValue={max}
				onValueChange={(value) => onChange(value)}
			/>
			<View style={styles.metricCounter}>
				<Text style={{fontSize: 24, textAlign: 'center'}}> {value} </Text> 
				<Text style={{fontSize: 18, color: gray}}> {unit} </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
	},
	metricCounter: {
		width: 85, 
		justifyContent: 'center',
		alignItems: 'center',
	}
})