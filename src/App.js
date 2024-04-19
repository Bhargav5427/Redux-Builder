
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./Redux-saga/user/action/Action";
import Data from "./Components/Data";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])
  return (
    <Data />
  );
}

export default App;
