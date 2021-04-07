
import Buttons from './app/basic-ui/Buttons';
import Dropdowns from './app/basic-ui/Dropdowns';
import Typography from './app/basic-ui/Typography';
import BasicElements from './app/form-elements/BasicElements';
import BasicTable from './app/tables/BasicTable';
import FontAwesome from './app/icons/FontAwesome';
import ChartJs from './app/charts/ChartJs';
import BlankPage from './app/user-pages/BlankPage';
import Login from './app/user-pages/Login';
import Register from './app/user-pages/Register';
import Error404 from './app/user-pages/Error404';
import Error500 from './app/user-pages/Error500';

const routesTemplate = [
  {
    name: "buttons",
    component: Buttons,
    path: "/basic-ui/buttons",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Dropdowns",
    component: Dropdowns,
    path: "/basic-ui/dropdowns",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Typography",
    component: Typography,
    path: "/basic-ui/typography",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "BasicElements",
    component: BasicElements,
    path: "/form-elements/basic-elements",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "BasicTable",
    component: BasicTable,
    path: "/tables/basic-table",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "FontAwesome",
    component: FontAwesome,
    path: "/icons/font-awesome",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "ChartJs",
    component: ChartJs,
    path: "/charts/chart-js",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "BlankPage",
    component: BlankPage,
    path: "/user-pages/blank-page",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Login",
    component: Login,
    path: "/user-pages/login-1",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Register",
    component: Register,
    path: "/user-pages/register-1",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Error404",
    component: Error404,
    path: "/user-pages/error-404",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  },  
  {
    name: "Error500",
    component: Error500,
    path: "/user-pages/error-500",
    exact: true,
    bodyClass: "",
    navbar: true,
    sidebar: true,
    footer:true
  }
];

export { routesTemplate };
