// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';

// material-ui
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import ButtonFloatAddComponent from 'app/shared/buttons/button-float-add.component';

import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import './rooms-list.container.css'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Clear</MenuItem>
    <MenuItem>Config</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class RoomsListContainer extends Component {
  static path = '/rooms'

  componentWillMount() {
    this.props.setHeaderButtons(null, null);
    this.props.headerActions.updateHeaderTitle('Encrypted chat');
  }

  render() {
    const { routeToAddRoom } = this.props.roomsActions;

    const roomsItems = this.props.rooms.list.map((item) => {
      return (<ListItem
        key={item.id}
        onClick={() => this.handleClickListItem(item)}
        primaryText={item.title}
        leftIcon={ <CommunicationChatBubble color={ grey400 }/> }
        rightIconButton={ rightIconMenu }
      />);
    })

    return(
      <Paper
        zDepth={1}
        style={{position: 'relative'}}
        className="animated bounceInLeft rooms-list__paper"
      >
        <List>
          <Subheader>Rooms list</Subheader>
          { roomsItems }
        </List>
        <ButtonFloatAddComponent handleAction={routeToAddRoom} />
      </Paper>
    );
  }

  handleClickListItem(roomId) {
    this.props.roomsActions.routeToRooms(roomId);
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsListContainer);
