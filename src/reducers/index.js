import {
	UPDATE_BUILD_COUNT,
	UPDATE_APP_COUNT,
	ADD_APP,
	UPDATE_APP,
	DELETE_APP
} from '../actions/types';
import { combineReducers } from 'redux';

function apps (state = [], action) {
	switch (action.type) {
		case ADD_APP:
			return state;
		case UPDATE_APP:
			return state;
		case DELETE_APP:
			return state;
		default:
			return state;
	}
}

function currentUser (
	state = {
		isFetching: true,
		buildCount: 0,
		buildMax: 500,
		appCount: 0,
		appMax: 1,
		lastBuild: 0
	},
	action
) {
	switch (action.type) {
		case UPDATE_BUILD_COUNT:
			return Object.assign({}, state, {
				buildCount: action.buildCount,
				buildMax: action.buildMax
			});
		case UPDATE_APP_COUNT:
			return Object.assign({}, state, {
				appCount: action.appCount,
				appMax: action.appMax
			});
		default:
			return state;
	}
};

export default combineReducers({
	currentUser,
	apps
});