import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal, props} from 'cerebral/tags'

import PropTypes from 'prop-types'
import {
  withStyles,
  Divider
 } from 'material-ui'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'

import Switch from 'material-ui/Switch'
import filteredZoneIds from '../../computed/filteredZoneIds'


const ZoneListItem = connect({
  id: props`id`,
  name: state`zones.${props`id`}.name`,
  status: state`zones.${props`id`}.status`,
  bypass: state`zones.${props`id`}.bypass`,
  zonePressed: signal`zones.zonePressed`,
  bypassPressed: signal`zones.bypassPressed`
}, function NewZoneListItem({id, name, status, bypass, zonePressed, bypassPressed}) {
  return (
    <ListItem onClick={() => zonePressed({id:id})}>
      <ListItemText
        primary={`${id} - ${name}`}
        secondary={bypass ? `${status} (Bypassed)` : status}
      />
      <ListItemSecondaryAction>
        <Switch checked={bypass} onChange={() => bypassPressed({id: id})}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
})

function ZoneList({filtered,classes}) {
  return (
    <div className={classes.root}>
      <List>
        {
          filtered.map((id) => (
            <div key={id}>
              <ZoneListItem id={id} />
              <Divider />
            </div>
          ))
        }        
      </List>
    </div>
  )
}

ZoneList.propTypes = {
  classes: PropTypes.object.isRequired,
}

const zoneListStyles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    textAlign: 'left'
  }
})

export default connect({
  filtered: filteredZoneIds,
}, withStyles(zoneListStyles)(ZoneList))