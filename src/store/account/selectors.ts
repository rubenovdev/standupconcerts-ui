import { createSelector } from 'reselect';
import { RootStateType } from './../rootReducer';
const _selectCurrentUserRoles = (state: RootStateType) => state.accountReducer.user?.roles

export const selectCurrentUserPermissions = createSelector(_selectCurrentUserRoles, (roles) => {
    if (!roles) {
        return []
    }

    return roles.map((role) => role.permissions).flat()
})

export const selectCurrentUserRoles = createSelector(_selectCurrentUserRoles, (roles) => {
    if (!roles) {
        return []
    }

    return roles.map(role => role.title)
})