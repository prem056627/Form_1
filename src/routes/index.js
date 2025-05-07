import { Navigate, Route, Routes } from 'react-router-dom';
import { ZTemplatePageRoutes } from '../pages/zTemplatePage/routes';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/platform/user-managements/*"
				element={<ZTemplatePageRoutes />}
			></Route>
			<Route
				path="*"
				element={<Navigate to="./platform/user-managements/*" />}
			/>
		</Routes>
	);
};
