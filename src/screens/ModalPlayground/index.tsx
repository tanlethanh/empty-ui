import { StyleSheet, Text, View } from 'react-native';
import { Align, ModalProvider, showModal } from 'empty-modal';
import { useEffect } from 'react';
import Animated, { BounceInDown } from 'react-native-reanimated';

export const ModalPlayground = () => {
	useEffect(() => {
		showModal(<SimpleModal />, {
			id: 'simple-modal',
			align: Align.CenterCenter,
		});
	});

	return (
		<ModalProvider>
			<View style={styles.container}>
				<Text>ModalPlayground</Text>
			</View>
		</ModalProvider>
	);
};

const SimpleModal = () => {
	return (
		<Animated.View style={styles.simpleModalContainer} entering={BounceInDown}>
			<Text style={styles.title}>Hello world</Text>
		</Animated.View>
	);
};

export default ModalPlayground;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	simpleModalContainer: {
		padding: 20,
		paddingHorizontal: 40,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		color: '#fff',
	},
});
