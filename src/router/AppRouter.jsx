import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRouters } from '../heroes/routes/HeroesRouters'
import { childHeroesRoutes } from '../heroes/routes/childHeroesRoutes'


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/',
        element: <HeroesRouters/>,
        children: childHeroesRoutes
    },

])


export const AppRouter = () => {
  return <RouterProvider router={ router }/>
}
