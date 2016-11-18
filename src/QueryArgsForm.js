import React, { Component } from 'react';

class QueryArgsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {argValues: {} };
  }

  queryArgChange(name, value) {
    this.setState({argValues: Object.assign(this.state.argValues, {[name] : value })})
  }

  render() {
    return (
      <form>
        {this.props.queryArgs.map((queryArg) =>
          <div>
            <label>{queryArg.name}</label>
            <input name={queryArg.name} onChange={ (event)=> this.queryArgChange(queryArg.name, event.target.value)}/>
          </div>
        )}
        <input type="button" value="Execute Query" onClick={ () => this.props.onExecute(this.state.argValues)  } />
      </form>
    );
  }
}

export default QueryArgsForm;
