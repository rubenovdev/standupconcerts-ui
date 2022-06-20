import { Outlet } from 'react-router'
import { CabinetHeader } from '../../components/Cabinet/CabinetHeader'


export const CabinetView = () => {
    return (
        <>
            <CabinetHeader />
            <Outlet />
        </>
    )
}
