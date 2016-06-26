import React, { Component, PropTypes } from 'react';

import Tag from './Tag.jsx';

export default class MealItem extends Component {

  renderTags () {
    return this.props.meal.tags.map((tag) => (
      <Tag tag={tag}/>
    ));
  }

  render() {
    return (
        <div className="meal_item" onClick={this.props.onClick}>
          <div className="meal_photo">
            <img src={this.props.meal.imgURL}/>
          </div>
          <div className="meal_information">
              <h2 className="meal_title">{this.props.meal.name}</h2>
                <div className="clearer"></div>
              <ul className="tags">
                  {this.renderTags()}
              </ul>
          </div>
            <div className="meal_price">
              <h2>£{this.props.meal.price}</h2>
            </div>
        </div>
      );
  }
}

MealItem.propTypes = {
  // This component gets the meal to display through a React prop.
  // We can use propTypes to indicate it is required
  meal: React.PropTypes.object,
};

/*
import React from 'react';
import { _ } from 'meteor/underscore';
import classnames from 'classnames';
import { displayError } from '../helpers/errors.js';

import {
  setCheckedStatus,
  updateText,
  remove,
} from '../../api/todos/methods.js';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.throttledUpdate = _.throttle(value => {
      if (value) {
        updateText.call({
          todoId: this.props.todo._id,
          newText: value,
        }, displayError);
      }
    }, 300);

    this.setTodoCheckStatus = this.setTodoCheckStatus.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.props.onEditingChange(this.props.todo._id, true);
  }

  onBlur() {
    this.props.onEditingChange(this.props.todo._id, false);
  }

  setTodoCheckStatus(event) {
    setCheckedStatus.call({
      todoId: this.props.todo._id,
      newCheckedStatus: event.target.checked,
    });
  }

  updateTodo(event) {
    this.throttledUpdate(event.target.value);
  }

  deleteTodo() {
    remove.call({ todoId: this.props.todo._id }, displayError);
  }

  render() {
    const { todo, editing } = this.props;
    const todoClass = classnames({
      'list-item': true,
      checked: todo.checked,
      editing,
    });

    return (
      <div className={todoClass}>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={todo.checked}
            name="checked"
            onChange={this.setTodoCheckStatus}
          />
          <span className="checkbox-custom"></span>
        </label>
        <input
          type="text"
          defaultValue={todo.text}
          placeholder="Task name"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.updateTodo}
        />
        <a
          className="delete-item"
          href="#"
          onClick={this.deleteTodo}
          onMouseDown={this.deleteTodo}
        >
          <span className="icon-trash"></span>
        </a>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object,
  editing: React.PropTypes.bool,
  onEditingChange: React.PropTypes.func,
};
*/
