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
      <TodoItem item="buy groceries" important={true} />
      <TodoItem item="laundry" important={false} />
      <TodoItem item="clean house" important={true} />
    </div>
  }
}

class TodoItem extends React.Component {
  render() {
      if (this.props.important){
        return <li><b>{this.props.item}</b></li>
      }
      return <li>{this.props.item}</li>
  }
}
