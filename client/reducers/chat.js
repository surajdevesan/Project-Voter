const chat = (state = [], action) => {
  switch (action.type) {
    case 'postMessage':
      console.log('@reducer chat post type');
      break;
    case 'recieveMessage':
      console.log('@reducer message recieved');
      break;
    case 'recieveNotification':
      console.log('@reducer notiication recieved');
      break;
    default:
      return state;
  }
};

export default chat;
