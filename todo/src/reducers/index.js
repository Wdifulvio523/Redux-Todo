import { ADD_TODO, DELETE_TODO } from "../actions/index";


const loadTodoList = () => {
    let todos = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    return todos;
}

const saveTodoList = (newTodos) => {
    localStorage.setItem('todoList', JSON.stringify(newTodos))
}

const initialState = loadTodoList();


export const todoReducer = (state = initialState, action) => {
    let newTodos = [];
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      newTodos = state.concat(action.payload);
      saveTodoList(newTodos);
      return newTodos;
case DELETE_TODO:
console.log(action);
    newTodos = state.filter(todo => {return todo.task !== action.payload});
    saveTodoList(newTodos)
    return newTodos;
    default:
      return state;
  }
};

