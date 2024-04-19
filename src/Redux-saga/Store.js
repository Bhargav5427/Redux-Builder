import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./saga";
import { composeWithDevTools } from "@redux-devtools/extension";

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))

);

sagaMiddleware.run(rootsaga);

export default store;