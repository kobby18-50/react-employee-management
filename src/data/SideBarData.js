import { BsSpeedometer2 } from "react-icons/bs";
export const SideBarData = [
    {
        id:1,
        title: 'Overview',
        icon : <BsSpeedometer2/>,
        path : '/admin/dashboard/overview'
    },

    {
        id:2,
        title: 'Employee',
        icon : <BsSpeedometer2/>,
        path : '/admin/dashboard/employee'
    },

    {
        id:3,
        title: 'Logout',
        icon : <BsSpeedometer2/>,
        path : '/',
        logout: true
    }
]