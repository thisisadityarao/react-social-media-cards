import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Instagram from "./Instagram";

const styles = {
	mainContainer: {
		"@media (min-width: 600px)": {
			padding: "16px"
		}
	},
	mainItem: {
		maxWidth: "900px",
		margin: "0 auto",
		marginTop: "3rem"
	},
	innerContainer: {
		"@media (min-width: 600px)": {
			flexDirection: "row",
			alignItems: "stretch",
			justifyContent: "space-between"
		}
	},
	instagram: {
		"& > h1": {
			color: "#fff"
		},
		"& > h1:hover": {
      color: "#fff",
      opacity: "0.8",
			cursor: "pointer",
			borderBottom: "3px solid #fff"
		},
		marginBottom: "24px",
		"@media (min-width: 900px)": {
			marginBottom: "0px",
			paddingTop: "0px",
			paddingBottom: "0px"
		}
	}
};

function Main(props) {
	const { classes } = props;
	return (
		<Grid container className={classes.mainContainer}>
			<Grid item xs={12} md={8} className={classes.mainItem}>
				<Grid
					container
					direction="column"
					alignItems="flex-start"
					alignContent="space-between"
					className={classes.innerContainer}
				>
					<Grid item className={classes.instagram}>
						<Typography variant="display1" gutterBottom inline>
							Instagram
						</Typography>
					</Grid>
					<Grid item className={classes.instagram}>
						<Instagram />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(Main);
