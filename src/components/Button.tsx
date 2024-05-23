import { FC, ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { ThemedButton } from 'react-native-really-awesome-button';

type Props = {
	title?: string;
	children?: ReactNode;
	onPress?: () => void;
};

export const Button: FC<Props> = ({ title, children, onPress }) => {
	if (title && children) throw Error('only use title or children');

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{/* <ThemedButton
				onPress={onPress}
				name={'bruce'}
				type="primary"
				backgroundColor="#000"
				backgroundDarker="#0c0c0c"
				borderColor="#0c0c0c"
				raiseLevel={5}
			> */}
			{title && <Text style={styles.title}>{title}</Text>}
			{children}
			{/* </ThemedButton> */}
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		width: 200,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#ffffff5f',
		paddingVertical: 14,
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	title: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
});
