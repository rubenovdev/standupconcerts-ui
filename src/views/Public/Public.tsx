import {
    Outlet, useLocation
} from "react-router-dom";
import { Sidepanel } from '../../components/Common/Sidepanel';
import { RootStateType } from '../../store/rootReducer';
import { useSelector } from 'react-redux';
import { CommonHeader } from '../../components/Common/Header';
import classNames from "classnames";

export const PublicView = () => {
    const { isOpened } = useSelector((state: RootStateType) => state.sidepanelReducer)
    const location = useLocation( )

    return (
        <>
            <div className={classNames("wrapper", {
                "wrapper1": location.pathname != "/"
            })}>
                <CommonHeader />
                {isOpened ? <Sidepanel /> : null}
                <Outlet />
            </div>
        </>
    )
}
