// todo list
// 'list' = see list
// 'add' = add to list
// 'delete' = delete item from list
// 'quit' = stop prompts
var toDoList = ['feed the dog'];
var question = prompt('what would you like to do?');


while (question !== 'quit') {
    // add input
    if (question === 'list') {
        todoList();
    } else if (question === 'new') {
        todoNew();
    } else if (question === 'delete') {
        todoDelete();
    }
    // check if user would like to do anything else
    question = prompt('what would you like to do?');

}

alert('you have quit the app');

function todoList() {
    // show list of items in todo list
    // print index of each item
    // print each item onto new line
    toDoList.forEach(function(toDoList, i) {
        console.log(i + ': ' + toDoList);
    });
};

function todoNew() {
    // ask for new todo
    var newToDo = prompt('what would you like to add?');
    // add newToDo to todoList
    toDoList.push(newToDo);
    // let user know an new item has been added
    console.log('New item added to the list')
};

function todoDelete() {
    // ask what index they would like deleted
    var removeTodo = prompt('What number would you like to delete?');
    // remove the todo item at that index
    toDoList.splice(removeTodo, 1);
    // let user know item has been removed
    console.log('Item removed form the list');
};