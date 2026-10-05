import { ErrorFallbackScreen } from '@core';
import { AppRouter } from '@router';
import { store } from '@store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';

export const App = () => {
	return (
		<ErrorBoundary fallback={<ErrorFallbackScreen />}>
			<BrowserRouter>
				<Provider store={store}>
					<AppRouter />
					<Toaster
						richColors
						closeButton
						toastOptions={{
							duration: 5000,
						}}
						position="bottom-right"
					/>
				</Provider>
			</BrowserRouter>
		</ErrorBoundary>
	);
};
