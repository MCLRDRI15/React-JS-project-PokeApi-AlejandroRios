import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/GlobalIndex";

const compose = composeWithDevTools({
    name: "App Pokemon",
    realtime: true,
    trace: true,
    traceLimit: 20,
});
const store = createStore(reducer, compose(applyMiddleware(logger, thunk)));
export default store;
