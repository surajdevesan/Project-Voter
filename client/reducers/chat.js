const chat = (state = [], action) => {
  switch (action.type) {
    case 'post':
      console.log('@reducer chat post type');
      break;
    default:
      return state;
  }
};

export default chat;
