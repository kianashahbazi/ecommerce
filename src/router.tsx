import { createBrowserRouter , Navigate } from "react-router";
import { LoginPage , UiKitPage } from "./pages";
const router = createBrowserRouter([
    {
        path:'/' ,
        element: <Navigate to= "/login" replace />
    } ,
    {
        path: '/login',
        Component : LoginPage ,
    } ,
    {
        path:'/ui-kit' ,
        Component: UiKitPage,
    },
    {
        path:'*' ,
        element : (
            <main className="p-8">
                <h1>404 Not Found</h1>
            </main>
        ),
    },
])
export {router}