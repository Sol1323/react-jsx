"use strict";

/* component start */ // These comments are for generating handouts!
class Hello extends React.Component {
  render() {
    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}
/* component end */

class TodoList extends React.Component {
  render() {
    return <div>
      <h1>Here is a todo list</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  }
}

class TodoItem extends React.Component {
  render() {
    return<li>Here is a todo list item</li>
  }
}
