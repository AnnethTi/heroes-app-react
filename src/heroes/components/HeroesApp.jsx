import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui"
import { AppRouter } from "../../router/AppRouter"
import { AuthProvider } from "../../auth/context"


export const HeroesApp = () => {
  return (

    <AuthProvider>

      <AppRouter/>

    </AuthProvider>
  )
}
