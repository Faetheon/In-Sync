import React from "react";

import ACTIONS from '../redux/action.js';
import {connect} from 'react-redux';

import {ReduxStore, Item} from '../ts-interfaces/interfaces.js';

const mapStateToProps = (state: ReduxStore) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: Function) => ({
  createItem: (item: string) => dispatch(ACTIONS.createItem(item)),
  deleteItem: (id: number) => dispatch(ACTIONS.deleteItem(id))
});

class ToDO extends React.Component<HTMLElement> {
  constructor(props: ReduxStore) {
    super(props);
    this.state = {item: ""};
    this.generate = () => {
      return this.props.items.map((item: Item) => (
          <div className="todo" key={item.id}>
            <div className="item-description">
              {item.description}
            </div>
              <button 
                className='button-delete'
                onClick={this.handleDelete}
                value={item.id}
              >Delete
              </button>
          </div>
      ));
    };
  
    this.handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      if(this.state.item !== "") {
        // Add the item to the store
        this.props.createItem(this.state.item);
      }
      this.setState({item: ""});
    };
  
    this.handleDelete = event => {
      // Delete item from the store
      this.props.deleteItem(event.target.value);
    };
  
    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  }


  render() {
    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <input
                value={this.state.item}
                name="item"
                onChange={this.handleChange}
              />
              <button type="submit">Add</button>
          </form>
        </div>
          <div className="column">
              {this.generate()}
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDO);