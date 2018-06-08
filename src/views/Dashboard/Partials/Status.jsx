import React from "react";
import PropTypes from "prop-types";
import {
	FiberManualRecord
} from "@material-ui/icons";

class StatusPartial extends React.Component {
	render() {
	  	const { indicator } = this.props;
		const subIndicator = {
			active: 'Active PR',
			inactive: 'Not Used',
			error: 'Build Error',
		};

		return (
			<div className={`dashboard__status-icon`}>
				<FiberManualRecord className={`dashboard__status-icon--${indicator}`}/>
				<p>{subIndicator[this.props.indicator]}</p>
			</div>
		);
	}
  }
  
  StatusPartial.propTypes = {
	indicator: PropTypes.string
  };
  
  export default StatusPartial;
  