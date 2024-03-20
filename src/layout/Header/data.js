import { images } from "../../constants";
const token = localStorage.getItem("token")
export const links = [
    {
        img: images.Chat,
        name: "Xabarlar",
        path: "/chat"
    },
    {
        img: images.Heart,
        name: "Yoqtirganlar",
        path: "/heart"
    },
    // {
    //     img: images.User,
    //     name: token ? 'Account' : "Ro'yhat O'tish",
    //     path: token ? "/" : '/'
    // },
];