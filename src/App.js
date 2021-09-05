import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
              <Route path="/" exact component={Hooks} />
              <Route path="/usestate" exact component={UseState} />
              <Route path="/useeffect" exact component={UseEffect} />
              <Route path="/useref" exact component={UseRef} />
            </Switch>
          </Layout>
        </BrowserRouter>
  );
}

export default App;
