import { Chat } from "../page/Chat";
import { CreateProduct } from "../page/CreateProduct";
import { Heart } from "../page/Heart";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Profile } from "../page/Profile/Profile";

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

const isNewUser = () => {
    const isNew = localStorage.getItem('isNewUser');
    return !!isNew; 
};

const main_pages = [
    {
        component: <Home />,
        exact: true,
        path: "/"
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

if (isAuthenticated() || isNewUser()) {
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

export default main_pages;