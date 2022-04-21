import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './auth/authReducer'
const middlewares = [thunk]

const store = legacy_createStore(
    combineReducers({
        authReducer
    }),
    {},
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)
export default store