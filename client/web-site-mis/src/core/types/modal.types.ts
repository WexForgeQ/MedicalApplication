export interface ModalWrapperProps<T> {
	params: T | null;
	close: () => void;
}
