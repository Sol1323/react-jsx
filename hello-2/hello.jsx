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
      <h1>TODO LIST</h1>
      <TodoItem item="buy groceries" />
      <TodoItem item="laundry" />
      <TodoItem item="clean house"/>
    </div>
  }
}

class TodoItem extends React.Component {
  render() {
    return<li> {this.props.item} </li>
  }
}
