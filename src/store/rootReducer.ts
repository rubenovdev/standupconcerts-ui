import { comediansReducer } from './comedians/reducer';
import { concertsReducer } from './concerts/reducer';
import { appReducer } from './app/reducer';
import { accountReducer } from './account/reducer';
import { sidepanelReducer } from './sidepanel/reducer';
import { authReducer } from './auth/reducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    appReducer,
    authReducer,
    sidepanelReducer,
    accountReducer,
    concertsReducer,
    comediansReducer
})

export type RootStateType = ReturnType<typeof rootReducer>