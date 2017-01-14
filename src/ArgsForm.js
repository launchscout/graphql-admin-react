import React, { Component } from 'react';
import SimpleArgField from './SimpleArgField';
import ArgField from './ArgField';
import { findInputFields, findType, findEffectiveType, findEnumValues, isEnum } from './graphql_utils';

class ArgsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {argValues: {} };
  }

  argValueChange(name, value) {
    if (Array.isArray(name)) {
      let argValues = this.state.argValues;
      let currentObject = argValues;
      name.forEach((path, index) => {
        if (index < (name.length - 1)) {
          currentObject[path] = currentObject[path] ? currentObject[path] : {};
          currentObject = currentObject[path];
        } else {
          currentObject[path] = value;
        }
      });
      this.setState({ argValues });
    } else {
      this.setState({argValues: Object.assign(this.state.argValues, {[name] : value })});
    }
  }

  render() {
    return (
      <form>
        {this.props.args.map((arg) => (
          <ArgField
            arg={arg}
            schema={this.props.schema}
            argValueChange={ (name, value)=> this.argValueChange(name, value) }
          />
        ))}
        <input type="button" value={this.props.buttonLabel} onClick={ () => this.props.onExecute(this.state.argValues)  } />
      </form>
    );
  }
}

export default ArgsForm;
