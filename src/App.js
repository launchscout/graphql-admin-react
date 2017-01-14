import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchSchemaAction } from './actions/fetchSchema';
import { getSchema } from './reducers';
import Query from './Query';
import Mutation from './Mutation';
import Home from './Home';

class App extends Component {

  componentDidMount() {
    console.log("mounting");
    this.props.fetchSchema();
  }

  render() {
    if (this.props.schemaLoaded) {
      return (
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="/query/:queryName" component={Query} />
          <Route path="/mutation/:mutationName" component={Mutation} />
        </Router>
      );
    } else {
      return (<div>Loading schema...</div>);
    }
  }
}

const mapStateToProps = (state) => {
  const schema = getSchema(state);
  return {
    schemaLoaded: !!schema
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchema() {
      dispatch(fetchSchemaAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
