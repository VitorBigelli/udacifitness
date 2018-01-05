import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'

export default function TextGButton ({ children, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text> {children} </Text>
		</TouchableOpacity>
	)
}