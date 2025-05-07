import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DashboardContextProvider } from './context/DashboardContextProvider';
import LoaderContextProvider from './context/LoaderContextProvider';
import ErrorMessageContextProvider from './context/ErrorMessageContextProvider';
import store from './store';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
	return (
		<DashboardContextProvider>
			<ErrorMessageContextProvider>
				<LoaderContextProvider>
					<Provider store={store}>
						<BrowserRouter basename="/">
							<AppRoutes />
						</BrowserRouter>
						<Toaster />
					</Provider>
				</LoaderContextProvider>
			</ErrorMessageContextProvider>
		</DashboardContextProvider>
	);
}

export default App;
