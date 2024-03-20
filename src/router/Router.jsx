import { Chat } from "../page/Chat";
import { CreateProduct } from "../page/CreateProduct";
import { Heart } from "../page/Heart";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { NotFound } from "../page/NotFound";
import { Profile } from "../page/Profile/Profile";
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token; 
};

export const main_pages = [
    {
        component: <Home />,
        exact: true
    },
    {
        component: <Login />,
        path: "/signup"
    },

    {
        component: <Profile />,
        path: "/account"
    },
];
if (isAuthenticated()) {
    main_pages.push(
        {
            component: <CreateProduct />,
            path: "/create"
        },
        {
            component: <Heart />,
            path: "/heart"
        },
        {
            component: <Chat />,
            path: "/chat"
        }
    );
}