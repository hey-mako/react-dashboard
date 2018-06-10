import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  Warning,
  Update,
  Build,
  GroupWork
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  Button,
  ItemGrid
} from "components";

import Status from './Partials/Status';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
	const StatusTest = (
		<Status indicator="inactive" />
	);

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={Build}
              iconColor="orange"
              title="Usage"
              description="10/500"
              small="builds"
              statIcon={Update}
              statText="24 Hours Ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={GroupWork}
              iconColor="green"
              title="Apps"
              description="1/1"
			  statIcon={Warning}
			  statIconColor="warning"
              statLink={{ text: "Upgrade plan...", href: "#plan " }}
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="orange"
              cardTitle="Review Test Applications"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["App Id", "Build Name", "Pull Request", "Status", "Test User", ""]}
                  tableData={[
					["2186735398249221", "immune-doe-review-pr-32", <a href="https://github.com/hey-mako/mako/pull/32" target="_blank">#36</a>, StatusTest, "John Smith", <Button color="primary">Login</Button>],
					["2186735398249232", "immune-doe-review-pr-32", <a href="https://github.com/hey-mako/mako/pull/32" target="_blank">#34</a>, StatusTest, "Jane Doe", <Button color="primary">Login</Button>],
                    ["2186735398249221", "immune-doe-review-pr-32", <a href="https://github.com/hey-mako/mako/pull/32" target="_blank">#36</a>, StatusTest, "John Smith", <Button color="primary">Login</Button>],
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
