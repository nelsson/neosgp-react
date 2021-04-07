import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Layout from './components/Layout';
import { publicRoutes } from './routes';
import { routesTemplate } from './routesTemplate';
import './app/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => (
              <Layout
                noheader={route.noheader}
                noFooter={route.noFooter}
                Component={route.component}
                route={route}
                bodyClass={route.bodyClass}
                navbar={route.navbar}
                sidebar={route.sidebar}
                footer={route.footer}
              ></Layout>
            )}
          ></Route>
        ))}
        {routesTemplate.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => (
              <Layout
                noheader={route.noheader}
                noFooter={route.noFooter}
                Component={route.component}
                route={route}
                bodyClass={route.bodyClass}
                navbar={route.navbar}
                sidebar={route.sidebar}
                footer={route.footer}
              ></Layout>
            )}
          ></Route>
        ))}        
      </Switch>
    </Router>
  );
}

export default withRouter(App);
