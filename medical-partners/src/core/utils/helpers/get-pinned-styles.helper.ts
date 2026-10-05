import type { Column } from '@tanstack/react-table';
import type { CSSProperties } from 'react';

export const getPinnedStyle = <T>(column: Column<T>, zIndex: number): CSSProperties | undefined => {
	const isPinned = column.getIsPinned();
	if (!isPinned) {
		return undefined;
	}
	const style: CSSProperties = {
		zIndex: zIndex,
	};

	if (!!isPinned) {
		style.position = 'sticky';
	}

	if (isPinned === 'left') {
		style.left = `${column.getStart('left')}px`;
	} else if (isPinned === 'right') {
		style.right = `${column.getStart('right')}px`;
	}

	return style;
};
