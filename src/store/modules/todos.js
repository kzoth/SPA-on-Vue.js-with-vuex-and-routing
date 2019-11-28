const todos = {
  state: {
    todos: [],
    filter: 'All'
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(item => item.id !== todoId)
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item))
    },
    filterTodos(state, filter) {
      state.filter = filter
    },
    checkAll(state, value) {
      state.todos = state.todos.map(item => ({...item, checked: value}))
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(item => item.checked === false)
    }
  },
  actions: {},
  getters: {}
};

export default todos;
