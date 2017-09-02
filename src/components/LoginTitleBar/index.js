import React from 'react'

import PropTypes from 'prop-types'
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography
} from 'material-ui'

import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

function LoginTitleBar({zonesClicked,classes}) {
  return (
    <div className={classes.root}>
      <AppBar 
        style={{ position: 'fixed', top: 0 }}
        className="header"
      >
        <div className={classes.positioning}></div>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            System Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

SystemTitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    textAlign: 'left',
    marginTop: 60,
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  positioning: {
    height: 15
  }
}

export default connect({
  zonesClicked: signal`app.systemPageZonesClicked`
}, withStyles(styles)(SystemTitleBar))
