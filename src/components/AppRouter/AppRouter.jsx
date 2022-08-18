import React from 'react';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import {guestRoutes} from "../../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {guestRoutes.map(path =>
                <Route path={path.path} element={path.component} key={path.path}/>
            )}
        </Routes>
    );
};

export default AppRouter;