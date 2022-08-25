import NotFound from "../../img/NotFound/NotFound";
import TripHistory from "./ContentComponents/TripHistory/TripHistory";
import FavHotels from "./ContentComponents/FavHotels/FavHotels";
import Orders from "./ContentComponents/Orders/Orders";

export const navigatorRoutes = [
    {path: "orders", name: "Заказы", component: <Orders/>},
    {path: "history", name: "История", component: <TripHistory/>},
    {path: "fav", name: "Избранное", component: <FavHotels/>}
    //,
    //{path: "pas", name: "Пассажиры", component: <NotFound/>},      //заготовка на будущее
]