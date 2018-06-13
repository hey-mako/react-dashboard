import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard/Dashboard';
const mapStateToProps = state => {
	return {
	  buildCount: state.currentUser.buildCount,
	  apps: state.apps,
	  appCount: state.currentUser.appCount,
	  buildMax: state.currentUser.buildMax,
	  lastBuild: state.currentUser.lastBuild,
	  appMax: state.currentUser.appMax,
	}
};

export default connect(mapStateToProps)(Dashboard);