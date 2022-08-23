import SearchPage from "../pages/Search/SearchPage";
import NotFound from "../img/NotFound/NotFound";
import Auth from "../pages/Auth/Auth";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HotelPage from "../pages/HotelPage/HotelPage";

export const guestRoutes = [
    {path: 'main', component: <SearchPage/>, name:'Искать отели'},
    {path: 'login', component: <Auth/>, name:'Войти'},
    {path: 'hotel/:id', component: <HotelPage/>},
    {path: '*', component: <NotFoundPage/>}
]

export const userRoutes = [

    {path: 'user', component: <NotFoundPage/>, name:'Личный кабинет'},
    {path: '*', component: <NotFoundPage/>}
]