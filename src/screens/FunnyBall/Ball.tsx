import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

export const Ball = () => {
	const pressed = useSharedValue<boolean>(false);
	const xOffset = useSharedValue<number>(0);
	const yOffset = useSharedValue<number>(0);
	const pan = Gesture.Pan()
		.onBegin(() => {
			pressed.value = true;
		})
		.onChange((event) => {
			xOffset.value = event.translationX;
			yOffset.value = event.translationY;
		})
		.onFinalize(() => {
			xOffset.value = withSpring(0);
			yOffset.value = withSpring(0);
			pressed.value = false;
		});

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [
			{ translateX: xOffset.value },
			{ translateY: yOffset.value },
			{ scale: withSpring(pressed.value ? 1.5 : 1) },
		],
	}));

	return (
		<TouchableWithoutFeedback>
			<GestureDetector gesture={pan}>
				<Animated.View style={[styles.ball, animatedStyles]} />
			</GestureDetector>
		</TouchableWithoutFeedback>
	);
};

export const styles = StyleSheet.create({
	ball: {
		borderRadius: 50,
		width: 100,
		height: 100,
		backgroundColor: '#fff',
	},
});
