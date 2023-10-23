import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


import App from "@/pages/App"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Home from "@/pages/Home"
import Contact from "@/pages/Contact"
import CreateProperty from "@/pages/Property/create"


export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/property/create",
            element: <CreateProperty />,
        }

    ])

    return <RouterProvider router={router} />
}