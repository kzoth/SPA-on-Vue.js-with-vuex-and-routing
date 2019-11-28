<template lang="pug">
  .todo-list
    .content
      ul.list
        li.item(v-for='todo in todos')
          todo-list-elem(
            :todo='todo'
          )
    
    .footer
      .footer-content
        .counter {{todos.length}} items left
        .filter
          todo-list-filter
        .clearCompleted
          todo-list-clear(
            :todos='todos'
          )
</template>

<script>
import todoListFilter from './todoListFilter';
import todoListElem from './todoListElem';
import todoListClear from './todoListClear';

export default {
  props: {
    todos: Array
  },
  components: {
    todoListFilter,
    todoListElem,
    todoListClear
  },
  methods: {
    checkTodo(todo) {
      this.$emit('checkTodo', todo)
    },
    filterTodos(filter) {
      this.$emit('filterTodos', filter)
    },
    clearCompleted(todos) {
      this.$emit('clearCompleted', todos);
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .item {
    border-bottom: 1px solid #ededed;

    &:last-child {
      border-bottom: none;
    }
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 15px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 8px 1px -2px rgba(0, 0, 0, 0.2), 0px 14px 0px -5px #f6f6f6, 0px 14px 0px -4px rgba(0, 0, 0, 0.2);
    }
  }

  .footer-content {
    display: flex;
    align-items: center;
  }

  .filter {
    flex: 1;
  }

</style>,