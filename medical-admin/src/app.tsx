import { ErrorFallbackScreen } from '@core';
import { AppRouter } from '@router';
import { store } from '@store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

export const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallbackScreen}>
			<BrowserRouter>
				<Provider store={store}>
					<AppRouter />
					<Toaster
						richColors
						closeButton
						toastOptions={{
							duration: 5000,
						}}
					/>
				</Provider>
			</BrowserRouter>
		</ErrorBoundary>
	);
};
