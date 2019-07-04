import React from "react";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`
  }
});

import ACTIONS from '../redux/action.js';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class ToDO extends React.Component {
  constructor() {
    super();
    this.state = {item: ""};
    this.generate = () => {
      return this.props.items.map(item => (
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
    const {classes} = this.props;
    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <input
                value={this.state.item}
                className={classes.TextField}
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