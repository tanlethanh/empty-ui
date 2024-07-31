import { type FC, Fragment, useState, useMemo, useRef } from 'react';
import type { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import {
	calculatePosition,
	modalComponentMap,
	modalNodeMap,
	type GeneralModalConfig,
} from './state';

type Props = {
	config: GeneralModalConfig;
	parentLayout?: LayoutRectangle;
};

export const ModalContainer: FC<Props> = ({ config, parentLayout }) => {
	const isComponent = 'props' in config;
	const modalNode = modalNodeMap[config.id];
	const ModalComponent = modalComponentMap[config.id];
	const [layout, setLayout] = useState<LayoutRectangle>();
	const containerRef = useRef<View>(null);

	if (!config.align) {
		return (
			<Fragment>
				{isComponent ? <ModalComponent {...config.props} /> : modalNode}
			</Fragment>
		);
	}

	const position = useMemo(() => {
		return calculatePosition({ parent: parentLayout, child: layout, config });
	}, [layout, parentLayout]);

	const handleLayout = (e: LayoutChangeEvent) => {
		setLayout(e.nativeEvent.layout);
	};

	return (
		<Fragment>
			{isComponent ? (
				<ModalComponent
					style={[
						styles.alignmentContainer,
						position || styles.hidden,
						config.props?.styles,
					]}
					ref={containerRef}
					{...config.props}
				/>
			) : (
				<View
					ref={containerRef}
					style={[styles.alignmentContainer, position || styles.hidden]}
					onLayout={handleLayout}
				>
					{modalNode}
				</View>
			)}

			{config.FloatComponent && <config.FloatComponent />}
		</Fragment>
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
