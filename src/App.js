import React from "react";
import List from "./List";
import Form from "./Form";

class App extends React.Component {
    state = {
        todos: [
            "Wake Up from the bed",
            "Brush my teeth",
            "Have my Bath",
            "Eat some food"
        ]
    };

    updateTodoList = item => {
        let todoList = [...this.state.todos];
        todoList.push(item);

        this.setState({
            todos: todoList
        });
    };

    deleteFromTodos = index => {
        let updatedTodos = this.state.todos.filter((item, i) => {
            return i !== index;
        });

        this.setState({
            todos: updatedTodos
        });
    };
    render() {
        return (
            <div className="App">
                <List todoList={this.state.todos} deleteTodo={this.deleteFromTodos} />
                <Form update={this.updateTodoList} />
            </div>
        );
    }
}
export default App;
