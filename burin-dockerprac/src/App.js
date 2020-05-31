import React from 'react';
import calculate from './calculate'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnumber: '',
      secondnumber: '',
    };
    this.firstnumber_c = this.firstnumber_c.bind(this);
    this.secondnumber_c = this.secondnumber_c.bind(this);
    this.recalculate = this.recalculate.bind(this);
  }
  recalculate() {
    this.setState(
      (state) => ({
        answeradd: calculate(state.firstnumber, state.secondnumber),
      }),
    );
  }
  firstnumber_c(event) {
    this.setState({ firstnumber: event.target.value });
    this.recalculate();

  }

  secondnumber_c(event) {
    this.setState({ secondnumber: event.target.value });
    this.recalculate();

  }

  render() {
    return (
      <div className="input">
        <h4>
          Введите первое число:
          <input type="number" id="firstnumber" onInput={this.firstnumber_c} value={this.state.firstnumber} />
        </h4>
        <h4>
          Введите второе число:
          <input type="number" id="secondnumber" onChange={this.secondnumber_c} value={this.state.secondnumber} />
        </h4>
        <div id="answer" className="answeradd">
          <h4>Сумма:</h4>
          {this.state.answeradd}
        </div>
      </div>
    );
  }
}
export default App;
