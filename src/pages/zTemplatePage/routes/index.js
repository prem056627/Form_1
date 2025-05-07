import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import ZTemplatePage from '../components/ZTemplatePage';

export const ZTemplatePageRoutes = () => {
	return (
		<Layout>
			<Routes>
				<Route path="" element={<ZTemplatePage />} />
				<Route path="*" element={<Navigate to="." />} />
			</Routes>
		</Layout>
	);
};
