import { createModalSystem } from '@contexts';
import type { MainScreenModals } from '../types';

export const {
	ModalManagerProvider: MainModalManagerProvider,
	ModalStateProvider: MainModalStateProvider,
	useModalManager: useMainModalManager,
	useModalState: useMainModalState,
	withModal: mainWithModal,
	withLazyModal: mainWithLazyModal,
} = createModalSystem<MainScreenModals>();
