import React, {
  Fragment
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Profile,
  Continue,
  Final,
  NotFound
} from '../views.js';
import {
  connect
} from 'react-redux';
import {
  PublicRoute,
  PrivateRoute
} from './AuthGuard.js';


let mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

const Routes = (props) => {
  return(
    <Router>
      <div className="App">
        <div id="formContainer">
          <Switch>
            <PublicRoute authenticated={props.authenticated} exact path="/" component={Profile}/>
            <PrivateRoute authenticated={props.authenticated} exact path="/continue" component={Continue}/>
            <PrivateRoute authenticated={props.authenticated} exact path="/final" component={Final} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default connect(mapStateToProps)(Routes);
