/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react';
import type { LayoutRectangle } from 'react-native';
import { proxy } from 'valtio';

export enum Align {
	/**
	 * ModalComponent will be placed in center of both x-axis and y-axis
	 */
	CenterCenter = 'CenterCenter',
}

export type ModalConfig = {
	id: string;
	showBackdrop?: boolean;
	/**
	 * Align is predefined layout alignment,
	 * if not using this alignment, the ModalComponent will be
	 * placed under your App children inside ModalProvider,
	 * so you might need to make it 'absolute' position and place it by yourself
	 */
	align?: Align;
};

export const modalConfigMap = proxy<Record<string, ModalConfig>>({});

export const modalComponentMap: Record<string, ReactNode> = {};

export const cleanModal = (id: string) => {
	delete modalComponentMap[id];
	delete modalConfigMap[id];
};

export const showModal = (component: ReactNode, config: ModalConfig) => {
	delete modalComponentMap[config.id];
	delete modalConfigMap[config.id];
	modalComponentMap[config.id] = component;
	modalConfigMap[config.id] = config;

	return {
		cleanModal: () => {
			cleanModal(config.id);
		},
	};
};

export type Position = {
	top: number;
	bottom: number;
	left: number;
	right: number;
};

export const calculatePosition = (
	parent: LayoutRectangle,
	child: LayoutRectangle,
	align: Align,
): Position => {
	if (align === Align.CenterCenter) {
		return {
			top: (parent.height - child.height) / 2,
			bottom: (parent.height - child.height) / 2,
			left: (parent.width - child.width) / 2,
			right: (parent.width - child.width) / 2,
		};
	} else {
		throw Error(`not supported alignment: ${align}`);
	}
};
