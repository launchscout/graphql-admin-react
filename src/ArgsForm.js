import React, { Component } from 'react';

class ArgsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {argValues: {} };
  }

  argValueChange(name, value) {
    this.setState({argValues: Object.assign(this.state.argValues, {[name] : value })})
  }

  render() {
    return (
      <form>
        {this.props.args.map((arg) =>
          <div>
            <label>{arg.name}</label>
            <input name={arg.name} onChange={ (event)=> this.argValueChange(arg.name, event.target.value)}/>
          </div>
        )}
        <input type="button" value={this.props.buttonLabel} onClick={ () => this.props.onExecute(this.state.argValues)  } />
      </form>
    );
  }
}

export default ArgsForm;
