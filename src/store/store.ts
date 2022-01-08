import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        logger,
        thunk
    )
))

export default store;

export type AppDispatch = typeof store.dispatch