import { StyleSheet, Text } from 'react-native';
import { Align, ModalProvider, showModal } from 'empty-modal';
import { useRef } from 'react';
import Animated, { BounceInDown, BounceOutDown } from 'react-native-reanimated';
import Button from 'components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ModalPlayground = () => {
	const clearCenterCenterRef = useRef<(() => void) | null>(null);

	const handlePressCenterCenter = () => {
		if (clearCenterCenterRef.current) {
			clearCenterCenterRef.current();
			clearCenterCenterRef.current = null;
		} else {
			const { cleanModal } = showModal(<SimpleModal />, {
				id: 'simple-modal',
				align: Align.CenterCenter,
			});
			clearCenterCenterRef.current = cleanModal;
		}
	};

	return (
		<ModalProvider>
			<SafeAreaView style={styles.container}>
				<Button title="CenterCenter" onPress={handlePressCenterCenter} />
			</SafeAreaView>
		</ModalProvider>
	);
};

const SimpleModal = () => {
	return (
		<Animated.View
			style={styles.simpleModalContainer}
			entering={BounceInDown}
			exiting={BounceOutDown}
		>
			<Text style={styles.title}>Hello world</Text>
		</Animated.View>
	);
};

export default ModalPlayground;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
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
