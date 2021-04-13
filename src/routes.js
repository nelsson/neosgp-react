import Login from "./pages/Login";
import Dashboard from "./app/dashboard/Dashboard";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Recetas from "./pages/Recetas";
import Categories from './pages/Categories';
import Tiny from './pages/Tiny';
import Projects from "./pages/Projects";
import CrearProyecto from "./pages/CrearProyecto";

const publicRoutes = [
  {
    name: "Home",
    component: Home,
    path: "/home",
    exact: true,
    bodyClass: "home-page",
    navbar: true,
    sidebar: true,
    footer: true,
  },
  {
    name: "Login",
    component: Login,
    path: "/",
    exact: true,
    bodyClass: "login-page",
    navbar: false,
    sidebar: false,
    footer: false,
  },
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    bodyClass: "dashboard-page",
    navbar: true,
    sidebar: true,
    footer: true,
  },
  {
    name: "Register",
    component: Register,
    path: "/register",
    exact: true,
    bodyClass: "register-page",
    navbar: false,
    sidebar: false,
    footer: false,
  },
  {
    name: "Usuarios",
    component: Users,
    path: "/users",
    exact: true,
    bodyClass: "users-page",
    navbar: true,
    sidebar: true,
  },
  {
    name: "Recetas",
    component: Recetas,
    path: "/Recetas",
    exact: true,
    bodyClass: "recetas-page",
    navbar: true,
    sidebar: true,
    footer: true,
  },

  {
    name: "Categories",
    component: Categories,
    path: "/categorias",
    exact: true,
    bodyClass: "categories-page",
    navbar: true,
    sidebar: true,
    footer:true
  },
  {
    name: "Tiny",
    component: Tiny,
    path: "/Tiny",
    exact: true,
    bodyClass: "e",
    navbar: true,
    sidebar: true,
    footer:true
  },
  {
    name: "Projects",
    component: Projects,
    path: "/projects",
    exact: true,
    bodyClass: "projects-page",
    navbar: true,
    sidebar: true,
    footer: true,
  },
  {
    name: "CrearProyecto",
    component: CrearProyecto,
    path: "/crear-proyecto",
    exact: true,
    bodyClass: "crear-proyecto-page",
    navbar: true,
    sidebar: true,
    footer: true,
  },

];

export { publicRoutes };
