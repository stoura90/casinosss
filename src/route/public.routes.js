import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import omit from 'lodash-es/omit'

import RouteWithSubRoutes from '../components/RouteWithSubRoutes'
import { publicRouteConfig } from '../routes'
import r from '../constants/routes.constants'

function PublicRoutes({ history }) {
  return (
    <BrowserRouter history={history}>
      <Router>
        <main className="app">
          <Switch>
            {publicRouteConfig.map((route) => (
              <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
            ))}

            <Redirect to={r.root} />
          </Switch>
        </main>
      </Router>
    </BrowserRouter>
  )
}

PublicRoutes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PublicRoutes
