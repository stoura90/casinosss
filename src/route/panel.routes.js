import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import omit from 'lodash-es/omit'

import Header from '../components/layout/Header'
import RouteWithSubRoutes from '../components/RouteWithSubRoutes'
import r from '../constants/routes.constants'
import { panelRouteConfig } from '../routes'

function PanelRoutes({ history }) {
  return (
    <BrowserRouter history={history}>
      <Router>
        <div className="app private">
          <div className="star-container">
            <Header variant="private" />
            <main>
              <Switch>
                {panelRouteConfig.map((route) => (
                  <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
                ))}

                <Redirect to={r.leader} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </BrowserRouter>
  )
}

PanelRoutes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PanelRoutes
