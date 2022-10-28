import React, { useContext } from "react";
import { Context } from "../ContextAndReducer/ContextAndReducer";
const EditForm = ({ setLists, lists }) => {

  const { state, dispatch } = useContext(Context);

  function handleEditInputChange(e) {
    dispatch({
      type: "CURRENT_LIST",
      payload: { ...state.currentList, text: e.target.value },
    });
    //console.log("Current List", state.currentList);
  }

  function handleUpdateItem(id, updatedTodo) {
    const updatedItem = lists.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    dispatch({ type: "EDIT_ITEM", payload: false });
    setLists(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    if (state.currentList.text === "") {
      return alert("Field is required!");
    }
    handleUpdateItem(state.currentList.id, state.currentList);
  }

  return (
    <form onSubmit={handleEditFormSubmit}>
      <div className="flex flex-col">
        <label className=" text-red-500 text-2xl my-2">
          Edit : {state.currentList.text}
        </label>
        <div>
          <input
            type="text"
            name="editTodo"
            className="border border-red-500 w-96 h-10 mr-2 p-2 rounded-md"
            placeholder="Edit todo"
            value={state.currentList.text}
            onChange={handleEditInputChange}
          />
          <button className="text-green-900 hover:underline " type="submit">
            Update
          </button>
          <button
            className="text-red-500 hover:underline mx-2"
            onClick={() => dispatch({ type: "EDIT_ITEM", payload: false })}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
