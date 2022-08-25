import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {guestRoutes} from "../../router/routes";


const NestedRouter = ({routes, ...props}) => {

    console.log(routes);
    return (
        <Routes>
            {routes.map(i => <Route element={i.component} path={i.path} key={i.path}/>)}
        </Routes>
    );
};

export default NestedRouter;