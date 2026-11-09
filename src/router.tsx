import { createBrowserRouter , Navigate } from "react-router";
import { LoginPage , UiKitPage ,NotFound, } from "./pages";
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
        Component: NotFound,
    },
]);
export {router};