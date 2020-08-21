import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import { useSelector } from 'react-redux'
import { IState } from './interfaces/interfaces'

const App: React.FC = () => {
  const { name } = useSelector((state: IState) => state.auth.user)

  return (
    <Router>
      <Layout>
        {name
          ? <Main />
          : <Login />
        }

        <Switch>
          <Route
            path="/"
            exact
          />
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
