const initalState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SELECT_COMPANY":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    default:
      break;
  }
};
export default mainReducer;
