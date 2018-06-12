import {
	UPDATE_BUILD_COUNT,
	UPDATE_APP_COUNT
} from '../actions';

const initialState = {
	apps: [],
	user: {
		buildCount: 0,
		buildMax: 500,
		appCount: 0,
		appMax: 1,
		lastBuild: 0
	},
};

function DashboardApp(state = initialState, action) {
	switch (action.type) {
		case UPDATE_BUILD_COUNT:
			return Object.assign({}, state, {
				user: {
					buildCount: action.buildCount,
					buildMax: action.buildMax
				}
			});
		case UPDATE_APP_COUNT:
			return Object.assign({}, state, {
				user: {
					appCount: action.appCount,
					appMax: action.appMax
				}
			});
		default:
			return state;
	}
};

export default DashboardApp;