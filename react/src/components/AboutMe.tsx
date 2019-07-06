import React from "react";

import ACTIONS from '../redux/action.ts';
import {connect} from 'react-redux';

import {ReduxStore, Item, Nathan} from '../ts-interfaces/interfaces.js';

const mapStateToProps = (state: ReduxStore) => ({
  items: state.items,
  aboutNathan: state.aboutNathan
});

const mapDispatchToProps = (dispatch: Function) => ({
  createItem: (item: string) => dispatch(ACTIONS.createItem(item)),
  deleteItem: (id: number) => dispatch(ACTIONS.deleteItem(id))
});

interface ToDO {
  props: {
    items: Array<Item>,
    aboutNathan: Nathan,
    createItem: Function,
    deleteItem: Function
  },
  state: {item: string},
  generate: Function,
  generateSkills: Function,
  handleSubmit: Function,
  handleChange: Function,
  handleDelete: Function
}

class ToDO extends React.Component {
  constructor(props: ReduxStore) {
    super(props);
    this.state = {item: ""};

    this.generate = () => {
      return this.props.items.map((item) => (
        <div className="todo" key={item.id}>
          <div className="item-description">
            {item.description}
          </div>
            <button 
              className={`button-delete ${item.id}`}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {this.handleDelete(event)}}
            >Delete
            </button>
        </div>
      ));
    };

    this.generateSkills = () => {
      return props.aboutNathan.skills.map((skill) => (
        <div key={skill.name}>
          {skill.name}
          <div>
            How long I've worked with {skill.name}: {skill.workExp === 1 ? `${skill.workExp} year` : `${skill.workExp} years`}
          </div>
          {
            skill.parent ? `Library of ${skill.parent}` : ''
          }
        </div>
      ));
    };

    this.handleSubmit = () => {
      if(this.state.item !== "") {
        // Add the item to the store
        this.props.createItem(this.state.item);
      }
      this.setState({item: ""});
    };
  
    this.handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Delete item from the store
      const target = event.target as HTMLElement;
      this.props.deleteItem(Number(target.classList[1]));
    };
  
    this.handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  }

  render() {
    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={
            (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              this.handleSubmit(event);
            }
          }>
              <input
                value={this.state.item}
                name="item"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.handleChange(event)}}
              />
              <button type="submit">Add</button>
          </form>
        </div>
          <div>My name: {this.props.aboutNathan.name}</div>
          <div>My age: {this.props.aboutNathan.age}</div>
          <div>
            Skills I've aquired:
          </div>
          {this.generateSkills()}
          <div className="column">
              {this.generate()}
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDO);