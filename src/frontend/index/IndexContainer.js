import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import * as appActions from '../app/AppActions';
import * as roomsActions from '../rooms/RoomsActions';

class IndexContainer extends Component {
    componentWillMount() {
        this.props.appActions.updateHeaderTitle('Encrypted Chat');
        this.props.appActions.updateHeaderLeftIcon('menu');
        this.props.appActions.updateHeaderRightIcon('');
    }

    render() {
        const { routeToAddRoom } = this.props.roomsActions;

        return(<div style={{position: 'relative'}}>
            <List className="animated fadeInLeft">
                <Subheader>room List</Subheader>
                {(() => {
                    for (var room in this.props.room) {
                        if (this.props.room.hasOwnProperty(room)) {
                            return <ListItem
                                primaryText={this.props.room[room].title}
                                rightIcon={<CommunicationChatBubble />}
                            />
                        }
                    }
                })()}
            </List>

            <div className="float-button">
                <FloatingActionButton
                    // mini={true}
                    onClick={() => routeToAddRoom()}
                    secondary={true}
                    className="animated zoomIn"
                >
                    <ContentAdd className="animated rotateIn" />
                </FloatingActionButton>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        room: state.room,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        roomsActions: bindActionCreators(roomsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);