import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import Howitworks from "./Pages/HowItWorks";
//Componensts
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//Login and Register
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/Howitworks",
                element: <Howitworks />,
            },
            {
                path: "/Register",
                element: <Register />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
