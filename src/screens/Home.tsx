import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<Text style={styles.title}>Helloworld</Text>
			</SafeAreaView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	title: {
		fontSize: 32,
		color: '#fff',
	},
});
