
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'
import { Navigate } from 'react-router-dom'

export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage/>
    },
    {
        path: "/dc",
        element: <DcPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>
    },
    {
        path: "/hero/:id",
        element: <HeroPage/>
    },
    {
        index: true,
        element: <MarvelPage/>
      
    }

]