import React, { useContext } from "react";
import { Context } from "../ContextAndReducer/ContextAndReducer";
import { HiPencilAlt, HiOutlineX } from "react-icons/hi";
const AllListItem = ({ lists, setLists }) => {
  const { dispatch } = useContext(Context);

  function handleEdit(todo) {
    dispatch({ type: "EDIT_ITEM", payload: true });
    dispatch({ type: "CURRENT_LIST", payload: { ...todo } });
  }
  
  function handleDelete(id) {
    const removeItem = lists.filter((todo) => {
      return todo.id !== id;
    });
    setLists(removeItem);
  }

  return (
    <>
      {lists.map((alllist, index) => (
        <div key={index}>
          <div className=" border border-blue-400 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div>
                <input type="checkbox" className="mx-2" />
                <span>{alllist.text}</span>
              </div>
            </div>
            <div className="">
              <button
                className="text-2xl text-green-700"
                onClick={() => handleEdit(alllist)}
              >
                <HiPencilAlt />
              </button>
              <button
                className="text-2xl text-red-600 p-3"
                onClick={() => handleDelete(alllist.id)}
              >
                <HiOutlineX />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllListItem;
