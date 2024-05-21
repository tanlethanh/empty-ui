import { StatusBar, StyleSheet, View } from 'react-native';
import { Ball } from './Ball';

export const FunnyBallScreen = () => {
	return (
		<View style={styles.container}>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle={'dark-content'}
			/>
			<Ball />
		</View>
	);
};

export default FunnyBallScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
