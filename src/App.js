import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Hooks from './components/Hooks';
import UseState from './components/UseState';
import UseRef from './components/UseRef';
import UseEffect from './components/UseEffect';
import Layout from './components/Layout';

function App() {


  return (

        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={() => <Redirect to="./react-hooks"/>}/>
              <Route path="/react-hooks" exact component={Hooks} />
              <Route path="/react-hooks/usestate" exact component={UseState} />
              <Route path="/react-hooks/useeffect" exact component={UseEffect} />
              <Route path="/react-hooks/useref" exact component={UseRef} />
            </Switch>
          </Layout>
        </BrowserRouter>
  );
}

export default App;
