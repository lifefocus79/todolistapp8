import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends Component {
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="enter task">
                </input>
                <button type="submit">add</button>
              </form>
            </div>

   <TodoItems entries={this.state.items}
        delete={this.deleteItem}
                 />
     
          </div>
        );
      }

       }
    
export default TodoList;