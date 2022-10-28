import React, { useState, useEffect, useContext } from "react";
import { Context } from "../ContextAndReducer/ContextAndReducer";
import EditForm from "./EditForm";
import AddTodoForm from "./AddTodoForm";
import AllListItem from "./AllListItem";
function MainPage() {
  const { state } = useContext(Context);
  const [lists, setLists] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(lists));
  }, [lists]);

  return (
    <>
      <div className="w-full h-screen bg-black text-blue-500">
        <h1 className="p-5 text-red-500 text-4xl font-bold">TodoList App</h1>
        <div className="flex flex-col px-5">
          {state.isEditing ? (
            <EditForm setLists={setLists} lists={lists} />
          ) : (
            <AddTodoForm setLists={setLists} lists={lists} />
          )}
        </div>

        <div className="flex flex-col text-center p-5 ">
          {!state.isEditing ? (
            <>
              {lists.length !== 0 ? (
                <>
                  <div className="text-blue-500 text-2xl mb-5">All Todo</div>
                  <AllListItem lists={lists} setLists={setLists} />
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MainPage;
