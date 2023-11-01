import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


import Login from "@/pages/Login"
import Register from "../pages/Register"
import Home from "@/pages/Home"
import Contact from "@/pages/Contact"
import CreateProperty from "@/pages/Property/create"
import { useEffect } from "react"
import { setAxiosConfig } from "../utils/apis/axiosWithConfig"
import Property from "@/pages/Property"
import { useState } from "react"

export default function Router() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        setAxiosConfig("", import.meta.env.VITE_BASE_URL)
        console.log(isLoggedIn)
    }, [isLoggedIn])

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
            element: isLoggedIn ? <Contact /> : <Navigate to="/login" />,
        },
        {
            path: "/property/:id",
            element: isLoggedIn ? <Property /> : <Navigate to="/login" />,
        },
        {
            path: "/property/create",
            element: isLoggedIn ? <CreateProperty /> : <Navigate to="/login" />,
        },
        {
            path: "/property/edit/:id",
            element: isLoggedIn ? <CreateProperty /> : <Navigate to="/login" />,
        },
        {
            path: "*",
            element: "404 Not Found",
        }

    ])

    return <RouterProvider router={router} />
}