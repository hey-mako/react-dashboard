import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  ItemGrid,
  Table
} from "components";

import avatar from "assets/img/faces/marc.jpg";

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Plan Settings"
            cardSubtitle="Available Heroku plans"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
				  	<Table
						tableHeaderColor="black"
						tableHead={["Plan", "Build Limits", "App Limits", "Cost"]}
						tableData={[
							["Hobby", "20 Builds/month", "1 App", "$0/month"],
							["Small", "500 Builds/month", "5 App", "$50/month"],
							["Medium", "1500 Builds/month", "15 App", "$100/month"],
							["Corporate", "100000 Builds/month", "50 App", "$300/month"]
						]}
						/>
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="primary">Change Plan</Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
