import React, { useReducer } from "react";
import {
  Context,
  initialState,
  reducer,
} from "./ContextAndReducer/ContextAndReducer";
import MainPage from "./component/MainPage";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <MainPage />
      </Context.Provider>
    </>
  );
}

export default App;
