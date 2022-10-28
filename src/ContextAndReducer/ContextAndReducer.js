const React = require("react");
export const Context = React.createContext(null);
export const initialState = {
  itemName: "",
  isEditing: false,
  currentList: {},
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ITEM_NAME":
      return { ...state, itemName: action.payload };
    case "EDIT_ITEM":
      return { ...state, isEditing: action.payload };
    case "CURRENT_LIST":
      return { ...state, currentList: action.payload };
    default:
      return state;
  }
};
