import SearchPage from "../pages/Search/SearchPage";
import Auth from "../pages/Auth/Auth";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HotelPage from "../pages/HotelPage/HotelPage";
import UserPage from "../pages/User/UserPage";

export const guestRoutes = [
    {path: 'main', component: <SearchPage/>, name:'Искать отели'},
    {path: 'login', component: <Auth/>, name:'Войти'},
    {path: 'user', component: <UserPage/>, name:'Личный кабинет'},
    {path: 'user/*', component: <UserPage/>},
    {path: 'hotel/:id', component: <HotelPage/>},
    {path: '*', component: <NotFoundPage/>}
]

export const userRoutes = [

    {path: 'user', component: <NotFoundPage/>, name:'Личный кабинет'},
    {path: '*', component: <NotFoundPage/>}
]