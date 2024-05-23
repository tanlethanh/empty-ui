import { StyleSheet, Text } from 'react-native';
import { Align, ModalProvider, showModal } from 'empty-modal';
import { useRef } from 'react';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import Button from 'components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ModalPlayground = () => {
	const clearCenterCenterRef = useRef<(() => void) | null>(null);
	const clearFullCenterRef = useRef<(() => void) | null>(null);
	const clearFullBottomRef = useRef<(() => void) | null>(null);

	const handlePressCenterCenter = () => {
		if (clearCenterCenterRef.current) {
			clearCenterCenterRef.current();
			clearCenterCenterRef.current = null;
		} else {
			const { cleanModal } = showModal(<SimpleModal />, {
				id: 'simple-modal-center-center',
				align: Align.CenterCenter,
			});
			clearCenterCenterRef.current = cleanModal;
		}
	};

	const handlePressFullCenter = () => {
		if (clearFullCenterRef.current) {
			clearFullCenterRef.current();
			clearFullCenterRef.current = null;
		} else {
			const { cleanModal } = showModal(<SimpleModal />, {
				id: 'simple-modal-full-center',
				align: Align.FullCenter,
				xOffset: 10,
			});
			clearFullCenterRef.current = cleanModal;
		}
	};

	const handlePressFullBottom = () => {
		if (clearFullBottomRef.current) {
			clearFullBottomRef.current();
			clearFullBottomRef.current = null;
		} else {
			const { cleanModal } = showModal(<BottomSheet />, {
				id: 'bottom-sheet',
				align: Align.FullBottom,
			});
			clearFullBottomRef.current = cleanModal;
		}
	};

	return (
		<ModalProvider>
			<SafeAreaView style={styles.container}>
				<Button title="CenterCenter" onPress={handlePressCenterCenter} />
				<Button title="FullCenter" onPress={handlePressFullCenter} />
				<Button title="FullBottom" onPress={handlePressFullBottom} />
			</SafeAreaView>
		</ModalProvider>
	);
};

const SimpleModal = () => {
	return (
		<Animated.View
			style={styles.simpleModalContainer}
			entering={SlideInDown}
			exiting={SlideOutDown}
		>
			<Text style={styles.title}>Hello world</Text>
		</Animated.View>
	);
};

const BottomSheet = () => {
	return (
		<Animated.View
			style={styles.bottomSheet}
			entering={SlideInDown}
			exiting={SlideOutDown}
		>
			<Text style={styles.bottomSheetTitle}>Hello world</Text>
		</Animated.View>
	);
};

export default ModalPlayground;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: '#000',
		gap: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		color: '#fff',
	},
	simpleModalContainer: {
		padding: 20,
		paddingHorizontal: 40,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 10,
	},
	bottomSheetTitle: {
		fontSize: 20,
		fontWeight: '500',
		color: '#000',
	},
	bottomSheet: {
		height: 450,
		padding: 20,
		paddingHorizontal: 40,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#ffffff',
		backgroundColor: '#ffffff',
		borderBottomWidth: 0,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
	},
});
