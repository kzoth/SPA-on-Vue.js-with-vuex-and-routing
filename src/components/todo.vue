<template lang='pug'>
  div
    .todo
      todo-input(
        :todos='todos'
      )
      todo-list(
        v-if='todos.length > 0'
        :todos='filteredTodos'
      )
    
</template>

<script>
import todoInput from "./todoInput";
import todoList from "./todoList";
import { mapState } from 'vuex';

export default {
  components: {
    todoInput,
    todoList
  },
  data() {
    return {
      // todos: [],
      // filter: 'All'
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos() {
      switch(this.filter) {
        case 'All':
          return this.todos;
        case 'Active':
          return this.todos.filter(item => item.checked === false)
        case 'Completed':
          return this.todos.filter(item => item.checked)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>