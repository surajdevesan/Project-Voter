import {connect} from 'react-redux';
import {getchatDetail} from '../actions';
import chatListComponent from '../components/ChatListComponent';

const mapStateToProps = (state) => ({
  chatList: state.chatList
});

const mapDispatchToProps = {
  onChatClick: getchatDetail
};

const chatList = connect(mapStateToProps,
  mapDispatchToProps)(chatListComponent);

export default chatList;
