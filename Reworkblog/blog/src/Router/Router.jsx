import { lazy, Suspense } from 'react';

const LazyAdminpage = lazy(() => import("../components/Admin/Admenu"));
const LazyLogin = lazy(() => import("../components/Admin/Login"));
const LazyContact = lazy(() => import('../components/Contact/Contact')); // Keep Contact as it's likely used on its own route
const LazyHome = lazy(() => import("../components/Publico/Homepage"));


import proptypes from 'prop-types'

function Routers({ ruta }) {
    switch (ruta) {
        case "/": //Main Page
            return <Suspense fallback={<div className='Routersi'>Loading Main Page...</div>}>
            <LazyHome />
          </Suspense>
        case "/admin": //Main Page
            return <Suspense fallback={<div className='Routersi'>Loading Admin...</div>}>
            <LazyLogin />
          </Suspense>
        case "/adminpage": //Main Page
            return <Suspense fallback={<div className='Routersi'>Loading Admin Panel...</div>}>
            <LazyAdminpage />
          </Suspense>
        case "/contact": //Contacto
            return  <Suspense fallback={<div className='loader'>Loading Contacto...</div>}>
            <LazyContact />
          </Suspense>
        default:
            return (
                <div>
                    <h1>Bloggin....</h1>
                </div>
            )
    }
}   

Routers.propTypes = {
    ruta: proptypes.string.isRequired
}

export default Routers