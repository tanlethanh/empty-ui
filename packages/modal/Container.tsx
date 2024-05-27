import { type FC, Fragment, useState, useMemo, useRef } from 'react';
import type { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { calculatePosition, modalMap, type ModalConfig } from './state';

type Props = {
	config: ModalConfig;
	parentLayout?: LayoutRectangle;
};

export const ModalContainer: FC<Props> = ({ config, parentLayout }) => {
	const modalNode = modalMap[config.id];
	const [layout, setLayout] = useState<LayoutRectangle>();
	const containerRef = useRef<View>(null);

	if (!config.align) {
		return <Fragment key={config.id}>{modalNode}</Fragment>;
	}

	const position = useMemo(() => {
		return calculatePosition({ parent: parentLayout, child: layout, config });
	}, [layout, parentLayout]);

	const handleLayout = (e: LayoutChangeEvent) => {
		setLayout(e.nativeEvent.layout);
	};

	return (
		<View
			ref={containerRef}
			style={[styles.alignmentContainer, position || styles.hidden]}
			key={config.id}
			onLayout={handleLayout}
		>
			{modalNode}
		</View>
	);
};

export default ModalContainer;

const styles = StyleSheet.create({
	alignmentContainer: {
		position: 'absolute',
	},
	// hidden to wait for first render to prevent animation breaking
	hidden: {
		opacity: 0,
	},
});
