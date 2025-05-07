import { configureStore } from '@reduxjs/toolkit';

import zTemplatePageReducer from '../pages/zTemplatePage/slice';

export default configureStore({
	reducer: {
		zTemplatePage: zTemplatePageReducer,
	},
});
