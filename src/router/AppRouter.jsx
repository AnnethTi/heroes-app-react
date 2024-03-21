import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRouters } from '../heroes/routes/HeroesRouters'
import { childHeroesRoutes } from '../heroes/routes/childHeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRoute> <LoginPage/> </PublicRoute> ,
    },
    {
        path: '/',
        element:  <PrivateRoute> <HeroesRouters/> </PrivateRoute>,
        children: childHeroesRoutes
    },

])


export const AppRouter = () => {
  return <RouterProvider router={ router }/>
}
