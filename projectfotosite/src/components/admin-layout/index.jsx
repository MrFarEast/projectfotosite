import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
    return (
        <div>
            header dlya adminki
            <Outlet />
        </div>
    )
}