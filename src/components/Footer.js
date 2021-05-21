import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import BuildIcon from "@material-ui/icons/Build";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

//Importing styled component => must be with object deconstruction
import { Header } from './TextContent'
import styled from 'styled-components'

const styles = {
  root: {
    width: "100%",
    marginTop: "5em",
    backgroundColor: "#0B2249",
    color: "#F78A7E",
  },
  icon: {
    color: "#F78A7E",
  },
};

//  styled object turns into a function when passed an imported style component
const NewHeader = styled(Header)`
  font-size: 1em;
  font-style: italic;
  color: white;
`

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <footer>
       
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          
            <BottomNavigationAction
              className={classes.icon}
              label="SHOP"
              icon={<ShoppingCartIcon />}
            >
              SHOP
            </BottomNavigationAction>
          <BottomNavigationAction
            className={classes.icon}
            label="FAQ"
            icon={<QuestionAnswerIcon />}
          >
            FAQ
          </BottomNavigationAction>
          <BottomNavigationAction
            className={classes.icon}
            label="SUPPORT"
            icon={<ContactSupportIcon />}
          >
            SUPPORT
          </BottomNavigationAction>
          <BottomNavigationAction
            className={classes.icon}
            label="MAINTEINANCE"
            icon={<BuildIcon />}
          >
            MAINTAINANCE
          </BottomNavigationAction>
          <BottomNavigationAction
            className={classes.icon}
            label="CONTACT"
            icon={<PermContactCalendarIcon />}
          >
            CONTACT
          </BottomNavigationAction>
          {/* Using new styled component */}
          <NewHeader>
            Ex styled component import
          </NewHeader>
        </BottomNavigation>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
