import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-router-dom';
import { 
    BrowserRouter as Router,
    // Router,
    Redirect,
    Switch,
    Route 
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import DashboardLayout from './layouts/DashboardLayout';
import theme from './theme';

import Profile from './components/Dashboard/views/Profile'
import Users from './components/Dashboard/views/Users'
import Trends from './components/Dashboard/views/Trends'
import Orders from './components/Dashboard/views/Orders'
import Customers from './components/Dashboard/views/Customers'
import Inventory from './components/Dashboard/views/Inventory'
import Settings from './components/Dashboard/views/Settings'
import Options from './components/Dashboard/views/Options'
import Charts from './components/Dashboard/views/Charts'

import './App.css';
import { NavBar } from './components/Navigation/NavBar';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/HomePage/Home';
import NoMatch from './components/NoMatch';
import UserDashboard from './components/Dashboard/UserDashboard';
import Login from './components/Login/Login';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() { 
    return ( 
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <div className="App">
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={RegistrationForm} />
                {/* <Route path="/dashboard" component={UserDashboard} /> */}
                {renderDashboardRoutes(routes)}
                <Route path="/login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </React.Fragment> 
      </ThemeProvider>
      );
  }
}

// dashboard routes rendering
const renderDashboardRoutes = (routes = []) => (
  <>
    {routes.map((route, i) => {
      const Layout = route.layout || Fragment;
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Layout>
              {route.routes
                ? renderDashboardRoutes(route.routes)
                : <Component {...props} />}
            </Layout>
          )}
        />
      );
    })}
  </>
)

// routes for dashboard
const routes = [
  {
    path: '/dashboard',
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/dashboard/profile',
        component: Profile
        // component: UserDashboard
      },
      {
        exact: true,
        path: '/dashboard/users',
        component: Users
      },
      {
        exact: true,
        path: '/dashboard/trends',
        component: Trends
      },
      {
        exact: true,
        path: '/dashboard/orders',
        component: Orders
      },
      {
        exact: true,
        path: '/dashboard/customers',
        component: Customers
      },
      {
        exact: true,
        path: '/dashboard/inventory',
        component: Inventory
      },
      {
        exact: true,
        path: '/dashboard/settings',
        component: Settings
      },
      {
        exact: true,
        path: '/dashboard/options',
        component: Options
      },
      {
        exact: true,
        path: '/dashboard/charts',
        component: Charts
      },
      {
        exact: true,
        path: '/dashboard',
        component: () => <Redirect to="/dashboard/profile" />
      },
    ]
  },
]
 
export default App;
