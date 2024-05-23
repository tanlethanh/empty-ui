import { StyleSheet, Text, View } from 'react-native';
import { Align, ModalProvider, showModal } from 'empty-modal';
import { useEffect } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';

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
		<Animated.View entering={FadeInUp}>
			<Text>Hello world</Text>
		</Animated.View>
	);
};

export default ModalPlayground;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
});
