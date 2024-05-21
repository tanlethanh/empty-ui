/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
	return (
		<View style={styles.container}>
			<Text>You're diamond</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default App;
