import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  courseTitle: {
    margin: theme.spacing(4, 2, 8, 2),
  },
}));

const CourseCard = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { menuItems } = props;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Course"
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              {menuItem}
            </MenuItem>
          ))}
        </Menu>
        <Divider />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography
              variant="h5"
              component="h1"
              className={classes.courseTitle}
            >
              Course Title
            </Typography>

            <Button
              size="small"
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/course"
            >
              Go To Course
            </Button>
          </div>
          <Divider />
          <Typography variant="subtitle1">UNIVERSITY A</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseCard;
