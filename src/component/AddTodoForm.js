import React, { useContext } from "react";
import { Context } from "../ContextAndReducer/ContextAndReducer";
const AddTodoForm = ({ setLists, lists }) => {
  const { state, dispatch } = useContext(Context);

  function handleInputChange(e) {
    dispatch({ type: "ITEM_NAME", payload: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (state.itemName !== "") {
      setLists([
        ...lists,
        {
          id: lists.length + 1,
          text: state.itemName
        },
      ]);
      dispatch({ type: "ITEM_NAME", payload: "" });
    } else {
      alert("Field is required.");
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col">
        <label className=" text-green-500 text-2xl my-2">Add Todo</label>
        <div>
          <input
            type="text"
            name="todo"
            className="border border-blue-500 w-96 h-10 mr-2 p-2 rounded-md"
            placeholder="Create a new todo"
            value={state.itemName}
            onChange={handleInputChange}
          />
          <button className="text-green-500 hover:underline" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
