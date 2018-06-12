import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard/Dashboard';
const mapStateToProps = state => {
	return {
	  buildCount: state.user.buildCount,
	  apps: state.apps,
	  appCount: state.user.appCount,
	  buildMax: state.user.buildMax,
	  lastBuild: state.user.lastBuild,
	  appMax: state.user.appMax,
	}
};

export default connect(mapStateToProps)(Dashboard);