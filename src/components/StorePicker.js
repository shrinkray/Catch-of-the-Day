import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  // eslint-disable-next-line class-methods-use-this
  goToStore = (event) => {
    event.preventDefault();
    console.log(this.myInput.value);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store ➡️</button>
      </form>
    );
  }
}

export default StorePicker;
