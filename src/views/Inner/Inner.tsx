import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Sidepanel } from '../../components/Common/Sidepanel'
import { CommonHeader } from '../../components/Common/Header'
import { RootStateType } from '../../store/rootReducer'


export const InnerView = () => {
    const { isOpened } = useSelector((state: RootStateType) => state.sidepanelReducer)

    return (
        <div className="wrapper wrapper1">
                <CommonHeader />
                {isOpened ? <Sidepanel /> : null}
                <Outlet />
        </div>
    )
}
