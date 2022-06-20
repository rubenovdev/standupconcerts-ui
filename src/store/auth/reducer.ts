import { registrationReducer } from './registration/reducer';
import { passwordRecoveryReducer } from './passwordRecovery/reducer';
import { loginReducer } from './login/reducer';
import { combineReducers } from 'redux';
export const authReducer = combineReducers({
    loginReducer,
    passwordRecoveryReducer,
    registrationReducer
})