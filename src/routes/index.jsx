import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


import App from "@/pages/App"
import Login from "@/pages/Login"


export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ])

    return <RouterProvider router={router} />
}