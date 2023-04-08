// beginners first project in typescript: Creating a TodoList app using typescript
// first we create a todo interface that represents a single task
;
//  WHAT DOES AN INTERFACE DO IN TYPESCRIPT
/*
1. AN INTERFACE is away to  define a custom type in Typescript that the describe the shape of an objects
2. It specifies the properties and their types that an object must have
3. For example the todo interface requires an object to have an id of type number, a text of type string, and a done of type boolean
4. Interfaces are useful for creating reusable and consistent types that can be used in different part of the code

*/
// Define a Todolist class that manages an array of Todo items
var TodoList = /** @class */ (function () {
    // a constructor that initializes the todo with an empty array
    function TodoList() {
        this.todo = [];
    }
    // create a add method to add elements in our todo
    TodoList.prototype.addTodos = function (text) {
        // generate a unique id for the new todos
        var id = Math.floor(Math.random() * 1000000);
        // now create a new todo with a given text and a default done value
        var todo = {
            id: id,
            text: text,
            done: false
        };
        // now we can push this stuff inside our array
        this.todo.push(todo);
    };
    // a method to toggle the done status of a todo by it id
    TodoList.prototype.toggleTodod = function (id) {
        // check if the id matches
        var index = this.todo.findIndex(function (todo) { return todo.id === id; });
        // check if the index is valid and flip the done status
        if (index !== -1) {
            this.todo[index].done = !this.todo[index].done;
        }
    };
    //  a method to remove a todo by its id
    TodoList.prototype.removeTodo = function (id) {
        // filter out the todo with the given id from the todo array
        this.todo = this.todo.filter(function (t) { return t.id !== id; });
    };
    // a method to display our todo on the screen
    TodoList.prototype.showTodo = function () {
        // loop through the array and print each todo with its id, text and status
        for (var _i = 0, _a = this.todo; _i < _a.length; _i++) {
            var todo = _a[_i];
            console.log("[".concat(todo.id, "]  ").concat(todo.text, "  (").concat(todo.done ? "done" : "not done", ")"));
        }
    };
    return TodoList;
}());
// now create a new instance of the todo list app
var todoList = new TodoList();
// add some todos to the list
todoList.addTodos("Learn Js");
todoList.addTodos("Learn Typescript");
todoList.addTodos("go and sleep");
// show the initial todo
console.log("Initial todos");
todoList.showTodo();
// toggle first and third todos
console.log("toggle the todos");
todoList.toggleTodod(118342);
todoList.toggleTodod(83690);
// show the updated todo
console.log("Updated todos");
todoList.showTodo();
