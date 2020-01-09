import uuid from 'uuid'

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      const todo = {
        ...action.payload,
        id: uuid()
      }

      return { todos: state.todos.concat(todo) };
    
    case 'DELETE_TODO':
      console.log(state.todos)
      
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
