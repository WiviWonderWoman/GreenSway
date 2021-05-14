import { createStore, applyMiddleware } from "redux";
import { thunk } from "readux-thunk";
import rootReducer from "../reducers";

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
const applicationStore = configureStore();
export default applicationStore;